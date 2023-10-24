import React from "react";
import { useState } from "react";

const UsersList = () => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className=" w-[810px] h-[150px] border-black border-[2px] flex flex-col justify-center items-center gap-1 rounded-md">
      <h1 className=" font-mono text-[20px] font-bold"> LIST OF USERS</h1>
      <div className="flex w-full justify-around"></div>

      {/* <input value={amount} onChange={handleChange} placeholder="AMOUNT" />
      <button onClick={mutate}> submit </button> */}
    </div>
  );
};

export default UsersList;
