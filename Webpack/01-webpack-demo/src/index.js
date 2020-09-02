import createHeading from './heading.js'
import './index.css'
import avatar from './avatar.png'

const heading = createHeading()

document.body.append(heading)

const img = new Image()
img.src = avatar

document.body.append(img)

if (module.hot) {
  module.hot.accept('./heading', () => {
    console.log('heading 模块加载完毕!')
  })
}