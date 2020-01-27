---
id: paham-php
title: Paham PHP
sidebar_label: Paham PHP
---

## Hari 1
Update: Minggu, 26 Januari 2020

Ketika banyak permintaan yang masuk untuk dibuatkan materi tentang php, akhirnya saya putuskan untuk menulis series paham PHP ini. Mohon maaf jika pembahasan kurang menarik karena saya biasanya bekerja pada javascript. :)

PHP adalah bahasa scripting yang lumayan populer yang sangat cocok untuk pengembangan web. Karena cepat, fleksibel, dan pragmatis, PHP memberdayakan semuanya, mulai dari blog Anda hingga situs web terpopuler di dunia.

![Download PHP](https://raw.githubusercontent.com/AsrulLove/img-db/master/php/php.png)

Sebelum melanjutkan pembelajaran silahkan download dan install php pada laptop Anda dari http://php.net atau bundle-an dari XAMPP juga sama saja. Saya sendiri karena ingin simple akhirnya memakai XAMPP, karena dengan XAMPP sudah ada juga database MySQL didalamnya.

![xampp](https://raw.githubusercontent.com/AsrulLove/img-db/master/xampp.png)

Bisa download [disini](https://www.apachefriends.org/index.html)

Jika sudah download pastikan MySQL berjalan dengan baik sehingga kita bisa membuka database di http://localhost/phpmyadmin (mungkin sedikit berbeda dilaptop Anda, silahkan disesuaikan), seperti berikut.

![php myadmin](https://raw.githubusercontent.com/AsrulLove/img-db/master/phpmyadmin.png)

Pastikan php juga telah terinstall dengan baik, cek pada terminal dengan perintah berikut.

```bash
php -v
```

![PHP versi](https://raw.githubusercontent.com/AsrulLove/img-db/master/php/php-versi.png)

> Catatan untuk ubuntu: jika php belum tersedia bisa menambahkan perintah berikut `sudo ln -s /opt/lampp/bin/php /usr/bin/php`

### Cara Menjalankan PHP
Php menggunakan ekstensi `.php`, dan setiap kode yang akan dijalankan php berada diantara `<?php` dan `?>`, dan yang paling penting jangan pernah lupakan tanda titik koma `;`.

```php
<?php

echo "Halo Asrul Dev";

?>
```

Buat folder proyek dengan nama `paham-php` dan buatkan sebuah file tempat kita belajar dasar php yang diberi nama `index.php`.

![Folder Proyek](https://raw.githubusercontent.com/AsrulLove/img-db/master/php/folder-proyek.png)

File `index.php`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Asrul Dev</title>
</head>
<body>

<?php
    echo "Halo Asrul Dev";
?>
    
</body>
</html>
```

Kemudian pada terminal jalankan dengan perintah berikut.

```bash
php -S localhost:9999
```

![Hasil php](https://raw.githubusercontent.com/AsrulLove/img-db/master/php/running-php.png)

Jika diamati lebih, ternyata pada php dapat menjalankan html secara langsung.

### Hari 2
coming soon
