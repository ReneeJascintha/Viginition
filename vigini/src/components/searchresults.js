import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import Together from 'together-ai';
import { CircularProgress } from '@mui/material';

const together = new Together({
  apiKey: process.env.REACT_APP_TOG_API_KEY,
});

const SearchEnginePage = ({setIsSearching, setResults, results, query, setQuery}) => {
  const [loading, setLoading] = useState(true);
  const [summaryContent, setSummaryContent] = useState("");
  const [summaryError, setSummaryError] = useState(null);

  useEffect(() => {
    const fetchAISummary = async () => {
      if (!results || results.length === 0) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        let content = 'User query: ' + query + '\n\n';
        
        // Take only available results (up to 5)
        const resultsToProcess = Math.min(results.length, 5);
        
        for (let i = 0; i < resultsToProcess; i++) {
          const result = results[i];
          content += result.url + ': \n' + 
            (result.description && result.description.length > 0 ? 
              result.description : ' ') + 
            (result.relevant_text ? result.relevant_text.join(' ') : '') + 
            '\n\n';
        }
        
        const response = await together.chat.completions.create({
          messages: [
            {
              "role": "system", 
              "content": "You will be given some search results from a Hobby Search Engine. Summarise those results and provide a short answer to the query. You can also include some of the results in the summary. Return the result in HTML with proper formatting."
            }, 
            {
              "role": "user", 
              "content": `Here are the search results: ${content}`
            }
          ],
          model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8"
        });
        
        // Store response in state
        setSummaryContent(response.choices[0].message.content);
        setSummaryError(null);
      } catch (error) {
        console.error('Error fetching AI summary:', error);
        setSummaryError('Sorry, there was an error generating the summary. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (results && results.length > 0) {
      fetchAISummary();
    } else {
      setLoading(false);
    }
  }, [results, query]);

  return (
    <div className="result-page">
      <SearchBar 
        setResults={setResults} 
        setIsSearching={setIsSearching} 
        setQuery={setQuery} 
        query={query}
      />
      
      <div className="result-container">
        <div className="summary">
          <h2>AI Summary</h2>
          <p>Here is a summary of the search results based on your query.</p>
          {loading ? (
            <div className="loading-container">
              <CircularProgress size={30} style={{color: '#4dabf7'}} />
              <span style={{marginLeft: '15px', color: '#adb5bd'}}>Generating summary...</span>
            </div>
          ) : summaryError ? (
            <div className="error-message">{summaryError}</div>
          ) : (
            <div className="summary-content">
              <div dangerouslySetInnerHTML={{ __html: summaryContent || "No summary available." }} />
            </div>
          )}
        </div>

        <div className="results">
          <h2 style={{ marginBottom: '20px', color: '#f8f9fa', fontFamily: 'Playfair Display, serif' }}>Search Results</h2>
          {results && results.length > 0 ? (
            results.map((result, idx) => (
              <div key={idx} className="res-b">
                <div className="result-box">
                  <a href={result.url} target="_blank" rel="noopener noreferrer">
                    <span className='content-head'>{result.title || 'No Title'}</span>
                  </a>
                  <span className='content-line'>
                    {result.description && result.description.length > 0 
                      ? result.description 
                      : result.relevant_text 
                        ? result.relevant_text.slice(0,5).join(' ')
                        : 'No description available'
                    }
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results" style={{ textAlign: 'center', padding: '30px', color: '#adb5bd' }}>
              <p>No results found. Try a different search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchEnginePage;
