import React from "react";
import SCM from "../../assets/SCM.webp";
import { NavLink } from "react-router-dom";

const AboutHome = () => {
  return (
    <>
      <h2 className="fontFamily1 text-center my-5">About SCM</h2>
      <div className=" lg:h-[50dvh] grid lg:grid-cols-2 grid-cols-1 ">
        <div className=" flex justify-center items-center ">
          <img
            src={SCM}
            width={400}
            alt=""
            className=" rounded-3xl shadow-[rgba(240,46,170,0.4)_-5px_5px,rgba(240,46,170,0.3)_-10px_10px,rgba(240,46,170,0.2)_-15px_15px,rgba(240,46,170,0.1)_-20px_20px,rgba(240,46,170,0.05)_-25px_25px] "
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-5 my-6 px-5 lg:pr-36 text-justify text-xl ">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Contact Manager (SCM) is an
            innovative platform designed to enhance how users manage and
            interact with their contacts. It allows users to create organized
            groups, categorize favorite contacts, and streamline communication
            by sending bulk emails within these groups. SCM is tailored for
            efficiency, making it easier to maintain connections, especially in
            professional settings where managing numerous contacts can become
            overwhelming.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beyond basic contact management, SCM
            also includes task management features, enabling users to assign
            specific tasks to individual contacts. This integration of
            communication and task management in a single platform helps users
            stay on top of their responsibilities, ensuring that no important
            tasks or connections are overlooked.
          </p>
          <NavLink to="/about">
            <button className="bg-[linear-gradient(to_right,#DA22FF_0%,#9733EE_51%,#DA22FF_100%)] text-center uppercase transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] block m-2.5 px-[45px] py-[15px] rounded-[10px] hover:bg-[right_center] hover:text-white hover:no-underline">
              See More
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
