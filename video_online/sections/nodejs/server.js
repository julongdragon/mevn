const http = require('http')
const fs = require('fs')
fs.readFile('index.html', function(error, html) {

    http.createServer(function(request, response) {
        response.writeHeader(200, { 'Content-type': 'text/html' })
        response.write(html)
        response.end()
    }).listen(3000, "localhost")

})