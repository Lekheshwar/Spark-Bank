const router = require("express").Router();
const Customer = require("../models/customer.model");
const Transaction = require("../models/transaction.model");

router.route("/").get((req, res) => {
  console.log(req.body);
  res.status(200).send("Transfer Success!!");
});


/* In the route money-transfer/ you are receiving sender's 
ID and 
receiver's ID and the amount. The the data of the sender then
get the data of the receiver then make the necessary transaction.
*/
router.route("/").post((req, res) => {
  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;
  const amt = Number(req.body.amount);

  let sender;
  let receiver;

  Customer.findById(senderId)
    .then((customer) => {
      sender = customer;
      getReceiver();
    })
    .catch((err) => res.status(400).json("Error : " + err));

  function getReceiver() {
    Customer.findById(receiverId)
      .then((customer) => {
        receiver = customer;
        transact();
      })
      .catch((err) => res.status(400).json("Error : " + err));
  }

  function transact() {
    console.log(sender, receiver);
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
      Customer.findByIdAndUpdate(receiverId, { balance: receiver.balance + amount })
        .then()
        .catch((err) => res.status(400).json("Error :" + err));

      Customer.findByIdAndUpdate(senderId, { balance: sender.balance - amount })
        .then()
        .catch((err) => res.status(400).json("Error :" + err));
    }

    transaction
      .save()
      .then(() => res.status(200).send(status))
      .catch((err) => res.status(400).json("Error :" + err));
  }
});

module.exports = router;
