import React, { useState } from "react";
import Home from "./components/home";
import SearchEnginePage from "./components/searchresults";
import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/navbar"; // Move Navbar here
import "./styles.css";

const App = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div className="bg-container">      
    <Navbar setIsSearching={setIsSearching} /> {/* Navbar always visible */}
      {!isSearching ? <Home setIsSearching={setIsSearching} setResults={setResults} query={query} setQuery={setQuery}/> : <SearchEnginePage setResults={setResults} results={results} setIsSearching={setIsSearching} query={query} setQuery={setQuery}/>}
      <DynamicBackground />
    </div>
  );
};

export default App;

