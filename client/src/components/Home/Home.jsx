import React from "react";
import "./Home.css";
import logo from "../../images/banking.svg";
import moneytranseferlogo from "../../images/moneytransfer.svg";
import customers from "../../images/customers.svg";
import transactions from "../../images/transactions.svg";

export default function Home() {
  return (
    <>
      <div className="container-fluid py-1">
        <div className="col">
          <div className="main d-flex justify-content-between">
            <div className="left d-flex justify-content-center align-items-center">
              <p className="intro">
                <p className="big">Security comes first.</p>
                We are a non-profit organization with a mission to safeguard
                your wealth.
              </p>
            </div>
            <div className="right">
              <img className="svg-image" src={logo} alt="bank image" />
            </div>
          </div>
          <div className="services d-flex justify-content-center align-items-center flex-column">
            <div className="medium">Explore</div>
            <div className="service d-flex justify-content-between py-5">
              <div className="my-card">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img className="card-img" src={moneytranseferlogo} />
                  <div className="card-text">
                    Sending money have never been so secure, and seamless. Send
                    money with <strong> ₹0.00</strong> service charges.
                  </div>
                  <div className="d-flex my-2 justify-content-center">
                    <button type="button" class="btn btn-outline-primary">
                      Transfer Money
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-card">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img className="card-img" src={customers} />
                  <div className="card-text">
                    30+ happy customers have <br /> made over 3000+ successfull
                    transactions.
                  </div>
                  <div className="d-flex my-2 justify-content-center">
                    <button type="button" class="btn btn-outline-primary">
                      Our Customers
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-card">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img className="card-img" src={transactions} />
                  <div className="card-text">
                    Now manage all your transactions in just a single click.View
                    all your transactions at a single place.
                  </div>
                  <div className="d-flex my-2 justify-content-center">
                    <button type="button" class="btn btn-outline-primary">
                      View Transactions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
