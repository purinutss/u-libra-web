import React from "react";
import RegisterContainer from "./RegisterContainer";

export default function LoginForm() {
  return (
    <>
      {/* Welcome */}
      <div className="grid justify-center mt-3 ">
        <div className="text-center text-emerald-400 font-black text-4xl">
          <h1>WELCOME</h1>
        </div>
        {/* Welcome */}

        {/* Facebook login button */}
        <div className="p-4">
          <button className="border-solid border-2 border-black rounded-lg w-80 h-7 bg-blue-700 font-bold">
            <i className="fa-brands fa-facebook fa-lg mr-2" />
            Login with Facebook
          </button>
        </div>
        {/* Facebook login button */}

        {/* Login form */}
        <form className="mt-3">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </form>
        {/* Login form */}

        {/* Login button */}
        <div className="grid justify-center">
          <button
            type="submit"
            className="mr-2 text-gray-900 bg-emerald-300 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-base px-5 py-2.5 text-center"
          >
            Login
          </button>
          <RegisterContainer />
        </div>
        {/* Login button */}
      </div>
    </>
  );
}
