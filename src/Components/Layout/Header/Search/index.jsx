import React from "react";
import "../../Navbar/index.css";

const Search = () => {
  return (
    <div className="searchBar">
      <form action="/" method="get" style={{ paddingRight: "1.5rem" }}>
        <input
          type="text"
          id="header-search"
          placeholder=" Keywords"
          className="searchBar"
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
