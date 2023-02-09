import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import LoadingContextProvider from "./contexts/LoadingContext";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
