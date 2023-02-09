import { createContext, useState } from "react";

import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/LocalStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
