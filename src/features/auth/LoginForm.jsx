import React from "react";

export default function LoginForm() {
  return (
    <>
      <div className=" border-solid border-2 border-black text-center">
        <div>
          <h1 className="text-emerald-400 font-black text-4xl">WELCOME</h1>
        </div>
        <div className="p-4">
          <button className="border-solid border-2 border-black rounded-lg w-80 h-7 bg-blue-700 font-bold">
            <i className="fa-brands fa-facebook fa-lg mr-2" />
            Login with Facebook
          </button>
        </div>
        <div>
          <form className="p-4">
            <div className="mb-3">
              <h3 className="text-xl font-semibold">Email</h3>
              <input
                name="email"
                className="border-solid border-2 border-black rounded-lg w-80 h-7"
              />
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">Password</h3>
              <input
                name="password"
                className="border-solid border-2 border-black rounded-lg w-80 h-7"
              />
            </div>
          </form>
        </div>

        <div>
          <button
            type="button"
            className="ml-5 rounded-xl bg-emerald-200 p-1.5 w-24 font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
