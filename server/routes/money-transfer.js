const router = require("express").Router();
const Customer = require("../models/customer.model");
const Transaction = require("../models/transaction.model");

router.route("/").get((req, res) => {
  console.log(req.body);
  res.status(200).send("Transfer Success!!");
});

router.route("/").post((req, res) => {
  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;
  const amt = Number(req.body.amount);


  const sender = Customer.findById(senderId)
    .then((customer) => json(customer))
    .catch((err) => res.status(400).json("Error : " + err));

  console.log(sender);


  const receiver = Customer.findById(receiverId)
    .then((customer) => json(customer))
    .catch((err) => res.status(400).json("Error : " + err));

  const sender_acc = sender.account_no;
  const sender_name = sender.name;
  const receiver_acc = receiver.account_no;
  const receiver_name = receiver.name;
  const amount = amt;
  const time = new Date();
  const status = sender.balance < amt ? "Failed" : "Success";

  const transaction = new Transaction({
    sender_acc,
    sender_name,
    receiver_acc,
    receiver_name,
    amount,
    time,
    status,
  });

  if (sender.balance >= amount) {
    console.log("inside");
    Customer.findByIdAndUpdate(receiverId, { balance: balance + amount })
      .then()
      .catch((err) => res.status(400).json("Error :" + err));

    Customer.findByIdAndUpdate(senderId, { balance: balance - amount })
      .then()
      .catch((err) => res.status(400).json("Error :" + err));
  }

  transaction
    .save()
    .then(() => res.status(200).send(status))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
