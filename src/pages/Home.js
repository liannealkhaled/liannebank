import React from "react";

const Home = () => {
  // add button <loginig> <register>

  return (
    <div className="bg-slate-800 v-screen h-screen flex justify-center flex-row">
      <div className="flex justify-center items-center">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/82/161/desktop-wallpaper-clipart-monopoly-man-monopoly-man-logo.jpg"
          style={{
            borderRadius: 500,
            height: 400,
            width: 400,
          }}
        />
      </div>
      <div
        className="flex justify-center
      flex-col ml-10"
      >
        <h1 className="text-[35px] font-mono font-bold">
          {" "}
          Welcome to the bank
        </h1>
        <p className="text-[20x] font-mono font-bold flex justify-center">
          {" "}
          where money is REAL
        </p>
      </div>
    </div>
  );
};

export default Home;
