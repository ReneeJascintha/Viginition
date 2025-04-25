import React from "react";
import SearchBar from "./searchbar";
import NewsSection from "./NewsSection";

const Home = ({ setIsSearching, setResults, query, setQuery }) => {
  return (
    <div className="home">
      <div className="scroll-div">
        <div className="content">
          <div className="logo"></div>
          <div className="tagline">Precision in Every Search!</div>
        </div>
        
        <SearchBar 
          setIsSearching={setIsSearching} 
          setResults={setResults} 
          query={query} 
          setQuery={setQuery}
        />
        
        <div className="news-section-home">
          <h2>Latest News</h2>
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;

