import React from "react";
import AppLayout from "../AppLayout/AppLayout";
import Sidebar from "../../UI/Sidebar";
import CustomNavLink from "./../../UI/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayOut() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>Projects</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayOut;
