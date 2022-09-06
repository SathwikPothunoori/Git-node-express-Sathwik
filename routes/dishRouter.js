// express router comes together with express so don't need to install again
const express = require('express')

const bodyParser = require('body-parser')

const dishRoute =express.Router()

dishRoute.use(bodyParser.json())
dishRoute.route('/')
.all((req , res ,next)=>{
    res.statusCode =200
    res.setHeader('Content-Type','text/plain')
    // when we modify the req/res here and call next() 
    //the modified obj are carried on to next calls
    next()
})
.get((req , res ,next)=>{
    res.end('The dishes are being made will send you soon!')
} )
.post((req , res ,next)=>{
    res.end('Will add the dish ' +req.body.name +' with deatials ' +req.body.description)

} )
.put((req , res ,next)=>{
    res.statusCode =403
    res.end('PUT operatoin not supported on /dishes')

} )

.delete((req , res ,next)=>{
    res.end('Deleting all the dishes!')
} )

module.exports =dishRoute