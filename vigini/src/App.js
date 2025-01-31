// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Home from "./components/home";
import "./styles.css";
import SearchEnginePage from './components/searchresults';

const App = () => {
  const imageUrl = "https://source.unsplash.com/random/1600x900"; // Example: Dynamic Unsplash Image
  return (
    <div>
      <Home />
      <SearchEnginePage backgroundImage={imageUrl} />
    </div>
  );
};

export default App;
