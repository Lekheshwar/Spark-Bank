const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transcationSchema = new Schema({
    sender_acc: {type : String, require: true},
    sender_name: {type: String, require: true},
    receiver_acc: {type: String, require: true},
    receiver_name: {type: String, require: true},
    amount: {type: Number, require: true},
    time: {type: Date, require: true},
    status: {type: String, require: true}
});

const Transaction = mongoose.model('Transaction', transcationSchema);

module.exports = Transaction;
