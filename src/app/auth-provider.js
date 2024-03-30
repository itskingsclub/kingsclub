"use client";

import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext({
  userData: {},
  setUserData: (userData) => { },
});

export default function ThemeProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const value = { userData, setUserData };
  useEffect(() => {
    let storedUserDetails
    if (typeof window !== 'undefined' && window.localStorage) {
      storedUserDetails = localStorage.getItem('userDetails');
    }
    const userDetails = storedUserDetails ? JSON.parse(storedUserDetails) : null;
    setUserData(userDetails)
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


