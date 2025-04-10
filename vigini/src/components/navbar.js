import React from "react";
import WeatherWidget from "./WeatherWidget"; 

const Navbar = ({ setIsSearching }) => {
  return (
    <nav className="navbar">
      <div className="weather-widget-container">
        {/* <WeatherWidget /> */}
      </div>
      <ul className="nav-links">
        <li><button onClick={() => setIsSearching(false)}>Home</button></li>
        <li>Vulscan AI</li>
        <li>Contact us</li>
        <li>About us</li>
        <li>Help</li>
      </ul>
    </nav>
  );
};

export default Navbar;
