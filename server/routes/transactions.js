const router = require("express").Router();
const Transaction = require("../models/transaction.model");

router.route("/").get((req, res) => {
  Transaction.find()
    .then((Transactions) => res.status(200).json(Transactions))
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
