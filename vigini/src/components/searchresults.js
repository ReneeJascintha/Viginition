import React from 'react';
// import { Card, CardContent } from "../ui/card";
// import { Button } from "../ui/button";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const SearchEnginePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white text-black">
        <h1 className="text-2xl font-bold">V</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Vulscan AI</a>
          <a href="#" className="hover:underline">Contact us</a>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Help</a>
        </nav>
      </header>

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
