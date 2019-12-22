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
console.log(12345678)

// 模块热更新
var btn = document.createElement('button')
btn.setAttribute('id','btnId')
btn.innerHTML = '添加'
dom.appendChild(btn)
var btnId = document.getElementById('btnId')
btnId.onclick = function(){
  var htmlDiv = document.createElement('div')
  htmlDiv.setAttribute('class','htmlDiv')
  dom.appendChild(htmlDiv)
}
console.log(btnId)
import '../css/index.css'

if(module.hot){
  module.hot.accept('./header.js',() => {
    Header()
  })
}