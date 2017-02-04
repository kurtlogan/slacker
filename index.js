var express = require('express')

var app = express()

app.get('/', (request, response) => {
    response.send("Server active!")
})

app.post('/pushbutton', () => {
    console.log('button pushed')
})

app.listen(3000, () => {
    console.log("Server listening on port 3000!")
})