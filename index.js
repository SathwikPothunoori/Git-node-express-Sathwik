const express = require('express');

const http = require('http');

const hostname ='localhost'

const port =3000

const app =express()

app.use((req , res  , next)=>{
    //  console.log(req.headers)
     res.statusCode=200
     res.contentType('Content-Type','tyext/html')
     res.end('<html><body><h1>Hello from express server</h1></body></html>')
})

const server = http.createServer(app)

server.listen(port, hostname , ()=>{
    console.log(`Serverf running at http://${hostname}:${port}`)
})