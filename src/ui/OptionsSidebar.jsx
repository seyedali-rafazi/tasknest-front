import React from "react";
import FilterDropdown from "./FilterDropdown";
import useCategories from "../hooks/useCategory";

const statusOptions = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

function OptionsSidebar() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex flex-col gap-8 p-5 border border-secondery-300 rounded-lg shadow-md">
      <FilterDropdown
        filterField="category"
        options={[
          {
            value: "",
            label: "All Categories",
          },
          ...transformedCategories,
        ]}
      />
      <FilterDropdown filterField="status" options={statusOptions} />
    </div>
  );
}

export default OptionsSidebar;
