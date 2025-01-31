import React from "react";
import Home from "./components/home";
import SearchEnginePage from './components/searchresults';
import "./styles.css";

const App = () => {
  const imageUrl = process.env.PUBLIC_URL + "/assets/images/bg-image.jpg"; 
  return (
    <div>
      <Home backgroundImage={imageUrl} />
      {/* <SearchEnginePage backgroundImage={imageUrl} /> */}
    </div>
  );
};

export default App;
