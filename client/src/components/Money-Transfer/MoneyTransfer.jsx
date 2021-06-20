import React, { Component } from "react";
import axios from "axios";
import "./MoneyTransfer.css";

export default class MoneyTransfer extends Component {
  state = {
    customers: [],
    senderId: "",
    receiverId: "",
    amount: 0,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/customers")
      .then((res) => {
        this.setState({ customers: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleReceiverChange(e) {
    this.setState({ receiverId: e.target.value });
  }

  handleSenderChange(e) {
    this.setState({ senderId: e.target.value });
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.senderId || !this.state.receiverId || !this.state.amount) {
      return;
    }

    const data = {
      senderId: this.state.senderId,
      receiverId: this.state.receiverId,
      amount: this.state.amount,
    };

    axios
      .post("http://localhost:5000/money-transfer/", data)
      .then((res) => console.log(res))
      .then((window.location = "/Transactions"))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form className="container-fluid main my-4 w-75 needs-validation">
        <div className="top p-4 d-flex justify-content-center">
          Money-Transfer
        </div>

        <div className="d-flex w-100 my-2">
          <div className="col-md-6 px-2">
            <label for="senderDetails" className="form-label">
              Sender
            </label>
            <select
              id="senderDetails"
              className="form-select"
              value={this.state.senderId}
              onChange={this.handleSenderChange.bind(this)}
              required
            >
              <option value="" selected>
                Choose...
              </option>
              {this.state.customers.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 px-2">
            <label for="receiverDetails" className="form-label">
              Recipient
            </label>
            <select
              id="receiverDetails"
              className="form-select"
              onChange={this.handleReceiverChange.bind(this)}
              required
            >
              <option value="" selected>
                Choose...
              </option>
              {this.state.customers.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-group px-2">
          <label for="amount" className="form-label">
            Amount
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">₹</span>
            <input
              id="amount"
              type="number"
              class="form-control"
              onChange={this.handleAmountChange.bind(this)}
              aria-label="Dollar amount (with dot and two decimal places)"
              required
            />
            <span className="input-group-text">.00</span>
          </div>
        </div>
        <div class="col-12">
          <button
            class="btn btn-primary"
            type="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            Transfer
          </button>
        </div>
      </form>
    );
  }
}
