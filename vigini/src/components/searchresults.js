import React from 'react';

const SearchEnginePage = () => {
  return (
    <div className="results">
      {/* Search Results */}
      <div className="">
        <div className="">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="">
              <div className="">Result {idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEnginePage;
