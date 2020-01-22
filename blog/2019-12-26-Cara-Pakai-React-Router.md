---
id: cara-pakai-react-router
title: Cara Pakai React Router
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [react, react-router, frontend]
---

React router dom adalah library yang digunakan untuk react js yang berfungsi mengelola lalu lintas atau rute pada web..

Sebelum memulai lebih lanjut, mari kita install dependensi yang diperlukan.

```bash
yarn add react-router-dom
```

<!--truncate-->

### Helper penting pada `react-router-dom`
1. BrowserRouter, untuk membungkus sebagai canvas tempat router dijalankan
2. Switch, untuk menjadikan 404 sebagai hal yang ditampilkan hanya ketika dibutuhkan saja (untuk membungkus `Route`)
3. Route, component yang dijalankan sebagai alamat yang dituju
4. Link, alamat yang akan dituju ini seperti (`<a href...`)

### Cara Pakai React Router Dom
```javascript
import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './src/Page/Home'
import About from './src/Page/About'
import NotFound from './src/Page/404'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />          
              <Route component={NotFound} />  
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
```

### Mengirim params dari router
Init params yang akan ditrigger, contoh disini `:name`
```javascript
<Route path='/about/:name' exact component={AboutView} />
```

Init params diterima dalam `props` dengan nama `match`, lalu gunakan dengan `match.params.` + nama init params

```javascript
function AboutView({ match }) {
  return <h2>About {match.params.name} </h2>
}
```

### Router sebagai object
```javascript
const routes = [{
  path: '/',
  component: HomePage,
}, {
  path: '/Teachers',
  component: TeacherListPage,
}, {
  path: '/Teachers/:teacherId',
  component: TeacherPage,
}, {
  path: '/Teachers/:teacherId/Classes',
  component: TaughtClassesPage,
}, /* And so on. */];
```

Pada App.js

```javascript
class App extends Component {
  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <BrowserRouter>
        {routeComponents}
        </div>
      </BrowserRouter>
    );
  }
}
```