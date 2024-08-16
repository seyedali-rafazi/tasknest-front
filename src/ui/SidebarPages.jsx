import React from "react";
import SidebarNavlink from "../feachures/recomended-projects/SidebarNavlink";

function SidebarPages() {
  return (
    <div className="flex flex-row justify-between lg:flex-col border border-secondery-200 rounded-lg shadow-sm overflow-x-scroll lg:overflow-x-hidden">
      <SidebarNavlink path="/sended-proposals">
        <span className="whitespace-nowrap ">Requests sent</span>
      </SidebarNavlink>

      <SidebarNavlink path="/recomended-projects">
        <span className="whitespace-nowrap "> All projects </span>
      </SidebarNavlink>

      <SidebarNavlink path="/favourit-projects">
        <span className="whitespace-nowrap ">Favorite projects</span>
      </SidebarNavlink>
    </div>
  );
}

export default SidebarPages;
