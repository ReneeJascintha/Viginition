import React from "react";
import SearchBar from "./searchbar";
import NewsSection from "./NewsSection";
// import WeatherWidget from "./WeatherWidget";

const Home = ({ setIsSearching }) => {
  return (
    <div className="home">
        <SearchBar setIsSearching={setIsSearching} />
        <div className="content">
        <div className="logo"></div></div>
        <div class="tagline">Precision in Every Search!</div>
        <div className="news-section-home">
          <h2>News Section</h2>
          <NewsSection />
          {/* <WeatherWidget />  */}
        </div>
      </div>
    
  );
};

export default Home;

 