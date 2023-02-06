import React from "react";

export default function Input({ type, name, value, onChange, error }) {
  return (
    <>
      <input
        type={type || "text"}
        className={` shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          error ? "is-invalid" : ""
        }`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback text-red-500">{error}</div>}
    </>
  );
}
