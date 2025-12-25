$source = "C:\Users\azash\OneDrive\Desktop\صور فريق"
$dest = "C:\Users\azash\OneDrive\Desktop\New folder (2)\public\images"

Write-Host "Copying images from: $source"
Write-Host "To: $dest"
Write-Host ""

if (Test-Path $source) {
    $files = Get-ChildItem $source -Filter "*.jpeg"
    Write-Host "Found $($files.Count) files"
    
    foreach ($file in $files) {
        $destPath = Join-Path $dest $file.Name
        try {
            Copy-Item $file.FullName -Destination $destPath -Force
            Write-Host "✓ Copied: $($file.Name)" -ForegroundColor Green
        } catch {
            Write-Host "✗ Error copying $($file.Name): $_" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "Files in destination:"
    Get-ChildItem $dest | Select-Object Name
} else {
    Write-Host "Source folder not found: $source" -ForegroundColor Red
}

