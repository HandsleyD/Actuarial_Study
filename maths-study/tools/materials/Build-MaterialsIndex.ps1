param(
    [string]$SourceRoot,
    [string]$StudyRoot,
    [string]$InventoryCsv,
    [string]$MasterIndexCsv
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not $StudyRoot) {
    $StudyRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
}
if (-not $SourceRoot) {
    $SourceRoot = Join-Path $StudyRoot "resources\source-material"
}
if (-not $InventoryCsv) {
    $InventoryCsv = Join-Path $StudyRoot "resources\source-material\index\source-inventory.csv"
}
if (-not $MasterIndexCsv) {
    $MasterIndexCsv = Join-Path $StudyRoot "resources\source-material\index\master-index.csv"
}

if (-not (Test-Path $InventoryCsv)) {
    throw "Inventory does not exist: $InventoryCsv. Run Import-Materials.ps1 first."
}

function Get-DocumentType {
    param(
        [string]$Name,
        [string]$Extension
    )

    $n = $Name.ToLowerInvariant()
    $e = $Extension.ToLowerInvariant()

    if ($n -match "solution|answers?|mark\\s*scheme") { return "solutions" }
    if ($n -match "formula|table") { return "formula-sheet" }
    if ($n -match "glossary|dictionary") { return "glossary" }
    if ($n -match "workbook|exercise") { return "workbook" }
    if ($n -match "lecture|slides?") { return "lecture-notes" }
    if ($e -eq ".pdf") { return "pdf-reference" }
    if ($e -eq ".epub") { return "epub-reference" }
    if ($e -eq ".doc" -or $e -eq ".docx") { return "word-reference" }
    return "study-material"
}

function New-NormalizedId {
    param(
        [string]$ExamCode,
        [string]$DocumentType,
        [string]$BaseName
    )

    $safeBase = ($BaseName.ToLowerInvariant() -replace "[^a-z0-9]+", "-").Trim("-")
    return "$($ExamCode.ToLowerInvariant())-$($DocumentType.ToLowerInvariant())-$safeBase"
}

$inventoryRows = Import-Csv -Path $InventoryCsv
$rows = New-Object System.Collections.Generic.List[object]

foreach ($item in $inventoryRows) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($item.original_filename)
    $docType = Get-DocumentType -Name $item.original_filename -Extension $item.file_ext
    $normalizedId = New-NormalizedId -ExamCode $item.exam_code -DocumentType $docType -BaseName $baseName

    $rows.Add([PSCustomObject]@{
        exam_code         = $item.exam_code
        material_scope    = $item.material_scope
        material_group    = $item.material_group
        document_type     = $docType
        source_repo_path  = $item.source_repo_path
        relative_path     = $item.relative_path
        original_filename = $item.original_filename
        normalized_id     = $normalizedId
        file_ext          = $item.file_ext
        size_bytes        = $item.size_bytes
        sha256            = $item.sha256
        qa_status         = "pending"
        tags              = ""
        notes             = ""
    })
}

New-Item -ItemType Directory -Path (Split-Path $MasterIndexCsv -Parent) -Force | Out-Null
$rows |
    Sort-Object material_group, document_type, original_filename |
    Export-Csv -Path $MasterIndexCsv -NoTypeInformation -Encoding UTF8

Write-Host "Master materials index rebuilt with $($rows.Count) rows: $MasterIndexCsv"
