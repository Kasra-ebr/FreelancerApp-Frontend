import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router";
import DarkModeToggle from "./DarkModeToggle";
import LogOut from "./LogOut";
import Logout from "./LogOut";

function HeaderMenu() {
  return (
    <ul className=" flex gap-x-4 items-center">
      <li>
        <Link>
          <HiOutlineUser className="w-5 h-5 text-primary-300" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex ">
        {" "}
        <Logout />{" "}
      </li>
    </ul>
  );
}

export default HeaderMenu;
