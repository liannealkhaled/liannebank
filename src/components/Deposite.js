import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { putDeposit } from "../api/profile";

const Deposite = () => {
  const [amount, setAmount] = useState("");
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    if (e.target.value > 0) {
      setAmount(e.target.value);
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["deposite"],
    mutationFn: () => putDeposit(amount),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });

  return (
    <div className="h-[100px] bg-lime-400 border-[2px] flex flex-col justify-center items-center gap-1">
      <h1> DEPOSITE</h1>
      <input value={amount} onChange={handleChange} placeholder="AMOUNT" />
      <button onClick={mutate}> submit </button>
    </div>
  );
};

export default Deposite;
