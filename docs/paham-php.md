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
Update: Selasa, 24 Maret 2020

Maaf banget, meteri ini sempat terlantar karena banyaknya aktivitas yang harus saya kerjakan diluar... Sekali lagi mohon maaf.

#### Variable dan Tipe Data

Cara menyimpan nilai pada sebuah bahasa pemrograman adalah dengan sebuah variable. Pada php variable ditandai awalan tanda dollar `$`.

Contoh

```php
<?php
$nama = "Asrul Harahap";
?>
```
Variable memiliki tanda = sebagai pemisah nama variable disebelah kiri = dan nilai variable disebelah kanan =.

#### Tipe Data

PHP memiliki beberapa tipe data yaitu:

1. Integers berupa angka numerik tanpa desimal
2. Doubles berupa angka numerik yang memiliki desimal
3. Boolean berupa nilai `true` atau `false`
4. NULL merupakan tipe data yang cukup special hanya bernilai NULL
5. String merupakan karakter atau kumpulan karakter.
6. Array berupa kumpulan dari beberapa data dan memiliki index yang dimulai dari nol (0)
7. Objects merupakan instance dari class yang telah didefenisikan yang menjadi sekumpulan fungsi-fungsi.
8. Resource merupakan variable special untuk mengakses resource luar dari PHP.

### Lingkup Variable
Ada beberapa lingkup variable dalam PHP.

1. Local
Variable yang dideklarasikan dalam sebuah function dianggap variable lokal. Itu hanya dapat dirujuk atau digunakan dalam function itu sendiri.

```php
<?php
$uang = 4000;

function uangLagi() {
    $uang = 2500;
    echo "Uang dalam function " . $uang . "<br />";
}
uangLagi();
echo "Uang luar function " . $uang;
?>
```

Hasilnya
```
Uang dalam function 2500
Uang luar function 4000
```

2. Param Function
Variable hanya berupa param pada function. Perhatikan contoh berikut.

```php
<?php
function kalikanSepuluh($nilai) {
    $nilai = $nilai * 10;
    return $nilai;
}

echo kalikanSepuluh(20);
?>
```

hasilnya
```
200
```

3. Lingkup global
Variable yang diawali keyword `GLOBAL` akan dapat diakses dari mana saja.

```php
<?php
   $counter = 15;
   
   function addit() {
      GLOBAL $counter;
      $counter++;
      
      echo "counter jadi " . $counter;
   }
   
   addit();
?>
```

Hasilnya
```
counter jadi 16
```