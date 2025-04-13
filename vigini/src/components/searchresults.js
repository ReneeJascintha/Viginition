import React, { useState } from 'react';
import SearchBar from './searchbar';

const SearchEnginePage = ({setIsSearching, setResults, results}) => {

  return (
    <div className="result-page">
      <SearchBar setResults={setResults} setIsSearching={setIsSearching} />
      {/* Search Results */}
      <div className="result-container">
        <div className="results">
          {results.map((result, idx) => (
            <div key={idx} className="res-b">
              <div className="result-box"><a href={result.url}><span className='content-head'>{result.title}</span></a>
                <span className='content-line'>{result.description.length > 0 ? result.description : result.relevant_text.slice(0,5).join(' ')}</span>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEnginePage;
