import React from "react";
import Home from "./components/home";
import SearchEnginePage from './components/searchresults';
import DynamicBackground from "./components/DynamicBackground";
import "./styles.css";

const App = () => {
  return (
    <div className="bg-container">
      <Home />
      { <SearchEnginePage/> }
      <DynamicBackground />;
    </div>
  );
};

export default App;
