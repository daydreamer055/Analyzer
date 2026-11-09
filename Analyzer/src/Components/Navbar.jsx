
import React, { useState, useEffect } from "react";
import Logo from "../assets/logo1.png";

import {
  FaTimes,
  FaBars,
  FaHome,
  FaTachometerAlt,
  FaInfoCircle,
  FaFileAlt,
  FaUser
} from "react-icons/fa";

import DarkMode from "./DarkMode.jsx";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );
    };

    window.addEventListener("storage", checkLogin);
    window.addEventListener("authChange", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("authChange", checkLogin);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");

    setIsLoggedIn(false);
    setUserOpen(false);
    setMenuOpen(false);

    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  };

  // Close menus
  const closeMenus = () => {
    setMenuOpen(false);
    setUserOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="relative flex items-center justify-between bg-lightBg dark:bg-darkNav text-lightText dark:text-darkText gap-1 py-1 px-4 font-bold">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap sm:gap-4"
        >
          <img
            src={Logo}
            alt="Resume Analyzer Logo"
            className="w-8 sm:w-10 rounded-md"
          />

          <span className="hover:text-primaryHover text-sm sm:text-base">
            ResumeAnalyzer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-6">

            <li>
              <Link
                to="/"
                className="font-medium hover:text-primaryHover flex items-center gap-2"
              >
                <FaHome /> Home
              </Link>
            </li>

            <li>
              <Link
                to="/analyzer"
                className="font-medium hover:text-primaryHover flex items-center gap-2"
              >
                <FaFileAlt /> Analyzer
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="font-medium hover:text-primaryHover flex items-center gap-2"
              >
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="font-medium hover:text-primaryHover flex items-center gap-2"
              >
                <FaInfoCircle /> About
              </Link>
            </li>

          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Desktop Login / Signup / Logout */}
          <div className="hidden md:flex items-center gap-3">

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-md border border-sky-950 hover:bg-sky-950 hover:text-white transition dark:border-blue-200 dark:hover:bg-blue-200 dark:hover:text-blue-900"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-1.5 rounded-md bg-sky-950 text-white hover:bg-sky-900 transition dark:bg-blue-200 dark:text-blue-900 dark:hover:bg-blue-300"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 rounded-md bg-sky-950 text-white hover:bg-sky-900 transition dark:bg-blue-200 dark:text-blue-900"
              >
                Logout
              </button>
            )}

          </div>

          {/* Mobile User Menu */}
          <div className="relative md:hidden">

            <button
              onClick={() => setUserOpen(!userOpen)}
              aria-label="Open user menu"
              aria-expanded={userOpen}
              className="text-xl p-2 rounded-full hover:text-white hover:bg-sky-950 transition dark:hover:bg-blue-200 dark:hover:text-blue-900"
            >
              <FaUser />
            </button>

            {userOpen && (
              <div className="absolute right-0 top-11 w-32 bg-lightBg dark:bg-darkNav shadow-lg rounded-md p-2 z-50">

                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      onClick={closeMenus}
                      className="block text-center hover:text-white w-full rounded-md hover:bg-sky-950 px-2 py-1 dark:hover:bg-blue-200 dark:hover:text-blue-900 text-sm sm:text-base"
                    >
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      onClick={closeMenus}
                      className="block text-center hover:text-white w-full rounded-md hover:bg-sky-950 px-2 py-1 dark:hover:bg-blue-200 dark:hover:text-blue-900 text-sm sm:text-base"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block text-center hover:text-white w-full rounded-md hover:bg-sky-950 px-2 py-1 dark:hover:bg-blue-200 dark:hover:text-blue-900 text-sm sm:text-base"
                  >
                    Logout
                  </button>
                )}

              </div>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Dark Mode */}
          <DarkMode />

        </div>
      </nav>

      {/* Mobile Navigation Pages */}
      {menuOpen && (
        <div className="md:hidden bg-lightBg text-lightText dark:bg-darkNav dark:text-darkText px-6 py-4">
          <ul className="flex flex-col items-center gap-4">

            <li className="w-40">
              <Link
                to="/"
                onClick={closeMenus}
                className="hover:text-primaryHover flex items-center gap-1"
              >
                <FaHome /> Home
              </Link>
            </li>

            <li className="w-40">
              <Link
                to="/analyzer"
                onClick={closeMenus}
                className="hover:text-primaryHover flex items-center gap-1"
              >
                <FaFileAlt /> Analyzer
              </Link>
            </li>

            <li className="w-40">
              <Link
                to="/dashboard"
                onClick={closeMenus}
                className="hover:text-primaryHover flex items-center gap-1"
              >
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>

            <li className="w-40">
              <Link
                to="/about"
                onClick={closeMenus}
                className="hover:text-primaryHover flex items-center gap-1"
              >
                <FaInfoCircle /> About
              </Link>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
