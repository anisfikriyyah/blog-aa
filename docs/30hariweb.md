---
id: 30hariweb
title: 30 Hari Javascript 4
sidebar_label: 30 Hari Javascript 4
---

## Hari 25
Update: Rabu, 29 Januari 2020

### Icon
Icon akan sangat membantu memperjelas maksud dari sebuah aplikasi, misal gambar rumah untuk menyatakan home. Sehingga dengan cepat pengguna tau maksud dari fitur atau menu yang terdapat pada aplikasi.

Install library icon dengan perintah berikut.

```bash
npm i react-native-vector-icons
```

Kemudian tambahkan kode berikut pada `android/app/build.gradle`, INGAT BUKAN `android/build.gradle`.

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Untuk menguji, apakah icon yang kita install berhasil terimplementasi, mari ubah kode file `RouterApp.js` menjadi seperti berikut.

```js
import React from 'react'
import { Container, Text, Footer, View, Icon } from 'native-base'
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
                            <Icon name='home' style={{color: 'white'}}  />
                            <Text style={{color: 'white'}}>Home</Text>
                        </View>
                    </Link>
                    <Link to="/about" underlayColor="blue" style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='person' style={{color: 'white'}} />
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

Sehingga hasilnya akan seperti berikut.

![Icon React Router](https://raw.githubusercontent.com/AsrulLove/img-db/master/icon-rn.png)

### Redux
Pada materi react js, kita telah membahas **REDUX**, materi ini tidak berbeda pada react native maupun react js, untuk itu silahkan baca kembali materi sebelumnya dan sesuaika pada react native.

Baca series redux sebelumnya [disini](https://asrul.dev/docs/30harijs#persiapan-react-redux)

Setelah disesuaikan dengan materi redux, ubah file `pages/Home.js` menjadi seperti berikut.

```js
import React, { useEffect } from 'react'
import { Container, Header, Body, Title, Content, Text, Spinner, Card, CardItem, Left, Thumbnail, Image, Button, Icon, Right, Item } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../actions/user.action'

const Home = (props) => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.users)

    useEffect( () => {
        dispatch( getUsers() )
    }, [])

	return (
		<Container>
			<Header>
				<Body>
					<Title>Home</Title>
				</Body>
			</Header>
			<Content>
			{
                usersData.isLoading && (
                    <Spinner color='blue' />
                )
            }

            {
                usersData.isError && (
                    <Spinner color='red' />
                )
            }

			{
				usersData.data.map( (item, index) => (
					<Card key={index}>
						<CardItem>
							<Left>
								<Thumbnail source={{uri: item.picture}} />
								<Body>
									<Text> {item.name} </Text>
									<Text note> {item.label} </Text>
								</Body>
							</Left>
						</CardItem>
			        </Card>
				))
			}
			</Content>
		</Container>
	)
}

export default Home
```

Hasilnya akan terlihat seperi berikut.

![React Native Home](https://raw.githubusercontent.com/AsrulLove/img-db/master/hasil-redux-rn.png)

## Hari 26
Update: Kamis, 30 Januari 2020

Pada serie ini kita akan membahas konsep authentikasi pada React Native. Proses login akan terjadi jika user telah terdaftar, kemudian memasukkan akun misal email dan password, jika berhasil login maka simpan token pada storage.

### Login

Langsung saja, tambahkan file `pages/Login.js` yang isinya berikut.

```js
import React, { useState } from 'react'
import { Container, Header, Body, Title, Content, Text, Form, Label, Input, Button, Item, Right } from 'native-base'
import { Link } from 'react-router-native'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/user.action'


const Login = (props) => {
	const dispatch = useDispatch()
	const [email, updateEmail] = useState('')
	const [password, updatePassword] = useState('')

	const storeData = async (token) => {
		try {
		    await AsyncStorage.setItem('asrul-dev', token)
		} catch (error) {
            console.warn(error)
		}
	  };

	const doLogin = () => {
		dispatch(loginUser({email, password}))
		.then( res => {
			const token = res.data.token
			storeData(token)
		})
	}

	return (
		<Container>
			<Header>
				<Body>
					<Title>Login</Title>
				</Body>
			</Header>
			<Content style={{padding: 16}}>
				<Right>
					<Text style={{fontSize: 32}}>Login 30 Hari Js</Text>
				</Right>
				<Form>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input onChangeText={ text => updateEmail(text) } value={email} />
					</Item>
					<Item floatingLabel last>
						<Label>Password</Label>
						<Input secureTextEntry={true} onChangeText={ text => updatePassword(text) } value={password}/>
					</Item>

					<Button onPress={doLogin} style={{marginTop: 32, marginBottom: 16, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Text> Login </Text>
					</Button>
					<Right>
						<Link to={'/register'}><Text> Register Free Now</Text></Link>
					</Right>
				</Form>
			</Content>
		</Container>
	)
}

export default Login
```

Kemudian ubah file `RouterApp.js` menjadi seperti berikut.

```js
import React, { Fragment } from 'react'
import { Container, Text, Footer, View, Icon } from 'native-base'
import { NativeRouter, Route, Link } from "react-router-native"

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'

const RouterApp = () => {

    const auth = useSelector(state => state.auth)

    return (
        <NativeRouter>
            <Container>
                {
                    !auth.isLogin ? (
                        <Fragment>
                            <Route exact path="/" component={Login} />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Footer>
                                <Link to="/" underlayColor="blue" style={{flex: 1}}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Icon name='home' style={{color: 'white'}}  />
                                        <Text style={{color: 'white'}}>Home</Text>
                                    </View>
                                </Link>
                                <Link to="/about" underlayColor="blue" style={{flex: 1}}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Icon name='person' style={{color: 'white'}} />
                                        <Text style={{color: 'white'}}>About</Text>
                                    </View>
                                </Link>
                            </Footer>
                        </Fragment>
                    )
                }
                
            </Container>
        </NativeRouter>

    )
}

export default RouterApp
```

Ubah file `actions/user.action.js` menjadi seperti berikut.

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
            dispatch({
                type: 'DO_LOGIN',
                payload: result.data.token
            })
            return result
        } catch (error) {
            return 500
        }
    }
}

export const logoutUser = () => {
    return dispatch => {
        try {
            dispatch({
                type: 'DO_LOGOUT',
            })
        } catch (error) {
            return 500
        }
    }
}
```

Tambahkan file `reducers/auth.reducer.js` yang isinya seperti berikut.

```js
const initialState = {
    isLogin: false,
    token: null,
}
  
export default (state = initialState, action) => {
    switch (action.type) {
        case 'DO_LOGIN':
            return {
                ...state,
                isLogin: true,
                token: action.payload
            }
        case 'DO_LOGOUT':
            return {
                ...state,
                isLogin: false,
                token: null,
            }
        default:
            return state
    }
}
```

Kemudian ubah file `helpers/store.js` menjadi seperti berikut.

```js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Users from '../reducers/user.reducer'
import Auth from '../reducers/auth.reducer'
  
const combine = combineReducers({
    users: Users,
    auth: Auth,
})
  
const Store = createStore( combine, applyMiddleware(thunk) )
export default Store
```

### Logout

Ubah file `pages/Home.js` untuk menambahkan fitur logout sehingga menjadi seperti berikut.

```js
import React, { useEffect } from 'react'
import { Container, Header, Body, Title, Content, Text, Spinner, Card, CardItem, Left, Thumbnail, Image, Button, Icon, Right, Item } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, logoutUser } from '../actions/user.action'
import { AsyncStorage } from 'react-native'

const Home = (props) => {
    const dispatch = useDispatch()
	const usersData = useSelector(state => state.users)
	

	const doLogout = async (key) => {
		try {
			await AsyncStorage.removeItem(key)
			dispatch(logoutUser())
			return true
		}
		catch(exception) {
			return false
		}
	}

	const logout = () => {
		doLogout('asrul-dev')
	}

    useEffect( () => {
        dispatch( getUsers() )
    }, [])

	return (
		<Container>
			<Header>
				<Body>
					<Title>Home</Title>
				</Body>
				<Right>
					<Title onPress={logout}>Logout</Title>
				</Right>
			</Header>
			<Content>
			{
                usersData.isLoading && (
                    <Spinner color='blue' />
                )
            }

            {
                usersData.isError && (
                    <Spinner color='red' />
                )
            }

			{
				usersData.data.map( (item, index) => (
					<Card key={index}>
						<CardItem>
							<Left>
								<Thumbnail source={{uri: item.picture}} />
								<Body>
									<Text> {item.name} </Text>
									<Text note> {item.label} </Text>
								</Body>
							</Left>
						</CardItem>
			        </Card>
				))
			}
			</Content>
		</Container>
	)
}

export default Home
```

Hasilnya akan seperti berikut

![Hasil Auth](https://raw.githubusercontent.com/AsrulLove/img-db/master/auth.gif)

## Hari 27
Update: Jumat, 31 Januari 2020

### Register

Buat file `pages/Register.js` yang isi kodenya seperti berikut.

```js
import React, { useState } from 'react'
import { Container, Header, Body, Title, Content, Text, Form, Label, Input, Button, Item, Right } from 'native-base'
import { Link } from 'react-router-native'
import { useDispatch } from 'react-redux'
import { createUser } from '../actions/user.action'

const Register = (props) => {

	const dispatch = useDispatch()
	const [user, updateUser] = useState({})
	
	const submitForm = () => {
        dispatch(createUser(user))
        .then( res => {
            props.history.push('/')
        })
    }

	return (
		<Container>
			<Header>
				<Body>
					<Title>Register</Title>
				</Body>
			</Header>
			<Content style={{padding: 16}}>
				<Right>
					<Text style={{fontSize: 32}}>Register 30 Hari Js</Text>
				</Right>
				<Form>
					<Item floatingLabel>
						<Label>Nama</Label>
						<Input onChangeText={text => updateUser({...user, name: text})}/>
					</Item>
					<Item floatingLabel>
						<Label>Label</Label>
						<Input onChangeText={text => updateUser({...user, label: text})}/>
					</Item>
					<Item floatingLabel>
						<Label>Link Profile</Label>
						<Input onChangeText={text => updateUser({...user, picture: text})}/>
					</Item>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input onChangeText={text => updateUser({...user, email: text})}/>
					</Item>
					<Item floatingLabel>
						<Label>Phone</Label>
						<Input onChangeText={text => updateUser({...user, phone: text})}/>
					</Item>
					<Item floatingLabel>
						<Label>Website</Label>
						<Input onChangeText={text => updateUser({...user, website: text})}/>
					</Item>
					<Item floatingLabel>
						<Label>Summary</Label>
						<Input onChangeText={text => updateUser({...user, summary: text})}/>
					</Item>
					<Item floatingLabel last>
						<Label>Password</Label>
						<Input secureTextEntry={true} onChangeText={text => updateUser({...user, password: text})}/>
					</Item>

					<Button style={{marginTop: 16, marginBottom: 16, flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={submitForm}>
						<Text style={{textAlign: 'center'}}> Register </Text>
					</Button>
					<Link to={'/'}><Text> Login </Text></Link>
				</Form>
			</Content>
		</Container>
	)
}

export default Register
```

Hasil akan seperti berikut.

![Hasil Register](https://raw.githubusercontent.com/AsrulLove/img-db/master/register.png)

## Hari 28
Update: Sabtu, 1 Fabruari 2020

> Besi hitam tumpul yang dipukul, bakar, pukul, bakar, asah, pukul, bakar, asah hingga menjadi pedang yang tajam. Jika Anda ingin jadi hebat setajam pedang yah....

### Latihan

1. Buatlah halaman profile pada Aplikasi yang telah Anda buat!
2. Buatlah sebuah function `function deteksiVirus('kalimat', 'virus')`, dimana function akan menerima dua parameter yaitu kalimat dan virus, kemudian cek berapa banyak virus yang terdetekse pada kalimat berdasarkan jenis virus yang ditentukan pada parameter virus. Perhatikan case.

```bash
console.log(deteksiVirus('qlD4MZax0raQqew', 'x|0|q')); // 5 virus terdeteksi
console.log(deteksiVirus('HH0NBP1zRa', 'h|r')); // 3 virus terdeteksi
console.log(deteksiVirus('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 virus terdeteksi
console.log(deteksiVirus('mjBgPlzks', 'm')); // 1 virus terdeteksi
console.log(deteksiVirus('AIn4Ks05bBaa', 'x')); // Gak ada virus terdeteksi
console.log(deteksiVirus('RsMFjBUjvIaP')); // Gak ada virus terdeteksi
console.log(deteksiVirus('')); // Gak ada virus terdeteksi
```

## Hari 29
Update: Minggu, 2 Februari 2020

### Publish Play Store
Update: Jumat, 7 Februari 2020

Setelah 5 hari menunggu, akhirnya aplikasi terpublish juga ke play store.

### Persiapan Publish
Semua aplikasi yang masuk ke Play store harus ditandatangani, sebagai penanda jika ada publish lagi artinya update bukan nambah aplikasi. Tanda tangan aplikasi disini menggunakan .keystore.

Berikut cara membuat keystore.

Masuk ke directory `java` terinstall. Kemudian gunakan perintah berikut untuk melakukan generate.

```bash
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

> Nama key dapat disesuaikan

![Key Asrul Dev](https://raw.githubusercontent.com/AsrulLove/img-db/master/keystore.png)

Hasil generate tersebut pindahkan ke dalam proyek, pada folder `android/app`.

![Keystore](https://raw.githubusercontent.com/AsrulLove/img-db/master/place-keystore.png)

Ubah file `android/gradle.properties` seingga hasilnya seperti berikut.

```java
org.gradle.configureondemand=false

android.useAndroidX=true
android.enableJetifier=true

MYAPP_UPLOAD_STORE_FILE=asruldev-js.keystore
MYAPP_UPLOAD_KEY_ALIAS=asruldev-js-alias
MYAPP_UPLOAD_STORE_PASSWORD=rahasia-sekali-yah
MYAPP_UPLOAD_KEY_PASSWORD=rahasia-sekali-yah
```

![Gradle prop](https://raw.githubusercontent.com/AsrulLove/img-db/master/gradle-prop.png)

Selanjutnya ubah kode `android/app/build.gradle` sehingga menjadi seperti berikut.

```gradle
...
signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://facebook.github.io/react-native/docs/signed-apk-android.
            signingConfig signingConfigs.release
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
...
```

![TTD Release](https://raw.githubusercontent.com/AsrulLove/img-db/master/ttd-realise.png)

Jika configurasi selesai, selanjutnya lakukan release apk dengan perintah berikut.

```bash
./gradlew bundleRelease
```

> Pastikan terminal sedang berada dalam folder android

![Release APK](https://raw.githubusercontent.com/AsrulLove/img-db/master/realese-apk.png)

Uji dengan perintah berikut, jika tidak ada error maka lanjutkan ke tahap upload ke play store.

```bash
npx react-native run-android --variant=release
```

### Upload

Jika APK ingin dipublish ke play store agar dapat didownload oleh org banyak, maka diperlukan akun play console sendiri, jika belum ada silahkan daftarkan jika udah ada langsung login di https://play.google.com.

Pilih menu **Buat Aplikasi** dan pilih bahasa dan isi nama aplikasi.

![Pilih Bahasa](https://raw.githubusercontent.com/AsrulLove/img-db/master/Screenshot%20from%202020-02-01%2010-17-47.png)

Kemudian isi formulir yang diminta oleh google play sendiri, seperti alamat, descripsi, gambar, dll.

![https://raw.githubusercontent.com/AsrulLove/img-db/master/field-release.png]

Kemudian upload apk dan lakukan release, yang diapload adalah hasil release yang ada dalam folder proyek `minibioapp/android/app/build/outputs/apk/release`.

![Upload](https://raw.githubusercontent.com/AsrulLove/img-db/master/upload-apk.png)

Setelah dipload, maka lakukan cek ulang apakah semua field yang dibutuhkan google play udah tercentang? jika sudah, pilih `Buat Rilis`.

![Menunggu](https://raw.githubusercontent.com/AsrulLove/img-db/master/tunggu.png)

Jika masa pemeriksaan untuk verfifkasi aplikasi oleh google selesai maka aplikasi akan terpublish dan bisa didownload.

![Publised](https://raw.githubusercontent.com/AsrulLove/img-db/master/publis-lo.png)

Bisa cek dan download segera di https://play.google.com/store/apps/details?id=com.minibioapp

## Hari 30
Update: Senin, 10 Februari 2020

Alhamdulillah kita telah bersama belajar javascript selama 30 hari, mengucapkan banyak terimakasih telah menjadi bagian dari penyelesaian tulisan series ini.

Saya tidak menjanjikan Anda bisa menjadi hebat javascript dengan mengikuti 30 hari javascript, tapi dengan mengikutinya dengan baik akan menjadikan sebuah kebiasaan untuk Anda, karena untuk membentuk sebuah kebiasaan adalah dengan melakukan aktifitas itu berulang minimal selama 21 hari, dan dengan 30 hari javascript insya Allah kebiasaan koding akan terjadi karena kita konsisten mengikutinya selama 30 hari.

Selanjutnya saya akan menulis series **Vue 14 Hari** yang tayang setiap senin - jumat dan membahas VUE JS secara sederhana hingga bisa menghasilkan sebuah karya. Ikuti teru yah :)