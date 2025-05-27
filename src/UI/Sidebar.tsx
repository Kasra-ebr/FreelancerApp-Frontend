import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-100 row-span-2 border border-blue-900 min-h-screen">
      <ul className="flex flex-col gap-y-4 p-4 " dir="ltr">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>Dashboard</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>Projects</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomNavLink({ children, to }: CustomNavLinkProps) {
  const baseClass =
    "flex items-center gap-x-2 px-3 py-2 rounded-lg transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${baseClass} bg-blue-200 text-blue-800`
          : `${baseClass} text-gray-600 hover:bg-blue-100 hover:text-blue-800`
      }
    >
      {children}
    </NavLink>
  );
}
