const router = require("express").Router();
const Customer = require("../models/customer.model");

let Customers = require("../data").data;

router.route("/").get((req, res) => {
  Customer.find()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addUser").post((req, res) => {
  const customer = req.body;

  const account_no = customer.account_no;
  const name = customer.name;
  const email = customer.email;
  const gender = customer.gender;
  const date_of_birth = Date(customer.date_of_birth);
  const balance = Number(customer.balance);

  const newCustomer = new Customer({
    account_no,
    name,
    email,
    gender,
    date_of_birth,
    balance,
  });

  newCustomer
    .save()
    .then(() => res.json("Added Customer"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  console.log(req.params);
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Customer Deleted"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/:id").get((req, res) => {
  Customer.findById(req.params.id)
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
