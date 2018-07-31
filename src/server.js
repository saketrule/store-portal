const express = require('express')
const app = express()

// Saket : I have temporarily made the src folder static for dev purposes
// Later add public folder for serving static files
app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})