import React from "react";
import { Outlet } from "react-router";
import Header from "../../UI/Header";
import Sidebar from "../../UI/Sidebar";

function AppLayout({children}) {
  return (
    <div className= "grid h-screen grid-rows-[auto_1fr]  grid-cols-[90rem_1fr]  border border-blue-900 ">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto border border-blue-900">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12 border border-blue-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
