import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import BookshelfPage from "../pages/BookshelfPage";
import SummaryBookPage from "../pages/SummaryBookPage";
import ProfilePage from "../pages/ProfilePage";
import ReadingBookPage from "../pages/ReadingBookPage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import BlankPage from "../pages/BlankPage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />,
      </ProtectedRoute>
    ),
    children: [
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
        path: "/read/:bookId/:chapterId",
        element: <ReadingBookPage />,
      },
      {
        path: "/profile/:userId",
        element: <ProfilePage />,
      },
      {
        path: "/blank",
        element: <BlankPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
