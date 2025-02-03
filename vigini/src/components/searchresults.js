import React from 'react';
import SearchBar from './searchbar';

const SearchEnginePage = () => {
  return (
    <div className="">
      <SearchBar/>
      {/* Search Results */}
      <div className="result-container">
        <div className="results">
          {[...Array(7)].map((_, idx) => (
            <div key={idx} className="res-b">
              <div className="result-box"><span className='content-head'>Title {idx + 1}</span>
                <span className='content-line'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEnginePage;
