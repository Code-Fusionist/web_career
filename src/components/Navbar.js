import { useState } from "react";
import { gsap } from "gsap";
import { SlMenu } from "react-icons/sl";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      gsap.fromTo(
        ".menu",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5 }
      );
    } else {
      gsap.to(".menu", { x: "-100%", opacity: 0, duration: 0.5 });
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}

      {/* Hamburger Menu Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <SlMenu />
      </div>

      <div className="logo text-xl font-bold">
        <span className="text-blue-500">YourLogo</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <Link to="/pred" className="nav-item hover:text-blue-400">
          College Prediction
        </Link>
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
        className={`menu fixed left-0 top-0 w-64 h-full bg-gray-800 text-white p-4 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-100 z-10 space-y-10`}
      >
        <div className="absolute position-relative">
          <button onClick={toggleMenu} className="mb-4 ml-56">
            <RiCloseCircleFill className="size-6" />
          </button>
        </div>
      <div className="" id="contents">
      <Link
          to="/pred"
          className="block mb-2 hover:text-blue-400"
        >
          College Prediction
        </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
