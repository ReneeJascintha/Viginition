
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setIsSearching, setResults, query, setQuery }) => {

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() !== "") {

      const response = await fetch('http://127.0.0.1:8000/search?query=' + query.split(' ').join('+'), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json()
      console.log(data)
      setResults(data);
      setIsSearching(true);
      document.getElementById('summary-text').innerHTML = 'Please wait...';
    }
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        className="search-box"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>

    </form>
  );
};

export default SearchBar;
