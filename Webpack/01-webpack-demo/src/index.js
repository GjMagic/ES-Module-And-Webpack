import createHeading from './heading.js'
import './index.css'
import avatar from './avatar.png'

const heading = createHeading()

document.body.append(heading)

const img = new Image()
img.src = avatar

document.body.append(img)