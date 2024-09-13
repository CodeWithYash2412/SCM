import React from 'react';
import { FaUserTie, FaUser, FaChalkboardTeacher } from 'react-icons/fa';

const TeamComponent = () => {
    const teamMembers = [
        { name: 'Manmohan Sharma', role: 'Member', icon: <FaUser className="w-24 h-24 mx-auto mb-4 text-gray-800" /> },
        { name: 'Mithlesh Kumar', role: 'Member', icon: <FaUser className="w-24 h-24 mx-auto mb-4 text-gray-800" /> },
        { name: 'Darshan Patel', role: 'Member', icon: <FaUser className="w-24 h-24 mx-auto mb-4 text-gray-800" /> },
    ];

    const leader = { name: 'Yash Saradva', role: 'Leader', icon: <FaUserTie className="w-24 h-24 mx-auto mb-4 text-gray-800" /> };
    const instructor = { name: "Pranitha Ma'am", role: 'Instructor', icon: <FaChalkboardTeacher className="w-24 h-24 mx-auto mb-4 text-gray-800" /> };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Team</h2>
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 mb-8">
                    {instructor.icon}
                    <h3 className="text-xl font-semibold text-center text-gray-800">{instructor.name}</h3>
                    <p className="text-center text-gray-600">{instructor.role}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        {leader.icon}
                        <h3 className="text-xl font-semibold text-center text-gray-800">{leader.name}</h3>
                        <p className="text-center text-gray-600">{leader.role}</p>
                    </div>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            {member.icon}
                            <h3 className="text-xl font-semibold text-center text-gray-800">{member.name}</h3>
                            <p className="text-center text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TeamComponent;
