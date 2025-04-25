import React from 'react';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/favicon.ico" alt="Vigini" />
        <span>Vigini</span>
      </div>
      
      <ul className="nav-links">
        <li>
          <button>
            <a href='/'>
            Home
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href='http://localhost:8001'>
            VulScanAI
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href='/about'>
            About
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href='/contact'>
            Contact
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
