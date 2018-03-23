const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const card = require('../routes/cardRoute')
const createdCard = require('../routes/createdCardRoute')
const email = require("emailjs");
require('dotenv').config()


const server = email.server.connect({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    ssl: true
});
app.use(express.static(__dirname + './../build'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE, OPTIONS")
    next();
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
})
card(app)
createdCard(app, server)

 app.get('*', (req, res) => {
     res.sendFile('index.html', { root: __dirname + './../build' })
 })

