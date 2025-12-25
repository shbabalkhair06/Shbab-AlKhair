# أنشئ المجلد (إن لم يوجد)
New-Item -ItemType Directory -Force -Path .\public\images\initiatives\

# انسخ الصور من مسار على جهازك إلى المجلد مع إعادة التسمية (غير المسارات حسب موقع صورك)
Copy-Item -Path "C:\Users\you\Downloads\IMG_1.jpg" -Destination .\public\images\initiatives\iftar_orphans.jpg
Copy-Item -Path "C:\Users\you\Downloads\IMG_2.jpg" -Destination .\public\images\initiatives\ezouti_restaurant.jpg
Copy-Item -Path "C:\Users\you\Downloads\IMG_3.jpg" -Destination .\public\images\initiatives\clothing_bank.jpg
Copy-Item -Path "C:\Users\you\Downloads\IMG_4.jpg" -Destination .\public\images\initiatives\threed_stand.jpg
Copy-Item -Path "C:\Users\you\Downloads\IMG_5.jpg" -Destination .\public\images\initiatives\nursing_home.jpg