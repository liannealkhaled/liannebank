import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Logining = () => {
  const [userInfo, setUserInfo] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate;

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      navigate("/");
      setUser(false);
    },
  });
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-blue-400 ">
      <div className="flex flex-col gap-3 bg-red-500">
        <h1> Login</h1>
        <input
          name="username"
          onChange={handleChange}
          placeholder="username"
          className="p-1 "
        />

        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          className="p-1"
          type="password"
        />
        <button
          onClick={() => mutate()}
          className="border-[2px] border-white hover:bg-slate-500"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Logining;
