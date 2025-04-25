import React from "react";
import SearchBar from "./searchbar";
import NewsSection from "./NewsSection";
// import WeatherWidget from "./WeatherWidget";

const Home = ({ setIsSearching, setResults, query, setQuery }) => {
  return (
    <div className="home">
      <div className="scroll-div">
        <SearchBar setIsSearching={setIsSearching} setResults={setResults} query={query} setQuery={setQuery}/>
        <div className="content">
        <div className="logo"></div></div>
        <div className="tagline">Precision in Every Search!</div>
        <div className="news-section-home">
          <h2>Latest News</h2>
          <NewsSection />
          {/* <WeatherWidget />  */}
        </div>
        </div>
      </div>
    
  );
};

export default Home;

 