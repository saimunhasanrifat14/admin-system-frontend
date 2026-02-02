import React from "react";
import { FaMoon } from "react-icons/fa";
import Navbar from "../../CommonComponents/Navber";

const Login = () => {
  return (
    <div className="min-h-screen bg-BGWhite flex flex-col relative">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl text-TextBlack font-semibold mb-2">
              Sign in to your account
            </h1>

            <p className="text-TextGray">
              Enter your credentials to access the system
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-BGWhite">
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-TextBlack text-sm font-medium mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-GrayBorder placeholder:text-TextGray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-TextBlack text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-GrayBorder placeholder:text-TextGray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
