import React from "react";
import FilterDropdown from "./FilterDropdown";

const sortOptions = [
  {
    label: "Category (latest)",
    value: "latest",
  },
  {
    label: "Category (oldest)",
    value: "earliest",
  },
];

function ProjectsFilter({ numOfProjects }) {
  return (
    <div className="flex items-center justify-between border border-secondery-300 rounded-lg shadow-md p-3">
      <span className="text-secondery-800">
        {numOfProjects} Job opportunity
      </span>
      <div>
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsFilter;
