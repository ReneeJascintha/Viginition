import React, { useState } from 'react';
import SearchBar from './searchbar';
import Together from 'together-ai';
import { useEffect } from 'react';

console.log(process.env.REACT_APP_TOG_API_KEY);
const together = new Together({
  apiKey: process.env.REACT_APP_TOG_API_KEY,
});

const fetchAISummary = async (query, results) => {
  if (!results) return;
    let content = 'User query: ' + query + '\n\n';
    for (let i = 0; i < 5; i++) {
      const result = results[i];
      content += result.url + ': \n' + (result.description && result.description.length > 0 ? result.description : ' ') + result.relevant_text.join(' ') + '\n\n';
    }
    console.log(content);
    const response = await together.chat.completions.create({
      messages: [{"role": "system", "content": "You will be given some search results from a Hobby Search Engine. Summarise those results and provide a short answer to the query. You can also include some of the results in the summary. Return the result in HTML."}, {"role": "user", "content": `Here are the search results: ${content}`}],
      model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8"
    });
    
    console.log(response.choices[0].message.content)

    document.getElementById('summary-text').innerHTML = response.choices[0].message.content;
}

const SearchEnginePage = ({setIsSearching, setResults, results, query, setQuery}) => {

  useEffect(() => {
    fetchAISummary(query, results);
  }
  , [results]);
  return (
    <div className="result-page">
      <SearchBar setResults={setResults} setIsSearching={setIsSearching} setQuery={setQuery} query={query}/>
      {/* Search Results */}
      <div className="result-container">
        {/* AI Summary */}
        <div className="summary">
          <h2>AI Summary</h2>
          <p>Here is a summary of the search results based on the provided query.</p>
          <p id="summary-text">
            Please wait...
          </p>
        </div>
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
