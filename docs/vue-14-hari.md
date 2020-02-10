---
id: vue-14-hari
title: Vue 14 Hari 1
sidebar_label: Vue 14 Hari 1
---

## Hari 1

Rilis: Senin, 03 Februari 2020

### Pengantar
Semamat bagi teman-teman yang memutuskan untuk mengikuti series pembelajaran **Vue 14 hari** ini, Pada series ini Anda akan membahas framework javascript yang cukup populer yaitu **VUE JS** dari dasar.

Dan pada akhir series ini Anda akan diminta untuk membuat sebuah proyek akhir, yang dikirimkan ke email [talkasrul@gmail.com](mailto:talkasrul@gmail.com). Ini hanya menguji tingkat keseriusan anda dalam mengikuti pembelajaran saja.

Untuk diskusi saya telah siapkan group [Telegram](https://t.me/joinchat/KEE0phS9ZCuR8O7a8F31qA)

Jika Anda suka tulisan saya dan ingin berdonasi, dipersilahkan.

> BCA **5325 058851**

### Persyaratan
Untuk mengikuti series ini Anda perlu:

1. Motivasi yang tinggi
2. Laptop dengan OS apasaja (rekomendasi: Linux)
3. Koneksi Internet
4. Browser (rekomendasi: Google Chrome)
5. Teks Editor (rekomendasi: VS Code)
6. Kopi dan Snek (optional)

### Persiapan
Bisa baca persiapan apa saja yang diperlukan di [link ini](https://asrul.dev/docs/30daysweb#persiapan)

### Install Vue Js
Pada serie ini kita akan membahas Vue dengan CLI, jadi pastikan Node yang terinstall di laptop Anda adalah versi 8+.

```bash
npm i -g @vue/cli
```

Untuk memastiken telah terinstall dengan baik, silahkan cek versi yang terinstall dengan perintah berikut.

```bash
vue --version
```

![Vue cli version](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-versi.png)

### Create Proyek
Vue cli telah menyediakan fitur ui untuk mempermudah dalam memanajemen proyek vue. Cara ngektifkannya dengan perintah berikut.

```bash
vue ui
```

![Vue UI](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-ui.png)

> Dengan vue ui, Anda lebih mudah membuat proyek baru dan mengistalkan package-package pendukung lainnya seperti lodash, axios, dll.

Pada vue ui, pilih create kemudian pilih lokasi proyek akan dibuat dan beri nama proyek, lalu pilih next untuk lanjut dan pilih default preset untuk konfigurasi menggunakan webpack dan bebel.

![Halaman Vue Create](https://raw.githubusercontent.com/AsrulLove/img-db/master/vui-ui-create.png)

Jalankan dari menu task dan pilih run task, untuk jelasnya perhatikan gambar berikut.

![Running Vue](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-running.png)

Jika Anda lebih menyukai dengan terminal saja, silahkan masuk create proyek dengan cara berikut.

```bash
vue create vue-14-har
```

Kemudian pilih preset default, ikuti intruksi dan jika create proyek berhasil silahkan masuk ke folder proyek dan jalankan perintah berikut.

```bash
npm run serve
```

![Vue Serve](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-serve.png)

Hasilnya akan seperti berikut.
![Vue First Install](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-first-install.png)

### Struktur Vue

Berikut adalah struktur folder vue yang telah dibuat dari hasil `vue create ...` sebelumnya. File vue dengan ekstensi `.vue` dan tempat kerja berada didalam folder `src`.

```bash
.
├── babel.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    └── main.js
```

## Hari 2

Rilis: Selasa, 04 Februari 2020

### Hello Asrul Dev
Mari kita kenali kode vue terlebih dahulu dengan menganalisa kode berikut.

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

Berdasarkan kode tersebut terlihat bahwa vue memiliki 3 bagian kode yang tersusun dari:

1. template dengan html, 
2. script dengan javascript, dan
3. style dengan css

Kode vue sangat tersusun dengan rapi karena sudah dipisah sesuai fungsinya masing-masing. Jika lebih teliti lagi terlihat bahwa penghubung template dengan script ada pada id yang ada pada tag `<div id="app">` dan pada kode `export default { name: 'app' }`.

Sekarang mari kita tampilkan `Hello Asrul Dev` dengan mengubah kode pada file `App.vue`, menjadi:

```html
<template>
  <div id="app">
    <h1>Hello Asrul Dev</h1>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
h1 {
  color: red;
}
</style>
```

Maka hasilnya akan seperti berikut.

![Hello Asrul Dev - vue](https://raw.githubusercontent.com/AsrulLove/img-db/master/hello-vue.png)

### State Vue
Pada vue untuk mendeklarasikan state ditulis pada script dengan function data yang me`return` state itu sendiri. Perhatikan contoh state nama dan alamat berikut.

```js
export default {
  name: 'app',
  data() {
    return {
      nama: "Asrul harahap",
      alamat: "Jakarta Selatan"
    }
  }
}
```

### Templating
Vue memiliki templating untuk menampilkan hasil logika dari javascript ke html (template). Berikut templating pada vue.

#### Menampilkan Teks
Untuk menampilkan teks pada vue dengan menggunakan double `kumis ajaib` (maaf ini istilah dari kamus saya saja) `{{ }}`.

```html
<template>
  <div id="app">
    <h1>Hello {{ nama }}, masih tinggal di {{ alamat }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      nama: "Asrul harahap",
      alamat: "Jakarta Selatan"
    }
  }
}
</script>
```

![Teks Vue](https://raw.githubusercontent.com/AsrulLove/img-db/master/text-vue.png)

#### Html Raw
Terkadang kita butuh untuk melakukan render dari data html, ini biasanya terjadi ketika form untuk input berupa **WYSWYG** (akan dibahas pada materi lainnya).

```html
<template>
  <div id="app">
    <div>{{ alamat }}</div>
    <hr />
    <div v-html="alamat"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      nama: "Asrul harahap",
      alamat: `<s>Medan</s> <b>Jakarta Selatan</b>`
    }
  }
}
</script>
```

Hasilnya akan seperti berikut.

![V-HTML](https://raw.githubusercontent.com/AsrulLove/img-db/master/v-html.png)

Masih ada banyak templating vue seperti v-if, js expression dll, nanti akan dibahas dengan kasus yang relevan.

## Hari 3

Rilis: Rabu, 05 Februari 2020

### Component
Component Vue adalah potongan-potongan kecil yang dari kode vue yang dapat dipakai ulang, misal component `Sapa.vue`.

#### Cara membuat Component
Cara membuat component harus menyertakan export sehingga dapat dipanggil dari halaman lain.

```html
<template>
  <div>
    <h1>Hello Asrul dev</h1>
  </div>
</template>

<script>
export default {
  name: 'Sapa'
}
</script>
```

#### Cara menggunakan Component
Untuk menggunakan component yang sudah ada harus dilakukan import terlebih dahulu dan didaftarkan pada key `components` lalu dapat dijalankan sebagai tag html. Perhatikan kode berikut.

```html
<template>
  <div id="app">
    <div>{{ alamat }}</div>
    <hr />
    <div v-html="alamat"></div>
    
    <Sapa />
    <Sapa />
    <Sapa />
    <Sapa />
  </div>
</template>

<script>
import Sapa from '@/components/Sapa'

export default {
  name: 'app',
  components: {
    Sapa
  },
  data() {
    return {
      nama: "Asrul harahap",
      alamat: `<s>Medan</s> <b>Jakarta Selatan</b>`
    }
  }
}
</script>
```

![Component Vue](https://raw.githubusercontent.com/AsrulLove/img-db/master/component-vue.png)

### Props
Props atau disebut juga properties adalah cara mengirimkan atau menurunkan data dari component induk ke component child. Props ditulis sebagai atribut pada tag component tersebut.

```html
<Sapa nama="Asrul" />
<Sapa nama="Anis" />
<Sapa nama="Tisha" />
```

Perhatikan kode pada `App.vue` dan `components/Sapa.vue` berikut.

File `App.vue`

```html
<template>
  <div id="app">
    <Sapa nama="Asrul" />
    <Sapa nama="Anis" />
    <Sapa nama="Tisha" />
  </div>
</template>

<script>
import Sapa from '@/components/Sapa'

export default {
  name: 'app',
  components: {
    Sapa
  }
}
</script>
```

File `components/Sapa.vue`

```html
<template>
  <div>
    <h1>Hello {{nama}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Sapa',
  props: ["nama"]
}
</script>
```

![Hasil](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-render.png)

> Pada component child, props dari induk harus didaftarkan pada key `props` yang bentuknya array atau object.


## Hari 4

Rilis: Kamis, 06 Februari 2020

### Binding
v-bind adalah cara menambahkan nilai attribut kedalam html dengan vue, misal `<img v-bind:src="urlImg">` urlImg merupakan nilai yang disisipkan pada attribut src.

```html
<template>
  <div id="app">
    <Sapa v-bind:nama="nama" />
  </div>
</template>

<script>
import Sapa from '@/components/Sapa'

export default {
  name: 'app',
  components: {
    Sapa
  },
  data() {
    return {
      nama: "Asrul harahap",
      alamat: `<s>Medan</s> <b>Jakarta Selatan</b>`
    }
  }
}
</script>
```

Maka hasil kode diatas adalah menjadikan state atau data nama sebagai data yang dikirimkan pada component `<Sapa />` dengan props `nama`.

![Hasil](https://raw.githubusercontent.com/AsrulLove/img-db/master/asrul.png)

### Input Pada Vue
Pada vue ada tersedia v-model yang dapat digunakan untuk menangkap input dari form html. v-model berupa state yang didefenisikan pada component.
Perhatikan kode berikut.

```html
<template>
  <div id="app">
    <Sapa v-bind:nama="nama" />

    <input type="text" v-model="nama" />
  </div>
</template>

<script>
import Sapa from '@/components/Sapa'

export default {
  name: 'app',
  components: {
    Sapa
  },
  data() {
    return {
      nama: "",
      alamat: `<s>Medan</s> <b>Jakarta Selatan</b>`
    }
  }
}
</script>
```

![Hasil v-model](https://raw.githubusercontent.com/AsrulLove/img-db/master/v-model.gif)


## Hari 5

Rilis: Jumat, 07 Februari 2020

### Methods

Function-function component pada vue diletakkan pada methods. Lebih jelas perhatikan kode berikut, bagaimana penulisan dan cara pemanggilan method tersebut.

```html
<template>
  <div id="app">
    <Sapa v-bind:nama="nama" />

    <input type="text" v-model="nama" />

    <button v-on:click="sapaDia">Klik</button>
  </div>
</template>

<script>
import Sapa from '@/components/Sapa'

export default {
  name: 'app',
  components: {
    Sapa
  },
  data() {
    return {
      nama: "",
      alamat: `<s>Medan</s> <b>Jakarta Selatan</b>`
    }
  },
  methods: {
    sapaDia: function() {
      alert(`Halo, ${this.nama}`)
    }
  }
}
</script>
```

Pada kode diatas dapat terlihat bahwa function diletakkan dalam methods, dan pemanggilan function tersebut dengan melakukan bind terhadap `<button>` dengan v-on:click atau bisa juga dengan cara singkat @click.

![Hasil Methods](https://raw.githubusercontent.com/AsrulLove/img-db/master/hello-anis.png)

### Event Vue
Sebelumnya kita telah menggunakan event pada saat meng-klik tombol untuk memanggil method `sapaDia`. Cara menggunakan event ada 2 cara:

1. v-on:[nama-event]

2. @[nama-event]

> Event pada vue ada click, scroll, submit, dan banyak lagi. Terkadang kita juga membutuhkan penggunaan event default dari DOM, maka pada vue dapat menggunakan cara `$event`.

Referensi Event: https://developer.mozilla.org/en-US/docs/Web/Events

### Filter
Data yang akan ditampilkan dapat difilter dengan mudah pada vue dengan menambahkan tanda | (pipe) disebelahkanan dari data. Misal filter asrul menjadi ASRUL.

```html
<template>
  <div id="app">

    <h1>{{ nama | capitalize }}</h1>

    <input type="text" v-model="nama" />

    <button v-on:click="sapaDia">Klik</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      nama: "",
      alamat: `<s>Medan</s> <b>Jakarta Selatan</b>`
    }
  },
  methods: {
    sapaDia: function() {
      alert(`Halo, ${this.nama}`)
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
```

![Vue Filter](https://raw.githubusercontent.com/AsrulLove/img-db/master/vue-filter.png)

Anda bebas, membuat custom filter sesuka hati, seperti tanggal 2020-02-07 menjadi 07 Februari 20.

### Latihan

Silahkan ulangi kembali