const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path')

const rutaPublic = path.join(__dirname, '../public');
const static = express.static(rutaPublic);
app.use(static)

app.listen(3030,()=>{
    console.log('Servidor funcionando')
})
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})


app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, 'register.html'))
})

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, 'login.html'))
})