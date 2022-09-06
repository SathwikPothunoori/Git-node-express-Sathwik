const express = require('express');

const http = require('http');
// morgan will basically log on additinal information on the screen
const morgan = require('morgan')
const hostname ='localhost'

const port =3000

const app =express()

app.use(morgan('dev'))

app.use(express.static(__dirname +'/public')) //this will be the page from where static html files will be served


// app.use((req , res  , next)=>{
//     //console.log(req.headers)
//      res.statusCode=200
//      res.setHeader('Content-Type','text/html')
//      res.end('<html><body><h1>Hello from express server</h1></body></html>')
// })

const server = http.createServer(app)

server.listen(port, hostname , ()=>{
    console.log(`Serverf running at http://${hostname}:${port}`)
})

