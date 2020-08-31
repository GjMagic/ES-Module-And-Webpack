import './heading.css'

export default () => {
  const oH2 = document.createElement('h2')

  oH2.textContent = 'Hello World111'
  oH2.classList.add('heading')
  oH2.addEventListener('click', () => {
    alert('Hello Webpack')
  })

  return oH2
}