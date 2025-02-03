// import React from "react";
// import Home from "./components/home";
// import SearchEnginePage from './components/searchresults';
// import DynamicBackground from "./components/DynamicBackground";
// import "./styles.css";

// const App = () => {
//   return (
//     <div className="bg-container">
//       <Home />
//       { <SearchEnginePage/> }
//       <DynamicBackground />;
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Home from "./components/home";
import SearchEnginePage from "./components/searchresults";
import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/navbar"; // Move Navbar here
import "./styles.css";
import SearchBar from "./components/searchbar";

const App = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="bg-container">
      <Navbar setIsSearching={setIsSearching} /> {/* Navbar always visible */}
      {!isSearching ? <Home setIsSearching={setIsSearching} /> : <SearchEnginePage />}
      <DynamicBackground />
    </div>
  );
};

export default App;

