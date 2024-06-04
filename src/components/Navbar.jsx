import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png"

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all border-red-900 duration-300 ${scroll ? 'w-full' : 'w-[85%] rounded-2xl'} bg-black text-white flex justify-between items-center px-8 py-5  mx-auto`}>
      <div className="flex  w-full h-full items-center space-x-4">
        <div className="logo text-2xl font-bold">
            <img src={logo} alt="" />
        </div>
        <ul className=" md:flex flex items-center justify-center w-full gap-7 space-x-4">
          <li><a href="#home" className="hover:text-[#da0134] hover:transition-all hover:duration-[.10s] py-6 hover:border-b-4 hover:border-b-red-600">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#service" className="hover:text-gray-400">Service</a></li>
          <li><a href="#process" className="hover:text-gray-400">Process</a></li>
          <li><a href="#featured" className="hover:text-gray-400">Featured</a></li>
          <li><a href="#team" className="hover:text-gray-400">Team</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
      <div className="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.35 13.65z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
