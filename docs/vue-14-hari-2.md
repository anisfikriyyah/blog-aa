---
id: vue-14-hari-2
title: Vue 14 Hari 2
sidebar_label: Vue 14 Hari 2
---

## Hari 6

Rilis: Senin, 10 Februari 2020

### Life Cycle Component

Setiap instance Vue melewati serangkaian langkah inisialisasi. Ketika itu dibuat dari mengatur pengamatan data untuk mengkompilasi template, untuk memasang instance ke DOM, dan akhirnya untuk memperbarui DOM selama perubahan data. Proses ini dikenal sebagai life cycle instance Vue dan vue memiliki beberapa fungsi yang berjalan di dalamnya yang disebut hooks, secara default saat vue melalui proses membuat dan memperbarui DOM.

Perhatikan bagan berikut untuk penggunaan hook pada lifecyle. 

![Lifecycle vue](https://vuejs.org/images/lifecycle.png)

Kalau dihitung dari bagan, terdapat 8 hooks yang dapat kita manfaatkan.

Hook | Keterangan
---------------|-------------------
beforeCreate() | Hook yang dijalankan sesaat setelah objek Vue dan komponennya diinisialisasi. Properti data belum dapat diakses atau digunakan pada hook ini.
create() | Hook ketika objek Vue telah selesai dibuat. Biasanya request data dari server diletakkan pada hooks ini.
beforeMount() | Hook ketika template dicompile.
mounted() | Hook ketika elemen telah diinisialisasi, data telah dimuat dan view telah dirender.
beforeUpdate() | Hook yang terjadi setelah mounted dan hanya terjadi jika ada perubahan data yang mengakibatkan render ulang. Tepatnya, hook ini terjadi sebelum view dirender ulang.
updated() | Hook yang terjadi setelah beforeUpdate() yaitu setelah view dirender ulang.
beforeDestroy() | Hook yang terjadi sebelum component dihapus atau ditinggalkan.
destroyed() | Hook yang terjadi setelah objek Vue dihapus atau ditinggalkan.

### Periapan Praktik
Setelah 1 minggu kita belajar dasar-dasar vue, sekarang saatnya kita untuk implementasikan vue ke sebuah proyek yaitu aplikasi blog sederhana.

Kita akan membuat blog yah, dan materi terkait akan dijelaskan pada praktik seperti router, vuex dll