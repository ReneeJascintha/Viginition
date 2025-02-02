import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const SearchEnginePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Search Bar */}
      <div className="flex justify-center py-8">
        <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
          <input
            type="text"
            className="p-2 bg-black text-white outline-none"
            placeholder="Search Results"
          />
          <Button variant="ghost" className="border-l border-gray-500 px-4">
            Dropdown
          </Button>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex justify-center">
        <div className="border border-gray-500 p-4">
          {[...Array(4)].map((_, idx) => (
            <Card key={idx} className="mb-4">
              <CardContent className="p-4 bg-black border border-gray-500">Result {idx + 1}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEnginePage;
