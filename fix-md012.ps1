$files = Get-ChildItem -Recurse -Path .\maths-study\resources\past-papers\processed -Filter "*.md"
$count = 0
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    # Replace multiple trailing newlines with just one
    $fixed = [System.Text.RegularExpressions.Regex]::Replace($content, "[\r\n]+$", "`n")
    if ($content -ne $fixed) {
        [System.IO.File]::WriteAllText($file.FullName, $fixed, [System.Text.Encoding]::UTF8)
        $count++
        Write-Host "Fixed: $($file.Name)"
    }
}
Write-Host "Total fixed: $count"
