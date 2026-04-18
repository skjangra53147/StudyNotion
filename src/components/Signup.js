
import React from "react";
import bg from "../images/image1.png";

const Signup = () => {
  return (
    <div
     style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
    className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <form>
          <fieldset className="flex flex-col gap-4">
            
            <legend className="text-2xl font-bold text-center text-purple-700 mb-2">
              Sign Up
            </legend>

            <p className="text-sm text-white text-center mb-4">
              Please fill in this form to create an account!
            </p>

            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-700 border-b border-purple-300 p-2 rounded-md"
            />

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-700 border-b border-purple-300 p-2 rounded-md"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-700 border-b border-purple-300 p-2 rounded-md"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-700 border-b border-purple-300 p-2 rounded-md"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-gray-700 border-b border-purple-300 p-2 rounded-md"
            />

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p className="text-white">
                I accept the{" "}
                <span className="text-purple-600 font-medium cursor-pointer">
                  Terms of Use
                </span>{" "}
                &{" "}
                <span className="text-purple-600 font-medium cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Button */}
            <button className="bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-200">
              Sign Up
            </button>

          </fieldset>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-purple-600 font-medium cursor-pointer">
            Login here
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;