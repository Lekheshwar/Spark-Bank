const express = require("express");
const bodyParse = require('body-parser');
const app = express();
app.use(bodyParse.json());
const PORT = 5000;

const customrerRouter = require('./routes/customers');
const moneyTransferRouter = require('./routes/money-transfer');
const transactionsRouter = require('./routes/transactions');


app.use("/customers", customrerRouter);
app.use("/money-transfer", moneyTransferRouter);
app.use("/transactions", transactionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`)
})


// // HOME PAGE
// app.get('/', (req, res) => {
//     res.status(200).send("Home");
// })

// // CUSTOMERS LIST
// app.get('/customers-list', (req, res) => {
//     res.status(200).send(customers);
// })

// // ADD NEW USER
// app.post('/add-user', (req, res) => {
//     console.log(req.body);
//     res.send("done");
// })

// // MONEY TRANSFER
// app.get('/money-transfer', (req, res) => {
//     res.status(200).send("Called money transfer");
// })

// // 404 PAGE
// app.get('*', (req, res) => {
//     res.status(404).send("Welcome to no where!!");
// })
