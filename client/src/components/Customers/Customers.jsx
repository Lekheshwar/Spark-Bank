import React, { Component } from "react";
import axios from "axios";
import "./Customers.css";

export default class Customers extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/customers")
      .then((res) => {
        console.log(res);
        this.setState({ customers: res.data });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid main my-4 d-flex flex-column align-items-center">
        <div className="top p-4 d-flex justify-content-center">
          Our Customers
        </div>
        <div className="tables">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Account No</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customer) => (
                <tr>
                  <th scope="row">{customer.account_no}</th>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function Customers() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/customers")
//       .then((res) => {
//         const data = res.data;
//         setCustomers({ data: data });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     console.log(customers);
//   }, [customers]);

//   return (
//     <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
//       <div className="top">Customers</div>
//       <div className="tables">
//         <table class="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th scope="col">Account No</th>
//               <th scope="col">Name</th>
//               <th scope="col">E-mail</th>
//               <th scope="col">Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.data.map((customer) => (
//               <tr>
//                 <th scope="row">{customer.account_no}</th>
//                 <td>{customer.name}</td>
//                 <td>{customer.email}</td>
//                 <td>{customer.balance}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
