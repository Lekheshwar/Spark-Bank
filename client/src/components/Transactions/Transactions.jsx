import React, { Component } from "react";
import axios from "axios";
import "./Transactions.css";

export default class Transactions extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/transactions")
      .then((res) => {
        this.setState({ transactions: res.data });
      })
      .catch((err) => console.log(err));
  }

  getTimeDate(date) {
    const currentDate = new Date(date);
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();

    const dateString =
      currentDate.toLocaleTimeString("it-IT") +
      " " +
      currentDayOfMonth +
      "-" +
      (currentMonth + 1) +
      "-" +
      currentYear;
    return dateString;
  }

  render() {
    return (
      <div className="container-fluid main my-4 d-flex flex-column align-items-center">
        <div className="top p-4 d-flex justify-content-center">
          Transactions History
        </div>
        <div className="tables">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Sender's Acc</th>
                <th scope="col">Sender's Name</th>
                <th scope="col">Receiver's Acc</th>
                <th scope="col">Receiver's Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Time and Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transactions.map((transaction) => (
                <tr
                  className={
                    transaction.status === "Success"
                      ? "table-success"
                      : "table-danger"
                  }
                >
                  <th scope="row">{transaction.sender_acc}</th>
                  <td>{transaction.sender_name}</td>
                  <td>{transaction.receiver_acc}</td>
                  <td>{transaction.receiver_name}</td>
                  <td>{transaction.amount}</td>
                  <td>{this.getTimeDate(transaction.time)}</td>
                  <td>{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
