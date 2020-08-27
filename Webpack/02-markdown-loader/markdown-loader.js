const marked = require('marked')

module.exports = source => {
  /* console.log(source)
  return 'console.log("hello ~")' */
  const html = marked(source)
  return html
}