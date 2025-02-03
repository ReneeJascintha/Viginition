import React from "react";
import SearchBar from "./searchbar";

const Home = ({ setIsSearching }) => {
  return (
    <div className="home">
        <SearchBar setIsSearching={setIsSearching} />
        <div className="content">
        <div className="logo"></div></div>
        <div class="tagline">Precision in Every Search!</div>
        <div className="news-section">
          <h2>News Section</h2>
        </div>
      </div>
    
  );
};

export default Home;

 