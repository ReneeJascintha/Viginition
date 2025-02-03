import React, { useState } from "react";
import Home from "./components/home";
import SearchEnginePage from "./components/searchresults";
// import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/navbar"; // Move Navbar here
import WeatherWidget from "./components/WeatherWidget"; // ✅ Import the Weather Widget
import "./styles.css";
<<<<<<< HEAD
// import SearchBar from "./components/searchbar";
=======
>>>>>>> 9ba620ab0a9a7fff56fa02ac188a3a9c7f549047

const App = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="bg-container">      
    <Navbar setIsSearching={setIsSearching} /> {/* Navbar always visible */}
      {!isSearching ? <Home setIsSearching={setIsSearching} /> : <SearchEnginePage />}
      <DynamicBackground />
      <div className="weather-widget-container" style={{ position: "absolute", top: "90px", left: "20px" }}>
        <WeatherWidget />
      </div>
    </div>
  );
};

export default App;

