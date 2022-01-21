const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT||3000

app.use(express.static(__dirname+"/views"))

app.get('/', (request, response)=>{
    response.sendFile(__dirname+"/views/index.html")
})

app.get('/AddToList', (request, response)=>{
    response.sendFile(__dirname+"views/AddToList.html")
})

app.get('/Login', (request, response)=>{
    response.sendFile(__dirname+"views/Login.html")
})

app.get('/haha', (request, response)=>{
    response.sendFile(__dirname+"views/haha.html")
})

app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})