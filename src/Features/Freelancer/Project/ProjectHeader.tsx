import React from "react";
import FilterDropDown from "../../../UI/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../UI/Filter";
const sortOptions = [
  {
    label: "Sort from earliest",
    value: "latest",
  },
  {
    label: "Sort from latest",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "OPEN",
    value: "OPEN",
  },
  {
    label: "CLOSE",
    value: "CLOSE",
  },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8 ">
      <h1 className="text-lg font-bold "> List Projects</h1>
      <div>
        <Filter filterfield="status" options={statusOptions}/> 
        <FilterDropDown filterfield="sort" options={sortOptions} />
        <FilterDropDown
          filterfield="category"
          options={[
            {
              value: "ALL",
              label: "ALL",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
