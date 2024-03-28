import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div class="bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen pt-8">
      <h2 className="text-center text-white text-2xl pt-4">
        Hi, this is Your Virtual
      </h2>
      <h3 className="text-center text-white text-4xl pt-2">Chat Buddy</h3>

      <div className="flex justify-center items-center container mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          {/**Cards */}
          <div className="rounded-xl shadow-lg ">
            <div className="p-5 flex flex-col ">
              <div className="text-white text-7xl rounded-xl overflow-x-hidden text-center mt-3 flex justify-center">
                <FaFacebookF />
              </div>
              <h5 className="pt-4 text-white font-medium text-center text-2xl md:text-3xl mt-3">
                Check the Facebook chat
              </h5>
              <p className="mt-2 text-white text-xl mb-3">
                check the history of the facebook chat.
              </p>
              <Link to="/facebook">
                <button
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Check Chat
                </button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl shadow-lg ">
            <div className="p-5 flex flex-col ">
              <div className="text-white text-7xl rounded-xl overflow-x-hidden text-center mt-3 flex justify-center">
                <FaFacebookF />
              </div>
              <h5 className="pt-4 text-white font-medium text-center text-2xl md:text-3xl mt-3">
                Check the WhatsApp chat
              </h5>
              <p className="mt-2 text-white text-xl mb-3">
                check the history of the facebook chat.
              </p>
              <Link to="/whatsApp">
                <button
                  type="button"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Check Chat
                </button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl shadow-lg ">
            <div className="p-5 flex flex-col ">
              <div className="text-white text-7xl rounded-xl overflow-x-hidden text-center mt-3 flex justify-center">
                <FaFacebookF />
              </div>
              <h5 className="pt-4 text-white font-medium text-center text-2xl md:text-3xl mt-3">
                Check the Facebook chat
              </h5>
              <p className="mt-2 text-white text-xl mb-3">
                check the history of the facebook chat.
              </p>
              <button
                type="button"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Check Chat
              </button>
            </div>
          </div>
          {/**Cards end here */}
        </div>
      </div>
    </div>
  );
}

export default Hero