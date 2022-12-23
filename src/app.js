const express = require('express')
const hbs = require('hbs')
const path = require('path')
const weatherInput = require('../weather/weatherInput')

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Node Weather App',
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address
    if(!address) {
        return res.send({
            error: "You must enter address in search text box"
        })
    }

    weatherInput(address, (error, {temperature, description, cityName} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
})

app.get("*", (req, res) => {
    res.render('404', {
        title: "page not found"
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is up and running on port:", port);
})