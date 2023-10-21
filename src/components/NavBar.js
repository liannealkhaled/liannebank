import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/auth";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getProfile(),
  });

  const handelLogout = () => {
    setUser(false);
    navigate("/");
  };
  return (
    <div className="relative bg-gray-800 h-20 shadow-2xl shadow-green-800 flex justify-start items-center mb-10">
      <>
        <img
          className="h-[100%] px-3 py-2 rounded-full "
          src={"https://react-bank-project.eapi.joincoded.com/" + data?.image}
        />

        <h1 className=" text-white ml-10">Hello, {data?.username}</h1>
      </>

      <div className=" absolute flex justify-center items-center right-0">
        <NavLink
          to="/"
          className="   text-white hover:bg-gray-700  rounded-md px-3 py-2 mr-10"
        >
          Home
        </NavLink>

        <NavLink
          onClick={handelLogout}
          to="/"
          className="   text-white hover:bg-gray-700 hover:text-red-600 rounded-md px-3 py-2 mr-10"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
