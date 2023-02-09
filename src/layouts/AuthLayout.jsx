import React from "react";
import { Outlet } from "react-router-dom";
import BookPart from "./BookPart";
import Header from "./Header";

export default function AuthLayout() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Outlet />
    </>
  );
}
