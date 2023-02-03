import { Outlet } from "react-router-dom";
import BookPart from "../layouts/BookPart";

import Header from "../layouts/Header";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <BookPart />
      </div>
    </>
  );
}
