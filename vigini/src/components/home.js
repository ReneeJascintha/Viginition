import React from "react";
import Navbar from "./navbar";
import SearchBar from "./searchbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <SearchBar />
        <h1 className="title">VIGINTION</h1>
        <div className="news-section">
          <h2>news section</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
