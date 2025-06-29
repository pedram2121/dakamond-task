import React from "react";
import Navbar from "./Navbar";
import { UserContextProvider } from "@/context/UserContext";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div>   
        <Navbar />
        {children}
    </div>
  );
}

export default Layout;
