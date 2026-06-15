param(
    [string]$StudyRoot,
    [string]$MasterIndexCsv,
    [string]$ProcessedRoot,
    [string]$SkipExisting = "true",
    [int]$Limit = 0
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not $StudyRoot) {
    $StudyRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
}
if (-not $MasterIndexCsv) {
    $MasterIndexCsv = Join-Path $StudyRoot "resources\past-papers\index\master-index.csv"
}
if (-not $ProcessedRoot) {
    $ProcessedRoot = Join-Path $StudyRoot "resources\past-papers\processed"
}

if (-not (Test-Path $MasterIndexCsv)) {
    throw "Master index does not exist: $MasterIndexCsv"
}

$pdftotext = Get-Command pdftotext -ErrorAction SilentlyContinue
$pandoc = Get-Command pandoc -ErrorAction SilentlyContinue

$rows = Import-Csv -Path $MasterIndexCsv
if ($Limit -gt 0) {
    $rows = $rows | Select-Object -First $Limit
}

$skipExistingBool = @("1", "true", "yes", "y") -contains ($SkipExisting.ToLowerInvariant())

$converted = 0
$stubbed = 0
$skipped = 0

foreach ($row in $rows) {
    $sourceAbs = Join-Path $StudyRoot $row.source_repo_path
    if (-not (Test-Path $sourceAbs)) {
        continue
    }

    $year = if ([string]::IsNullOrWhiteSpace($row.year)) { "Unknown" } else { $row.year }
    $sitting = if ([string]::IsNullOrWhiteSpace($row.sitting)) { "Unknown" } else { $row.sitting }

    $targetDir = Join-Path $ProcessedRoot (Join-Path $row.exam_code (Join-Path $year $sitting))
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

    $targetMd = Join-Path $targetDir ($row.normalized_id + ".md")

    if ($skipExistingBool -and (Test-Path $targetMd)) {
        $skipped++
        continue
    }

    $ext = [System.IO.Path]::GetExtension($sourceAbs).ToLowerInvariant()
    $body = ""
    $conversionMethod = "stub"

    if ($ext -eq ".pdf" -and $pdftotext) {
        $tmpTxt = [System.IO.Path]::GetTempFileName()
        try {
            & $pdftotext.Source -layout $sourceAbs $tmpTxt | Out-Null
            if (Test-Path $tmpTxt) {
                $body = Get-Content -Path $tmpTxt -Raw -Encoding UTF8
                if (-not [string]::IsNullOrWhiteSpace($body)) {
                    $conversionMethod = "pdftotext"
                }
            }
        }
        finally {
            Remove-Item -LiteralPath $tmpTxt -ErrorAction SilentlyContinue
        }
    }
    elseif (($ext -eq ".docx" -or $ext -eq ".doc") -and $pandoc) {
        $tmpMd = [System.IO.Path]::GetTempFileName()
        try {
            & $pandoc.Source $sourceAbs -t gfm -o $tmpMd | Out-Null
            if (Test-Path $tmpMd) {
                $body = Get-Content -Path $tmpMd -Raw -Encoding UTF8
                if (-not [string]::IsNullOrWhiteSpace($body)) {
                    $conversionMethod = "pandoc"
                }
            }
        }
        finally {
            Remove-Item -LiteralPath $tmpMd -ErrorAction SilentlyContinue
        }
    }

    if ([string]::IsNullOrWhiteSpace($body)) {
        $body = "Extraction pending. Install pdftotext and/or pandoc, then rerun conversion."
        $stubbed++
    }
    else {
        $converted++
    }

    $frontMatter = @(
        "---",
        "normalized_id: $($row.normalized_id)",
        "exam_code: $($row.exam_code)",
        "year: $($row.year)",
        "sitting: $($row.sitting)",
        "document_type: $($row.document_type)",
        "source_repo_path: $($row.source_repo_path)",
        "conversion_method: $conversionMethod",
        "qa_status: pending",
        "---",
        ""
    ) -join "`r`n"

    $content = $frontMatter + "# $($row.normalized_id)" + "`r`n`r`n" + $body + "`r`n"
    Set-Content -Path $targetMd -Value $content -Encoding UTF8
}

Write-Host "Conversion complete. Converted=$converted Stubbed=$stubbed Skipped=$skipped"
