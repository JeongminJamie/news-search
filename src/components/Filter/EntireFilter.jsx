import React from "react";
import SearchBar from "./SearchBar";
import DateFilter from "./DateFilter";

import "./EntireFilter.css";

const EntireFilter = () => {
  return (
    <div className="entire-filter--container">
      <SearchBar />
      <DateFilter />
    </div>
  );
};

export default EntireFilter;
