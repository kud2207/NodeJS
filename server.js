let http  = require('http') //Initie HTTP dans la variable http
let fs = require('fs') //Initie le module fs (pour lire les ficjier)

let server = http.createServer() //Cree server comme istance de http

server.on('request', (request, reponce) =>{  //Notre fontion

    fs.readFile('index.html', (err, data) =>{ // "err => prend en paramettre erro" "data =>prend en paramettre la page a lir"
        if (err) {
           /* reponce.writeHead(404)
            reponce.end('ERROR 404')*/
            fs.readFile('erro.html', (err1, data1) =>{
                reponce.writeHead(404)
            reponce.end(data1)
            })
        }
        else{
            reponce.writeHead(200, {
                'content-type' : 'text/html ;  charset =utf-8' 
            })
            reponce.end(data)
        
        }
        
    })
})
server.listen(8080) //Execute notre serveur sur le port 8080

