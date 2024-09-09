import React from "react";
import logo from "../../assets/homeBG.webp";

const Welcome = () => {
  return (
    <div
      className="h-[70dvh] bg-cover bg-top text-white flex justify-center items-center relative"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="welcomeGlass lg:w-1/3 w-full mx-3 h-1/3 flex justify-center items-center flex-col z-10">
        <p className="text-xl">Welcome To</p>
        <h1 className="text-4xl text-center overflow-hidden">Smart Contact Manager</h1>
      </div>
    </div>
  );
};

export default Welcome;
