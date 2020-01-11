---
id: 30daysweb
title: 30 Hari Javascript
sidebar_label: 30 Hari Javascript
---

## Hari 1

Update: Minggu, 05 Januari 2020

### Pengantar
Semamat bagi teman-teman yang memutuskan untuk mengikuti series pembelajaran **javascript** ini, Pada series ini Anda akan belajar Javascript dari dasar hingga tingkat menengah. Dan pada akhir series ini Anda akan diminta untuk membuat sebuah proyek akhir, yang dikirimkan ke email [talkasrul@gmail.com](mailto:talkasrul@gmail.com). Ini hanya menguji tingkat keseriusan anda dalam mengikuti pembelajaran saja.

Untuk diskusi saya telah siapkan group [Telegram](https://t.me/joinchat/KEE0phS9ZCuR8O7a8F31qA)

Jika Anda suka tulisan saya dan ingin berdonasi, dipersilahkan.

1. Ovo **39358 081211752502** 
2. Shopeepay **122 081211752502**
3. BCA **5325 058851**

### Persyaratan
Untuk mengikuti series ini Anda perlu:

1. Motivasi yang tinggi
2. Laptop dengan OS apasaja (rekomendasi: Linux)
3. Koneksi Internet
4. Browser (rekomendasi: Google Chrome)
5. Teks Editor (rekomendasi: VS Code)
6. Kopi dan Snek (optional)

### Persiapan

#### Instal NodeJS
Unduh atau download file untuk instal node js pada link [ini](https://nodejs.org/en/). Silahkan download sesuai OS Anda, disarankan mendownload nodejs dengan versi yang LTS.

![Web Node JS](https://raw.githubusercontent.com/AsrulLove/img-db/master/nodejsweb.png)

Double Click file yang telah didownload dan ikuti intruksi instal nodejs hingga selesai.
Jika instal nodejs selesai dapat dicek dengan cara mengetikkan perintah ini diterminal.

```bash
node -v
```

Jika versi nodejs tersedia, maka dapat disimpulkan bahwa instalasi nodejs berhasil.

#### Instal VS Code
VS Code adalah aplikasi teks editor yang akan kita gunakan untuk menuliskan kode. Silahkan download di [sini](https://code.visualstudio.com/).

![VS Code](https://raw.githubusercontent.com/AsrulLove/img-db/master/downloadvscode.png)

Install hingga selesai, dan tampilannya seperti berikut ini.

![VS Code](https://raw.githubusercontent.com/AsrulLove/img-db/master/ovscode.png)

#### Instal Google Chrome
Ada banyak sekali browser seperti Firefox, Opera, Edge, Internet Explorer dll, tapi saya sangat merekomendasikan google chrome. Mungkin juga Anda sudah menggunakannya. Bagi yang belum silahkan download di [sini](https://www.google.com/chrome/) 

![G Chrome](https://raw.githubusercontent.com/AsrulLove/img-db/master/gchromedownload.png)

Ikuti langkah demi langkah dan selesaikan instal google chrome.

#### Menggunakan Chrome Console

Untuk membuka Chrome Console, klik kanan pada chrome, kemudian pilih inspect.

![Inspect](https://raw.githubusercontent.com/AsrulLove/img-db/master/inspect.png)

Maka hasilnya akan seperti berikut.

![Console](https://raw.githubusercontent.com/AsrulLove/img-db/master/gconsole.png)

#### Uji Kode Pada Chrome Console

Silahkan tuliskan kode berikut untuk menguji konsol dapat digunakan dengan baik.

```js
console.log('Belajar Bersama Asrul Dev')
```

![Uji Console](https://raw.githubusercontent.com/AsrulLove/img-db/master/ujikonsole.png)


### Mengenal Javascript

Javascript adalah salah satu bahasa pemograman yang dapat dipakai sebagai bahasa Backend untuk REST API atau Web Server, bisa dipakai sebagai frontend untuk web, desktop, maupun mobile. Bahkan javascript juga bisa digunakan loh untuk robot dan AI.

Untuk lebih jelasnya tentang javascript silahkan baca-baca di google yah. :)

Buatlah folder dengan nama `30hari` sebagai tempat menyimpan file-file javascript `,js` yang kita gunakan untuk belajar. Kemudian arahkan pada terminal lalu buka VScode. Perhatikan gambar.

![Open Vscode](https://raw.githubusercontent.com/AsrulLove/img-db/master/open.png)

Setelah Vscode terbuka maka pilih new file untuk memulai belajar.

![File Baru](https://raw.githubusercontent.com/AsrulLove/img-db/master/filebaru.png)

> ekstensi yang digunakan `.js`

### Tipe Data
Saya rasa semua bahasa pemrograman pasti ada yang namanya tipe data. Berikut ini adalah tipe data primitif JavaScript: `String`, `Number`, `Boolean`, `Undefined`, `Null` , dan `Symbol`.

##### Number
Number itu adalah tipe data yang dapat diproses matematika, seperti tambah, kali, bagi, dll.

1. Integer yaitu bilangan negatif, nol, positif: `-100, 0, 25`
2. Float yaitu bilangan negatif atau positif berkoma: `-2.12, 3.14`

##### String
String adalah sebuah karakter atau sekumpulan karakter yang ditulis diantara tanda kutif tunggal atau double atau bisa juga dengan tanda backtik.

'Asrul harahap'

"Belajar Javascript"

`Selamat Tahun Baru 2020`

##### Boolean
Boolean berupa pernyataan benar atau salah dengan nilai true atau false, biasanya digunakan untuk membandingkan atau mengecek kondisi, misal apakah hujan? bisa true atau bisa false.

##### Undefined
Dalam JavaScript, jika tidak menetapkan nilai ke variabel, maka nilainya `undefined`. Selain itu, jika suatu fungsi tidak mengembalikan atau return apa pun, maka nilai yang dikembalikan adalah `undefined`.

##### Null
Null adalah nilai kosong, ini mungkin akan dibahas sesuai kasus kedepannya.

#### Memeriksa Tipe Data
Javascript telah menyediakan kode untuk memeriksa tipe data yaitu `typeof`.

contoh

```js
console.log(typeof 2020)
console.log(typeof "Asrul Harahap")
console.log(typeof false)
```

Tulis contoh pada file `.js` kemudian simpan dan jalankan pada terminal seperti gambar berikut.

![Running Code](https://raw.githubusercontent.com/AsrulLove/img-db/master/running-code.png)

### Komentar
Terkadang kita butuh catatan pada baris kode yang kita tulis guna untuk mengingatkan kita sebagai developer dan bukan untuk dieksekusi oleh program. Pada javascript memiliki beberapa cara untuk membuat Komentar.

1. Komentar 1 baris

```js
// Ini hanya komentar tidak dieksekusi
console.log('ini dieksekusi')
```

2. Komentar beberapa baris

```js
/**
 * conversi jam ke menit
 * param jam: number
 */
function hourToMinutes(hour) {
    return hour * 60
}
```

### Variable
Variable adalah wadah yang dapat menyimpan data. Misal variabel nama berisi **Asrul Harahap**.

```js
var nama = "Asrul Harahap"
console.log(nama)
```

Variabel punya aturan dalam penulisan, yaitu:
1. Tidak boleh dimulai dengan angka
2. Tidak boleh menggunakan spasi
3. Tidak boleh menggunakan karakter khusus kecuali tanda dollar ($) dan garis bawah (_)

Penulisan variabel diawali kaya kunci atau keyword `var`, `let`, atau `const`.

```js
var alamat = "Jakarta Selatan"
let website = "http://asrul.dev"
const phi = 3.14
```

> Kapan untuk penggunaan var, let, dan const akan dibahas pada pembahasan lainnya. Sabar yah....

## Hari 2
Update: Senin, 06 Januari 2020

### Tipe Data non-Primitif
Kemarin kita sudah bahas beberapa jenis tipe data primitif, selain itu ada juga tipe data referensi atau non-primitif, berdiri berdasarkan tipe data lain, yaitu:

1. Array
2. Object
3. Function

Tipe data non-primitif dapat dimodifikasi atau diubah. Kita dapat memodifikasi nilai tipe data non-primitif setelah dibuat. Mari kita lihat dengan membuat sebuah array. **Array** adalah daftar nilai data yang kiapit oleh tanda kurung siku dan dipisahkan tanda koma. Array dapat berisi tipe data yang sama atau berbeda. Nilai array dirujuk oleh indeks masing-masing data. Dalam indeks array JavaScript dimulai dari nol. Yaitu, elemen pertama dari sebuah array ditemukan di indeks nol, elemen kedua di indeks satu, dan elemen ketiga di indeks dua, dan selanjutnya.

```js
let siswa = ["Asrul", "Anis", "Tisha", "Rifky"]
console.log(siswa[1])
// hasilnyya: Anis
```

Tipe data non primitif tidak bisa dibandingkan, bahkan walau nilainya sama.

```js
let nilai = [1, 2, 3]
let angka = [1, 2, 3]

console.log(nilai === angka)
// hasilnya: false
```
> Array akan kita bahas nanti, untuk sekarang kita skip dahulu.

### Number
Sedikit telah dibahas pada hari pertama bahwa tipe data number berupa bilangan bulat dan pecahan atau desimal baik negatif maupun positif beserta dengan nol.

Contoh

```js
let panjang = 30
let lebar = 21.52
let luas = panjang * lebar
console.log("Luas adalah ", luas)
// Hasilnya: Luas adalah 645.6
```

Anda dapat melakukan operasi matematik baik bilangan desimal dengan desimal atau dengan bilangan bulat.

### Math
Pada javascript telah disediakan **object match** yang berfungsi sebagai alat bantu dalam urusan kalkulasi matematik seperti max, min, random, pow, dll.

Method | Keterangan
-------| ---------
Math.PI | PI adalah rasio keliling lingkaran terhadap diameternya; sekitar 3.14159.
Math.round | Pembulatan nilai keangka terdekat
Math.floor | Membulatkan nilai kebawah
Math.ceil | Membulatkan nilai keatas
Math.min | Mencari angka terkecil dari deretan angka
Math.max | Kebalikan dari Math.min, mencari yang terbesar
Math.random | Mencari nilai acak berupa 0 to 0.999999999...
Math.sqrt | Mencari nilai akar dari angka yang didefenisikan

Ada banyak lagi method matematik yang disediakan oleh javascript, silahkan baca di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


Contoh penggunaan pada soal berikut.

Jika diketahui sebuah lingkaran mempunyai diameter 14 cm. Berapakah luas lingkaran tersebut?

Penyelesaian:

Diketahui:

d = 14 cm

karena d = 2 × r maka:

r = d/2

r = 14/2

r = 7 cm

Ditanyakan: Luas lingkaran?

Jawab:

Luas = π × r²

Luas = 22/7 × 7²

Luas = 154 cm²

Jadi, luas lingkaran tersebut adalah 154 cm².

```js
let d = 14
let r = d/2
let luas = Math.PI * r * r
console.log(luas)
// hasilnya: 153.93804002589985
console.log(Math.round(luas))
// hasilnya 154
```

Referensi pendukung untuk number baca di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### String

Pada bagian ini kita akan perdalam lagi materi **String** yang telah kita bahas sebelumnya. String didefenisikan harus menggunakan tanda kutif tunggal, dobel atau backtik.

```js
let nama = "Asrul Harahap"
let alamat = `Jl. Tanah Kusir II
             Gang Pramuka II
             Kelurahan Kebayoran Lama Selatan
             Kecamatan Kebayoran Lama
             Kota Jakarta Selatan
             DKI Jakarta - 12240
             Indonesia           
`
let pekerjaan = 'Full Stack Developer'
```

Anda dapat menggabung dua string atau lebih yang disebut dengan string concat.

```js
let firstName = "Asrul"
let lastName = "Harahap"
let fullName = firstName + " " + lastName
console.log(fullName)
// hasil: Asrul Harahap

console.log(`${firstName} ${lastName}`)
// hasil: Asrul Harahap
```

Pada contoh ada penggunaan `${variable}` ini adalah salahsatu cara menggunakan concat string javascript yang disebut dengan **template literal**. Anda bebas menggunakan cara pertama atau kedua, sesuai nyamannya Anda dalam ngoding.

#### 1. .length
String memiliki properti .leng yang berfungsi untuk menghitung jumlah karakter pada string.

```js
let nama = "Anis Fikriyyah"

console.log(nama.length)
// hasil: 14
```

#### 2. .toUpperCase()
toUpperCase() digunakan untuk mentranform string menjadi huruf besar semua

```js
let nama = "Anis Fikriyyah"

console.log(nama.toUpperCase())
// hasil: ANIS FIKRIYYAH
```

#### 3. .toLowerCase()
Ini merupakan kebalikan dari .toUpperCase(), yaitu mentransform string menjadi huruf kecil semua.


#### 4. .substr() 
substr digunakan untuk mengiris atau memotong karakter, ini membutuhkan 2 argumen yaitu indeks mulai dan jumlah karakter yang diiris.

```js
let nama = 'Anis Fikriyyah'
console.log(nama.substr(5,6))    
// hasil: Fikriy
```
Perhatikan gambar berikut

![Substr](https://raw.githubusercontent.com/AsrulLove/img-db/master/substr.png)

#### 5. .split()
split ini digunakan untuk menjadikan string menjadi potongan array.

```js
let nama = 'Asrul Harahap'

console.log(nama.split(' '))  
// hasil: ["Asrul", "Harahap"]

let firstName = 'Asrul'

console.log(firstName.split(''))  
// hasil: ["A", "s", "r", "u", "l"]

let countries = 'Asrul, Anis, Tisha, Lan, Rifki'

console.log(countries.split(','))
// hasil: ["Asrul", "Anis", "Tisha", "Lan", "Rifki"]
```

#### 6. .trim()
Digunakan untuk menghapus spasi berlebih diawal atau diakhir string

```js
let nama = "   Anies Baswedan                     "

console.log(nama)
// hasil:    Anies Baswedan                      
console.log(nama.trim())
// hasil: Anies Baswedan
```

#### 7. .repeat()
Dari namanya sudah bisa kita tebak gunanya untuk apa, ya benar gunanya untuk mengulang string sebanyak yang didefenisikan.

```js
let mood = 'bahagia'
console.log(mood.repeat(10)) 
// hasil: bahagiabahagiabahagiabahagiabahagiabahagiabahagiabahagiabahagiabahagia
```

Masih banyak lagi method pada string seperti indexOf, replace, dll. Anda bisa baca selengkapnya di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


## Hari 3

Update: Selasa, 7 Januari 2020

### Boolean
Boolean hanya memiliki nilai benar atau salah (`true` / `false`). Biasanya boolean ini digunakan untuk membandingkan nilai menggunakan operator pembanding.

```js
let punyaCinta = false
let udahNikah = true
let lebihTua = 40 > 13
```

### Operator

#### Assigment Operator
Operator ini digunakan untuk mengisi nilai pada sebuah variable. Misal variable usia diisi dengan 25.

```js
let usia = 25
```

Perhatikan tabel berikut

Operator | Contoh | Penjelasan
:--------:|:-------:|------------
= | x = 10 | x menyimpan nilai 10
+= | x += 1 | nilai awal x ditambahkan dengan 1 atau sama artinya dengan x = x + 1
-= | x -= 1 | nilai awal x dikurangkan dengan 1 atau sama artinya dengan x = x - 1
*= | x *= 1 | nilai awal x dikalikan dengan 1 atau sama artinya dengan x = x * 1
/= | x /= 1 | nilai awal x dibagikan dengan 1 atau sama artinya dengan x = x / 1

```js
let nilai = 19
nilai += 20

console.log(nilai)
// hasilnya: 39
```

#### Operator Aritmatika
Operator ini digunakan untuk proses matematik seperti tambah, kurang, kali, bagi, dll.

```js
let bil1 = 10
let bil2 = 5

console.log(bil1 * bil2)
// hasil: 50
```

#### Operator Pembanding
Pada pemrograman kita dapat membandingkan dua nilai dengan operator pembanding. Dicek dengan hasil antara benar (true) atau salah (false).

Operator | Nama | Contoh
:----:|-----------|--------
== | Sama dengan | x == y
=== | Sangat Sama dengan | x === y
!= | Tidak sama dengan | x != y
!== | Sangat tidak sama dengan | x !== y
> | Lebih dari | x > y
< | Kurang dari | x < y
>= | Lebih dari atau sama dengan | x >= y
<= | Kurang dari atau sama dengan | x <= y

```js
console.log(5 > 1)              
// hasilnya: true, karena 5 lebih besar dari 1
console.log(2 <= 3)             
// hasilnya: true, karena 2 lebih kecil dari 3
console.log(3 == 2)             
// hasilnya: false, karena 3 tidak sama dengan 2
console.log(0 == false)         
// hasilnya: true, karena 0 dianggap false dalam javascript
console.log(1 === true)         
// hasilnya: false, karena tipe data berbeda
```

Sering ulangi untuk lebih paham penggunaan operator perbandingan ini, karena dalam pemrograman bahasa apapun ini akan sangat sering ditemui. Bahkan saya bisa bilang bahwa yang belum dapat memahami operator ini tidak akan bisa menjadi seorang programmer

#### Operator Logika
Terdapat tiga operator yang termasuk operator logika, yaitu:

**AND**, jika salah satu bernilai false maka hasilnya false.

Kiri | Kanan | Nilai
-----|-----|-------
true | true | true
true | false | false
false | true | false
false | false | false

**OR**, jika salah satu bernilai tru maka hasilnya true.

Kiri | Kanan | Nilai
-----|-----|-------
true | true | true
true | false | true
false | true | true
false | false | false

**NOT**, kebalikan dari nilai aslinya. Tidak true artinya false, dan sebaliknya.

Operator logika akan mengevaluasi bagian kiri kemudian mengevaluasi bagian kanan, hasil yang di `return` tergantung operator yang digunakan.

```js
console.log(5 > 3 && 10 > 5)
// hasil: true
console.log(true || 1 > 5)
// hasil: true
console.log(!true)
// hasil: false
```

#### Operator Kenaikan dan Penurunan

Ada dua tipe oparator ini yaitu: **Pra naik/turun**, nilai akan bertambah/berkurang sebelum ditampilkan dan **Pasca naik/turun**, nilai akan bertambah/berkurang setelah ditampilkan.

**Pra**

```js
let hitung = 0
console.log(++hitung) 
// hasil: 1
console.log(hitung)   
// hasil: 1
```

**Pasca**

```js
let hitung = 0
console.log(hitung--) // 0
console.log(hitung)   // -1
```

#### Operator Ternary
Operator ini memungkinkan untuk menulis kondisi atau disebut operator percabangan.

```js
let sedangHujan = true
sedangHujan
  ? console.log('Kamu butuh payung')
  : console.log('Slow aja hari cerah kok')

// hasil: Kamu butuh payung
```

Referensi untuk operator baca di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


## Hari 4
Update: Rabu, 08 Januari 2020

### Percabangan
Percabangan atau sering disebut juga dengan conditional digunakan untuk pengambilan keputusan berdasarkan kondisi-kondisi. Secara default, javascript menjalankan percabangan dari atas kebawah. Misal jika sudah ketemu nilai true maka selanjutnya kode akan diabaikan oleh program.

### IF
Gunakan if untuk menjalankan kode yang pada kondisi yang bernilai benar.

```js
if(syarat) {
    // Jalankan kode jika syarat terpenuhi atau bernilai benar
}
```

```js
let usia = 19
if(usia >= 18) {
    console.log("Okay selamat, Anda boleh ikut")
}
// hasil: Okay selamat, Anda boleh ikut
```

Pada contoh jika usia dibawah 18 maka program tidak menjalankan apa-apa.

### IF-ELSE
IF-ELSE ini memungkinkan untuk menjalankan kode yang tidak sesuai dengan persyaratan.

```js
if(syarat) {
    // Jalankan kode jika syarat terpenuhi atau bernilai benar
} else {
    // Jalankan kode jika syarat tidak terpenuhi atau bernilai salah
}
```

```js
let usia = 10
if(usia >= 18) {
    console.log("Okay selamat, Anda boleh ikut")
} else {
    console.log("Maaf nak, Anda harus menunggu beberapa tahun lagi")
}

// hasil: Maaf nak, Anda harus menunggu beberapa tahun lagi
```

### IF-ELSE IF-ELSE
Mungkin anda butuh untuk mengambil keputusan dari beberapa syarat yang diajukan, seperti halnya kehidupan sehari-hari.

```js
if (syarat) {
    // jalankan jika syarat terpenuhi 
} else  if (kondisi) {
    // jalankan jika syarat terpenuhi dan syarat sebelumnya tidak terpenuhi
} else {
    // jalankan jika semua syarat tidak terpenuhi
}
```

```js
let angka = 0
if (angka > 0) {
  console.log(`${angka} adalah bilangan positif`)
} else if (angka < 0) {
  console.log(`${angka} adalah bilangan negati`)
} else if (angka == 0) {
  console.log(`${angka} adalah Nol`)
} else {
  console.log(`${angka} bukanlah angka yang valid`)
}
// hasil: 0 adalah Nol
```

### Switch

Switch adalah alternatif untuk `if else`. Blok case dijalankan jika nilai dalam tanda kurung pernyataan cocok dengan case. Berhenti jika case telah terpenuhi.

```js
switch (nilai) {
    case  1 :
       // jalankan jika nilai sama dengan case 1
        break 
    
    case  2 :
        // jalankan jika nilai sama dengan case 2
        break 
    default :
        // jalankan jika semua case salah 
}
```

```js
let cuaca = 'berawan'
switch (cuaca) {
  case 'hujan':
    console.log('Kamu butuh jas hujan')
    break
  case 'berawan':
    console.log('Sedikit dingin, gunakan jaket kesayanganmu')
    break
  case 'cerah':
    console.log('Senangnya bisa kemana saja')
    break
  default:
    console.log('BMKG belum update cuaca nih :(')
}

// hasil: Sedikit dingin, gunakan jaket kesayanganmu
```

### Ternary

Ini sudah dibahas pada hari sebelumnya, [baca](https://asrul.dev/docs/30daysweb#operator-ternary)


## Hari 5
Update: Kamis, 09 Januari 2020

### Array

Array dapat menyimpan banyak data dengan tipe data yang berbeda-beda. Setiap nilai dalam array memiliki indeks dan memiliki referensi di alamat memori. Nilai dapat diakses dengan indeks yang dimulai dari indeks ke NOL ( 0 ). Elemen terakhir adalah panjang indeks dikurang 1.

Array ditandai dengan kurung siku `[]`

```js
let peliharaan = []
let makanan = ["pisang", "susu", "indomie"]

console.log(makanan[2])
// hasil: indomie
```

![Indeks](https://raw.githubusercontent.com/AsrulLove/img-db/master/indeks.png)

### Ubah nilai Array

Untuk mengubah nilai array bisa menggunakan indeks kemudian beri nilai layaknya memberi nilai pada variable.

```js
let makanan = ["pisang", "susu", "indomie"]

console.log(makanan[2])
// hasil: indomie
makanan[2] = "Nasi"
console.log(makanan[2])
// hasil: Nasi
```

### .concat()
Untuk menggabung dua array atau lebih bisa menggunakan concat.

```js
let buah = ['pisang', 'jeruk', 'mangga', 'lemon']
let sayuran = ['Tomat', 'Kentang', 'Kubis', 'Bawang', 'Wortel']
let isiKulkas =  buah.concat(sayuran)

console.log(isiKulkas)
// hasil: ['pisang', 'jeruk', 'mangga', 'lemon', 'Tomat', 'Kentang', 'Kubis', 'Bawang', 'Wortel']
```

selain pakai `.concat()` bisa juga menggunakan array spread (ES6).

```js
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
// hasil: [1,2,3,4,5,6]
```

### .length
Untuk mendapatkan panjang array bisa menggunakan array.length.

```js
let siswa = ["Anis", "Asrul", "Tisha"]
console.log(siswa.length)
// hasil: 3
``` 

### .indexOf()
.indexOf, digunakan untuk memeriksa apakah ada item dalam array. Jika ada, ia mengembalikan indeks item tersebut, jika tidak ada maka mengembalikan `-1`.

```js
let isiKulkas = ['semangka', 'pisang', 'mangga', 'apel']
let index = isiKulkas.indexOf('semangka')
console.log(index)
// hasil: 0

if(index != -1){
   console.log('Buah tersebut ada dalam kulkas, silahkan ambil') 
} else {
    console.log('Buah itu belum tersedia dalam kulkas')
}

// hasil: Buah tersebut ada dalam kulkas, silahkan ambil
```

### .join()
join() digunakan pada array untuk menggabungkan item-item dan menjadikannya sebagai sting. Untuk jelasnya perhatikan contoh berikut.

```js
let mugiwara = ['Luffy', 'Zorro', 'Sanji', 'Nami']

console.log(mugiwara.join())
// hasil: Luffy,Zorro,Sanji,Nami

console.log(mugiwara.join(' atau '))
// hasil: Luffy atau Zorro atau Sanji atau Nami

console.log(mugiwara.join('**'))
// hasil: Luffy**Zorro**Sanji**Nami

console.log(mugiwara.join(', '))
// hasil: Luffy, Zorro, Sanji, Nami

console.log(mugiwara.join('-'))
// hasil: Luffy-Zorro-Sanji-Nami
```

Kalau dilihat lebih teliti lagi, parameter `.join()` adalah penghubung yang digunakan setelah array itu digabung.

### .push()

Push adalah fungsi array yang akan menambahkan nilai di belakang nilai terakhir pada array. Layaknya sebuah antrian, push adalah orang yang mengantri selanjutnya, akan berada di posisi paling belakang. Fungsi push akan menerima satu parameter, berupa nilai yang akan ditambahkan.

```javascript
let bialngan = [0, 1, 2, 3]
bialngan.push(4)
console.log(bialngan)
// hasil: [0, 1, 2, 3, 4]
```

### .pop()

Fungsi array yang akan menghapus nilai paling belakang dari array. 

```javascript
let bilangan = [0, 1, 2, 3]
bilangan.pop()
console.log(bilangan)
// hasil: [0, 1, 2]
```

### .unshift()

Unshift adalah fungsi array yang akan menambah nilai ke depan array (ke index 0), dan menggeser seluruh isi array kebelakang. 

```javascript
let bilangan = [0, 1, 2]
bilangan.unshift(3)
console.log(bilangan)
// hasil: [3, 0, 1, 2]
```

### .shift()

Shift adalah fungsi array yang akan menghapus nilai paling depan dari array. Fungsi shift tidak menerima parameter apapun.

```javascript
let bilangan = [3, 0, 1, 2]
bilangan.shift()
console.log(bilangan) 
// hasil: [0, 1, 2]
```

### .sort()

sesuai nama sort adalah untuk mengurutkan. Sort mengurutkan otomatis secara ascending dan diurutkan berdasarkan **unicode** dari karakter. Kamu akan menemukan masalah ini saat mengurutkan angka.

```javascript
let bilangan = [3, 5, 7, 1, 2]
bilangan.sort()
console.log(bilangan)
// hasil: [1, 2, 3, 5, 7]
```

```js
let siswa = ['Sani', 'Anis', 'Kiki', 'Fahri']
siswa.sort()
console.log(siswa)
// hasil: ['Anis', 'Fahri', 'Kiki', 'Sani']
```

Contoh kasus `.sort()` pada angka:

```javascript
let bilangan = [1, 2, 15]
bilangan.sort();
console.log(bilangan) 
// hasil: [1, 15, 2]
```

Hasil dari sort di atas tidak sesuai dengan `ekspektasi` kita! Seharusnya [1, 2, 15] namun yang terjadi adalah [1, 15, 2]. Hal ini karena JavaScript melakukan sort secara **unicode** atau sebagai karakter, dan karena 15 diawali dengan karakter '1', maka akan dianggap lebih awal daripada karakter '2'. Untuk menyelesaikan masalah ini, kamu perlu menambahkan satu parameter berupa fungsi pembanding. Mungkin kamu akan sedikit bingung dengan code dibawah ini, namun intinya adalah kita membuat satu fungsi yang menilai apakah nilai pertama lebih kecil dari nilai kedua.

```javascript
let bilangan = [1, 2, 15]
bilangan.sort(function(value1, value2) { 
    return value1 > value2 
})
console.log(bilangan)
// hasil: [1, 2, 15]
```

dengan fungsi di dalam ini, kita juga bisa membuat fungsi sort yang descending:

```javascript
let bilangan = [1, 2, 15]
bilangan.sort(function(value1, value2) { 
    return value1 < value2 
})
console.log(bilangan) 
// hasil: [15, 2, 1]
```

### .slice()

Slice adalah fungsi array yang akan mengambil irisan atau potongan dari sebuah array. `.slice()` menerima satu atau dua parameter. Parameter pertama adalah index irisan diambil, dan parameter kedua adalah index irisan terakhir diambil. Jika parameter kedua tidak didefinisikan, irisan akan diambil hingga akhir dari array.

```javascript
let bilangan = [0, 1, 2, 3, 4]
let porongan = bilangan.slice(1, 3)
console.log(porongan) 
// hasil: [1, 2]

let potonganLain = arr.slice(1);
console.log(potonganLain)
// hasil: [1, 2, 3, 4]
```

Ada banyak lagi method yang disediakan javascript untuk array seperti .map(), .reduce(), .filter(), dan lainnya.

Kamu bisa baca tulisan saya ini https://asrul.dev/blog/memahami-map-filter-dan-reduce


### Array Multidimensi
Array multidimensi adalah sebuah array yang berisikan array lagi didalamnya. Konsepnya penggunaannya sama dengan array biasa (satu dimensi), hanya saja jumlah indeks yang digunakan saat mengakses nilai didalam array adalah sebanyak dimensi dari array tersebut.

Contoh array multidimensi antara lain diagram kartesius dan matriks. Diagram kartesius dan matriks adalah array multidimensi yang sama-sama membutuhkan koordinat untuk mengakses nilai didalamnya.

```javascript
let matriks = [ [1, 2], [3, 4], [5, 6] ]
console.log(matriks[0])
// hasil: [1, 2]

console.log(matriks[0][1])
// hasil: 2


let siswa = [ ['Asrul Harahap', 'Universitas Negeri Padang'], ['Anis Fikriyyah', 'Universitas Bale Bandung'] ]

console.log(siswa[1])
// hasil: ['Anis Fikriyyah', 'Universitas Bale Bandung']

console.log(siswa[0][1])
// hasil: 'Universitas Negeri Padang'
```


## Hari 6
Update: Jumat, 10 Januari 2020

### Perulangan
Perulangan sangat sering dilakukan dalam keehidupan sehari-hari, misalkan ibu Anis akan mengupas kentang dalam kantong plastik sebanyak 100 buah kentang. Maka ibu Anis akan kupas kentang pertama, selsai kupas kentang kedua, dan seterusnya hingga ketang terakhir adalah 100.

Dalam bahasa pemograman, perulangan ini disebut dengan looping.

### For Loop

```js
for(inisial, kondisi, increment/decrement){
  // eksekusi kode
}
```

![loop](https://raw.githubusercontent.com/AsrulLove/img-db/master/loopingfor.png)

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}
// hasil:
// 5
// 4
// 3
// 2
// 1
```

### While loop
Looping yang tidak tentu, maksudnya selalu melakukan looping hingga syarat terpenuhi.

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// hasil:
// 0
// 1
// 2
// 3
// 4
// 5
```

### For Of

```js
let pelajaran = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ]

for (let belajar of pelajaran) {
  console.log(belajar.toUpperCase()) 
}

// hasil:
// HTML 
// CSS 
// JAVASCRIPT 
// REACT 
// NODE 
// MONGODB
```

Sebenarnya ada beberapa cara looping dalam javascript lainnya, anda bisa baca di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### Object Literal

JavaScript merupakan bahasa pemrograman yang berbasis simple-object (Objek sederhana). Objek adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).

Objek dalam JavaScript, sama seperti banyak bahasa pemrograman lainnya, bisa dibandingkan dengan objek dalam kehidupan nyata.

Untuk membuat sebuah object literal bisa dengan cara menuliskan kurung kurawal (curly bracets) kemudian menuliskan nama property yang harus memiliki key dan value.

```javascript
let obj = {
  key: 'value'
};
```

Value dalam object literal selain string bisa juga dengan memasukkan value array bahkan value object literal lainnya.

Kita bisa coba dengan kode berikut:

```javascript
let asrulObj = {
    id: "1221092408940001",
    nama: "Asrul Harahap",
    lahir: {
        tempat: "Medan",
        tgl: "1994-08-24",
    },
    favorit: [
        "coding",
        "membaca",
        {
            olahraga: ["renang", "mendaki"],
            makanan: ["bakmi gm", "yosinoya"],
        }
    ],
    alamat: {
        jalan: "Jl. Tanah Kusir II",
        kelurahan: "Kebayoran Lama Selatan",
        kecamatan: "Kebayoran Lama",
        kota: "Jakarta Selatan",
        provinsi: "Sumatera Utara",
        kodePos: 12240
    }
}
```

### Cara akses objek literal
Gunakan titik sesuai node data berada, perhatikan contoh sesuai objek diatas.

```js
console.log(asrulObj.alamat.kota)
// hasil: Jakarta Selatan

console.log(asrulObj.favorit[2].makanan[1])
// hasil: yosinoya
```

### Mengubah nilai
Hampir sama dengan cara akses, tapi gunakan tanda sama dengan untuk memberi nilai baru, perhatikan contoh sesuai objek diatas.

```js
console.log(asrulObj.alamat.provinsi)
// hasil: Sumatera Utara

asrulObj.alamat.provinsi = "DKI Jakarta"
console.log(asrulObj.alamat.provinsi)
// hasil: DKI Jakarta
```

Untuk lebih dalam tentang objek literal baca referensi di [sini](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)


## Hari 7
Update: Sabtu, 11 Januari 2020

### Latihan

1. Silahkan deklarasikan perang!

2. Cek tipe data dari `"2020-01-01"`, `1994`, dan `Asrul Dev`!

3. Buatlah variable nama dan nilainya nama anda!

4. Buatlah variable usia dan nilainya usia anda!

5. Buatlah kalimat yang menggabungkan soal 3 dan soal 4!

6. Buatlah kode untuk kocok dadu ludo yang nilainya random  1 hingga 6!

7. Hitunglah jumlah karakter `Aku mencintai Javascript` menggunakan koding!

8. Buatlah program untuk mengkonversi bulan angka menjadi kata, misal 1 menjadi Januari, 2 menjadi Februari, dst!

9. Gabunglah array berikut menjadi kalimat yang bisa dibaca dengan baik, `["Aku", "bersyukur", "atas", "semua", "rezki", "ini", "termasuk", "kamu"]`

10. Ubahlah nilai dari variable a menjadi variable b, dan variable b menjadi variable a

> Dilarang menambahkan variable lain

```js
let a = 10
let b = 8
// hasil yang diharapkan
// a = 8
// b = 10
```

11. Buatlah gambar berikut menggunakan looping.
```bash
#
##
###
####
#####
######
#######
```

12. Buatlah perkalian berikut dengan looping!
```bash
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```

13. Soal Cerita

Toko Jaya Baru yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:
 - Sepatu brand Sanji seharga 1500000 dan stock barang yang tesedia 10
 - Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
 - Sweater brand Hinata seharga 175000 dan stock barang yang tersedia 1

Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function hitungProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko Jaya Baru tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut


**Penampakan Kode**

```JavaScript
function hitungProfit(shoppers) {
  let listBarang = [ ['Sepatu Sanji', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweeter Hinata', 175000, 1]
                   ];

  // Tulis kode jawabanmu disini
}

// TEST CASES
console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Sanji', amount: 2}, {name: 'Asrul Harahap', product: 'Sepatu Sanji', amount: 3}, {name: 'Ghazala Tisha', product: 'Sweeter Hinata', amount: 2}]));
//[ { product: 'Sepatu Sanji',
//   shoppers: [ 'Anis Fikriyyah', 'Asrul Harahap' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweeter Hinata',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Sanji', amount: 8}, {name: 'Asrul Harahap', product: 'Sepatu Sanji', amount: 10}, {name: 'Ghazala Tisha', product: 'Sweeter Hinata', amount: 1}, {name: 'Rifki Hilman', product: 'Baju Zoro', amount: 1}, {name: 'M. Lan', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Sanji',
//     shoppers: [ 'Anis Fikriyyah' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Rifki Hilman', 'M. Lan' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweeter Hinata',
//     shoppers: [ 'Ghazala Tisha' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Sanji',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweeter Hinata',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(hitungProfit([])); 
//[]
```

Kamu bisa kirim jawabannya dalam bentuk `.zip` pada link berikut.

https://fs23.formsite.com/TezH4N/30jsminggu1/index.html

![3 hours later](https://images2.memedroid.com/images/UPLOADED39/51fa964345f3e.jpeg)

### Function
Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan.
Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah
sebagai berikut:

```javascript
function nama_function(parameter1, parameter2, ...) {
  [Isi dari function berupa tindakan]
  return [kembalian];
}
```

### Cara Memanggil function
Untuk menjalankan function butuh dipanggil, caranya yaitu dengan menuliskan nama function dan diikuti tanda buka tutup kurung atau disebut invoke `()`.

```js
function hi() {
    console.log("Hai, asrul dev!")
}

hi() // panggil fuction hi
// hasil: Hai, asrul dev!
```

### Void Function
Void function adah function yang tidak melakukan return atau tidak memberikan kembalian terhadap yang memanggilnya.

```javascript
function hai() {
  console.log("halo!");
}

tampilkan();
```

### Return Function

```javascript
function munculkanAngkaDua() {
  return 2
}

let tampung = munculkanAngkaDua();
console.log(tampung)
// hasil: 2
```

### Function dengan parameter

```javascript
function kalikanDua(angka) {
  return angka * 2
}

let tampung = kalikanDua(5);
console.log(tampung)
// hasil: 10
```

### Parameter dengan nilai default

```javascript
function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5))
// hasil: 5

console.log(tampilkanAngka())
// hasil: 1
```

Anda juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

```javascript
let fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2, 4))
// hasil: 8
```

### CallBack
Function yang dilewatkan sebagai parameter disebut **callback**.
Perhatikan kode berikut.

```js
function sapa(nama) {
  alert('Hello ' + nama)
}

function prosesMenyapa(callback) {
  let nama = prompt('Namamu siapa?')
  callback(nama)
}

prosesMenyapa(sapa)

// hasil: Namamu siapa? ...
// Hello ...
```

Jelas terlihat bahwa pada function prosesMenyapa() mengirimkan function callback() sebagai parameter, dan inilah yang disebut dengan callback. Callback sering digunakan untuk data asyncronous sehingga data dapat ditunggu selesai baru lanjutkan program.


## Hari 8
Update: Minggu, 12 Januari 2020

### Module
Modul adalah cara untuk membagi-bagi kode menjadi beberapa file sehingga dapat dipakai ulang. Jika kita ibaratkan dengan penulis, penulis yang baik adalah penulis yang membagi-bagikab bukunya menjadi beberapa bab. Begitu juga dengan programmer yang membagi-bagi kodenya menjadi beberapa module.

Perhatikan penggunaan module berikut pada file `index.js` dan file `sapa.js`.

File `sapa.js`
```js
function halo(nama) {
  return `Halo, ${nama}`
}

function hi() {
  return "Hi, apa kabar?"
}

module.exports = {
  halo, hi
}
```

File `index.js`
```js
const sapa = require("./sapa.js")

console.log(sapa.halo("Asrul Dev"))
// hasil: Halo, Asrul Dev

console.log(sapa.hi())
// hasil: Hi, apa kabar?
```

Perhatikan gambar berikut!

![Module](https://raw.githubusercontent.com/AsrulLove/img-db/master/modulejs.png)

Kita telah belajar dasar-dasar javascript, sekarang saatnya kita menggunakan pelajaran dasar tersebut untuk membangun sebuah aplikasi. Saat ini kita akan belajar backend yaitu menggunakan `express js`

### Menyiapkan Proyek
Proyek yang akan kita buat harus diletakkan terpisah dengan file lain, sehingga dalam 1 folder tersebut hanya ada proyek kita saja.

Pada pembelajaran series ini saya akan membuat folder proyek dengan nama **express-30-js**. Setelah folder dibuat arahkan terminal ke folder tersebut dengan cara:

```bash
cd ~/Desktop/express-30-js
```

Folder proyek saya berada di Desktop, jika berbeda dengan saya silahkan disesuaikan. Sehingga penampakannya seperti berikut.

![folder proyek](https://raw.githubusercontent.com/AsrulLove/img-db/master/folderproyek.png)

Jika sudah diarahkan pada terminal, selanjutnya lakukan inisial proyek node js dengan perintah berikut.

```bash
npm init
```
![npm init](https://raw.githubusercontent.com/AsrulLove/img-db/master/initproyek.png)

Proses ini dilakukan untuk membuat sebuah file `package.json` yang berguna untuk mengontrol proyek node js. Berikut isi file `package.json` yang dihasilkan.

```json
{
  "name": "express-30",
  "version": "1.0.0",
  "description": "belajar expres bersama asrul.dev",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Asrul harahap",
  "license": "ISC"
}
```

### Install Express Js
Express js adalah framework javascript tepatnya pada NodeJs yang berfungsi untuk membantu pengembangan web dan mobile.

![expressjs](https://raw.githubusercontent.com/AsrulLove/img-db/master/expressjs.png)

Install express js dengan perintah berikut:

```bash
npm install express --save
```

Setelah diinstall kita dapat melihat perubahan pada file `package.json` menjadi seperti berikut.

```json
{
  "name": "express-30",
  "version": "1.0.0",
  "description": "belajar expres bersama asrul.dev",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Asrul harahap",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Membuat Web Server
Web server adalah perangkat lunak yang berfungsi sebagai penerima permintaan yang dikirimkan melalui browser kemudian memberikan tanggapan permintaan dalam bentuk halaman situs web atau lebih umumnya dalam dokumen HTML, tapi bisa juga berupa suara, gambar, json, xml atau lainnya.

Pada proyek buatlah file baru dengan nama `index.js` yang isinya seperti berikut ini.

```js
const express = require('express')
const app = express()

app.get('/', function(request, response) {
    response.send('Webserver asrul.dev')
})

app.listen(5000, function() {
    console.log(`Server running on http://localhost:5000`)
})

module.exports = app
```

### Menjalankan Web Server

Jalankan webserver pada terminal dengan perintah:

```bash
node index.js
```

Jelasnya perhatikan gambar berikut.

![Run server](https://raw.githubusercontent.com/AsrulLove/img-db/master/jalankanserver.png)

Sampai sejauh ini kita sudah belajar dan berhasil membuat webserver.

<!-- ## Hari 9
Update: Senin, 13 Januari 2020

### Install Insomnia REST
Insomnia rest berguna untuk menguji api atau membantu kita melihat hasil atau response dari web server yang akan dibuat sesuai endpoint.

![insomnia rest](https://raw.githubusercontent.com/AsrulLove/img-db/master/insomnia-rest.png)

Insomnia REST aja ing insomnia, kita mah... mungkin juga kali yah karena harus nulis series ini hehehe...

### Mengenal HTTP Method
HTTP method adalah method-method yang disediakan server sebagai sarana untuk melakukan request terhadap server.

Berikut adalah HTTP Method: 

Method | Penggunaan Express | Keterangan
:------:|--------|--------------
GET | app.get() | Method GET biasanya digunakan hanya mengambil data.
POST | app.post() | Method POST digunakan untuk mengirimkan entitas ke server yang ditentukan, sering menyebabkan perubahan pada keadaan atau efek samping pada server.
PUT | app.put() | Method PUT menggantikan data yang ada dengan data yang dikirimkan.
DELETE | app.delete() | Method DELETE untuk menghapus data yang ada.

Penjelasan HTTP method bisa dibaca di [sini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

![request dan response](https://raw.githubusercontent.com/AsrulLove/img-db/master/req-res.png)

### Request
Berdasarkan gambar dapat kita lihat bahwasanya kita atau user melakukan request terhadap server dengan method http melalui url atau alamat server tersebut.

HTTP method yang telah dijelaskan sebelumnya dipakai sebagai pengenal untuk mengirimkan permintaan terhadap server. Perhatikan contoh berikut.

File `index.js`

```js
const express = require('express')
const app = express()

app.get('/', function(request, response) {
    response.send('Webserver asrul.dev')
})

app.get('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

app.post('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

app.put('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

app.delete('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

app.listen(5000, function() {
    console.log(`Server running on http://localhost:5000`)
})

module.exports = app
```

Berikut hasil ketika diujicoba menggunakan Insomnia Rest.

![Uji API](https://raw.githubusercontent.com/AsrulLove/img-db/master/request.png)

Express telah menyediakan `function` atau `method` yang bertindak sebagai request, berikut beberapa daftar request yang disediakan oleh express:

Properti | Deskripsi
---------|----------
.app | Referensi object pada express
.cookies | Berisi informasi cookie yang dikirim, ini dapat digunakan jika menggunakan middleware `cookie-parser`
.hostname | Informasi hosname web server
.ip | Informasi IP server
.method | HTTP Methode yang digunakan
.params | Menampilkan informasi sesuai dengan nama parameter
.path | Nemampilkan informasi jalur URL
.protocol | Menampilkan protocol request
.query | Objek yang berisi informasi query dari request yang berlangsung
.secure | true jika request merupakan reques yang secure (digunakan pada HTTPS)
.signedCookies | Berisi signed cookies oleh request, dapat digunakan jika menggunakan middleware `cokie-parser`
.xhr | Bernilai true jika request adalah XMLHttpRequest
.body | Berisi data yang dituliskan pada body request
.header | Berisi data yang dituliskan pada header request
.baseUrl | Informasi pengalamatan utama web server
.originalUrl | Informasi pengalamatan request dilakukan

Contoh penggunaan `.query`

```
?nama=Asrul&umur=25
```

Tulis berikut pada code

```js
app.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.nama + ' dan umurnya ' + req.query.umur)
})
```

Penulisan query pada request diawali dengan tanda `?` setelah endpoint, dan jika ada beberapa query dipisahkan dengan tanda `&`. Query memiliki key dan value, key sebelah kiri dari tanda `=` dan value berada pada sebelah kanan tanda `=`. Perhatikan gambar berikut.

![penulisan query](https://raw.githubusercontent.com/AsrulLove/img-db/master/penulisan-query.png)

### Response
Kabalikan dari request, response adalah proses layanan yang diberikan server pada client yang melakukan request. Sama halnya dengan request, `function` atau `method` response sangat banyak yang disedikan oleh express.

Properti | Deskripsi
------|--------
.send() | Mengirim dan menampilkan data string ke user
.end() | Mengakhiri response server
.status() | Informasi HTTP status, seperti 200, 404, dll
.json() | Menjadikan response sebagai data JSON
.render() | Merender file sebagai HTML
.download() | Memberikan response sebagai file yang dapat diunduh
.type() | Menyetting tipe response server
.redirect() | Mengalihkan halaman ke halaman yang lain

contoh penggunaan `.redirect()`

```js
app.get('/profile', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})
```

Hasilnya berikut

![Video Redirect](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/redirect-response.gif).

Silahkan cobakan, jika ada kendala silahkan chat di group. -->

## Hari 10
Update: Selasa, 14 Januari 2020

### Router
Router adalah arah jalannya program, sehingga ketika ada request misal `/login` maka router akan mengarahkan server menjalankan controller melalui `/login` sehingga mendapatkan response.

Sebelumnya kita telah menggunakannya pada file `index.js` tetapi **Bagaimana jika kita memiliki route yang sangat banyak misal 3000 route?**. Maka kita perlu organisir rute kita agar lebih rapi dan mudah untuk dimaintenance.

Buatlah folder baru pada proyek kita dengan nama `routes` dan isinya file `router.js`. Pindahkan kode dari file `index.js` yang mengandung **rute** ke file `router.js` dan tambahkan kode untuk method `.Router()` sehingga seperti berikut.

![Folder Proyek](https://raw.githubusercontent.com/AsrulLove/img-db/master/folder-proyek.png)

File `router.js`
```js
const router = require('express').Router()

router.get('/', function(request, response) {
    response.send('Webserver asrul.dev')
})

router.get('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

router.post('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

router.put('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

router.delete('/cari-jodoh', function(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

router.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.nama + ' dan umurnya ' + req.query.umur)
})

router.get('/profile', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})

module.exports = router
```

Modifikasi file `index.js` menjadi seperti berikut.
```js
const express = require('express')
const app = express()
const router = require('./routes/router.js')

app.use('/', router)

app.listen(5000, function() {
    console.log(`Server running on http://localhost:5000`)
})

module.exports = app
```

Jika dilakukan ujicoba pada endpoint pada materi request dan response tidak ada perubahan, saya ucapkan selamat. :) Anda berhasil memisahkan file server dan router.

> Untuk pengelompokan rute lebih spesifik lagi seperti 1 file `user.router.js` hanya mengelola rute user saja, bisa Anda lakukan dengan hal yang sama. Mungkin ini akan menjadi salah satu challenge minggu depan.

### Controller
Controller adalah proses melakukan kontrol atau logika dan komputasi pada sebuah aplikasi sebelum dikirimkan ke user sebagai response. Disini kontrol masih bergabung dengan router. Mari kita buat sebuah folder dengan nama `controller` dan buat sebuah file dengan nama `jodoh.controller.js` sehingga hasilnya seperti berikut.

File `jodoh.controller.js`

```js
function getJodoh(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}

function setJodoh(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}

function updateJodoh(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}

function deleteJodoh(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}

module.exports = {
    getJodoh,
    setJodoh,
    updateJodoh,
    deleteJodoh,
}
```

Modifikasi file `router.js` menjadi seperti berikut.

```js
const router = require('express').Router()
const jodoh = require('../controller/jodoh.controller.js')

router.get('/', function(request, response) {
    response.send('Webserver asrul.dev')
})

router.get('/cari-jodoh', jodoh.getJodoh)

router.post('/cari-jodoh', jodoh.setJodoh)

router.put('/cari-jodoh', jodoh.updateJodoh)

router.delete('/cari-jodoh', jodoh.deleteJodoh)

router.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.nama + ' dan umurnya ' + req.query.umur)
})

router.get('/profile', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})

module.exports = router
```

Jika hasilnya tidak berubah, saya ucapkan sekali lagi selamat Anda berhasil. :)

## Hari 11
Update: Rabu, 15 Januari 2020
Model dan Sequelize

## Hari 12
Update: Kamis, 16 Januari 2020
CRUD

## Hari 13
Update: Jumat, 17 Januari 2020
AUTHENTICATE

## Hari 14
Update: Sabtu, 18 Januari 2020
CHALLANGE