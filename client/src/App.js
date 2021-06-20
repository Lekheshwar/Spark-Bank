import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Customers from "./components/Customers/Customers";
import Transactions from "./components/Transactions/Transactions";
import MoneyTransfer from "./components/Money-Transfer/MoneyTransfer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Customers" component={Customers} />
        <Route exact path="/Transactions" component={Transactions} />
        <Route exact path="/Money-Transfer" component={MoneyTransfer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
