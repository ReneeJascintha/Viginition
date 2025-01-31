import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  return (
    <div className="search-container">
      <select 
        className="dropdown" 
        value={selectedOption} 
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="All">All</option>
        <option value="News">News</option>
        <option value="Images">Images</option>
        <option value="Videos">Videos</option>
      </select>
      
      <input type="text" className="search-box" placeholder={`Search in ${selectedOption}...`} />

      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
