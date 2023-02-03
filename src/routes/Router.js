import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import HomePage from "../pages/HomePage";
import BookshelfPage from "../pages/BookshelfPage";
import SummaryBookPage from "../pages/SummaryBookPage";
import ProfilePage from "../pages/ProfilePage";
import Modal from "../components/Modal";
import LoginForm from "../features/auth/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category/:catId",
    element: <CategoryPage />,
  },
  {
    path: "/bookshelf",
    element: <BookshelfPage />,
  },
  {
    path: "/summary/:bookId",
    element: <SummaryBookPage />,
  },
  {
    path: "/profile/:userId",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
