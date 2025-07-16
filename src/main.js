// import { addFunc } from './tools/index.js'
// console.log(addFunc(2, 3))
// import './style/home.css'
// const imgIcon = require('./images/computer.jpg')

// const el = document.createElement('div')
// el.className = 'title'
// el.innerHTML = '这是阿云的标题'
// document.body.appendChild(el)

// const compImg = document.createElement('img')
// compImg.src = imgIcon
// document.body.appendChild(compImg)

import Home from './pages/home.vue'
import { createApp } from 'vue'
const app = createApp(Home)
app.mount('#appID')