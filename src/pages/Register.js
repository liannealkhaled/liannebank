import { useMutation } from "@tanstack/react-query";
import React, { useState, UseContext } from "react";
import { register } from "../api/auth";

import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  // const { user, setUser } = UseContext(UserContext);
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

  const { mutate, isloading, error } = useMutation({
    mutationkey: ["register"],
    mutationFn: () => register(userInfo),
    // onSuccess: () => {
    //   navigate("/");
    //   setUser(true);
    // },
  });

  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-blue-400 ">
      <div className="flex flex-col gap-3 bg-red-500">
        <h1> Register</h1>
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
        <input
          name="image"
          onChange={handleChange}
          placeholder="image"
          type="file"
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
          className="border-[2px] border-white hover:bg-slate-500"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
