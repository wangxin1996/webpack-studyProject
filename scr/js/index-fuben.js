const Images = require('../images/01.jpg')
function fuben(){
  var dom = document.getElementById('root')
  let img = new Image

  img.src = Images
  img.className = 'active'
  dom.append(img)
}


export default fuben;