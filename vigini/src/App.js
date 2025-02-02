import React from "react";
import Home from "./components/home";
import SearchEnginePage from './components/searchresults';
import DynamicBackground from "./components/DynamicBackground";
import "./styles.css";

const App = () => {
  const imageUrl = process.env.PUBLIC_URL + "/assets/images/bg-image5.jpg"; 
  return (
    <div className="bg-container">
      <Home backgroundImage={imageUrl} />
      { <SearchEnginePage/> }
      <DynamicBackground />;
    </div>
  );
};

export default App;
