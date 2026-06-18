param(
    [string]$StudyRoot,
    [string]$MasterIndexCsv,
    [string]$ProcessedRoot,
    [string]$SkipExisting = "true",
    [int]$Limit = 0,
    [int]$ToolTimeoutSeconds = 120,
    [string]$ExtractContent = "true"
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

$pdftotext = Get-Command pdftotext -ErrorAction SilentlyContinue
$pandoc = Get-Command pandoc -ErrorAction SilentlyContinue

function Invoke-ExternalWithTimeout {
    param(
        [Parameter(Mandatory = $true)][string]$ExePath,
        [Parameter(Mandatory = $true)][string[]]$Arguments,
        [int]$TimeoutSeconds = 120
    )

    $quotedArgs = $Arguments |
        ForEach-Object {
            if ($_ -match '^[A-Za-z0-9._:/\\-]+$') {
                $_
            }
            else {
                '"' + $_.Replace('"', '""') + '"'
            }
        }

    $argumentLine = ($quotedArgs -join ' ')
    $process = Start-Process -FilePath $ExePath -ArgumentList $argumentLine -NoNewWindow -PassThru
    $finished = $true
    try {
        $null = Wait-Process -Id $process.Id -Timeout $TimeoutSeconds -ErrorAction Stop
    }
    catch {
        $finished = $false
    }

    if (-not $finished) {
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
        return $false
    }

    try {
        $process.WaitForExit()
    }
    catch {
        # Ignore wait errors and fall back to available state.
    }

    $process.Refresh()
    if ($null -eq $process.ExitCode) {
        return $true
    }

    return ($process.ExitCode -eq 0)
}

function Get-ToolSafeSourcePath {
    param(
        [Parameter(Mandatory = $true)][string]$SourcePath,
        [Parameter(Mandatory = $true)][string]$Extension
    )

    # Some external tools fail on non-ASCII paths; use a temporary ASCII-safe copy when needed.
    if ($SourcePath -match '[^\u0000-\u007F]') {
        $safeName = "material-" + [Guid]::NewGuid().ToString("N") + $Extension
        $safePath = Join-Path ([System.IO.Path]::GetTempPath()) $safeName
        Copy-Item -LiteralPath $SourcePath -Destination $safePath -Force
        return @{ ToolPath = $safePath; TempCopy = $safePath }
    }

    return @{ ToolPath = $SourcePath; TempCopy = $null }
}

$rows = Import-Csv -Path $MasterIndexCsv
if ($Limit -gt 0) {
    $rows = $rows | Select-Object -First $Limit
}

$skipExistingBool = @("1", "true", "yes", "y") -contains ($SkipExisting.ToLowerInvariant())
$extractContentBool = @("1", "true", "yes", "y") -contains ($ExtractContent.ToLowerInvariant())

$converted = 0
$stubbed = 0
$skipped = 0

foreach ($row in $rows) {
    $sourceAbs = Join-Path $StudyRoot $row.source_repo_path

    # If CSV path contains wildcard characters (for example '?'), resolve to the actual file path.
    if ($sourceAbs.IndexOf('?') -ge 0 -or $sourceAbs.IndexOf('*') -ge 0 -or $sourceAbs.IndexOf('[') -ge 0) {
        $match = Get-Item -Path $sourceAbs -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($match) {
            $sourceAbs = $match.FullName
        }
    }

    if (-not (Test-Path $sourceAbs)) {
        continue
    }

    $relativeNative = $row.relative_path.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
    $targetDirRelative = [System.IO.Path]::GetDirectoryName($relativeNative)
    $sourceBase = [System.IO.Path]::GetFileNameWithoutExtension($relativeNative)
    $sourceExtToken = ([System.IO.Path]::GetExtension($relativeNative).TrimStart('.')).ToLowerInvariant()

    if ([string]::IsNullOrWhiteSpace($sourceExtToken) -or $sourceExtToken -eq "md") {
        $targetLeaf = "$sourceBase.md"
    }
    else {
        $targetLeaf = "$sourceBase.$sourceExtToken.md"
    }

        foreach ($char in [System.IO.Path]::GetInvalidFileNameChars()) {
            $targetLeaf = $targetLeaf.Replace($char, '-')
        }

    if ([string]::IsNullOrWhiteSpace($targetDirRelative)) {
        $targetRelativePath = $targetLeaf
    }
    else {
        $targetRelativePath = Join-Path $targetDirRelative $targetLeaf
    }

    $targetMd = Join-Path $ProcessedRoot $targetRelativePath
    $targetDir = Split-Path $targetMd -Parent

    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

    if ($skipExistingBool -and (Test-Path $targetMd)) {
        $skipped++
        continue
    }

    $ext = [System.IO.Path]::GetExtension($sourceAbs).ToLowerInvariant()
    $body = ""
    $conversionMethod = "stub"

    if (-not $extractContentBool) {
        $body = "Extraction skipped by configuration."
        $conversionMethod = "stub-no-extract"
    }
    elseif ($ext -eq ".md") {
        $body = Get-Content -Path $sourceAbs -Raw -Encoding UTF8
        if (-not [string]::IsNullOrWhiteSpace($body)) {
            $conversionMethod = "copy-markdown"
        }
    }
    elseif ($ext -eq ".txt" -or $ext -eq ".csv") {
        $body = Get-Content -Path $sourceAbs -Raw -Encoding UTF8
        if (-not [string]::IsNullOrWhiteSpace($body)) {
            $conversionMethod = "text-read"
        }
    }
    elseif ($ext -eq ".pdf" -and $pdftotext) {
        $tmpTxt = [System.IO.Path]::GetTempFileName()
        $safeInput = $null
        try {
            $safeInput = Get-ToolSafeSourcePath -SourcePath $sourceAbs -Extension ".pdf"
            $ok = Invoke-ExternalWithTimeout -ExePath $pdftotext.Source -Arguments @("-layout", $safeInput.ToolPath, $tmpTxt) -TimeoutSeconds $ToolTimeoutSeconds
            if ($ok -and (Test-Path $tmpTxt)) {
                $body = Get-Content -Path $tmpTxt -Raw -Encoding UTF8
                if (-not [string]::IsNullOrWhiteSpace($body)) {
                    $conversionMethod = "pdftotext"
                }
            }
        }
        finally {
            if ($safeInput -and $safeInput.TempCopy) {
                Remove-Item -LiteralPath $safeInput.TempCopy -ErrorAction SilentlyContinue
            }
            Remove-Item -LiteralPath $tmpTxt -ErrorAction SilentlyContinue
        }
    }
    elseif (($ext -eq ".docx" -or $ext -eq ".doc" -or $ext -eq ".epub" -or $ext -eq ".pptx" -or $ext -eq ".ppt") -and $pandoc) {
        $tmpMd = [System.IO.Path]::GetTempFileName()
        $safeInput = $null
        try {
            $safeInput = Get-ToolSafeSourcePath -SourcePath $sourceAbs -Extension $ext
            $ok = Invoke-ExternalWithTimeout -ExePath $pandoc.Source -Arguments @($safeInput.ToolPath, "-t", "gfm", "-o", $tmpMd) -TimeoutSeconds $ToolTimeoutSeconds
            if ($ok -and (Test-Path $tmpMd)) {
                $body = Get-Content -Path $tmpMd -Raw -Encoding UTF8
                if (-not [string]::IsNullOrWhiteSpace($body)) {
                    $conversionMethod = "pandoc"
                }
            }
        }
        finally {
            if ($safeInput -and $safeInput.TempCopy) {
                Remove-Item -LiteralPath $safeInput.TempCopy -ErrorAction SilentlyContinue
            }
            Remove-Item -LiteralPath $tmpMd -ErrorAction SilentlyContinue
        }
    }

    if ([string]::IsNullOrWhiteSpace($body)) {
        $body = "Extraction pending. Install or verify pdftotext/pandoc support, then rerun conversion."
        $stubbed++
    }
    else {
        $converted++
    }

    $frontMatter = @(
        "---",
        "normalized_id: $($row.normalized_id)",
        "exam_code: $($row.exam_code)",
        "material_scope: $($row.material_scope)",
        "material_group: $($row.material_group)",
        "document_type: $($row.document_type)",
        "source_repo_path: $($row.source_repo_path)",
        "conversion_method: $conversionMethod",
        "qa_status: pending",
        "---",
        ""
    ) -join "`r`n"

    $content = $frontMatter + "# $($row.normalized_id)" + "`r`n`r`n" + $body + "`r`n"
    $content | Out-File -LiteralPath $targetMd -Encoding UTF8 -Force
}

Write-Host "Conversion complete. Converted=$converted Stubbed=$stubbed Skipped=$skipped"
