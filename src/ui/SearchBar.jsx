import React, { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { transformedCategories } = useCategories();

  const handelClick = () => {
    const encodedParams = createSearchParams({
      category,
      search,
    });
    navigate({
      pathname: "/recomended-projects",
      search: encodedParams.toString(),
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      navigate({
        pathname: "/",
        search: "",
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <div>
      <form className="my-4 space-y-4 grid grid-cols-1 lg:grid-cols-3 gap-4 content-center justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Front-end project ..."
          className="border border-secondery-100 rounded-lg h-14 mt-4 p-3"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="textfield__input"
        >
          <option value="ALL">All Categories</option>
          {transformedCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={handelClick}
          className="bg-primary-700 text-white py-3 px-3 w-full rounded-xl"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
