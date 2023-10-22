// deposit

// withdraw

// transfer

// list of transfers

// list of users

import React from "react";
import Deposite from "../components/Deposite";
import Withdraw from "../components/Withdraw";
import Transfer from "../components/Transfer";

const Transactions = () => {
  return (
    <div>
      <Deposite />
      <Withdraw />
      <Transfer />
    </div>
  );
};

export default Transactions;
