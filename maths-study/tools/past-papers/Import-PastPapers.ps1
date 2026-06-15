param(
    [string]$SourceRoot = "C:\Users\Danha\Downloads\Organised Actuarial Past Papers",
    [string]$RawRoot,
    [string]$InventoryCsv,
    [switch]$SkipExisting
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

$studyRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
if (-not $RawRoot) {
    $RawRoot = Join-Path $studyRoot "resources\past-papers\raw"
}
if (-not $InventoryCsv) {
    $InventoryCsv = Join-Path $studyRoot "resources\past-papers\index\source-inventory.csv"
}

if (-not (Test-Path $SourceRoot)) {
    throw "SourceRoot does not exist: $SourceRoot"
}

New-Item -ItemType Directory -Path $RawRoot -Force | Out-Null
New-Item -ItemType Directory -Path (Split-Path $InventoryCsv -Parent) -Force | Out-Null

$rows = New-Object System.Collections.Generic.List[object]
$files = Get-ChildItem -Path $SourceRoot -Recurse -File

foreach ($file in $files) {
    $relative = Get-RelativePath -BasePath $SourceRoot -TargetPath $file.FullName
    $parts = $relative -split "[\\/]"
    $examCode = if ($parts.Count -gt 0) { $parts[0].ToUpperInvariant() } else { "UNKNOWN" }

    $destinationPath = Join-Path $RawRoot $relative
    $destinationDir = Split-Path $destinationPath -Parent
    New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null

    if ($SkipExisting -and (Test-Path $destinationPath)) {
        # Keep existing file copy in repo raw layer.
    }
    else {
        Copy-Item -LiteralPath $file.FullName -Destination $destinationPath -Force
    }

    $destItem = Get-Item -LiteralPath $destinationPath
    $hash = (Get-FileHash -LiteralPath $destinationPath -Algorithm SHA256).Hash
    $ext = $destItem.Extension.ToLowerInvariant()

    $repoRelative = (Get-RelativePath -BasePath $studyRoot -TargetPath $destinationPath).Replace("\", "/")

    $rows.Add([PSCustomObject]@{
        exam_code        = $examCode
        source_path      = $file.FullName
        destination_path = $repoRelative
        relative_path    = $relative.Replace("\", "/")
        file_ext         = $ext
        size_bytes       = $destItem.Length
        sha256           = $hash
        last_ingested_utc = (Get-Date).ToUniversalTime().ToString("s") + "Z"
    })
}

$rows |
    Sort-Object exam_code, relative_path |
    Export-Csv -Path $InventoryCsv -NoTypeInformation -Encoding UTF8

Write-Host "Imported $($rows.Count) files into raw layer: $RawRoot"
Write-Host "Inventory written: $InventoryCsv"
