import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FavoriteList = () => {
    const navigate = useNavigate();

    const dummyData = [
        { id: 1, name: "Alice Smith", mobile: "+91 99999 99901", email: "alice.smith@example.com", jobTitle: "Software Engineer", streetAddress: "123 Main St", city: "New York", state: "NY", postalCode: "10001", country: "USA", dateOfBirth: "1990-01-01", assignedTask: "Project A" },
        { id: 2, name: "Bob Johnson", mobile: "+91 99999 99902", email: "bob.johnson@example.com", jobTitle: "Product Manager", streetAddress: "456 Elm St", city: "San Francisco", state: "CA", postalCode: "94101", country: "USA", dateOfBirth: "1985-02-02", assignedTask: "Project B" },
    ];

    const [contacts, setContacts] = useState(dummyData);
    const [favorites, setFavorites] = useState([1]); // Assuming Alice Smith is a favorite

    const favoriteContacts = contacts.filter(contact => favorites.includes(contact.id));

    const handleRemoveFavorite = (contactId) => {
        setFavorites(favorites.filter(id => id !== contactId));
    };

    return (
        <div className="w-full flex flex-col items-center mt-6">
            <h2 className="text-2xl font-bold mb-4">Favorite Contacts</h2>
            {favoriteContacts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-3 gap-6 w-full">
                    {favoriteContacts.map((contact) => (
                        <div key={contact.id} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
                            <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                            <p className="text-gray-700 mb-2">{contact.mobile}</p>
                            <p className="text-gray-700 mb-4">{contact.email}</p>
                            <div className="flex justify-around">
                                <button className="text-pink-500 hover:text-pink-700" onClick={() => handleRemoveFavorite(contact.id)}>
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">No Contacts</h3>
                        <p className="text-gray-700 mb-4">You have no favorite contacts.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoriteList;
