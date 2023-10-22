import { useMutation } from "@tanstack/react-query";
import React, { useState, useContext } from "react";
import { register } from "../api/auth";

import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    mutate();
    console.log("hello");
  };

  const { mutate, isloading } = useMutation({
    mutationkey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/transactions");
    },
  });

  //   if (user) {
  //   navigate("/");
  // }

  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className=" gap-3 rounded-md  bg-yellow-100 w-[60%] h-[60%] flex flex-col justify-center items-center">
        <h1 className=" font-mono text-[35px] font-bold">Hello new invester</h1>
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
        <input
          name="image"
          onChange={handleChange}
          placeholder="image"
          type="file"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />
        {/* {isloading ? (
          <button
            disabled
            onClick={mutate}
            className="border-[2px] border-white hover:bg-slate-500"
          >
            loading ..
          </button>
        ) : ( */}
        <button
          onClick={handleSubmit}
          className=" rounded-md border-[2px]  px-3 py-1 border-black hover:bg-amber-200 font-bold"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
