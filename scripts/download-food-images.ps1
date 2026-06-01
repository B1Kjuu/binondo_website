# Downloads selected food guide images into public/images/food/
$dest = "public/images/food"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }

$images = @{
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO5EBs5f0V8C_q4wOIXWkUSTHicSyFhpcGNN7i36fSlohRJKaWLOMBjDK9QjYEnlUbtG7XeWCG5DK2Y0LLpctv7lcKR8RZC_x006Ow3rq0NY-xiZU_nBqZkmc4A421gH5zRj7BxdxV0iBXqASmFh76ljryta_6Ull1Eemq7WywqRLxb7dSH0F3bKVjNHSK/s1600/Binondo%20Food%20Crawl.jpg" = "binondo-food-crawl.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbNMLyAaONIcx7PDbuCOwicurFrepCkTKv6X4UYGOykQf8b70Q95h4VdphNpDYDjy5gyUKdhObas_fNOp31eguPVEl7giHk2h1mVcW34pH3AhHAZbvhwsxbq3ONewu8_XfWHtQNBBohcTO/s1600/Dong+Bei-6.jpg" = "dongbei-dumplings.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlHf9Ioe-kD2QlX38pecuqtzsf5QiVVLhsLogEg0tVF8RLxVrE7iaIPxpHxzfiGNS14CuZ31NfF6DOrzCCKsUyoShmAuTaqEtHOQmBVxkJErk_0FSf3n36ZFu2IRbOZL4Len8LgR1qzOF20jJua-S8-BKVgieH33auKETtFnMT_wKx7vdAPBWm331rZ7cp/s1600/Binond%20Food%20Crawl-1.jpg" = "tasty-dumplings.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJh-WhbYD6Lm5usxshnq19IHXjdjRBj5eUENzw-zXTZFOS7-5m8Xx0rWLVk_zRnUN6IiysD5Q-U1gi7HiiJW6qg_f9h0x81nP6fUci7vWtAhRZuG49GlYBWs5192n6xS5aDuV0qJ3fXiC5RbFnqOyk3SqoHuHdHtV9Y5yrBAMZK93gWxQ7ycbXmP8HDIsu/s1600/Binond%20Food%20Crawl-7.jpg" = "sincerity.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqmFEMcyMtm2LCcac28y4FhIQ36pwtoUU4gWe9dxmg7UGfDqLRw9tcQCEoFJ5-y2raG4ssfHoNXGW0pHJVfw_aNf3eJu4TLklXwwYnRIDxlgpzqA0pgqn6zZwszBKGVi9d7TtYAebz_LIokCtjiVMobXADzoq0M5O1XUBYdWAEd4Y3xxCUBdiD8uWC_2TD/s1600/Binond%20Food%20Crawl-11.jpg" = "polland-1.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPI7y2JbPCqlqFFBxXgdQnZWnJhZe5uHgoi6_iveuUPv1V3ws0irNhPR_s0NU7rlpxdaaFJrAvnEmyGopyIY9d02Oh4F5bOGwJ1GxeZ14pLKPPaZAp7W9FWS1dpD6BB7kMUSAComP5_mdB61fz6YNxPY34AUbBxUqo9cpZoCELvIiVszqzeQg7uaJ514B9/s1600/Binond%20Food%20Crawl-12.jpg" = "polland-2.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3mfQQjvlcvRVP4OoeSvyhXcPjY_N1kaFw1n718kgqh6ZYwCX313PWOGJOe-lbsZ5wcX7SQ0hLSB_isMm-b0tJVQoNt_VH-hNgnxWgSfGNu3X4Qhd3prpb4zQJpvlZzFU2DZ7VoWtiM9OQ/s1600/Fried+Siopao-4.jpg" = "fried-shanghai-siopao.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh2pJaVMI25u9xuRYvSiL8jLIVkByAE-mRItjqyJZ8En4OyAVa6k9h-1lbXE6Hqm7P76VeMbtD8cabTXB4hmNejtB1ujZ_1yTJo_8CoucWYrpL3vQcf2Fxme_fRTo9VNUshG04jk6W1uZj-ihilHPQ5C4_xfZ6ABZAxhbj0oOf76DcvbXpJ8zR_WkZYmlG/s1600/Binond%20Food%20Crawl-3.jpg" = "engbeetin.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglpjTnR1gCgeFWNbPorwaw9ANy6224bqurlf3yIv1_CzWQ1jU5Rvav4dfonxBbBQU9b8N7OTmzQdRig4IJ50A2RPPTZ7j75rd1YtMexKqSsngFM4G8tbKx0qTQOmmu3IxWxvslPB6LODL4/s1600/Lord+Stow%2527s-4.jpg" = "lord-stows.jpg"
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmBBA57UjnKgBgQjc2SDKDcmy20DES2rjVOOiICYaAAmTiHzlsarjaRW1NLPTvpcGjLu8_V-_AD51GHWugjl2iEciZp7fSvwS7Jte7cqxG9n-srAb1YdjZ4043qEy4BCoAldfDnoi1ql1b38vIHO0XA8b6pcGkqFGe9Vn_AviLE_wJkvbCTYEw5OIUoyZw/s1600/Binond%20Food%20Crawl-5.jpg" = "1919-grand-cafe.jpg"
  "https://images.squarespace-cdn.com/content/v1/5d7f2d797a64971f017f10ff/1706899254609-1TEW8R75UEL9VQEWL8IJ/02-03+MANILA+CHINATOWN+FOOD+GUIDE+TN.png" = "zoy-manila-chinatown-guide.png"
}

foreach ($url in $images.Keys) {
  $filename = $images[$url]
  $outfile = Join-Path $dest $filename
  Write-Host "Downloading $url -> $outfile"
  try {
    Invoke-WebRequest -Uri $url -OutFile $outfile -UseBasicParsing -ErrorAction Stop
  } catch {
    Write-Warning "Failed to download $url : $_"
  }
}

Write-Host "Done. Check public/images/food/ for files."
