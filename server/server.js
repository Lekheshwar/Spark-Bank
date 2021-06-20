const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(require("cors")());
require("dotenv").config();

const PORT = 5000;
const URI = process.env.ATLAS;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", (req, res) => {
  console.log("MongoDB database connection estd succesfully!!");
});

const customrerRouter = require("./routes/customers");
const moneyTransferRouter = require("./routes/money-transfer");
const transactionsRouter = require("./routes/transactions");

app.use("/customers", customrerRouter);
app.use("/money-transfer", moneyTransferRouter);
app.use("/transactions", transactionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});
