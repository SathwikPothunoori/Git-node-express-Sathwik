const express = require('express');

const http = require('http');

const bodyParser = require('body-parser')


// morgan will basically log on additinal information on the screen
const morgan = require('morgan')
const hostname ='localhost'

const port =3000

const app =express()

app.use(morgan('dev'))

app.use(bodyParser.json()) //this parses the json thing and will be added to req object as req.body

app.all('/dishes' , (req , res ,next)=>{
    res.statusCode =200
    res.setHeader('Content-Type','text/plain')
    // when we modify the req/res here and call next() 
    //the modified obj are carried on to next calls
    next()
})

app.get('/dishes' ,(req , res ,next)=>{
    res.end('The dishes are being made will send you soon!')
} )

app.post('/dishes' ,(req , res ,next)=>{
    res.end('Will add the dish ' +req.body.name +' with deatials ' +req.body.description)

} )

app.put('/dishes' ,(req , res ,next)=>{
    res.statusCode =403
    res.end('PUT operatoin not supported on /dishes')

} )

app.delete('/dishes' ,(req , res ,next)=>{
    res.end('Deleting all the dishes!')
} )

app.get('/dishes/:dishId' ,(req , res ,next)=>{
    res.end('The dishes are being made will send detials of the dish '+ req.params.dishId+' you soon!')
} )

app.post('/dishes/:dishId' ,(req , res ,next)=>{
    res.statusCode =403
    res.end('POST operatoin not supported on /dishes/:'+req.params.dishId)

} )

app.put('/dishes/:dishId' ,(req , res ,next)=>{
    res.write("updating the dish"+req.params.dishId+'\n')
    
    res.end('Will update the dish ' +req.body.name+' with deatials ' +req.body.description)


} )

app.delete('/dishes/:dishId' ,(req , res ,next)=>{
    res.end('Deleting  the dish!'+req.params.dishId)
} )

app.use(express.static(__dirname +'/public')) //this will be the page from where static html files will be served


app.use((req , res  , next)=>{
    //console.log(req.headers)
     res.statusCode=200
     res.setHeader('Content-Type','text/html')
     res.end('<html><body><h1>Hello from express server</h1></body></html>')
})

const server = http.createServer(app)

server.listen(port, hostname , ()=>{
    console.log(`Serverf running at http://${hostname}:${port}`)
})

