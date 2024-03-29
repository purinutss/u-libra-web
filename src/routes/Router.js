import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import BookshelfPage from "../pages/BookshelfPage";
import SummaryBookPage from "../pages/SummaryBookPage";
import ProfilePage from "../pages/ProfilePage";
import ShowProfilePage from "../pages/ShowProfilePage";
import ReadingBookPage from "../pages/ReadingBookPage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import BlankPage from "../pages/BlankPage.jsx";
import CreateBookPage from "../pages/admin/CreateBookPage";
import ProtectedRouteAdmin from "../features/auth/ProtectedRouteAdmin";
import RegisterAdminPage from "../pages/admin/RegisterAdminPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
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
        element: <HomePage />
      },
      {
        path: "/category/:categoryId",
        element: <CategoryPage />
      },
      {
        path: "/bookshelf",
        element: <BookshelfPage />
      },
      {
        path: "/summary/:bookId",
        element: <SummaryBookPage />
      },
      {
        path: "/read/:bookId/:chapterId",
        element: <ReadingBookPage />
      },
      {
        path: "/profile/:userId",
        element: <ProfilePage />
      },
      {
        path: "/show/profile/:userId",
        element: <ShowProfilePage />
      },
      {
        path: "/create-book",
        element: (
          <ProtectedRouteAdmin>
            <CreateBookPage />
          </ProtectedRouteAdmin>
        )
      },
      {
        path: "/blank",
        element: <BlankPage />
      }
    ]
  },
  { path: "/register/for/admin/only", element: <RegisterAdminPage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
