import React, { useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      gsap.fromTo(
        '.menu',
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 }
      );
    } else {
      gsap.to('.menu', { x: '100%', opacity: 0, duration: 0.5 });
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="logo text-xl font-bold">
        <span className="text-blue-500">YourLogo</span>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#college-prediction" className="nav-item hover:text-blue-400">
          College Prediction
        </a>
        <a href="#students" className="nav-item hover:text-blue-400">
          Students
        </a>
        <a href="#about" className="nav-item hover:text-blue-400">
          About
        </a>
      </div>

      {/* Signup/Login Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
        <button className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 px-4 py-2 rounded">
          Log In
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`menu fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 z-10`}
      >
        <button onClick={toggleMenu} className="mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a href="#college-prediction" className="block mb-2 hover:text-blue-400">
          College Prediction
        </a>
        <a href="#students" className="block mb-2 hover:text-blue-400">
          Students
        </a>
        <a href="#about" className="block mb-2 hover:text-blue-400">
          About
        </a>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2">
            Sign Up
          </button>
          <button className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 px-4 py-2 rounded">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
