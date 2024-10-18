// src/Components/LoginContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the LoginContext
export const LoginContext = createContext();

// Create the LoginProvider to manage the login state
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [userInfo, setUserInfo] = useState(null); // Store user info

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook for using the login context in other components
export const useLogin = () => {
  return useContext(LoginContext);
};
