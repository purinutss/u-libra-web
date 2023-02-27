import React from "react";
import { useRef } from "react";

export default function MeAction({ title, logo }) {
  const inputEl = useRef();

  return (
    <div className="flex justify-center">
      <input type="file" name="inputImage" className="hidden" ref={inputEl} />
      <button className=" bg-gray-200 p-1.5 rounded-lg" onClick={() => inputEl.current.click()}>
        <i className={`fa-solid ${logo || "fa-pen"}`} />{" "}
        <span className="font-semibold">{title}</span>
      </button>
    </div>
  );
}
