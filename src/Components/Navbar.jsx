import React, { useState } from "react";
import { GiTrackedRobot } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  // State to track the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md z-20">
      <div className="flex-1 flex justify-between items-center ">
        <div className="flex justify-center items-center">
          <a href="#" className="text-xl">
            ChatBuddy
          </a>

          <GiTrackedRobot className="animate-pulse" />
        </div>
      </div>

      {/* Use onClick event to toggle the menu visibility */}
      <label
        htmlFor="menu-toggle"
        className="pointer-cursor md:hidden block"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      {/* Use conditional rendering to toggle the 'hidden' class based on the state */}
      <div
        className={`${
          isMenuOpen ? "" : "hidden"
        } md:flex md:items-center md:w-auto w-full`}
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <Link to="/about">
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  AboutUs
                </a>
              </li>
            </Link>
            <li>
              <a className="md:p-4 py-3 px-0 block" href="#">
                Chats
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
