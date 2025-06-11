import React from "react";
import AppLayout from "../AppLayout/AppLayout";
import Sidebar from "../../UI/Sidebar";
import CustomNavLink from "../../UI/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiCollection />
          <span>Projects</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiCollection />
          <span>Requestes </span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
