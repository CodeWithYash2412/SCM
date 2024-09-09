import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../Auth/Contexts/AuhContexts";
import { SignOut } from "../Auth/Auth";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentUser } = useAuth();

  const onLogout = async (e) => {
    await SignOut();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`border-gray-200 fixed w-full transition-colors z-40 duration-300 ${scrolled ? "bg-gray-800" : "bg-transparent"}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16" alt="Flowbite Logo" />
          </NavLink>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:bg-transparent bg-gray-800 md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "block py-2 px-3 text-white bg-green-700 rounded text-lg dark:text-white md:dark:text-green-500"
                      : "block py-2 px-3 text-white bg-transparent rounded text-lg dark:text-white md:dark:text-green-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "block py-2 px-3 text-white bg-green-700 rounded text-lg dark:text-white md:dark:text-green-500"
                      : "block py-2 px-3 text-white bg-transparent rounded text-lg dark:text-white md:dark:text-green-500"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "block py-2 px-3 text-white bg-green-700 rounded text-lg dark:text-white md:dark:text-green-500"
                      : "block py-2 px-3 text-white bg-transparent rounded text-lg dark:text-white md:dark:text-green-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
              {currentUser ? (
                <>
                  <li>
                    <NavLink
                      to="/contact_manager"
                      className={({ isActive }) =>
                        isActive ? "block py-2 px-3 text-white bg-green-700 rounded text-lg dark:text-white md:dark:text-green-500"
                          : "block py-2 px-3 text-white bg-transparent rounded text-lg dark:text-white md:dark:text-green-500"
                      }
                    >
                      Go To Manager
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={onLogout}
                      className="block py-2 px-3 text-white bg-transparent rounded text-lg dark:text-white md:dark:text-green-500"
                    >
                      LogOut
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "block py-2 px-3 text-white bg-green-700 rounded text-lg dark:text-white md:dark:text-green-500"
                        : "block py-2 px-3 text-white bg-transparent rounded text-lg dark:text-white md:dark:text-green-500"
                    }
                  >
                    Register / Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
