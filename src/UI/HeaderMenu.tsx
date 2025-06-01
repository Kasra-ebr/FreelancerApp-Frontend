import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "./Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4 text-blue-700">
      <li className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        <DarkModeToggle />
      </li>
      <li>
        <Link
          to="/profile"
          className="flex items-center justify-center p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          <HiOutlineUser className="w-5 h-5" />
        </Link>
      </li>
      <li className="flex items-center bg-gray-100 rounded-full p-2 hover:bg-blue-200 transition">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
