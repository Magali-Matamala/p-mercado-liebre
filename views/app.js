const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path')

const rutaPublic = path.join(__dirname, '../public');
const static = express.static(rutaPublic);
app.use(static)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
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