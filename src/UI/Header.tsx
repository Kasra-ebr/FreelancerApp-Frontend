import React from "react";
import useUser from "../Features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../Features/Authentication/UserAvatar";

function Header() {
  const { data, isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border border-blue-900">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-between ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <div className="flex items-center gap-x-6 ml-auto">
          <HeaderMenu />
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
