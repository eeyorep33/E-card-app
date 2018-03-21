const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const card_items = require('./test_data')
const email = require("emailjs");
require('dotenv').config()
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
console.log(process.env.DB_HOST)

const server = email.server.connect({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    ssl: true 
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE, OPTIONS")
    next();
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
})
app.get('/cards', (req,res)=>{
    console.log(card_items)
    res.send(card_items)
})
app.post('/createdCard', (req, res) => {
    
          res.send("card sent!")
    })
// server.send({
//     text: "i hope this works",
//     from: "eeyorep33@gmail.com",
//     to: "eeyorep33@gmail.com",
//     cc: "",
//     subject: "testing emailjs"
// }, function (err, message) { console.log(err || message); });

