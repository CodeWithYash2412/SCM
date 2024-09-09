import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../Auth/Contexts/AuhContexts";


const Profile = () => {

    const { currentUser } = useAuth();
    console.log(currentUser)
    const [user, setUser] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "+91 99999 99999",
        contact: 0,
        website: "www.yourwebsite.com",
        bio: "Passionate developer with expertise in building scalable web applications.",
        profilePicture: "",
    });

    return (
        <div className=" m-0 p-0 flex flex-col items-center justify-center w-screen h-screen bg-[#85FFBD] bg-[linear-gradient(45deg,#85FFBD_0%,#FFFB7D_100%)] text-white">
            <div className="w-full max-w-4xl p-6 h-auto  bg-white rounded-lg shadow-lg flex flex-col items-center text-gray-700 relative">
                <div className="">
                    {user.profilePicture ? (
                        <img
                            src={user.profilePicture}
                            alt="Profile"
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                        />
                    ) : (
                        <FaUserCircle className="w-32 h-32 text-gray-400" />
                    )}
                </div>
                <div className="mt-16 w-full flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-2">{user.firstName} {user.lastName}</h1>
                    <p className="text-xl text-gray-500 mb-4"> {user.website} </p>
                </div>
                <div className="w-full text-white grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-2">Total Contacts</h2>
                        <p className=" text-3xl ">{user.contact}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
