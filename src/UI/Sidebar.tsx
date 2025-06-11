import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import CustomNavLink from './CustomNavLink';

function Sidebar({children}) {
  return (
    <div className="bg-gray-100 row-span-2 min-h-screen  " style={{
    backgroundColor: "rgb(var(--background-app-rgb))",
      transition: "background-color 0.3s ease"
  }}>
      <ul className="flex flex-col gap-y-4 p-4 " dir="ltr">
       {children}
      </ul>
    </div>
  );
}

export default Sidebar;
