import React from "react";
import img1 from "../../assets/BunchOfMail.jpg";
import img2 from "../../assets/FavouriteList.jpg";
import img3 from "../../assets/ManageSmart.jpg";
import FeaturesModel from "./FeaturesModel";

const Features = () => {
  return (
    <div className=" mb-5 flex flex-col gap-5 flex-wrap items-center justify-center w-[100dvw]  ">
      <h2 className="fontFamily1">SCM Features</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-28">
        <FeaturesModel
          img={img1}
          title="Send Emails in Bunch"
          desc="This feature allows users to efficiently send emails to multiple
          contacts simultaneously."
        />
        <FeaturesModel
          img={img2}
          title="Create Your Favorite List"
          desc="Create the list of you favorite in easy on click and with more efficiency"
        />
        <FeaturesModel
          img={img3}
          title="Manage Contacts Smartly"
          desc="Manage your contacts smartly by creating groups and favorites of contacts"
        />
      </div>
    </div>
  );
};

export default Features;
