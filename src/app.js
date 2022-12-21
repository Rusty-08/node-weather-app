const express = require('express')
const hbs = require('hbs')
const path = require('path')
const weatherInput = require('../weather/weatherInput')

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    
    res.send("This is for checking our server")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is up and running on port:", port);
})