param(
    [string]$RawRoot,
    [string]$StudyRoot,
    [string]$MasterIndexCsv,
    [switch]$CreateExamScaffolds = $true
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-RelativePath {
    param(
        [Parameter(Mandatory = $true)][string]$BasePath,
        [Parameter(Mandatory = $true)][string]$TargetPath
    )

    $baseFull = [System.IO.Path]::GetFullPath($BasePath)
    $targetFull = [System.IO.Path]::GetFullPath($TargetPath)

    if (-not $baseFull.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
        $baseFull += [System.IO.Path]::DirectorySeparatorChar
    }

    $baseUri = New-Object System.Uri($baseFull)
    $targetUri = New-Object System.Uri($targetFull)
    $relativeUri = $baseUri.MakeRelativeUri($targetUri)
    return [System.Uri]::UnescapeDataString($relativeUri.ToString()).Replace('/', [System.IO.Path]::DirectorySeparatorChar)
}

if (-not $StudyRoot) {
    $StudyRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
}
if (-not $RawRoot) {
    $RawRoot = Join-Path $StudyRoot "resources\past-papers\raw"
}
if (-not $MasterIndexCsv) {
    $MasterIndexCsv = Join-Path $StudyRoot "resources\past-papers\index\master-index.csv"
}

function Get-DocumentType {
    param(
        [string]$Name,
        [string]$Extension
    )
    $n = $Name.ToLowerInvariant()
    $e = $Extension.ToLowerInvariant()
    if ($n -match "mark\s*scheme|solution|answers?") { return "mark-scheme" }
    if ($n -match "examiner|report") { return "examiner-report" }
    if ($n -match "specimen|sample") { return "specimen" }
    if ($n -match "formula|table") { return "formula-sheet" }
    if ($e -eq ".xlsx" -or $e -eq ".xls") { return "supplementary-workbook" }
    return "question-paper"
}

function Get-Year {
    param([string]$Text)

    $primary = [regex]::Match($Text, "(19|20)\d{2}")
    if ($primary.Success) {
        return $primary.Value
    }

    $short = [regex]::Match($Text.ToLowerInvariant(), "(?:apr|april|sep|sept|september|jan|january)[-_ ]?(\d{2})")
    if ($short.Success) {
        $yy = [int]$short.Groups[1].Value
        if ($yy -le 50) {
            return "20{0:D2}" -f $yy
        }
        return "19{0:D2}" -f $yy
    }

    return "Unknown"
}

function Get-Sitting {
    param([string]$Text)
    $t = $Text.ToLowerInvariant()
    if ($t -match "apr|april|spring") { return "April" }
    if ($t -match "sep|sept|september|autumn") { return "September" }
    if ($t -match "january|jan") { return "January" }
    return "Unknown"
}

function New-NormalizedId {
    param(
        [string]$ExamCode,
        [string]$Year,
        [string]$Sitting,
        [string]$DocType,
        [string]$BaseName
    )
    $sit = $Sitting.ToLowerInvariant()
    $doc = $DocType.ToLowerInvariant()
    $safeBase = ($BaseName.ToLowerInvariant() -replace "[^a-z0-9]+", "-").Trim("-")
    return "$($ExamCode.ToLowerInvariant())-$Year-$sit-$doc-$safeBase"
}

if (-not (Test-Path $RawRoot)) {
    throw "RawRoot does not exist: $RawRoot"
}

$files = Get-ChildItem -Path $RawRoot -Recurse -File
$rows = New-Object System.Collections.Generic.List[object]

foreach ($file in $files) {
    $relativeFromRaw = Get-RelativePath -BasePath $RawRoot -TargetPath $file.FullName
    $parts = $relativeFromRaw -split "[\\/]"
    $examCode = if ($parts.Count -gt 0) { $parts[0].ToUpperInvariant() } else { "UNKNOWN" }

    $docType = Get-DocumentType -Name $file.Name -Extension $file.Extension
    $year = Get-Year -Text $file.FullName
    $sitting = Get-Sitting -Text ($file.FullName)

    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $normalizedId = New-NormalizedId -ExamCode $examCode -Year $year -Sitting $sitting -DocType $docType -BaseName $baseName

    $repoPath = (Get-RelativePath -BasePath $StudyRoot -TargetPath $file.FullName).Replace("\", "/")
    $nameLower = $file.Name.ToLowerInvariant()

    $hasSolutions = if ($nameLower -match "solution|answers?|mark\s*scheme") { "yes" } else { "no" }
    $hasExaminerReport = if ($nameLower -match "examiner|report") { "yes" } else { "no" }

    $rows.Add([PSCustomObject]@{
        exam_code           = $examCode
        year                = $year
        sitting             = $sitting
        document_type       = $docType
        source_repo_path    = $repoPath
        original_filename   = $file.Name
        normalized_id       = $normalizedId
        file_ext            = $file.Extension.ToLowerInvariant()
        size_bytes          = $file.Length
        has_solutions       = $hasSolutions
        has_examiner_report = $hasExaminerReport
        qa_status           = "pending"
        topics              = ""
        tags                = ""
        notes               = ""
        last_attempt_date   = ""
    })
}

New-Item -ItemType Directory -Path (Split-Path $MasterIndexCsv -Parent) -Force | Out-Null
$rows |
    Sort-Object exam_code, year, sitting, document_type, original_filename |
    Export-Csv -Path $MasterIndexCsv -NoTypeInformation -Encoding UTF8

Write-Host "Master index rebuilt with $($rows.Count) rows: $MasterIndexCsv"

if ($CreateExamScaffolds) {
    $examsRoot = Join-Path $StudyRoot "exams"
    $existingExamDirs = Get-ChildItem -Path $examsRoot -Directory | Select-Object -ExpandProperty Name

    $grouped = $rows | Group-Object exam_code
    foreach ($group in $grouped) {
        $exam = $group.Name
        if ($existingExamDirs -notcontains $exam) {
            continue
        }

        $examPastPapersDir = Join-Path $examsRoot "$exam\past-papers"
        New-Item -ItemType Directory -Path $examPastPapersDir -Force | Out-Null

        $indexPath = Join-Path $examPastPapersDir "index.md"
        $attemptLogPath = Join-Path $examPastPapersDir "attempt-log.md"
        $questionMapPath = Join-Path $examPastPapersDir "question-map.csv"

        $lines = New-Object System.Collections.Generic.List[string]
        $lines.Add("# $exam Past Papers Index")
        $lines.Add("")
        $lines.Add("Auto-generated from resources/past-papers/index/master-index.csv.")
        $lines.Add("")
        $lines.Add("| Year | Sitting | Type | File | QA |")
        $lines.Add("|---|---|---|---|---|")

        foreach ($row in ($group.Group | Sort-Object year, sitting, document_type, original_filename)) {
            $linkPath = "../../../" + $row.source_repo_path
            $linkPath = $linkPath.Replace(" ", "%20")
            $fileLink = "[$($row.original_filename)]($linkPath)"
            $lines.Add("| $($row.year) | $($row.sitting) | $($row.document_type) | $fileLink | $($row.qa_status) |")
        }

        Set-Content -Path $indexPath -Value ($lines -join "`r`n") -Encoding UTF8

        if (-not (Test-Path $attemptLogPath)) {
            @(
                "# $exam Past Papers Attempt Log",
                "",
                "| Date | Paper ID | Questions Attempted | Score | Time Taken | Notes |",
                "|---|---|---|---|---|---|"
            ) | Set-Content -Path $attemptLogPath -Encoding UTF8
        }

        if (-not (Test-Path $questionMapPath)) {
            "normalized_id,question_number,chapter_ref,topics,difficulty,marks,status,notes" |
                Set-Content -Path $questionMapPath -Encoding UTF8
        }
    }

    Write-Host "Per-exam scaffolds refreshed for existing exam folders under: $examsRoot"
}
