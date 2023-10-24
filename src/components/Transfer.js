import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { putTransfer } from "../api/profile";

const Transfer = () => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => putTransfer(username, amount),
  });
  return (
    <div className=" w-[810px] h-[150px] border-black border-[2px] flex flex-col justify-center items-center gap-1 rounded-md">
      <h1 className=" font-mono text-[20px] font-bold"> TRANSFER</h1>
      <div className="flex w-full gap-1 justify-center">
        <input
          className="w-[390px] h-[35px] rounded-lg px-5 border-[2px] border-black mt-2 mb-2"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={amount}
          className="w-[390px] h-[35px] rounded-lg px-5 border-[2px] border-black mt-2 mb-2"
          placeholder="amount"
          onChange={(e) => {
            if (e.target.value > 0) {
              setAmount(e.target.value);
            }
          }}
        />
      </div>
      <button
        onClick={mutate}
        className=" px-5 py-0 font-bold hover:bg-gray-300 rounded-md text-white bg-black"
      >
        {" "}
        submit{" "}
      </button>

      {/* <input value={amount} onChange={handleChange} placeholder="AMOUNT" />
      <button onClick={mutate}> submit </button> */}
    </div>
  );
};

export default Transfer;
