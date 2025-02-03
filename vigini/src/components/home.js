import React from "react";
import SearchBar from "./searchbar";

const Home = ({ setIsSearching }) => {
  return (
    <div className="home">
      <div className="content">
        <SearchBar setIsSearching={setIsSearching} />
        <img src="C:\Users\admin\Desktop\Viginition\vigini\public\assets\images\viginition logo.PNG" alt="VIGINITION Logo" />
        <div class="tagline">Precision in Every Search.</div>
        <div className="news-section">
          <h2>News Section</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

