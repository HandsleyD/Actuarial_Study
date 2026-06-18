param(
    [string]$SourceRoot,
    [string]$StudyRoot,
    [string]$InventoryCsv,
    [switch]$IncludeMarkdown
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
if (-not $SourceRoot) {
    $SourceRoot = Join-Path $StudyRoot "resources\source-material"
}
if (-not $InventoryCsv) {
    $InventoryCsv = Join-Path $StudyRoot "resources\source-material\index\source-inventory.csv"
}

if (-not (Test-Path $SourceRoot)) {
    throw "SourceRoot does not exist: $SourceRoot"
}

New-Item -ItemType Directory -Path (Split-Path $InventoryCsv -Parent) -Force | Out-Null

$rows = New-Object System.Collections.Generic.List[object]
$allFiles = Get-ChildItem -Path $SourceRoot -Recurse -File

foreach ($file in $allFiles) {
    $relative = Get-RelativePath -BasePath $SourceRoot -TargetPath $file.FullName
    $relativeSlash = $relative.Replace("\", "/")

    if ($relativeSlash -match "^(processed|index)/") {
        continue
    }

    if ((-not $IncludeMarkdown) -and $file.Extension.ToLowerInvariant() -eq ".md") {
        continue
    }

    $parts = $relative -split "[\\/]"
    $scope = if ($parts.Count -gt 0) { $parts[0].ToLowerInvariant() } else { "unknown" }

    $examCode = "SHARED"
    $materialGroup = "shared"

    if ($scope -eq "exams") {
        if ($parts.Count -gt 1) {
            $examCode = $parts[1].ToUpperInvariant()
            $materialGroup = "exam/$examCode"
        }
        else {
            $examCode = "UNKNOWN"
            $materialGroup = "exam/UNKNOWN"
        }
    }

    $repoRelative = (Get-RelativePath -BasePath $StudyRoot -TargetPath $file.FullName).Replace("\", "/")
    $hash = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash

    $rows.Add([PSCustomObject]@{
        exam_code         = $examCode
        material_scope    = $scope
        material_group    = $materialGroup
        source_repo_path  = $repoRelative
        relative_path     = $relativeSlash
        original_filename = $file.Name
        file_ext          = $file.Extension.ToLowerInvariant()
        size_bytes        = $file.Length
        sha256            = $hash
        last_ingested_utc = (Get-Date).ToUniversalTime().ToString("s") + "Z"
    })
}

$rows |
    Sort-Object material_group, relative_path |
    Export-Csv -Path $InventoryCsv -NoTypeInformation -Encoding UTF8

Write-Host "Indexed $($rows.Count) source-material files."
Write-Host "Inventory written: $InventoryCsv"
