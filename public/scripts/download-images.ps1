# Download Binondo site images to public/images/food and public/images/heritage
# Run from repository root in PowerShell: .\public\scripts\download-images.ps1

$ErrorActionPreference = 'Stop'

# Ensure folders exist
New-Item -ItemType Directory -Force -Path "public/images/food" | Out-Null
New-Item -ItemType Directory -Force -Path "public/images/heritage" | Out-Null

Write-Host "Downloading food images..."
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/fried-chicken" -OutFile "public/images/food/sincerity-fried-chicken.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/dim-sum" -OutFile "public/images/food/waiying.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/street-food,stall" -OutFile "public/images/food/quik-snack-street-food.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/pastry,hopia" -OutFile "public/images/food/engbeetin-hopia.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/chinese-banquet" -OutFile "public/images/food/president-grand-palace.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/dumplings" -OutFile "public/images/food/dongbei-dumplings.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/dumplings" -OutFile "public/images/food/tasty-dumplings.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/spring-roll,lumpia" -OutFile "public/images/food/polland-fresh-lumpia.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/siopao,bun" -OutFile "public/images/food/fried-shanghai-siopao.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/coffee,cafe" -OutFile "public/images/food/1919-grand-cafe.jpg"

Write-Host "Downloading heritage images..."
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/1024px-Jones_Bridge_December_2019.jpeg" -OutFile "public/images/heritage/jones-bridge.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/BinondoManilajf0200_13.jpg" -OutFile "public/images/heritage/ongpin-arch.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/Seng_Guan_Temple.jpg" -OutFile "public/images/heritage/seng-guan-temple.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/binondo-church-aerial-view-close-up-5aab9d-1024-687x960.jpg" -OutFile "public/images/heritage/binondo-church.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/21506479530_3341069da3_b-960x685.jpg" -OutFile "public/images/heritage/plaza-st-lorenzo-ruiz.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/Escolta-1280x720.jpg" -OutFile "public/images/heritage/escolta-street.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/First-United-Building-960x540.jpg" -OutFile "public/images/heritage/first-united-building.jpg"
Invoke-WebRequest -Uri "https://assets.bluprint-onemega.com/wp-content/uploads/2024/02/Regina-Building-679x960.jpg" -OutFile "public/images/heritage/regina-building.jpg"

# Additional heritage images
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/plaza" -OutFile "public/images/heritage/plaza-calderon-de-la-barca.jpg"
Invoke-WebRequest -Uri "https://loremflickr.com/1200/800/museum" -OutFile "public/images/heritage/bahay-tsinoy.jpg"

Write-Host "Done. Images saved to public/images/food and public/images/heritage"
