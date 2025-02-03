import React, { useState } from "react";
import Home from "./components/home";
import SearchEnginePage from "./components/searchresults";
import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/navbar"; // Move Navbar here
import WeatherWidget from "./components/WeatherWidget"; // ✅ Import the Weather Widget
import "./styles.css";

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

