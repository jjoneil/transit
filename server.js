var express  = require('express')
var app      = express()
var port     = 8080

app.use(express.static('./public'))

app.listen(port, function(){
	console.log(`http://localhost:${port}`)
})