import React from "react";
import FilterDropdown from "./FilterDropdown";

const statusOptions = [
  {
    label: "All Requests",
    value: "ALL",
  },
  {
    label: "rejected",
    value: 0,
  },
  {
    label: "Awaiting approval",
    value: 1,
  },
  {
    label: "approved",
    value: 2,
  },
];

const sortOptions = [
  {
    label: "category (latest)",
    value: "latest",
  },
  {
    label: "category (oldest)",
    value: "earliest",
  },
];

function ProposalOptionSidebar() {
  return (
    <div className="flex flex-col gap-8 p-5 border border-secondery-200 rounded-lg shadow-sm">
      <FilterDropdown filterField="status" options={statusOptions} />
      <FilterDropdown filterField="sort" options={sortOptions} />
    </div>
  );
}

export default ProposalOptionSidebar;
