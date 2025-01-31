import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ backgroundImage }) => {
  return (
    <div 
      className="search-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <input type="text" className="search-box" placeholder="Search..." />
      
      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
