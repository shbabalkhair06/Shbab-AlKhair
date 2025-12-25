$ErrorActionPreference = "Continue"
$source = "C:\Users\azash\OneDrive\Desktop\New folder (2)\imeg"
$dest = "C:\Users\azash\OneDrive\Desktop\New folder (2)\public\images"

$files = @("22.jpeg", "33.jpeg", "44.jpeg", "55.jpeg", "66.jpeg", "م1.jpeg", "م2.jpeg", "م3.jpeg", "م4.jpeg", "م5.jpeg", "م7.jpeg")

foreach ($file in $files) {
    $srcPath = Join-Path $source $file
    $dstPath = Join-Path $dest $file
    
    if (Test-Path $srcPath) {
        try {
            Copy-Item $srcPath -Destination $dstPath -Force -ErrorAction Stop
            Write-Host "✓ Copied: $file" -ForegroundColor Green
        } catch {
            Write-Host "✗ Error copying $file : $_" -ForegroundColor Red
        }
    } else {
        Write-Host "✗ Not found: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nChecking destination folder..."
Get-ChildItem $dest | Select-Object Name

