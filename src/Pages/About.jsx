import React from "react";
import TitleBar from "../Components/TitleBar";
import logo from "../assets/logo.png"
import { BiSolidBinoculars } from "react-icons/bi";
import { FaRegCheckCircle, FaTasks, FaUserFriends } from 'react-icons/fa';
import TeamComponent from "../Components/TeamComponent";


const About = () => {
  return (
    <div>
      <TitleBar title="About" />
      <section className="about bg-gray-100 py-12">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <img src={logo} alt="Company Logo" className="mx-auto mb-4 rounded-full w-28 shadow-md" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600">
              Welcome to Smart Contact Manager, where we revolutionize the way you manage your personal and professional relationships. Our mission is to simplify and enhance your contact management experience with cutting-edge features designed to keep you organized, efficient, and in control. Whether you're juggling multiple teams or maintaining a vast network of contacts, Smart Contact Manager is here to help you stay connected and on top of your game.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision:</h3>
            <div className="flex items-center">
              {/* <img src="https://via.placeholder.com/100" alt="Vision" className="w-24 h-24 mr-4 rounded-lg shadow-md" /> */}
              <BiSolidBinoculars className="w-24 h-24 mr-4 rounded-lg shadow-md" />

              <p className="text-gray-600">
                We believe that managing contacts should be seamless and intuitive. That’s why we’ve developed a platform that not only lets you organize your contacts into various groups but also allows you to create a personalized favorite list and assign tasks with ease. With Smart Contact Manager, you can focus on what truly matters—building meaningful relationships and achieving your goals.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-4 flex items-start">
                <FaRegCheckCircle className="w-12 h-12 mr-4 rounded-lg shadow-md" />
                <div>
                  <strong className="text-gray-800">Tailored Organization:</strong> Our platform allows you to create customized groups and favorite lists, ensuring that your contacts are always organized in a way that suits your needs. Say goodbye to clutter and confusion—keep your contacts neatly arranged and easily accessible.
                </div>
              </li>
              <li className="mb-4 flex items-start">
                <FaTasks className="w-12 h-12 mr-4 rounded-lg shadow-md" />
                <div>
                  <strong className="text-gray-800">Efficient Task Management:</strong> Assign tasks to individual contacts and track their progress effortlessly. Our intuitive task management feature helps you delegate responsibilities and monitor completion, ensuring that no detail is overlooked and every deadline is met.
                </div>
              </li>
              <li className="mb-4 flex items-start">
                <FaUserFriends className="w-12 h-12 mr-4 rounded-lg shadow-md" />
                <div>
                  <strong className="text-gray-800">User-Friendly Interface:</strong> We prioritize simplicity and ease of use. Our interface is designed to be intuitive and straightforward, allowing you to navigate and utilize all features without a steep learning curve. Get started quickly and manage your contacts like a pro.
                </div>
              </li>
            </ul>
          </div>
          <TeamComponent />
        </div>
      </section>
    </div>
  );
};

export default About;


