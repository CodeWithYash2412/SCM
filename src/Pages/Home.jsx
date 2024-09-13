import React from "react";
import Welcome from "../Components/Home/Welcome";
import Features from "../Components/Home/Features";
import ManageNow from "../Components/Home/ManageNow";
import AboutHome from "../Components/Home/AboutHome";
import AccessProfile from "../Components/Home/AccessProfile";
import Footer from "../Components/Footer";
import TeamComponent from "../Components/TeamComponent";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Features />
      <ManageNow />
      <AboutHome />
      <AccessProfile />
      <TeamComponent />
      <Footer />
    </div>
  );
};

export default Home;
