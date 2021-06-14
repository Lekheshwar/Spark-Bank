const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    account_no: {type: String, require: true},
    name: { type: String, require: true },
    email: { type: String, require: true },
    gender: {type: String, require: true},
    balance: {type: Number, require: true},
    date_of_birth: { type: Date, requier: true }
}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;