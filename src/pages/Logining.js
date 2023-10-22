import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Logining = () => {
  const [userInfo, setUserInfo] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/transactions");
    },
  });

  // if (user) {
  //   navigate("/");
  // }

  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-blue-400 ">
      <div className=" gap-3 bg-red-500 w-[50%] h-[50%] flex flex-col justify-center items-center">
        <h1 className="text-[35px]"> Login</h1>
        <input
          name="username"
          onChange={handleChange}
          placeholder="username"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />

        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
          type="password"
        />
        <button
          onClick={() => mutate()}
          className="border-[2px] p-[5px] border-white hover:bg-slate-500"
        >
          Login
        </button>
        <Link to="/register">
          <button className="border-[2px] border-white hover:bg-slate-500">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logining;
