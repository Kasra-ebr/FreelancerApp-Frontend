import React, { useEffect } from "react";
import Button from "./Button";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkModeContext } from "../Context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <>
      <Button onClick={toggleDarkMode} className="flex justify-center item-center">
        {isDarkMode ? (
          <HiOutlineSun className="w-5 h-5 text-primary-900" />
        ) : (
          <HiOutlineMoon className="w-5 h-5 text-primary-900" />
        )}
      </Button>
    </>
  );
}

export default DarkModeToggle;
