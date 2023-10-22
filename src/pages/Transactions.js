// deposit

// withdraw

// transfer

// list of transfers

// list of users

import React from "react";
import { putDeposit } from "../api/profile";
import { useMutation } from "@tanstack/react-query";

import React from "react";

const Transactions = () => {
  //   deposit
  const Deposit = () => {
    const [isInput, setIsInput] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);

    const { mutate: deposit_mutate } = useMutation({
      mutationKey: ["deposit"],
      mutationFn: () => putDeposit(depositAmount),
      onSuccess: () => {
        setDepositAmount(0);
        alert(`You have successfully Deposit ${depositAmount} K.D.`);
      },
    });
    return <div></div>;
  };
};
export default Transactions;
