
import React from "react";
import bg from "../images/image.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="min-h-screen flex items-center justify-center"
    >
      <form className="bg-gray-900 p-8 rounded-2xl shadow-lg w-[350px] mx-w-[300px]">
        <fieldset className="flex flex-col gap-4">
          
          <legend className="text-2xl font-bold text-center text-white mb-2">
            Login
          </legend>

          <p className="text-sm text-white text-center mb-4">
            See your growth and get consulting support!
          </p>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-white mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="saniyajangra@gmail.com"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-white mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          {/* <Link to="/"> */}
          <button className="bg-purple-600 border border-gray-400 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
            Login
            </button>
          {/* </Link> */}

        </fieldset>
      </form>
    </div>
  );
};

export default Login;