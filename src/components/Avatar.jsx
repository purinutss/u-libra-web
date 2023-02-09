import React from "react";

export default function Avatar({ src }) {
  return (
    <div>
      <img src={src} alt="" className={`rounded-full`} />
    </div>
  );
}
