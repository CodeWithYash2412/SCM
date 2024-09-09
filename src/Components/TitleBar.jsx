import React from "react";

const TitleBar = ({ title }) => {
  return (
    <div className="h-[70dvh] bgImg flex justify-center items-center bg-cover bg-center">
      <h1 className="fontFamily text-white"> {title} </h1>
    </div>
  );
};

export default TitleBar;
