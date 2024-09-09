import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const GroupList = () => {
    const dummyGroups = [
        { id: 1, name: "Friends", members: 5 },
        { id: 2, name: "Family", members: 3 },
        { id: 3, name: "Work", members: 8 },
    ];

    const [groups, setGroups] = useState(dummyGroups);
    const [showPopup, setShowPopup] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [newGroupMembers, setNewGroupMembers] = useState(0);

    const handleDelete = (id) => {
        setGroups(groups.filter((group) => group.id !== id));
    };

    const handleCreateNewGroup = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setNewGroupName("");
        setNewGroupMembers(0);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newGroup = {
            id: groups.length + 1,
            name: newGroupName,
            members: newGroupMembers,
        };
        setGroups([...groups, newGroup]);
        handlePopupClose();
    };

    return (
        <div className="w-full flex flex-col items-center mt-6">
            <h2 className="text-2xl font-bold mb-4">Group List</h2>
            <button
                onClick={handleCreateNewGroup}
                className="w-1/4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
                <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white font-extrabold">
                    Create New Group
                </span>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {groups.map((group) => (
                    <div key={group.id} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                        <p className="text-gray-700 mb-4">Members: {group.members}</p>
                        <div className="flex justify-around">
                            <button className="text-blue-500 hover:text-blue-700">
                                <FaEdit />
                            </button>
                            <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(group.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Create New Group</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupName">
                                    Group Name
                                </label>
                                <input
                                    type="text"
                                    id="groupName"
                                    value={newGroupName}
                                    onChange={(e) => setNewGroupName(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupMembers">
                                    Members
                                </label>
                                <input
                                    type="number"
                                    id="groupMembers"
                                    value={newGroupMembers}
                                    onChange={(e) => setNewGroupMembers(Number(e.target.value))}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    disabled
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handlePopupClose}
                                    className="mr-4 text-red-500 hover:text-red-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroupList;
