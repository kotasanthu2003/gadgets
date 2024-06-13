const express = require('express')
const app = express()
app.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
  console.log(response)
})
module.exports = app
app.listen(3000)
