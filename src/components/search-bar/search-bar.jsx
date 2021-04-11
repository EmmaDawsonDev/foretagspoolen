import React from "react";

import "./search-bar.scss";

const SearchBar = ({ setSearch, searchTerm }) => {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="search-label">
        Sök
      </label>
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Företagsnamn"
        value={searchTerm}
        onChange={setSearch}
      />
    </div>
  );
};

export default SearchBar;
