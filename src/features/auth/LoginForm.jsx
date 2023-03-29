import React, { useState } from "react";
import RegisterContainer from "./RegisterContainer";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";

export default function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const authenticatedUser = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
      onClose = { onClose };
      toast.success("login successfully");
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center w-[100%]">
        {/* Welcome */}
        <div className="flex flex-col justify-center items-stretch w-[30%]">
          <div className="text-center text-emerald-400 font-black text-4xl">
            <h1>U-LIBRA</h1>
          </div>
          {/* Welcome */}

          {/* Facebook login button */}
          {/* <div className="p-4">
            <button className="border-solid border-2 border-black rounded-lg w-80 h-7 bg-blue-700 font-bold">
              <i className="fa-brands fa-facebook fa-lg mr-2" />
              Login with Facebook
            </button>
          </div> */}
          {/* Facebook login button */}

          {/* Login form */}
          <form className="mt-3 h-full w-full" onSubmit={handleSubmitForm}>
            <div className="">
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Login button */}
              <div className="grid justify-center">
                <button
                  type="submit"
                  className="mr-2 text-gray-900 bg-emerald-300 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-base px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </div>
              {/* Login button */}
            </div>
          </form>
          {/* Login form */}
          <RegisterContainer />
        </div>
      </div>
    </>
  );
}
