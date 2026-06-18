param(
    [string]$StudyRoot,
    [string]$MasterIndexCsv,
    [string]$ProcessedRoot
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not $StudyRoot) {
    $StudyRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
}
if (-not $MasterIndexCsv) {
    $MasterIndexCsv = Join-Path $StudyRoot "resources\source-material\index\master-index.csv"
}
if (-not $ProcessedRoot) {
    $ProcessedRoot = Join-Path $StudyRoot "resources\source-material\processed"
}

if (-not (Test-Path $MasterIndexCsv)) {
    throw "Master index does not exist: $MasterIndexCsv"
}

# Build a lookup from normalized_id to processed markdown path.
$mdLookup = @{}
Get-ChildItem -Path $ProcessedRoot -Recurse -File -Filter *.md -ErrorAction SilentlyContinue | ForEach-Object {
    $txt = Get-Content $_.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
    $idMatch = [regex]::Match($txt, 'normalized_id:\s*(.+)')
    if ($idMatch.Success) {
        $id = $idMatch.Groups[1].Value.Trim()
        $mdLookup[$id] = @{
            Path = $_.FullName
            Content = $txt
        }
    }
}

$rows = Import-Csv -Path $MasterIndexCsv
$counts = @{
    converted       = 0
    stub            = 0
    missing_source  = 0
    no_processed_md = 0
    unchanged       = 0
}

$studyRootFull = [System.IO.Path]::GetFullPath($StudyRoot)

$updated = foreach ($row in $rows) {
    $sourceAbs = Join-Path $studyRootFull $row.source_repo_path
    $sourceMissing = -not (Test-Path $sourceAbs)

    $newStatus = $row.qa_status

    if ($sourceMissing) {
        $newStatus = "missing-source"
        $counts['missing_source']++
    }
    elseif ($mdLookup.ContainsKey($row.normalized_id)) {
        $md = $mdLookup[$row.normalized_id]
        $convMatch = [regex]::Match($md.Content, 'conversion_method:\s*(.+)')
        if ($convMatch.Success) {
            $method = $convMatch.Groups[1].Value.Trim()
            switch -Wildcard ($method) {
                'pdftotext'    { $newStatus = 'extracted'; $counts['converted']++ }
                'pandoc'       { $newStatus = 'extracted'; $counts['converted']++ }
                'text-read'    { $newStatus = 'extracted'; $counts['converted']++ }
                'copy-markdown'{ $newStatus = 'extracted'; $counts['converted']++ }
                'stub*'        { $newStatus = 'stub'; $counts['stub']++ }
                default        { $newStatus = 'stub'; $counts['stub']++ }
            }
        }
        else {
            $newStatus = 'stub'
            $counts['stub']++
        }
    }
    else {
        $newStatus = 'no-processed-md'
        $counts['no_processed_md']++
    }

    if ($row.qa_status -eq $newStatus) {
        $counts['unchanged']++
    }

    $row.qa_status = $newStatus
    $row
}

$updated | Export-Csv -Path $MasterIndexCsv -NoTypeInformation -Encoding UTF8

Write-Host "QA sync complete."
Write-Host "  extracted:      $($counts['converted'])"
Write-Host "  stub:           $($counts['stub'])"
Write-Host "  missing-source: $($counts['missing_source'])"
Write-Host "  no-processed-md:$($counts['no_processed_md'])"
Write-Host "  unchanged:      $($counts['unchanged'])"
Write-Host "  total rows:     $($rows.Count)"
