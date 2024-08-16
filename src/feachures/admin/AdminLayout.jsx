import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";

function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomeNavlink path="dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomeNavlink>
        <CustomeNavlink path="users">
          <HiUser />
          <span>Users</span>
        </CustomeNavlink>
        <CustomeNavlink path="projects">
          <HiCollection />
          <span>Projects</span>
        </CustomeNavlink>
        <CustomeNavlink path="proposals">
          <HiOutlineViewGrid />
          <span>Requests</span>
        </CustomeNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default AdminLayout;
