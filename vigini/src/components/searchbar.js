import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-box" placeholder="Search..." />
      <button className="dropdown-btn">dropdown</button>
    </div>
  );
};

export default SearchBar;
