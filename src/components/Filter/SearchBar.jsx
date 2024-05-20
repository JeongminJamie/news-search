import React from "react";

import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData, searchActions } from "../../store/search-slice";

const SearchBar = () => {
  const searchedWord = useSelector((state) => state.search.searchedWord);
  const dispatch = useDispatch();

  // when search bar input changed
  const searchChangeHandler = (e) => {
    const searchedWord = e.target.value;
    dispatch(searchActions.setWord(searchedWord));
  };

  // when search bar entered
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(fetchSearchData(searchedWord));

    // dispatch(searchActions.resetWord());
  };

  return (
    <form className="search-bar--container" onSubmit={searchSubmitHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="search-icon"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>

      <input
        className="search-bar--input"
        type="text"
        placeholder="search"
        value={searchedWord}
        onChange={searchChangeHandler}
      />
    </form>
  );
};

export default SearchBar;
