import React from "react";
import Home from "./components/home";
import SearchEnginePage from './components/searchresults';
import "./styles.css";

const App = () => {
  const imageUrl = "../public/assets/images/bg-image.jpg"; 
  return (
    <div>
      <Home />
      <SearchEnginePage backgroundImage={imageUrl} />
    </div>
  );
};

export default App;
