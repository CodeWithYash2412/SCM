import React, { useState } from "react";
import { FaEdit, FaTrash, FaUsers, FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
    const navigate = useNavigate();

    const dummyData = [
        { id: 1, name: "Alice Smith", mobile: "+91 99999 99901", email: "alice.smith@example.com", jobTitle: "Software Engineer", streetAddress: "123 Main St", city: "New York", state: "NY", postalCode: "10001", country: "USA", dateOfBirth: "1990-01-01", assignedTask: "Project A" },
        { id: 2, name: "Bob Johnson", mobile: "+91 99999 99902", email: "bob.johnson@example.com", jobTitle: "Product Manager", streetAddress: "456 Elm St", city: "San Francisco", state: "CA", postalCode: "94101", country: "USA", dateOfBirth: "1985-02-02", assignedTask: "Project B" },
    ];

    const [contacts, setContacts] = useState(dummyData);
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 9;
    const [groups, setGroups] = useState(["Friends", "Family", "Work"]);
    const [showGroupPopup, setShowGroupPopup] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleAddToGroup = (contact) => {
        setSelectedContact(contact);
        setShowGroupPopup(true);
    };

    const handleGroupSelect = (group) => {
        console.log(`Added ${selectedContact.name} to ${group}`);
        setShowGroupPopup(false);
    };

    const handleCreateContact = () => {
        navigate('/contact_manager/contactForm');
    };

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        setShowContactPopup(true);
    };

    const handleCloseContactPopup = () => {
        setShowContactPopup(false);
        setSelectedContact(null);
    };

    const handleEditContact = (id) => {
        navigate(`/contact_manager/EditContact/${id}`);
    };

    const handleToggleFavorite = (contact) => {
        if (favorites.includes(contact.id)) {
            setFavorites(favorites.filter((favId) => favId !== contact.id));
        } else {
            setFavorites([...favorites, contact.id]);
        }
    };

    return (
        <div className="w-full flex flex-col items-center mt-6">
            <h2 className="text-2xl font-bold mb-4">Contact List</h2>
            <button onClick={handleCreateContact} className="w-1/4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white font-extrabold">
                    Create New Contact
                </span>
            </button>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 place-content-center lg:grid-cols-3 pb-3 gap-6 w-full">
                {currentContacts.length > 0 ? (
                    currentContacts.map((contact) => (
                        <div key={contact.id} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => handleContactClick(contact)}>
                            <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                            <p className="text-gray-700 mb-2">{contact.mobile}</p>
                            <p className="text-gray-700 mb-4">{contact.email}</p>
                            <div className="flex justify-around">
                                <button className="text-blue-500 hover:text-blue-700" onClick={(e) => { e.stopPropagation(); handleEditContact(contact.id); }}>
                                    <FaEdit />
                                </button>
                                <button className="text-red-500 hover:text-red-700" onClick={(e) => { e.stopPropagation(); handleDelete(contact.id); }}>
                                    <FaTrash />
                                </button>
                                <button className="text-green-500 hover:text-green-700" onClick={(e) => { e.stopPropagation(); handleAddToGroup(contact); }}>
                                    <FaUsers />
                                </button>
                                <button className="text-pink-500 hover:text-pink-700" onClick={(e) => { e.stopPropagation(); handleToggleFavorite(contact); }}>
                                    {favorites.includes(contact.id) ? <FaHeart className="animate-pulse" /> : <FaRegHeart />}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">No Contacts</h3>
                            <p className="text-gray-700 mb-4">You have no contacts. Please add a new contact.</p>
                            <button onClick={handleCreateContact} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                Add Contact
                            </button>
                        </div>
                    </div>
                )}
            </div> */}
            {currentContacts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 place-content-center lg:grid-cols-3 pb-3 gap-6 w-full">
                {currentContacts.map((contact) => (
                    <div key={contact.id} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => handleContactClick(contact)}>
                        <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                        <p className="text-gray-700 mb-2">{contact.mobile}</p>
                        <p className="text-gray-700 mb-4">{contact.email}</p>
                        <div className="flex justify-around">
                            <button className="text-blue-500 hover:text-blue-700" onClick={(e) => { e.stopPropagation(); handleEditContact(contact.id); }}>
                                <FaEdit />
                            </button>
                            <button className="text-red-500 hover:text-red-700" onClick={(e) => { e.stopPropagation(); handleDelete(contact.id); }}>
                                <FaTrash />
                            </button>
                            <button className="text-green-500 hover:text-green-700" onClick={(e) => { e.stopPropagation(); handleAddToGroup(contact); }}>
                                <FaUsers />
                            </button>
                            <button className="text-pink-500 hover:text-pink-700" onClick={(e) => { e.stopPropagation(); handleToggleFavorite(contact); }}>
                                {favorites.includes(contact.id) ? <FaHeart className="animate-pulse" /> : <FaRegHeart />}
                            </button>
                        </div>
                    </div>
                ))}
            </div> : (
                <div className="w-4/5 flex justify-center items-center bg-gray-200 mt-10 shadow-gray-300 p-6 rounded-lg shadow-xl cursor-pointer">
                    <div className="bg-white w-full p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">No Contacts</h3>
                        <p className="text-gray-700 mb-4">You have no contacts. Please add a new contact.</p>
                        <button onClick={handleCreateContact} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            Add Contact
                        </button>
                    </div>
                </div>
            )}
            {/* Pagination */}
            <div className="flex justify-center mt-7">
                <nav>
                    <ul className="inline-flex items-center">
                        {[...Array(Math.ceil(contacts.length / contactsPerPage))].map((_, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`px-4 py-2 mx-1 text-sm font-medium ${currentPage === index + 1
                                        ? "text-white bg-blue-600"
                                        : "text-gray-700 bg-gray-200 hover:bg-blue-500 hover:text-white"
                                        } rounded-lg`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Group Popup */}
            {showGroupPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Add to Group</h3>
                        {groups.length > 0 ? (
                            <ul>
                                {groups.map((group, index) => (
                                    <li key={index} className="mb-2">
                                        <button
                                            onClick={() => handleGroupSelect(group)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            {group}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No groups available. Create a new group.</p>
                        )}
                        <button
                            onClick={() => setShowGroupPopup(false)}
                            className="mt-4 text-red-500 hover:text-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {/* Contact Detail Popup */}
            {showContactPopup && selectedContact && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/2">
                        <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                        <p><strong>Name:</strong> {selectedContact.name}</p>
                        <p><strong>Number:</strong> {selectedContact.mobile}</p>
                        <p><strong>Email:</strong> {selectedContact.email}</p>
                        <p><strong>Job Title:</strong> {selectedContact.jobTitle}</p>
                        <p><strong>Street Address:</strong> {selectedContact.streetAddress}</p>
                        <p><strong>City:</strong> {selectedContact.city}</p>
                        <p><strong>State:</strong> {selectedContact.state}</p>
                        <p><strong>Postal Code:</strong> {selectedContact.postalCode}</p>
                        <p><strong>Country:</strong> {selectedContact.country}</p>
                        <p><strong>Date of Birth:</strong> {selectedContact.dateOfBirth}</p>
                        <p><strong>Assigned Task:</strong> {selectedContact.assignedTask}</p>
                        <button
                            onClick={handleCloseContactPopup}
                            className="mt-4 text-red-500 hover:text-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactList;
