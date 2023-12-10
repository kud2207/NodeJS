let http  = require('http') //Initie HTTP dans la variable http

let server = http.createServer() //Cree server comme istance de http

server.on('request', (request, reponce) =>{  //Notre fontion
    reponce.writeHead(200, {
        'content-type' : 'text/html ;  charset =utf-8' 
    })
    reponce.end('salut boss éé ?')

})
server.listen(8080) //Execute notre serveur sur le port 8080

