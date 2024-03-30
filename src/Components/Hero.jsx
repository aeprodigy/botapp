import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div class="bg-gray-900 min-h-screen pt-8">
      <h2 className="text-center text-white text-2xl pt-4">
        Hi, this is Your Virtual
      </h2>
      <h3 className="text-center text-white text-4xl pt-2">Chat Buddy!</h3>

      <div className="flex justify-center items-center container mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          {/**Cards */}
          <div className="rounded-xl shadow-lg bg-blue-400">
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
              <Link to="/facebook" className="">
                <button
                  type="button"
                  className="w-full px-3 py-4  font-medium text-center text-blue-400 text-md bg-gray-100 rounded-md"
                >
                  Check Chat
                </button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl shadow-lg  bg-green-400">
            <div className="p-5 flex flex-col ">
              <div className="text-white text-7xl rounded-xl overflow-x-hidden text-center mt-3 flex justify-center">
                <FaWhatsapp />
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
                  class="w-full px-3 py-4 text-md font-medium text-center text-green-400 bg-gray-100 rounded-md"
                >
                  Check Chat
                </button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl shadow-lg bg-pink-400">
            <div className="p-5 flex flex-col ">
              <div className="text-white text-7xl rounded-xl overflow-x-hidden text-center mt-3 flex justify-center">
                <FaInstagram />
              </div>
              <h5 className="pt-4 text-white font-medium text-center text-2xl md:text-3xl mt-3">
                Check the Instagram chat
              </h5>
              <p className="mt-2 text-white text-xl mb-3">
                check the history of the Instagram chat.
              </p>
              <Link to="/instagram">
                <button
                  type="button"
                  class="px-3 py-4 w-full text-xs font-medium text-center  bg-gray-100 rounded-md text-pink-400 text-md"
                >
                  Check Chat
                </button>
              </Link>
            </div>
          </div>
          {/**Cards end here */}
        </div>
      </div>
    </div>
  );
}

export default Hero