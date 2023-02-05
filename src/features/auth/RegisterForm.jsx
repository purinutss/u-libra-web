import React from "react";

export default function RegisterForm() {
  return (
    <>
      <div className="grid justify-center mt-3 text-emerald-400 font-black text-4xl">
        {/* Register */}
        <div className="text-center">
          <h1>REGISTER</h1>
        </div>
        {/* Register */}

        {/* Register form */}
        <form className="mt-3">
          <div className="flex">
            <div className="mr-2">
              <div className="mb-6">
                <label
                  for="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="telephone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Telephone
                </label>
                <input
                  type="numeric"
                  id="telephone"
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
            </div>
            <div>
              <div className="mb-6">
                <label
                  for="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
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
                  for="repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Repeat password
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <button
                type="submit"
                className="mr-2 text-gray-900 bg-emerald-300 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center "
              >
                Register
              </button>
            </div>
            <div>
              <button
                type="reset"
                className="text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
        {/* Register form */}
      </div>
    </>
  );
}
