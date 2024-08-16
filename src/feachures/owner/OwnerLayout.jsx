import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomeNavlink path="dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomeNavlink>
        <CustomeNavlink path="projects">
          <HiCollection />
          <span>Projects</span>
        </CustomeNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default OwnerLayout;
