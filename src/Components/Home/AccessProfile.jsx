import React from "react";
import { useNavigate } from "react-router-dom";

const AccessProfile = () => {

  const navigate = useNavigate();

  const handleNav = () => {
    navigate('/contact_manager/contactList')
  }


  return (
    <div className="bg-[#85FFBD] flex justify-center items-center flex-col bg-[linear-gradient(45deg,#85FFBD_0%,#FFFB7D_100%)] h-56">
      <h2 className=" fontFamily1 ">Access Your Contact Now....</h2>
      <button onClick={() => handleNav()} className="bg-[linear-gradient(to_right,#02AAB0_0%,#00CDAC_51%,#02AAB0_100%)] text-center uppercase transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] block m-2.5 px-[45px] py-[15px] rounded-[10px] hover:bg-[right_center] hover:text-white hover:no-underline">
        Go To Contact List
      </button>
    </div>
  );
};

export default AccessProfile;
