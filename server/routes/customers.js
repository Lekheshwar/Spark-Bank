const router = require('express').Router();

let Customers = require('../data').data;

router.route("/").get((req, res) => {
    res.status(200).send(Customers);
})

router.route("/add").post((req, res) => {
    console.log(Customers);
    Customers.push(req.body);
    res.send("Added successfull");
    console.log(Customers);
})

module.exports = router;