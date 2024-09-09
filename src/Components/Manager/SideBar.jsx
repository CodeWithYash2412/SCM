import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { IoPersonCircle } from "react-icons/io5";
import { RiLogoutCircleFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { SignOut } from '../../Auth/Auth';
import { IoPersonAddSharp } from "react-icons/io5";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";




const SideBar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    function isActive(pathname) {
        return window.location.pathname === pathname;
    }

    const onLogout = async (e) => {
        await SignOut();
        navigate('/');
    };

    return (
        <>
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-50 sm:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <a href="/" className="flex items-center justify-center ps-2.5 mb-5">
                        <img src={logo} className="h-6 me-3 sm:h-20" alt="Logo" />
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/contact_manager" className={isActive('/contact_manager') ? 'flex items-center p-3 text-white  bg-blue-600 rounded-lg dark:text-white  group' : 'flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} onClick={closeSidebar}>
                                <IoPersonCircle className={`inline-block w-5 h-5 ${isActive('/contact_manager') ? 'text-white group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} />
                                <span className="ms-3">Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="contactList" className={isActive('/contact_manager/contactList') ? 'flex items-center p-3 text-white  bg-blue-600 rounded-lg dark:text-white  group' : 'flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} onClick={closeSidebar}>
                                <HiUserGroup className={`inline-block w-5 h-5 ${isActive('/contact_manager/contactList') ? 'text-white group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}  transition duration-75 dark:text-gray-400  dark:group-hover:text-white`} />
                                <span className="ms-3">Contact List</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="groupList" className={isActive('/contact_manager/groupList') ? 'flex items-center p-3 text-white  bg-blue-600 rounded-lg dark:text-white  group' : 'flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} onClick={closeSidebar}>
                                <HiRectangleGroup className={`inline-block w-5 h-5 ${isActive('/contact_manager/groupList') ? 'text-white group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}  transition duration-75 dark:text-gray-400  dark:group-hover:text-white`} />
                                <span className="ms-3">Group List</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="TaskManager" className={isActive('/contact_manager/TaskManager') ? 'flex items-center p-3 text-white  bg-blue-600 rounded-lg dark:text-white  group' : 'flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} onClick={closeSidebar}>
                                <FaTasks className={`inline-block w-5 h-5 ${isActive('/contact_manager/TaskManager') ? 'text-white group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}  transition duration-75 dark:text-gray-400  dark:group-hover:text-white`} />
                                <span className="ms-3">Task Manager</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="contactForm" className={isActive('/contact_manager/contactForm') ? 'flex items-center p-3 text-white  bg-blue-600 rounded-lg dark:text-white  group' : 'flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} onClick={closeSidebar}>
                                <IoPersonAddSharp className={`inline-block w-5 h-5 ${isActive('/contact_manager/contactForm') ? 'text-white group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}  transition duration-75 dark:text-gray-400  dark:group-hover:text-white`} />
                                <span className="ms-3">Contact Form</span>
                            </Link>
                        </li>

                        <li>
                            <button onClick={onLogout} className=" w-full flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <RiLogoutCircleFill className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span className="flex-1 ms-3 whitespace-nowrap text-left">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className='sm:ml-64'>
                <Outlet />
            </div>
        </>
    );
};

export default SideBar;
