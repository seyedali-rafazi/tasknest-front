import React from "react";
import FilterDropdown from "./FilterDropdown";

const statusOptions = [
  {
    label: "All Requests",
    value: "ALL",
  },
  {
    label: "Rejected",
    value: 0,
  },
  {
    label: "Awaiting approval",
    value: 1,
  },
  {
    label: "Approved",
    value: 2,
  },
];

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

function ProposalOptionSidebar() {
  return (
    <div className="flex flex-col gap-8 p-5 border border-secondery-200 rounded-lg shadow-sm">
      <FilterDropdown filterField="status" options={statusOptions} />
      <FilterDropdown filterField="sort" options={sortOptions} />
    </div>
  );
}

export default ProposalOptionSidebar;
