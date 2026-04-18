
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo1 from "../logo1.svg";
import Signup from "./Signup";
import Login from "./Login";

const NavBar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex items-center justify-between px-10 py-4 bg-black text-white shadow-md">

      {/* Logo */}
      <Link to="/">
        <img src={logo1} alt="logo" className="w-50 h-30" />
      </Link>

      {/* Nav Links */}
      <nav>
        <ul className="flex gap-8 font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4">

        {!isLoggedIn && (
          <Link to="/login">
            <button onClick={Login}
            className="ml-8 mt-1 w-[70px] px-4 py-2 border border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition">
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button onClick={Signup}
             className="w-[90px] mt-1 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition">
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              Log Out
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition">
              Dashboard
            </button>
          </Link>
        )}

      </div>
    </div>
  );
};

export default NavBar;