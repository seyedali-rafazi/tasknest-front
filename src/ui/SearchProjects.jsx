import React from "react";
import SearchBar from "./SearchBar";

function SearchProjects() {
  return (
    <div className="my-10">
      <h1 className="font-bold text-secondery-800 text-2xl">
        What project are you looking for?
      </h1>
      <SearchBar />
    </div>
  );
}

export default SearchProjects;
