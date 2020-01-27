---
id: 30harijavascript
title: 30 Hari Javascript 3
sidebar_label: 30 Hari Javascript 3
---

## Hari 20
Update: Jumat, 24 Januari 2020

### Input pada React
Pada react kita dapat mengambil nilai input menggunakan `e.target.value`, brikut contoh penulisan input pada react.

```jsx
const [nama, updateNama] = setState('')
<input type="text" placeholder="name" onChange={(e) => updateNama(e.target.value)} />
```

Pada kasus ini kita akan menggunakan contoh pada halaman register. Buat file `page/Register.js`, yang isinya seperti berikut.

File `page/Register.js`

```jsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../actions/user.action'

const Register = (props) => {
    const dispatch = useDispatch()
    const [user, updateUser] = useState({})

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(createUser(user))
        .then( res => {
            if(res.data.status === 200) {
                window.location.href = '/'
            }
        })
    }

    return (
        <div className="page">
            <h1 className="page-title">Register 30 Hari Js</h1>

            <form className="register" onSubmit={(e) => submitForm(e)}>
                <label>Nama</label>
                <input type="text"  autoComplete={'false'} placeholder="Nama elu" onChange={(e) => {
                    updateUser({...user, name: e.target.value})
                }} />

                <label>Label</label>
                <input type="text"  autoComplete={'false'} placeholder="Label" onChange={(e) => {
                    updateUser({...user, label: e.target.value})
                }} />

                <label>Link Profile</label>
                <input type="text"  autoComplete={'false'} placeholder="ex. http://fb.com/image.png" onChange={(e) => {
                    updateUser({...user, picture: e.target.value})
                }} />

                <label>Email</label>
                <input type="email"  autoComplete={'false'} placeholder="email" onChange={(e) => {
                    updateUser({...user, email: e.target.value})
                }} />

                <label>No Hp</label>
                <input type="text"  autoComplete={'false'} placeholder="Phone" onChange={(e) => {
                    updateUser({...user, phone: e.target.value})
                }} />

                <label>Website</label>
                <input type="text"  autoComplete={'false'} placeholder="Link web" onChange={(e) => {
                    updateUser({...user, website: e.target.value})
                }} />

                <label>Summary</label>
                <textarea rows="5"  autoComplete={'false'} placeholder="summary..." onChange={(e) => {
                    updateUser({...user, summary: e.target.value})
                }}></textarea>

                <label>Password</label>
                <input type="password"  autoComplete={'false'} placeholder="rahasia" onChange={(e) => {
                    updateUser({...user, password: e.target.value})
                }}/>

                <button type="submit" onClick={(e) => submitForm(e)}>Register</button>
            </form>
        </div>
    )
}

export default Register
```

Kemudian ubah file `RouterApp.js` sehingga seperti berikut.

```jsx
import React, { Component, Fragment } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'

class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/register'> Register </Link> </li>
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />          
              <Route path='/register' exact component={Register} />          
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default RouterApp
```

### Action simpan ke database

Ubah pada file `user.action.js` untuk menambah kode sebagai proses untuk entry data ke dalam server penyedia API, sehingga kode menjadi seperti berikut.

```js
import axios from 'axios'

const baseUrl = `https://warm-refuge-26108.herokuapp.com`

export const getUsers = () => {
    return async dispatch => {
        dispatch({
            type: 'GET_USER_REQUEST'
        })
        try {
            const result = await axios.get(baseUrl + `/users`)
            dispatch({
                type: 'GET_USER_DONE',
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}

export const createUser = (data) => {
    return async dispatch => {
        try {
            const result = await axios.post(baseUrl + `/users`, data)
            return result
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}
```

Hasil Kode, akan seperti berikut:
![Proses Enrti](https://raw.githubusercontent.com/AsrulLove/img-db/master/network.png)


Hasil, data setelah kembali ke halaman home.

![Hasil Entri](https://raw.githubusercontent.com/AsrulLove/img-db/master/tertambah.png)


## Hari 21
Update: Sabtu, 25 Januari 2020

### Latihan
1. Latihan untuk kesegaran otak "Berapa Banyak Hadiah yang terbeli?"

Asrul Harahap meminta Anis Fikriyyah untuk membeli oleh-oleh saat pergi ke Medan, sekarang Anis Fikriyyah ingin tahu berapa jumlah oleh-oleh **PALING BANYAK** yang bisa dia beli.

Implementasikan function dibawah untuk membantu Anis Fikriyyah:

function banyakHadiah(maxBiaya, hadiah)

Parameter pertama adalah `maxBiaya` Anis Fikriyyah, yang kedua adalah sebuah `Array` yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Anis Fikriyyah dapat beli.

Contoh:
Maksimum biaya: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.
- Dilarang menggunakan array .sort()CTION SORT DARI ARRAY JAVASCRIPT

<!-- function banyakHadiah(maxBiaya, hadiah){
  for (var i = 0; i < hadiah.length; i++) {
    for (var j = 0; j < hadiah.length; j++) {
      if (hadiah[i] < hadiah[j]) {
        var temp = hadiah[i]
        hadiah[i] = hadiah[j]
        hadiah[j] = temp
      }
    }
  }
  
  var uang = maxBiaya
  var jumlah = 0;
  for(var k = 0; k < hadiah.length; k++) {
    if(uang - hadiah[k] >= 0) {
      uang = uang - hadiah[k];
      jumlah++
    }    
  }
  return jumlah
} -->
Hasil Keluaran yang diharapkan (jawaban kirim gi group telegram yah!)
```js
console.log(banyakHadiah(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(banyakHadiah(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(banyakHadiah(4000, [7500, 1500, 2000, 3000])); // 2
console.log(banyakHadiah(50000, [25000, 25000, 10000, 15000])); // 3
console.log(banyakHadiah(0, [10000, 3000])); // 0
```

2. Pada materi react js, belum adanya update profile user dan hapus account, maka buatlah. (soal ini dikerjakan setelah membaca materi sebelum deploy berikut).

### Persiapan Deploy
Setelah latihan kesegaran otak mari kita lanjut materi kembali, kita akan melakukan deploy ke https://www.netlify.com (tau kenapa?, iya benar GRATISSSSSS).

Sedikit kita lengkapi, untuk halaman login, silahkan buat file `page/Login.js` yang isinya seperti berikut.

```js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/user.action'

const Login = (props) => {
    const dispatch = useDispatch()
    const [user, updateUser] = useState({})

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(loginUser(user))
    }

    return (
        <div className="page">
            <h1 className="page-title">Login 30 Hari Js</h1>

            <form className="login" onSubmit={(e) => submitForm(e)}>

                <label>Email</label>
                <input type="email"  autoComplete={'false'} placeholder="email" onChange={(e) => {
                    updateUser({...user, email: e.target.value})
                }} />

                <label>Password</label>
                <input type="password"  autoComplete={'false'} placeholder="rahasia" onChange={(e) => {
                    updateUser({...user, password: e.target.value})
                }}/>

                <button type="submit" onClick={(e) => submitForm(e)}>Login</button>
            </form>
        </div>
    )
}

export default Login
```

Ubah sedikit file `user.action.js` menjadi seperti berikut.
```js
import axios from 'axios'

const baseUrl = `https://warm-refuge-26108.herokuapp.com`

export const getUsers = () => {
    return async dispatch => {
        dispatch({
            type: 'GET_USER_REQUEST'
        })
        try {
            const result = await axios.get(baseUrl + `/users`)
            dispatch({
                type: 'GET_USER_DONE',
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}

export const createUser = (data) => {
    return async dispatch => {
        try {
            const result = await axios.post(baseUrl + `/users`, data)
            return result
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}

export const loginUser = (data) => {
    return async dispatch => {
        try {
            const result = await axios.post(baseUrl + `/users/login`, data)
            window.localStorage.setItem('token', result.data.token)
            
            if(result.data.token) {
                window.location.href = '/profile'
            }
            return result
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}

export const profileUser = () => {
    return async dispatch => {
        dispatch({
            type: 'GET_USER_REQUEST'
        })
        try {
            const result = await axios.get(baseUrl + `/users/profile`, {headers: { token: window.localStorage.getItem('token') }})
            dispatch({
                type: 'GET_USER_DETAIL_DONE',
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_USER_ERROR'
            })
        }
    }
}
```

Ubah juga file `user.reducer.js`, dan menjadi seperti berikut.

```js
const initialState = {
    data: [],
    isError: false,
    isLoading: false,
    detail: null,
}
  
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        case 'GET_USER_DONE':
            return {
                ...state,
                data: action.payload,                
                isError: false,
                isLoading: false
            }
        case 'GET_USER_DETAIL_DONE':
            return {
                ...state,
                detail: action.payload,                
                isError: false,
                isLoading: false
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        default:
            return state
    }
}
```

Tambahkan file `page/Profile.js`, yang isinya seperti berikut.

```js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileUser } from '../actions/user.action'

const Profile = (props) => {

    const dispatch = useDispatch()
    const usersData = useSelector(state => state.users)

    useEffect( () => {
        dispatch( profileUser() )
    }, [])

    if(usersData.detail === null) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="page">
            <h1 className="page-title">My Profile</h1>

            <div className="profile">
                <div className="avatar">
                    <img src={usersData.detail.picture} />
                </div>
                <div className="profile-detail">
                    <div>
                        <h3> { usersData.detail.name } </h3>
                        <hr />
                        <span> { usersData.detail.label } </span>

                        <p style={{marginTop: '3rem'}}> { usersData.detail.phone } </p>
                        <p style={{marginTop: '1rem'}}> { usersData.detail.email } </p>
                        <p style={{marginTop: '1rem'}}> { usersData.detail.website } </p>

                        <p style={{marginTop: '3rem'}}>Summary: { usersData.detail.summary } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
```

Ubah file `RouterApp.js` untuk mengubah menu sehingga kode menjadi seperti berikut.

```js
import React, { Component, Fragment } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'

class RouterApp extends Component {
  state = {
    token: null
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    this.setState({token})
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            {
              this.state.token === null && (
                <>
                  <li> <Link to='/register'> Register </Link> </li>
                  <li> <Link to='/login'> Login </Link> </li>
                </>
              )
            }
            {
              this.state.token !== null && (
                <>
                  <li> <Link to='/profile'> Profile </Link> </li>
                  <li> <a href="#" onClick={() => {
                    window.localStorage.removeItem('token')
                    window.location.href='/'
                  }}> Logout </a> </li>
                </>
              )
            }
            
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              {
                this.state.token !== null && (
                  <Route path='/profile' exact component={Profile} /> 
                )
              } 

              {
                this.state.token === null && (
                  <>
                    <Route path='/register' exact component={Register} />          
                    <Route path='/login' exact component={Login} />
                  </>
                )
              }      
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default RouterApp
```

Agar terlihat elegan tambahkan css pada file `App.css` yang isinya seperti berikut.

```css
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-height: 100vh;
}

body nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: green;
  width: 100%;
  height: 40px;
}

body nav li {
  margin-right: 2rem;
}

body nav li a {
  color: white;
}

body nav li a:hover {
  color: yellow;
}

body main {
  padding: 3rem;
  color: gray;
}

.page {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.page .page-title {
  color: black;
  text-align: center;
  margin-bottom: 1rem;
}

.page .users {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.page .users .user {
  width: calc(calc(100%/4) - 1rem);
  border: 1px green solid;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.page .users .user:nth-child(4n) {
  margin-right: 0;
}

.page .users .user .user-img-container img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.page .users .user .user-detail h3 {
  text-align: center;
  margin-top: .5rem;
  margin-bottom: .5rem;
}

.page .register, .page .login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 80%;
  margin: auto;
}

.page .register input, .page .register textarea, .page .login input, .page .login textarea {
  margin-bottom: 1rem;
  padding: .5rem;
  outline: none;
}

.page .register input:focus, .page .register textarea:focus, .page .login input:focus, .page .login textarea:focus {
  border: 1px solid green;
}

.page .register button, .page .login button {
  color: #ffffff;
  background: green;
  padding: .5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.page .register button:hover, .page .login button:hover {
  background: #ffffff;
  color: green;
  border: 1px solid green;
}

.page .profile {
  width: 800px;
  min-width: 800px;
  max-width: 800px;
  padding: 2rem;
  border: 1px dotted black;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.page .profile .avatar {
  margin-right: 1rem;
}

.page .profile .avatar img {
  width: 200px;
  border-radius: 50%;
  border: 1px solid red;
}
```

Source cek [disini](https://github.com/asruldev/reactjs-30)

### Deploy
Pertama sekali, silahkan login ke netlify atau jika belum memiliki akun silahkan daftar terlebih dahulu.

![Netlify](https://raw.githubusercontent.com/AsrulLove/img-db/master/netlify.png)

Kemudian pada proyek react build untuk di upload ke hosting dengan perintah berikut.

```bash
npm run build
```

Maka akan menghasilkan file compress dari proyek react tersebut.

![NPM run Build](https://raw.githubusercontent.com/AsrulLove/img-db/master/npm-run-build.png)

Selanjutnya folder build drag ke netlify seperti berikut.

![Drag netlify](https://raw.githubusercontent.com/AsrulLove/img-db/master/dnd-netlify.png)

Setelah di drag, maka netlify memberikan url yang dapat kita gunakan sebagai alamat web kita.

![URL netlify](https://raw.githubusercontent.com/AsrulLove/img-db/master/url-netlify.png)

Jika ingin mengubah url, netlify menyediakannya melalui custom domain.
![Custom domain](https://raw.githubusercontent.com/AsrulLove/img-db/master/custom-url.png)

Hasilnya akan seperti berikut: https://asrul.netlify.com

## Hari 22
Update: Minggu, 26 Januari 2020

![React Native](https://raw.githubusercontent.com/AsrulLove/img-db/master/react-native.png)

React Native adalah framework yang dibuat oleh tim facebook sebagai alat untuk membuat aplikasi Android dan Ios dengan javascript yang core nya sendiri adalah reactjs.

### Persiapan Masuk React Native

Beberapa hal yang harus dipersiapkan sebelum masuk ke materi React Native adalah:

#### 1. Node Js
React Native karena berbasis javascript maka harus adanya Node Js, untuk install node js telah kita bahas pada [30 hari javascript](http://asrul.dev/docs/30daysweb) hari pertama. Silahkan baca kembali.

#### 2. Java Development Kit
React Native membutuhkan setidaknya JDK versi 8, yang dapat di download [disini](http://openjdk.java.net/). Jangan lupa setelah diinstall adanya PATH environtment JAVA_HOME, jika sudah ada bisa dicek dengan cara perintah berikut pada terminal.

```bash
echo $JAVA_HOME
```

![Java Home](https://raw.githubusercontent.com/AsrulLove/img-db/master/java-home.png)

#### 3. Android Studio
Android studio adalah optional untuk diinstall, boleh hanya install Android SDK saja, tapi untuk mempermudah mendapatkan yang kita butuhkan untuk react native.

- Android SDK
- Android SDK Platform
- Android Virtual Device

Pastikan untuk mengkonfigurasi env pada laptop anda, linux atau mac biasanya pada `.bashrc` atau `zshrc`.

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Cek dengan cara:
```bash
echo $ANDROID_HOME
```

![Android Home](https://raw.githubusercontent.com/AsrulLove/img-db/master/android-home.png)


### Install React Native

> Jika Anda pernah install `react-native-cli` secara global, saya sarankan untuk **uninstall** kembali, karena saya khawatir akan ada banyak masalah kedepannya.

Pada series ini, kita akan membuat aplikasi `minibioapp`. Caranya langsung saja.

```bash
npx react-native init minibioapp
```

![Mini Bio App](https://raw.githubusercontent.com/AsrulLove/img-db/master/minibioapp.png)

Setelah berhasil untuk membuat proyek, kita cek bagaimana struktur folder react native berikut.

```bash
.
├── android
├── ios
├── node_modules
├── App.js
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── package-lock.json
└── __tests__
    └── App-test.js
```

### Menjalankan React Native
Untuk menjalankan react native adalah dengan perintah berikut.

```bash
npx react-native start
```

![React Native Start](https://raw.githubusercontent.com/AsrulLove/img-db/master/react-native-start.png)

## Hari 23
Update: Senin, 27 Januari 2020

### React Native Dasar
Pada dasarnya react native sama dengan react js sama-sama dalam bentuk component, cara penulisan juga sama. Anda perlu tahu component, props, state, hooks untuk lanjut jika belum maka silahkan baca materi react pada minggu sebelumnya [disini](https://asrul.dev/docs/30harijs#hari-16)

### Hello World!
Ini adalah tradisi yang turun temurun, saat pertamakali belajar hal baru dalam koding biasanya dengan menampilkan ~~Hello World!~~ jadi **Hello Asrul Dev**. Langsung saja mari tulis kode berikut pada file `App.js`.

```jsx
import React from 'react'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'blue', fontSize: 32}}>Hello Asrul Dev</Text>
    </View>
  )
}

export default App
```

Hasilnya akan terlihat seperti berikut.

![Halo Asrul dev](https://raw.githubusercontent.com/AsrulLove/img-db/master/halo-asrul-dev.png)

> Terlihat jelas pada kode diatas, jika pada web kita menggunakan `<div>` maka pada react native kita menggunakan `<View>`, begitu juga penggunaan `<p>, <h1>, ... atau <span>` menjadi `<Text>` pada react native.

### Style
Desain yang bagus bisa menjadi daya tarik untuk menggunakan aplikasi, maka materi ini saya anggap penting. Style pada react native mirip dengan css pada web tapi dalam bentuk kode object javascript.

React native telah menyediakan `StyleSheet` yang dapat kita gunakan untuk kumpulan style kode yang dimiliki. Sebelumnya terlihat bahwa saya telah memperlihatkan style pada `<View>` dan `<Text>`, dengan menggunakan StyleSheet maka kode akan terlihat lebih rapi.

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.AllCenter}>
      <Text style={styles.textDemo}>Hello Asrul Dev</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  AllCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDemo: {
    color: 'blue',
    fontSize: 32
  }
})
```

### Layout
Pada react native, layout menggunakan konsep flex yang dapat dibaca [disini](https://facebook.github.io/react-native/docs/flexbox)

### Text Input
Jika pada html ada `<input type="text" />` maka gantinya pada react native adalah `<TextInput />`. Perhatikan contoh berikut.

```js
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const App = () => {
  const [teks, updateTeks] = useState('')
  return (
    <View style={styles.AllCenter}>
      <Text style={styles.textDemo}>Hello Asrul Dev</Text>

      <TextInput
          style={styles.inputHope}
          placeholder="Tulis apapun"
          onChangeText={text => updateTeks(text)}
          value={teks}
        />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  AllCenter: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDemo: {
    color: 'blue',
    fontSize: 32
  },
  inputHope: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1, 
    width: '100%'
  }
})
```

Hasilnya akan seperti berikut.

![React Native Input](https://raw.githubusercontent.com/AsrulLove/img-db/master/text-input.png)

### Button
Intraksi pada mobile akan sering berhubungan dengan yang namanya sentuh untuk melakukan interaksi, biasanya untuk pindah halaman atau lainnya. Button merupakan salah satu bentuk interaksi tersebut. Button pada react native dapat dilihat pada contoh berikut.

```jsx
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const App = () => {
  const [teks, updateTeks] = useState('')
  return (
    <View style={styles.AllCenter}>
      <Text style={styles.textDemo}>Hello Asrul Dev</Text>

      <TextInput
          style={styles.inputHope}
          placeholder="Tulis apapun"
          onChangeText={text => updateTeks(text)}
          value={teks}
        />
        <View style={styles.fullButton}>
          <Button 
            onPress={() => alert(teks)}
            title="Sentuh Aku"
          />
        </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  AllCenter: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDemo: {
    color: 'blue',
    fontSize: 32
  },
  inputHope: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1, 
    width: '100%'
  },
  fullButton: {
    height: 40,
    width: '100%',
    marginTop: 8
  }
})
```

Hasilnya akan seperti berikut.

![React Native Button](https://raw.githubusercontent.com/AsrulLove/img-db/master/button-react-native.png)

### ScrollView
Aplikasi mobile memiliki ruang yang sempit, sehingga scroll akan sangat membantu untuk tampilan yang panjang. Berikut penggunaan ScrollView pada react native.

```jsx
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Image } from 'react-native'

const App = () => {
  const [teks, updateTeks] = useState('')
  return (
    <ScrollView>
      <View style={styles.AllCenter}>
        <Text style={styles.textDemo}>Hello Asrul Dev</Text>

        <TextInput
            style={styles.inputHope}
            placeholder="Tulis apapun"
            onChangeText={text => updateTeks(text)}
            value={teks}
          />
          <View style={styles.fullButton}>
            <Button 
              onPress={() => alert(teks)}
              title="Sentuh Aku"
            />
          </View>
      </View>

      <View style={styles.AllCenter}>
        <Image source={{uri: "https://avatars2.githubusercontent.com/u/15111402?s=460&v=4", width: 200, height: 200}} style={{marginTop: 8}} />
        <Image source={{uri: "https://avatars2.githubusercontent.com/u/38931702?s=460&v=4", width: 200, height: 200}} style={{marginTop: 8}} />
        <Image source={{uri: "https://avatars0.githubusercontent.com/u/51555828?s=460&v=4", width: 200, height: 200}} style={{marginTop: 8}} />
        <Image source={{uri: "https://avatars1.githubusercontent.com/u/44023987?s=460&v=4", width: 200, height: 200}} style={{marginTop: 8}} />
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  AllCenter: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDemo: {
    color: 'blue',
    fontSize: 32
  },
  inputHope: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1, 
    width: '100%'
  },
  fullButton: {
    height: 40,
    width: '100%',
    marginTop: 8
  }
})
```

Hasilnya akan seperti berikut.

![React Native Scrollview](https://raw.githubusercontent.com/AsrulLove/img-db/master/scrollview-react-native.gif)


## Hari 24
Update: Selasa, 28 Januari 2020

### Penggunaan UI
Ada banyak sekali UI untuk react native yang bisa dipakai secara gratis, pada series ini kita akan menggunakan **nativebase**, yang dapat dilihat disitus resminya https://nativebase.io

![nativebase](https://raw.githubusercontent.com/AsrulLove/img-db/master/nativebase.png)

### Menggunakan nativebase
Sebelum menggunakan komponen nativebase, pertama sekali kita harus install pada proyek kita dengan perintah berikut.

```bash
npm install native-base
```

Contoh penggunaan native base.

```js
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button light><Text> Light </Text></Button>
          <Button primary><Text> Primary </Text></Button>
          <Button success><Text> Success </Text></Button>
          <Button info><Text> Info </Text></Button>
          <Button warning><Text> Warning </Text></Button>
          <Button danger><Text> Danger </Text></Button>
          <Button dark><Text> Dark </Text></Button>
        </Content>
      </Container>
    );
  }
}
```

### React Router Native
Sama halnya dengan reactjs, pada react native juga ada yang namanya router yang berfungsi untuk pindah scren dari yang satu ke yang lainnya. Pada series ini kita akan menggunakan react router native. Cara install seperti berikut.

```bash
npm i react-router-native
```
Kita telah menginstall UI untuk proyek react native, kemudian kita akan membuat file `RouterApp.js`, `pages/Home.js`, dan `pages/About.js` dan mengubah file `App.js`.

File `App.js`

```js
import React from 'react'
import RouterApp from './RouterApp'

const App = () => {
  return (
    <RouterApp />
  )
}

export default App
```

File `RouterApp.js`

```js
import React from 'react'
import { Container, Text, Footer, View } from 'native-base'
import { NativeRouter, Route, Link } from "react-router-native"

import Home from './pages/Home'
import About from './pages/About'

const RouterApp = () => {
    return (
        <NativeRouter>
            <Container>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Footer>
                    <Link to="/" underlayColor="blue" style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white'}}>Home</Text>
                        </View>
                    </Link>
                    <Link to="/about" underlayColor="blue" style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white'}}>About</Text>
                        </View>
                    </Link>
                </Footer>
            </Container>
        </NativeRouter>

    )
}

export default RouterApp
```

File `pages/Home.js`

```js
import React from 'react'
import { Container, Header, Body, Title, Content, Text } from 'native-base'


const Home = (props) => {

	return (
		<Container>
			<Header>
				<Body>
					<Title>Home</Title>
				</Body>
			</Header>
			<Content>
				<Text> Ini Home Page asrul.dev </Text>
			</Content>
		</Container>
	)
}

export default Home
```

File `pages/About.js`

```js
import React from 'react'
import { Container, Header, Body, Title, Content, Text } from 'native-base'

const About = (props) => {

	return (
		<Container>
			<Header>
				<Body>
					<Title>About</Title>
				</Body>
			</Header>
			<Content>
				<Text> About Page </Text>
			</Content>
		</Container>
	)
}

export default About
```

Hasilnya akan terlihat seperti berikut.

![React Router Native](https://raw.githubusercontent.com/AsrulLove/img-db/master/router.gif)

## Hari 25
Update: Rabu, 29 Januari 2020
Icon and Redux

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