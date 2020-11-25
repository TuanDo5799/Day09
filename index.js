const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
}).listen(3001)

console.log('Server opened in port 3001')
console.log(__dirname)
