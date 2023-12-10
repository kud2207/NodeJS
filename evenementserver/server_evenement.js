let http = require('http')

 http.createServer().on('request', (request, reponce) =>{
    reponce.writeHead(200)
    reponce.end(`Wep BAO suis la`)
}).listen(5500)