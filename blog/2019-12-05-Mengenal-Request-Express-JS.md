---
id: mengenal-request-express-js
title: Mengenal Request Express JS
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, backend, express]
---

Express telah menyediakan `function` yang bertindak sebagai request, berikut beberapa daftar request yang disediakan oleh express:

<!--truncate-->

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
?name=Asrul
```

Tulis berikut pada code

```js
app.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.name)
})
```

jika dijalankan akan menghasilkan seperti berikut ini

![Name Asrul](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/name-asrul.png)

```
?name=Asrul
```

Tulis berikut pada code

```js
app.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.name + ' dan umurnya ' + req.query.age)
})
```

jika dijalankan akan menghasilkan seperti berikut ini

![Name Asrul](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/name-asrul-age.png)

