---
id: express-react-real-time
title: Real Time Web dengan Express dan React Js
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, react, express, websocket, realtime]
---

Postingan ini dibuat untuk materi sharing session di Flock Company.

Ada banyak cara untuk membuat aplikasi yang realtime seperti firebase database, websocket, pusher, dll. Pada kali ini saya akan membahas web socket.

<!--truncate-->

![Web Socket](https://raw.githubusercontent.com/AsrulLove/img-db/master/socket-io.png)

### Server
Pada sisi server (nodejs), kita membutuhkan beberapa library yaitu: 

- express
- cors
- socket.io

Folder proyek ini dengan saya beri nama **appsocket**. Setelah folder dibuat arahkan terminal ke folder tersebut dengan cara:

```bash
cd ~/Desktop/appsocket
```

Folder proyek saya berada di Desktop, jika berbeda dengan saya silahkan disesuaikan. Jika sudah diarahkan pada terminal, selanjutnya lakukan inisial proyek node js dengan perintah berikut.

```bash
npm init
```

Proses ini dilakukan untuk membuat sebuah file `package.json` yang berguna untuk mengontrol proyek node js. Berikut isi file `package.json` yang dihasilkan.

```json
{
  "name": "appsocket",
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

Install express dan beberapa dependensi lainnya dengan perintah berikut:

```bash
npm i express
npm i cors
npm i socket.io
```

Setelah diinstall kita dapat melihat perubahan pada file `package.json` menjadi seperti berikut.

```json
{
  "name": "appsocket",
  "version": "1.0.0",
  "description": "belajar expres bersama asrul.dev",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Asrul harahap",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "socket.io": "^2.3.0"
  }
}
```

Buatlah file `index.js` dalam folder proyek yang telah kita buat sebelumnya dengan kode berikut.

```js
const express = require("express")
const app = express()
const server = require("http").createServer(app)
const socket = require("socket.io")
const io = socket(server)
const cors = require('cors')

const port = 8080 || process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let data = []
app.all('/', (req, res) => {
    const topic = "asrul-dev"

    let pesan = req.body.pesan
    let ip = req.connection.remoteAddress
    let waktu = new Date()

    data.push({pesan, ip, waktu})

    io.emit(topic, data)
    res.json("JALAN DONG....")
})

server.listen(port, console.log('running'))
```

Jalankan server dengan perintah berikut.

```bash
node index.js
```

Anda juga bisa membaca materi express di [sini](https://asrul.dev/docs/30daysweb#install-express-js)

### Client

Pada Aplikasi client yang menggunakan react js, agar lebih cepat dalam instalasi silahkan gunakan CRA (create-react-app) saja.

Install CRA dengan perintah berikut.

```bash
npx create-react-app reactsocket
```

Kemudian install library socket untuk client dan axios untuk http request dengan cara berikut.

```bash
npm i socket.io-client
npm i axios
```

Buatlah file custom hooks untuk socket io, dengan nama `useSocket.js` yang isi kodenya seperti berikut.

```js
import React, { useEffect, useState } from "react"
import socket from "socket.io-client"

const useSocket = (serverUrl, topic) => {
  const [msg, setMsg] = React.useState(null)
  const [isConnected, setConnected] = useState(false)

  const client = socket.connect(serverUrl)
  client.on("connect", () => setConnected(true))
  client.on("disconnect", () => setConnected(false))

  useEffect(() => {
    client.on(topic, data => {
        setMsg(data)
    })
  }, [topic, client])
  return { msg, isConnected }
}

export default useSocket
```

Kemudian buatlah file dengan nama `Socket.js` yang isinya seperti berikut.

```js
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import useSocket from "./useSocket";
import Axios from "axios";

const Sockt = ({ serverUrl, topic }) => {
  const { msg, isConnected } = useSocket(serverUrl, topic)

  const [pesan, setPesan] = useState('')

  const sendMessage = e =>  {
    e.preventDefault()
    if(pesan.trim() !== '') {
        Axios.post('http://localhost:8080', {pesan})
    } 
    window.scrollTo(0,document.body.scrollHeight)
    setPesan('')
  }

  return ( 
    <Fragment>
        <h2>You are {isConnected ? 'online' : 'offline'}</h2>

        {msg !== null && msg.map( (item, index) => (
            <div className="container" key={index}>
                <img src="https://avatars.io/twitter/asruldev" alt="Avatar" style={{width:'100%'}} />
                <p> {item.pesan} </p>
                <span className="time-right">{ item.waktu } - by { item.ip }</span>
            </div>
        ))}

        <form className="stycky-bottom" onSubmit={e => sendMessage(e)}>
            <input type="text" onChange={e => setPesan(e.target.value)} />
            <button onClick={e => sendMessage(e)}>Send</button>
        </form>
    </Fragment>
  );
};

Sockt.propTypes = {
  serverUrl: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired
};

export default Sockt;
```

File `App.js` yang isinya seperti berikut.

```js
import React from 'react';
import './App.css'
import Sockt from "./Socket";

function App() {
  return (
    <div className="App">
      <Sockt
        serverUrl="http://localhost:8080/"
        topic="asrul-dev"
      />
    </div>
  );
}

export default App;
```

Tambahan file `App.css` isinya seperti berikut.

```App.css
body {
  margin: 40px auto;
  max-width: 800px;
  padding: 40px;
}

.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

.darker {
  border-color: #ccc;
  background-color: #ddd;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

.time-right {
  float: right;
  color: #aaa;
}

.time-left {
  float: left;
  color: #999;
}

.stycky-bottom {
  height: 30px;
  background: gray;
  width: 100%;
  position: sticky; 
  bottom: 30px;
}

input {
  width: 88%;
  height: 30px;
}
button {
  width: 10%;
  height: 30px;
}
```

Sehingga Hasilnya akan seperti berikut.

![Hasil Web Socket](https://raw.githubusercontent.com/AsrulLove/img-db/master/hasil-real-time.gif)