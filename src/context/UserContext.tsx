"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface IUserContext {
  user: string;
  setUser: (user: string) => void;
}

interface IUserContextProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<IUserContext>({ user: "", setUser: () => {},});
 
export const UserContextProvider = ({children,}: IUserContextProviderProps) => {

  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
