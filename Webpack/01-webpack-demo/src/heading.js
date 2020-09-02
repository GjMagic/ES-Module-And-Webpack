import './heading.css'
console.log('1231111')
export default () => {
  const oH2 = document.createElement('h2')

  oH2.textContent = 'Hello World11'
  oH2.classList.add('heading')
  oH2.addEventListener('click', () => {
    alert('Hello Webpack')
  })

  alert('12311')

  return oH2
}