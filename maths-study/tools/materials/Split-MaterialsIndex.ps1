param(
    [string]$MasterIndexCsv,
    [string]$OutputDir,
    [int]$ShardCount = 4
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if ($ShardCount -lt 1) {
    throw "ShardCount must be at least 1."
}

$studyRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
if (-not $MasterIndexCsv) {
    $MasterIndexCsv = Join-Path $studyRoot "resources\source-material\index\master-index.csv"
}
if (-not $OutputDir) {
    $OutputDir = Join-Path $studyRoot "resources\source-material\index\shards"
}

if (-not (Test-Path $MasterIndexCsv)) {
    throw "Master index does not exist: $MasterIndexCsv"
}

$rows = @(Import-Csv -Path $MasterIndexCsv)
if ($rows.Count -eq 0) {
    throw "Master index is empty: $MasterIndexCsv"
}

New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null

# Clear old shard files so reruns stay deterministic.
Get-ChildItem -Path $OutputDir -Filter "master-index.shard-*.csv" -File -ErrorAction SilentlyContinue |
    Remove-Item -Force -ErrorAction SilentlyContinue

$buckets = @()
for ($i = 0; $i -lt $ShardCount; $i++) {
    $buckets += ,(New-Object System.Collections.Generic.List[object])
}

for ($i = 0; $i -lt $rows.Count; $i++) {
    $bucketIndex = $i % $ShardCount
    $buckets[$bucketIndex].Add($rows[$i])
}

for ($i = 0; $i -lt $ShardCount; $i++) {
    $shardNumber = $i + 1
    $shardFileName = "master-index.shard-{0:D2}.csv" -f $shardNumber
    $shardPath = Join-Path $OutputDir $shardFileName

    $buckets[$i] |
        Export-Csv -Path $shardPath -NoTypeInformation -Encoding UTF8

    Write-Host "$shardFileName => $($buckets[$i].Count) rows"
}

Write-Host "Shard generation complete: $OutputDir"
