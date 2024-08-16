import React from "react";
import Stat from "../../ui/Stat";
import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";

function Stats({ proposals, users, projects }) {
  const numOfPropsals = proposals?.length;
  const numUsers = users?.length;
  const numOfProjects = projects?.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-8 gap-y-8">
      <Stat
        color="green"
        title="Number of users"
        value={numUsers}
        icon={<HiUser className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="Requests"
        value={numOfPropsals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="Number of projects"
        value={numOfProjects}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
