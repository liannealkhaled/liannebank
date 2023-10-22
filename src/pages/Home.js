import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // add button <loginig> <register>

  return (
    <div className=" v-screen h-screen flex justify-center flex-row">
      <div className="flex justify-center items-center">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/82/161/desktop-wallpaper-clipart-monopoly-man-monopoly-man-logo.jpg"
          style={{
            borderRadius: 500,
            height: 400,
            width: 400,
            objectFit: 10,
          }}
        />
      </div>
      <div
        className="flex justify-center
      flex-col ml-10"
      >
        <h1 className="text-[20px] font-mono font-bold"> WELCOME TO THE</h1>
        <h1 className="text-[50px] font-mono font-bold"> MONOPOLY BANK</h1>
        <p className="text-[20x] font-mono font-bold flex justify-center">
          {" "}
          where money is REAL
        </p>
        {/* <svg
          className="h-[60%] w-[50%] bg-red-700"
          height="512pt"
          viewBox="-47 0 512 512"
          width="512pt"
          xmlns="http://www.w3.org/2000/svg"
        /> */}
        <div className="flex flex-row justify-around mt-10">
          <div className="flex flex-col items-center font-thin h-[70px] w-[150px]">
            <p className="bg-yellow"> for extra money</p>
            <Link to="/login">
              <button className=" rounded-md px-3 py-1 border-white font-bold hover:bg-blue-400">
                LOGIN
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center font-thin h-[70px] w-[150px]">
            <p className="bg-yellow"> for new invesments</p>
            <Link to="/register">
              <button className=" rounded-md  px-3 py-1 border-white hover:bg-amber-200 font-bold">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
