import React from "react";
import useUser from "../Features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../Features/Authentication/UserAvatar";

function Header() {
  const { data, isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border border-blue-900">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
