import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ backgroundImage }) => {
  return (
    <div 
      className="search-container"
      style={{ backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',    // Ensures the image covers the entire container
      backgroundPosition: 'center', // Centers the image
      height: '100%',             // Ensures the container takes up the full viewport height
      width: '100%',  
    }}
    >
      <input type="text" className="search-box" placeholder="Search..." />
      
      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
