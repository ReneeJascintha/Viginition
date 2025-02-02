// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// const SearchBar = ({ backgroundImage }) => {
//   return (
//     <div 
//       className="search-container"
//     >
//       <input type="text" className="search-box" placeholder="Search..." />
      
//       <button className="search-btn">
//         <FontAwesomeIcon icon={faSearch} />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;



import React, { useState } from "react";

const SearchBar = ({ setIsSearching }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setIsSearching(true);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
