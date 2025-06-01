import React from "react";
import Button from "./Button";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "../hooks/useLogout";
import Loading from "./Loading"; 

function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loading height={50} width={20} />
  ) : (
    <Button onClick={logout}>
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500" />
    </Button>
  );
}

export default Logout;

/* refresh token , access token learn * #s198. */