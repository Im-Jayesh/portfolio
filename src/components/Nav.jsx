import { useState } from "react";
import { NavLink } from 'react-router-dom';

import ProfilePic from "../assets/profile_pic.jpg";
import BackgroundAudio from "./BackgroundAudio";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-black font-poppins">Jayesh Suthar</h2>
            <div className="hidden sm:ml-6 sm:flex space-x-4">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
        : "text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/projects"
    className={({ isActive }) =>
      isActive
        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
        : "text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    }
  >
    Projects
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
        : "text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    }
  >
    Contact Me
  </NavLink>
</div>
          </div>

          {/* Right section */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* BackgroundAudio toggle in place of bell icon */}
            <div className="relative flex items-center">
              <BackgroundAudio />
            </div>

            <img
              className="h-8 w-8 rounded-full"
              src={ProfilePic}
              alt="User"
            />
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? (
                // Close icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
  <div className="sm:hidden px-2 pb-3 space-y-1">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
          : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/projects"
      className={({ isActive }) =>
        isActive
          ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
          : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
      }
    >
      Projects
    </NavLink>

    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive
          ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
          : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
      }
    >
      Contact Me
    </NavLink>
  </div>
)}

    </nav>
  );
};

export default Nav;
