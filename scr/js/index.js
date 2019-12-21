// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'
const Header = require('./header.js')
const Sidebar = require('./sidebar.js')
const Content = require('./content.js')
const Images = require('../images/01.jpg')
// import '../css/index.css'
import fuben from './index-fuben.js'
import stylus from '../css/index2.stylus'
import '../css/iconfont.css'
fuben()
console.log(Images)
var dom = document.getElementById('root')
let img = new Image

img.src = Images
img.className = stylus.active
dom.append(img)
var div = document.createElement('div')
div.className = 'iconfont'
div.classList.add('icon-gouwuche')
document.body.appendChild(div)
new Header()
new Sidebar()
new Content()
consele.log(123456)