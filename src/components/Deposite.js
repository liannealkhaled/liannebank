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
      queryClient.invalidateQueries("profile");
    },
  });

  return (
    <div className=" w-[400px] h-[150px] border-black border-[2px] flex flex-col justify-center items-center gap-1 rounded-md">
      <h1 className=" font-mono text-[20px] font-bold"> DEPOSITE</h1>
      <input
        className="w-[300px] rounded-lg px-3 border-[2px] border-black mt-2 mb-2"
        value={amount}
        onChange={handleChange}
        placeholder="amount"
      />
      <button
        onClick={mutate}
        className=" px-5 py-0 font-bold hover:bg-gray-300 rounded-md text-white bg-black"
      >
        {" "}
        submit{" "}
      </button>
    </div>
  );
};

export default Deposite;
