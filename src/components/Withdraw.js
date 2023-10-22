import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { putWithdraw } from "../api/profile";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    if (e.target.value > 0) {
      setAmount(e.target.value);
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["withraw"],
    mutationFn: () => putWithdraw(amount),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });

  return (
    <div className="h-[100px] bg-lime-400 border-[2px] flex flex-col justify-center items-center gap-1">
      <h1> WITHDRAW</h1>
      <input value={amount} onChange={handleChange} placeholder="AMOUNT" />
      <button onClick={mutate}> submit </button>
    </div>
  );
};

export default Withdraw;
