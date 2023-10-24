// deposit

// withdraw

// transfer

// list of transfers

// list of users

import React from "react";
import Deposite from "../components/Deposite";
import Withdraw from "../components/Withdraw";
import Transfer from "../components/Transfer";
import NavBar from "../components/NavBar";
import UsersList from "../components/UsersList";

const Transactions = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row flex-wrap gap-2 mt-10 justify-center">
        <Deposite />
        <Withdraw />
        <Transfer />
        <UsersList />
      </div>
    </div>
  );
};

export default Transactions;
