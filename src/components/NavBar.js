// import React, { useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import UserContext from "../context/UserContext";
// import { useQuery } from "@tanstack/react-query";
// import { getProfile } from "../api/auth";
// import { logout } from "../api/auth";

// const NavBar = () => {
//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const { data } = useQuery({
//     queryKey: ["userProfile"],
//     queryFn: () => getProfile(),
//   });

//   const handelLogout = () => {
//     logout();
//     setUser(false);
//   };
//   return (
//     <div className="relative bg-gray-800 h-20 shadow-2xl flex justify-start items-center mb-10">
//       <>
//         <img
//           className="h-[100%] px-3 py-2 rounded-full "
//           src={"https://react-bank-project.eapi.joincoded.com/" + data?.image}
//         />

//         <h1 className=" text-white ml-10">Hello, {data?.username}</h1>
//       </>

//       <div className=" absolute flex justify-center items-center right-0">
//         <NavLink
//           to="/homepage"
//           className="   text-white hover:bg-gray-700  rounded-md px-3 py-2 mr-10"
//         >
//           Home
//         </NavLink>

//         <NavLink
//           onClick={handelLogout}
//           to="/"
//           className="   text-white hover:bg-gray-700 hover:text-red-600 rounded-md px-3 py-2 mr-10"
//         >
//           Logout
//         </NavLink>
//       </div>
//     </div>
//     // <nav className="bg-gray-800">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="flex items-center justify-between h-16">
//     //       <div className="flex items-center">
//     //         <NavLink to="/">
//     //           <span className="font-semibold text-xl text-white">
//     //             Welcome , ${"username"}
//     //           </span>
//     //         </NavLink>
//     //       </div>
//     //       <div className="block">
//     //         <div className="ml-10 flex items-baseline space-x-4">
//     //           <NavLink
//     //             to="/"
//     //             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     //           >
//     //             Home
//     //           </NavLink>
//     //           <NavLink
//     //             to="/notes"
//     //             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     //           >
//     //             Notes
//     //           </NavLink>
//     //           <NavLink
//     //             to="/users"
//     //             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     //           >
//     //             Users
//     //           </NavLink>

//     //           {user ? (
//     //             <button onClick={handelLogout}>logout</button>
//     //           ) : (
//     //             <>
//     //               <NavLink
//     //                 to="/login"
//     //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     //               >
//     //                 Login
//     //               </NavLink>
//     //               <NavLink
//     //                 to="/register"
//     //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     //               >
//     //                 Register
//     //               </NavLink>
//     //             </>
//     //           )}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// };

// export default NavBar;

import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/auth";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });
  //   console.log(data);
  return (
    <div className="flex justify-around items-center h-[70px] bg-amber-300">
      {user ? (
        <>
          {" "}
          <div className="h-[50px] w-[50px] rounded-full bg-white overflow-hidden">
            <img
              src={
                "https://react-bank-project.eapi.joincoded.com/" + data?.image
              }
            />
          </div>
          <div className="font-mono font-semibold">
            {" "}
            Welcome, {data?.username}
          </div>
          <div className="font-mono font-semibold">
            {" "}
            Balance: {data?.balance}
          </div>
          <div
            onClick={() => {
              localStorage.removeItem("token");
              setUser(false);
              navigate("/");
            }}
            className=" hover:bg-slate-600 px-5 rounded-md cursor-pointer font-mono font-semibold "
          >
            Logout{" "}
          </div>{" "}
        </>
      ) : (
        <div className="lex justify-start">
          <Link to="/">
            <button className=" border-[2px] border-white hover:bg-slate-500">
              Home
            </button>
          </Link>
          {/* <Link to="/login">
            <button className="border-[2px] border-white hover:bg-slate-500">
              Login
            </button>
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default NavBar;
