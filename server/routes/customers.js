const router = require('express').Router();

let Customers = require('../data').data;

router.route("/").get((req, res) => {
    res.status(200).send(Customers);
})

router.route("/addUser").post((req, res) => {
    console.log(Customers);
    Customers.push(req.body);
    res.send("Added successfull");
    console.log(Customers);
})

router.route("/removeUser").post((req, res) => {
    console.log(Customers);
    Customers = Customers.filter(user => req.body.accountNo !== user.accountNo);
    res.send("Removed successfull");
    console.log("removed")
    console.log(Customers);
})

module.exports = router;