const express = require('express');
const app = express();

app.use(express.json());


const customers = require('./data').data;


// HOME PAGE
app.get('/', (req, res) => {
    res.status(200).send("Home");
})

// CUSTOMERS LIST
app.get('/customers-list', (req, res) => {
    res.status(200).send(customers);
})

// ADD NEW USER
app.post('/add-user', (req, res) => {
    console.log(req.body);
    res.send("done");
})

// MONEY TRANSFER
app.get('/money-transfer', (req, res) => {
    res.status(200).send("Called money transfer");
})

// 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send("Welcome to no where!!");
})


app.listen(5000, () => {
    console.log(`listening on port 5000.`)
})

