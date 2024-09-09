import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-[#F5FFFA] rounded-lg shadow dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to="/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-14" alt=" Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SCM
            </span>
          </NavLink>
          <ul class="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to="/about" class="hover:underline me-4 md:me-6">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" class="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <NavLink to="/" class="hover:underline">
            &nbsp;Smart Contact Manager™
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
