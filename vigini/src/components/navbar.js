import React from "react";

const Navbar = ({ setIsSearching }) => {
  return (
    <nav className="navbar">
      <div className="logo">V</div>
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
