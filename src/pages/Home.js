import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-800 v-screen h-screen flex justify-center flex-row">
      <div className="flex justify-center items-center">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/82/161/desktop-wallpaper-clipart-monopoly-man-monopoly-man-logo.jpg"
          style={{
            borderRadius: 500,
            height: 300,
            width: 300,
          }}
        />
      </div>
      <div
        className="flex justify-center
      flex-col ml-10"
      >
        <h1> Welcome to the bank</h1>
        <p> where money is real</p>
      </div>
    </div>
  );
};

export default Home;
