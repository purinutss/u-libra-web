import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import validateRegister from "../../validators/RegisterValidator";
import * as authApi from "../../apis/auth-api";
import useLoading from "../../hooks/useLoading";

const initialInput = {
  firstName: "",
  lastName: "",
  telephone: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const result = validateRegister(input);

      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await authApi.register(input);
        setInput(initialInput);
        onClose();
        toast.success("register is successfully, login to continue");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <div className="grid justify-center mt-3 ">
        {/* Register */}
        <div className="text-center text-emerald-400 font-black text-4xl">
          <h1>REGISTER</h1>
        </div>
        {/* Register */}

        {/* Register form */}
        <form className="mt-3" onSubmit={handleSubmitForm}>
          <div className="mx-2 flex">
            <div className="`">
              <div className="flex gap-2">
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={input.firstName}
                    onChange={handleChangeInput}
                    error={error.firstName}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={input.lastName}
                    onChange={handleChangeInput}
                    error={error.lastName}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="mb-6">
                  <label
                    htmlFor="telephone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Telephone
                  </label>
                  <Input
                    name="telephone"
                    value={input.telephone}
                    onChange={handleChangeInput}
                    error={error.telephone}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleChangeInput}
                    error={error.email}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChangeInput}
                    error={error.password}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={handleChangeInput}
                    error={error.confirmPassword}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <button
                type="submit"
                className=" text-gray-900 bg-emerald-300 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center "
              >
                Register
              </button>
            </div>
            <div>
              <button
                type="reset"
                className="text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                onClick={onClose}
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
