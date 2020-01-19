---
id: 30harijs
title: 30 Hari Javascript 2
sidebar_label: 30 Hari Javascript 2
---

## Hari 12
Update: Kamis, 16 Januari 2020

Karena kita sudah memiliki model dan tabel user. Sekarang saatnya kita melakukan operasi CRUD, Create, Read, Update dan Delete.

Buatlah file route pada folder `routes` dengan nama **user.router.js** yang isinya seperti berikut.

```js
const router = require('express').Router()
const userController = require('../controller/user.controller.js')

router.post('/', userController.createUser)
router.get('/', userController.readUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
```

Buatlah file pada folder `controller` dengan nama **user.controller.js** yang isinya seperti berikut.
```js
const model = require('../models')

function createUser(req, res) {
}

function readUser(req, res) {
}

function updateUser(req, res) {
}

function deleteUser(req, res) {
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
}
```

Route yang akan kita buat adalah berikut.

Route | Method| Keterangan
------|-------|--------
/users | POST | Menambahkan atau create user baru
/users | GET | Mengambil data seluruh user
/users/:id | PUT | Mengubah data user sesuai `id`
/users/:id | DELETE | Menghapus data user sesuai `id`

### Create
Create yang berarti kita menambahkan data baru ke database. Untuk menambahkan data baru, silahkan modifikasi `function createUser` menjadi.

```js
function createUser(req, res) {
    model.User.create({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
```

`req.body` diambil dari data body sesuai dengan fieldnya yang dikirimkan oleh **insomnia** atau pada web nyata adalah dari form input. Ini akan berfungsi jika pada server kita beri middleware untuk menghandle nya.

> Middleware lebih jelas akan kita bahas selanjutnya.

Ubah file `index.js` sehingga menjadi seperti berikut.

```js
const express = require('express')
const app = express()
const router = require('./routes/router.js')

app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(5000, function() {
    console.log(`Server running on http://localhost:5000`)
})

module.exports = app
```

Dan hubungkan router user pada file `router.js`, sehingga file `router.js` menjadi seperti berikut.

```js
const router = require('express').Router()
const jodoh = require('../controller/jodoh.controller.js')

const user = require('./user.router.js')

router.use('/users', user)

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

Lakukan pengujian menggunakan insomnia dan gunakan form untuk mengentri data, perhatikan gambar.
![Create User Insomnia](https://raw.githubusercontent.com/AsrulLove/img-db/master/create.png)

Hasilnya akan tersimpan kedalam database.
![Database user](https://raw.githubusercontent.com/AsrulLove/img-db/master/db-create.png)

### Read
Read adalah membaca atau menarik data dari database. Langsung saja ubah `function readUser` menjadi seperti berikut.

```js
function readUser(req, res) {
    model.User.findAll()
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
```

Sebelumnya saya telah menambahkan data **Anis Fikriyyah**. Sekarang silahkan kita uji menggunakan insomnia.

![read](https://raw.githubusercontent.com/AsrulLove/img-db/master/read.png)

### Update
Update adalah mengubah data yang sudah tersimpan dengan data yang baru.

Ubah `function updateUser` menjadi seperti berikut.
```js
function updateUser(req, res) {
    model.User.update({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary
    }, {
        where: {
          id: req.params.id
        }
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
```

Terlihat bahwa sebelumnya **Full Stack Dev** telah berubah menjadi **React Developer**, lihat gambar berikut.

![update](https://raw.githubusercontent.com/AsrulLove/img-db/master/update.png)

### Delete
Untuk menghapus data maka ubah `function deleteUser` sehingga menjadi berikut.

```js
function deleteUser(req, res) {
    model.User.destroy({
        where: {
          id: req.params.id
        }
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
```

Hasilnya akan seperti berikut.

![Delete](https://raw.githubusercontent.com/AsrulLove/img-db/master/delete.png)

Kode lengkap materi diatas bisa download di [sini](https://github.com/asruldev/expres-30-js/tree/master)


## Hari 13
Update: Jumat, 17 Januari 2020

Senangnya kita telah menyelesaikan CRUD pada database, sekarang yang kita inginkan adalah data yang aman, yang berhak yang boleh mengubah atau menghapus data tersebut.

### Authentication
Pada tabel `user` kita telah memiliki beberapa kolom yaitu id, name, label, picture, email, phone, website, summary tetapi untuk melakukan login kita butuh setidaknya email dan password, karena itu kita akan menambahkan kolom `password`.

#### Tambah Kolom Sequelize
Untuk menambahkan kolom pada sequelize, lakukan peintah berikut.

```bash
sequelize migration:create --name add_column_password
```

Sehingga menghasilkan file migrasi, seperti gambar berikut.

![Migrasi Kolom](https://raw.githubusercontent.com/AsrulLove/img-db/master/migrasi-column.png)

Ubah isi file migrasi tersebut sehingga menjadi seperti berikut.

```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'password',
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'password'
    );
  }
};
```

Kemudian migrasi tersebut kita terapkan ke database dengan perintah berikut.

```bash
sequelize db:migrate
```

![Setelah Add Column](https://raw.githubusercontent.com/AsrulLove/img-db/master/tambah-kolom.png)

Jika kolom telah kita tambahkan, jangan lupa ubah model agar sesuai dengan tabel. Ubah file `user.js` sehingga menjadi seperti berikut.

```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    picture: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    summary: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
```

### Register User
Proses register merupakan proses untuk mendaftarkan identitas yang memiliki kunci untuk masuk kembali. Data yang bersifat sensitif harus kita lakukan encripsi. Pada kasus ini kita butuh library `bcryptjs` yang berfungsi untuk mengencripsi data. Intall bcryptjs dengan cara.

```bash
npm i bcryptjs
```

Pastikan pada file `package.json`, bcryptjs telah tersedia.

Ubah `function createUser` pada file `user.controller.js` dan tambahkan bcryptjs.

```js
const model = require('../models')
const bcrypt = require('bcryptjs')

function createUser(req, res) {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(req.body.password, salt)

    model.User.create({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary,
        password: hash,
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
```

Perhatikan hasil register pada insomnia.

![Register](https://raw.githubusercontent.com/AsrulLove/img-db/master/bycript.png)

### Token User
Pada sebuah aplikasi setelah seseorang login maka dibutuhkan token sebagai credential terpercaya untuk mengelola data, misal update atau mungkin hapus.

Kalau dicontohkan ke kehidupan nyata email dan password adalah tiket untuk naik pesawat yang ditukarkan saat check in hingga mendapatkan boarding pass. Boarding pass inilah yang kita gunakan untuk masuk ke pesawat. Sama halnya dengan token, token didapatkan setelah login dilakukan, sehingga token dikirim bersamaan dengan akses pada server lebih dalam.

Untuk membuat token kita menggunakan library `jsonwebtoken`, install dengan cara berikut.

```bash
npm i jsonwebtoken
```

Tambahkan `function loginUser` pada file `user.controller.js`, yang isinya seperti berikut.

```js
const model = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function loginUser(req, res) {
    const email = req.body.email
    const password = req.body.password

    model.User.findOne({
        where: {
          email: email
        }
    })
    .then( function(result) {
        let passwordHash = result.password
        let checkPassword = bcrypt.compareSync(password, passwordHash);
        
        if(checkPassword) {
            res.json({
                message: "Berhasil Login",
                token: jwt.sign({ id: result.id }, 'asrul-dev')
            })
        } else {
            res.json({
                message: "Gagal Login",
            })
        }
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
```

Jangan lupa tambahkan route pada file `user.route.js`, sehingga menjadi seperti berikut.

```js
const router = require('express').Router()
const userController = require('../controller/user.controller.js')

router.post('/login', userController.loginUser)
router.post('/', userController.createUser)
router.get('/', userController.readUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
```

Tes menggunakan insomia.
![Hasil Token](https://raw.githubusercontent.com/AsrulLove/img-db/master/dapat-token.png)

Akhirnya berhasil juga, tapi tidak sampai disitu kita harus melakukan autorize, yaitu memberi hak akses terhadap aktifitas data. Seperti update dan delete pada kasus ini hanya boleh dilakukan orang yang memiliki akun tersebut.

### Authorize
Penggunaan authorize kita harus membuat middleware, middleware adalah perantara route dan controller, sehingga ketika melewati route menuju controller akan dilakukan pemeriksaan, apakah memiliki autorize atau tidak.

Buat file baru dengan nama `auth.js` dalam folder `middlewares`, yang isinya berikut.

```js
const jwt = require('jsonwebtoken')
const model = require('../models')

module.exports = (req, res, next) => {
    let token = req.headers.token
    if(token) {
        let verify = jwt.verify(token, 'asrul-dev')

        model.User.findOne({
            where: {
                id: verify.id
            }
        })
        .then( function(result) {
            if(result) {
                req.decoded = verify
                next()
            } else {
                res.status(401).json({
                    "message": "Kamu tak punya akses"
                })
            }
        })
        .catch( function(error) {
            res.json({error: error})
        })
    } else {
        res.status(401).json({
            "message": "Silahkan Login Dahulu"
        })
    }
}
```

Kemudian ubah route `user.router.js` menjadi seperti berikut.

```js
const router = require('express').Router()
const userController = require('../controller/user.controller.js')
const auth = require('../middlewares/auth.js')

router.post('/login', userController.loginUser)
router.post('/', userController.createUser)
router.get('/', userController.readUser)
router.put('/:id', auth, userController.updateUser)
router.delete('/:id', auth, userController.deleteUser)

module.exports = router
```

Pada saat update dan delete, jika yang mengakses bukan yang login maka data dilarang diubah atau dihapus. Untuk melakukan itu ubah `function updateUser` dan `function deleteUser` menjadi seperti berikut. 

```js
function updateUser(req, res) {
    let decodedId =  req.decoded.id

    if(Number(decodedId) === Number(req.params.id)) {
        model.User.update({
            name: req.body.name,
            label: req.body.label,
            picture: req.body.picture,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
            summary: req.body.summary
        }, {
            where: {
              id: req.params.id
            }
        })
        .then( function(result) {
            res.json(result)
        })
        .catch( function(error) {
            res.json({error: error})
        })
    } else {
        res.json({
            message: "Ini bukan data Anda"
        })
    }
}

function deleteUser(req, res) {
    let decodedId =  req.decoded.id

    if(Number(decodedId) === Number(req.params.id)) {
        model.User.destroy({
            where: {
              id: req.params.id
            }
        })
        .then( function(result) {
            res.json(result)
        })
        .catch( function(error) {
            res.json({error: error})
        })
    } else {
        res.json({
            message: "Ini bukan data Anda"
        })
    }
}
```

Kita uji pada insomnia dengan skenario, token adalah milik user dengan id 3, tetapi yang akan dihapus adalah user id 4.
![Gagal Hapus](https://raw.githubusercontent.com/AsrulLove/img-db/master/gagal-hapus.png)

Untuk kode lengkap silahkan lihat [disini](https://github.com/asruldev/expres-30-js/tree/1-auth)


## Hari 14
Update: Sabtu, 18 Januari 2020

### Latihan

Latihan lagi yah :)

```js
const users = [
  {
    "user": "king David Martins",
    "age": 21,
    "active": true
  },
  {
    "user": "ashley",
    "age": 23,
    "active": false
  },
  {
    "user": "alex",
    "age": 43,
    "active": true
  },
  {
    "user": "john",
    "age": 32,
    "active": true
  },
  {
    "user": "chris",
    "age": 21,
    "active": false
  },
  {
    "user": "tomlin",
    "age": 32,
    "active": false
  },
  {
    "user": "vernon",
    "age": 34,
    "active": true
  },
  {
    "user": "Boni",
    "age": 43,
    "active": true
  },
  {
    "user": "mattt",
    "age": 32,
    "active": true
  },
  {
    "user": "bridget",
    "age": 23,
    "active": false
  },
  {
    "user": "kyle",
    "age": 65,
    "active": true
  },
  {
    "user": "julia",
    "age": 22,
    "active": true
  },
  {
    "user": "jake",
    "age": 23,
    "active": false
  }
]
```

1. Jika active adalah sedang online, carilah siapa saja user yang sedang online!

2. Siapa saja user yang berusia dibawah 25 tahun?

3. Berdasarkan data diatas, buatlah CRUD untuk menyimpan user, age, dan active menggunakan express dan mysql!

4. Buat fitur search yang dapat mencari usia, nama, dan sedang online, dengan endpoint seperi `/users?q=asrul`! 

### Deploy Server
Saatnya kita awankan yang telah kita buat 1 minggu belakangan ini, sehingga ini berguna nanti untuk materi web react js dan mobile react native.

### Mysql Online

Pertama kita butuh server database MySQL online. Setelah lelah mencari, saya temukan  mysql free dan lumayan cocok untuk tahap belajar di https://remotemysql.com, langsung daftar seperti gambar berikut.

![MySql Online](https://raw.githubusercontent.com/AsrulLove/img-db/master/register-mysql-online.png)

Setelah selesai daftar silahkan konfirmasi pendaftaran yang dikirimkan via email. Setelah selesai silahkan login untuk membuat database.

Create database dan sesuaikan `config.json` pada proyek dengan yang didapatkan dari remotemysql.com. Ini gambar PHPmyadmin online.

```js
{
  "development": {
    "username": "Z51nuZUx5o",
    "password": "rahasia",
    "database": "Z51nuZUx5o",
    "host": "remotemysql.com",
    "dialect": "mysql",
    "port": 3306,
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "Z51nuZUx5o",
    "password": "rahasia",
    "database": "Z51nuZUx5o",
    "host": "remotemysql.com",
    "dialect": "mysql",
    "port": 3306,
    "operatorsAliases": false
  }
}
```

Lakukan migrate seperti sebelumnya.
```bash
sequelize db:migrate
```

Sehingga hasilnya seperti berikut.

![PHP My Admin](https://raw.githubusercontent.com/AsrulLove/img-db/master/pma-online.png)

### Heroku

Download terlebih dahulu heroku, sesuaikan dengan OS yang Anda pakai, seperti gambar berikut.

![Heroku Download](https://raw.githubusercontent.com/AsrulLove/img-db/master/heroku-install.png)

Setelah download lakukan install, (contoh pada ubuntu)

![Heroku Install](https://raw.githubusercontent.com/AsrulLove/img-db/master/install-heroku.png)

Jika heroku berhasil diinstall maka tampilannya seperti berikut.
![Heroku done](https://raw.githubusercontent.com/AsrulLove/img-db/master/heroku-berhasil.png)

Maka proses selanjutnya silahkan login jika sudah memiliki akun heroku, jika belum silahkan daftar dahulu.

```bash
heroku login
```
![Heroku Login](https://raw.githubusercontent.com/AsrulLove/img-db/master/login-done.png)

Jika login berhasil, selanjutnya pada proyek lakukan perintah berikut.

``bash
heroku create
```

![Heroku Login](https://raw.githubusercontent.com/AsrulLove/img-db/master/heroku-create.png)

Jika heroku create telah berhasil, maka selanjutnya buat file baru dengan nama `procfile` yang isinya seperti berikut.

```bash
web: node index.js
```

File tersebut digunakan oleh heroku untuk menjalankan file server.

Install cors dengan cara.
```bash
npm i cors
```

Lakukan sedikit modifikasi pada file `index.js` dengan menginstall cors sebagai middleware yang memperbolehkan diakses dengan beda alamat host dan tambahkan juga port.

```js
const express = require('express')
const app = express()
const router = require('./routes/router.js')
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`)
})

module.exports = app
```

Tambahkan file `.gitignore` untuk membatasi upload file git ke heroku, disini kita butuh mengignore folder `node_modules` sehingga isi file `.gitignore` sebagai berikut

Ubah juga file package.jso dengan menambahkan script start, perhatikan gambar berikut.

![npm start](https://raw.githubusercontent.com/AsrulLove/img-db/master/node-start.png)

```
node_modules
```

Kemudian gunakan git untuk deploy dengan cara, berikut.

```bash
git init
```

Buka heroku secara online dan cek git yang diberikan oleh heroku, lalu pada terminal lakukan perintah remote git tersebut.

> Contoh pada saya, ini sesuaikan dengan milik Anda.

```bash
heroku git:remote -a warm-refuge-26108
```

```bash
git add .
```

```bash
git commit -m "Deploy dengan bismillah"
```

```bash
git push heroku master
```

Tunggu proses sebentar hingga deploy selesai, perhatikan gambar.

![Heroku deploy](https://raw.githubusercontent.com/AsrulLove/img-db/master/git-puh-heroku.png)

Jika sudah selesai, buka dengan cara perintah berikut.

```bash
heroku open
```

![Heroku Open](https://raw.githubusercontent.com/AsrulLove/img-db/master/open-web.png)

Selanjutnya yok uji coba pada insomia, jika berhasil artinya deploy kita sukses.

![Insomia Check](https://raw.githubusercontent.com/AsrulLove/img-db/master/uji-online.png)

## Hari 15
Update: Minggu, 19 Januari 2020

### Pengenalan ES6
ES6 dan + adalah Javascript versi modern kalo Asrul sendiri yang ngomong karena fiturnya aduhai, jatuh cinta banget lah. Maaf kalau udah mulai lebay.

### `var`, `const` dan `let`
Awalnya javascript hanya punya var sebagai deklarasi dari sebuat variable.

```js
var nama = "Asrul Harahap"
```

Tapi sekarang telah ditambahkan `const` dan `let`, bertanya, apasih bedanya?

- var mencakup fungsi variable ke lingkup "global" jika berada di tingkat atas. Link referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

- const adalah untuk variabel yang tidak ingin Anda diubah nilainya (read only). Link referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

- let adalah untuk variable yang bisa diubah nilainya kembali. Link referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

### Arrow Function
Perhatikan penulisan function dengan arrow function.

#### Contoh 1
Function Normal

```js
function panggilAku() {
    return "Asrul Harahap"
}
```

Function dengan Arrow

```js
const panggilAku = () => "Asrul Harahap"
```

#### Contoh 2
Function Normal

```js
function banyakArgumen(arg1, arg2, arg...) {
    return [arg1, arg2, arg...]
}
```

Function dengan Arrow

```js
const banyakArgumen = (arg1, arg2, arg...) => {
  return [arg1, arg2, arg...]
}
```

### Helper ES6
Beberapa helper yang dipakai untuk membantu koding Anda pada ES6, yaitu: map, filter, find, dll. Untuk lebih jelas saya telah menulisnya sebelumnya pad postingan berikut. [Baca Postingan](https://asrul.dev/blog/memahami-map-filter-dan-reduce)

### Module

Perhatikan penggunaan module ES6 berikut pada file `index.js` dan file `sapa.js`.

File `sapa.js`
```js
export const halo = (nama) => {
  return `Halo, ${nama}`
}

export const hi = () => {
  return "Hi, apa kabar?"
}
```

File `index.js`
```js
import { halo, hi } from "./sapa.js"
console.log(halo("Asrul Dev"))
// hasil: Halo, Asrul Dev

console.log(hi())
// hasil: Hi, apa kabar?
```

### Dasar-dasar DOM
DOM merupakan singkatan dari Data Object Model yang digunakan untuk memanipulasi apa saja yang ada dalam structur HTML, memanipulasi yang dimaksud berupa menambah, mengubah, atau menghapus elemen dalam HTML.

DOM akan dimuat oleh browser ketika semua file html sudah selesai dijalankan.

> Ini materi tambahan sebagai penguat masuk React Js. Buat file dengan `.html` untuk uji coba materi ini.

### Selector DOM

#### Berdasarkan ID - `getElementById("namaId")`

```html
<div id="boxs">
</div>

<script>
  document.getElementById("boxs").innerHTML = "Halo DOM, ayo belajar"
</script>
```

#### Berdasarkan Class `getElementsByClassName("namaClass")`

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>

<script>
  document.getElementByClassName("box")[0].innerHTML = "Javascript"
  document.getElementByClassName("box")[1].innerHTML = "PHP"
  document.getElementByClassName("box")[2].innerHTML = "Python"
</script>
```

#### Berdasarkan Tag `getElementsByTagName("namaTag")`
```html
<p> Daftar Warna </p>
<ul>
  <li></li>
  <li></li>
</ul>
<script>
  document.getElementByTagName("li")[0].innerHTML = "Merah"
  document.getElementByTagName("li")[1].innerHTML = "Putih"
</script>
```

Contoh mengambil data dari form input

```html
<form onsubmit="submitForm()">
    <label>
        Nama: <br />
        <input type="text" id="name">
    </label>
    <button type="submit">Cek Umur</button>
</form>

<script>
    function submitForm() {
        var name = document.getElementById('name').value;

        alert( "Halo " + name)
    }
</script>
```

### Membuat element dan menambah attribute
Dengan DOM, kamu dapat membuat elemen baru menggunakan `createElement('namaElement')`, kamu juga dapat menambahkan attribute pada elemen tersebut dengan  `setAttribute('nama attribute', 'nilai attribute')`.

Untuk memasukkan elemen ke element lain dengan kode berikut `namaInduk.appendChild(namaAnak)`

Perhatikan dan cobakan contoh berikut.

```html
<div id="lembar-kerja"></div>

<script>
    var img = document.createElement('img');
    var lembarKerja = document.getElementById('lembar-kerja')

    img.setAttribute('src', 'https://avatars2.githubusercontent.com/u/15111402?s=460&v=4')
    img.setAttribute('width', '200')
    img.setAttribute('height', '200')
    
    lembarKerja.appendChild(img)
</script>
```

### Mengedit Element

Mengganti elemen pada html

```html
<div id="place">
    <h2 id="old">Old Text<h2>
</div>
<script>
    var newEl = document.createChild('h3')
    var text = document.createTextNode('New Text')
    newEl.appendChild('text')

    var old = document.getElementById('old')
    var place = document.getElementById('place')

    place.replaceChild(newEl, old)
</script>
```

### Menghapus Element

Menghapus elemen pada html

```html
<div id="place">
    <h2 id="ada">ada Text<h2>
    <h2 id="ilang">Ilang Text<h2>
</div>
<script>
    var ilang = document.getElementById('ilang')
    var place = document.getElementById('place')
    place.removeChild(ilang)
</script>
```

### Membuat element dan menambah attribute
Dengan DOM, kamu dapat membuat elemen dengan event yang akan diset dengan 3 cara:

#### Pada elemennya sendiri

```html
<button onclick="panggilFungsi()">Klik</button>
<script>
    function () {
        alert(input.value)
    }
</script>
```

#### Beri event pada selector

```html
<input type="text" id="inputNama">
<script>
    var input = document.getElementById('inputNama')
    input.onclick = function() {
        alert(input.value)
    }
</script>
```

#### Dengan Menambahkan `addEventListenert('namaevent', fungsiYangDijalankan)`
```html
<input type="text" id="inputNama">
<script>
    var input = document.getElementById('inputNama')
    input.addEventListener('click', function() {
        alert(input.value)
    })
</script>
```

No. | Nama Event | Keterangan
:----:|---------|-----------
1.| click | Ketika dlick bisa juga dipakai dengan `onclick`
2.| keyup | Ketika keyboard dilepas
3.| keydown | Ketika Keyboard ditekan
4.| mouseover | Ketika mouse melewati objek
5.| mouseenter | Ketika mouse ditekan
6.| mouseup | Ketika klik mouse dilepas
7.| dll |...

Perhatikan dan cobakan contoh berikut.

```html
<div id="lembar-kerja"></div>

<script>
    var img = document.createElement('img');
    var lembarKerja = document.getElementById('lembar-kerja')

    img.setAttribute('src', 'https://avatars2.githubusercontent.com/u/15111402?s=460&v=4')
    img.setAttribute('width', '200')
    img.setAttribute('height', '200')
    
    lembarKerja.appendChild(img)

    img.addEventListener('mouseenter', function() {
        alert('Kamu menyentuh gambar orang ganteng itu')
    })
</script>
```

## Hari 16
Update: Senin, 20 Januari 2020

### React Js

Reactjs adalah library javascript untuk membangun UI (User Interface) pada web. Sekarang ini banyak sekali perusahaan-perusahaan yang mencari developer yang bisa menguasai React, sehingga kita belajar react akan menjadi investasi yang baik untuk karir di TI. React sendiri sangatlah populer, mari lihat repositori react berikut.

![React Repository](https://raw.githubusercontent.com/AsrulLove/img-db/master/react-js/react-repo.png)

React itu sendiri berbasis komponen, misal navbar 1 komponen, tombol 1 komponen, avatar 1 komponen, yang mana komponen tersebut bisa dipakai ulang.

![ilustrasi komponen](https://raw.githubusercontent.com/AsrulLove/img-db/master/react-js/ilustrasi-komponen.png)


### Install React Js
Langsung saja, untuk install react kita gunakan Create React App saja sesuai saran dari reactjs sendiri.

![CRA Rekomendation](https://raw.githubusercontent.com/AsrulLove/img-db/master/react-js/cra-saran.png)

Mari install reactjs dengan cra, disini contoh aplikasi yang akan kita buat adalah `minibiojs`. Sehingga perintah pada terminal adalah berikut.

```bash
npx create-react-app minibiojs
```

Berikut memperlihatkan struktur direktori dan halaman web aktual dari aplikasi CRA yang baru saja dibuat.

```bash
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock
```

Cara menjalankan proyek `minibiojs` yang telah kita install dengan perintah berikut.

```bash
npm start
```

> Ini dilakukan jika terminal udah diarahkan kedalam folder proyek `minibiojs`.

### WTF JSX
Udah belajar javascript, terus belajar ES6 dan sekarang pas mau belajar React Js harus belajar JSX juga. Sabar, JSX atau Javascript Extension bukan untuk mempersulit Anda, malah membantu untuk mempermudah dalam koding js yang terlihat seperti html.

Lihat perbedaan menggunakan JSX dan tidak pada komponen berikut.

Dengan JSX
```jsx
class SapaAsrul extends React.Component {
  render() {
    return (
      <h1 className='judul'>Selamat Datang di Asrul Dev</h1>
    );
  }
}
```

dan tanpa JSX
```js
class SapaAsrul extends React.Component {
  render() {
    return (
      React.createElement(
        'h1',
        {className: 'judul'},
        'Selamat Datang di Asrul Dev'
      )
    );
  }
}
```

Berikut penjelasan [JSX](https://reactjs.org/docs/introducing-jsx.html)

### Component

Component dalam react dapat dibuat dengan 2 cara, yaitu dengan membuat `class` atau dengan membuat `function`. Tapi apa bedanya  `class` dengan `function`, pasti memiliki kelebihan masing-masing.

#### 1. Dengan class
Membuat component dengan `class` pada react disebut sebagai `component state full` karena dengan `class` Anda bisa membuat `state` sesuai kebutuhan. 

```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  render() {
    return (
      <div>Wellcome Asrul</div>
    )
  }
}

export default App
```

#### 2. Dengan function (dibahas pada materi Hooks)
Membuat component dengan `function` pada react disebut sebagai `component state less` karena dengan `function` Anda tidak bisa membuat `state` tetapi bisa menerima `props` saja, (state jika meggunakan hook). 

```javascript
import React from 'react'

const Hello = ({ name }) => (<div>Hello, {name}!</div>);

export default Hello
```

Lantas bagai mana cara mengaksesnya?
Okay, cara mengakses komponen adalah dengan menjadikannya sebagai tag HTML, contoh component Hello akan diakses menjadi `<Hello />` atau `<Hello></Hello>`

> Perlu diingat bahwa component harus diawali dengan huruf kapital sehingga sistem dapat membedakan code HTML dan kode Component

### Props
Props adalah cara component mengoper data yang berasal dari *parent* ke *child* dengan kata lain garis lurus kebawah.

```javascript
<Hello name="Asrul">
```
Dari component diatas misal sebuah component `Hello` dengan propertu **name** pada kode diatas, maka itu akan menurunkan data pada child `Hello` dengan props dengan `key` **name** dan `value` **Asrul**

#### Mengakses Props
Pada induk telah mengover data dengan key **name** dan value **Asrul**, maka pada child akan bisa diakses dengan cara:

```javascript
import React from 'react'

const Hello = ({ props }) => (<div>Hello, {props.name}!</div>);

export default Hello
```

### State
State adalah tempat Anda menyimpan data pada component dan hanya bisa diakses oleh component itu sendiri secara default, tetapi bisa diturunkan pada child jika menggunkan props.

```javascript
state = {
  name: ''
}
```

#### Mengubah Nilai State
Untuk mengubah nilai state telah diberikan method dari react menggunakan `setState`, berikut cara penggunaannya.
```javascript
this.setSetate({
  name: 'Asrul'
}, callback)
```

#### Mengakses State
Anda telah mengetahui bagaimana cara mengubah nilai state, kemudian pada tahap ini, Anda akan membutuhkan cara mengakses state, hampir mirip dengan props, berikut caranya.
```javascript
import React, { Component } from 'react'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  componentDidMount() {
    this.setState({
      name: 'Asrul H',
    })
  }
  
  render() {
    return (
      <div>Wellcome {this.state.name}</div>
    )
  }
}

export default Hello
```

## Hari 17
Update: Selasa, 21 Januari 2020
Routing

## Hari 18
Update: Rabu, 22 Januari 2020
Redux

## Hari 19
Update: Kamis, 23 Januari 2020
Hooks

## Hari 20
Update: Jumat, 24 Januari 2020
CRUD API

## Hari 21
Update: Sabtu, 25 Januari 2020
Latihan dan Deploy

## Hari 22
Update: Minggu, 26 Januari 2020
Persiapan Mobile

## Hari 23
Update: Senin, 27 Januari 2020
Install dan Pengenalan React Native

## Hari 24
Update: Selasa, 28 Januari 2020
Membuat Komponen

## Hari 25
Update: Rabu, 29 Januari 2020
Navigation

## Hari 26
Update: Kamis, 30 Januari 2020
Auth

## Hari 27
Update: Jumat, 31 Januari 2020
CRUD

## Hari 28
Update: Sabtu, 1 Fabruari 2020
Latihan

## Hari 29
Update: Minggu, 2 Februari 2020
Publish Play Store

## Hari 30
Update: Senin, 3 Februari 2020
Hari Misteri