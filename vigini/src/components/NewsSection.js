// import { useEffect, useState } from "react";

// const NewsSection = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&apiKey=5fa42db338274e69ba48b47d128733cb`
//     )
//       .then((response) => response.json())
//       .then((data) => setNews(data.articles.slice(0, 5))); // Show only 5 articles
//   }, []);

//   return (
//     <div className="news-section">
//       <h2>Latest News</h2>
//       {news.map((article, index) => (
//         <div key={index} className="news-item">
//           <h3>{article.title}</h3>
//           <p>{article.description}</p>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">
//             Read more
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsSection;


// import React from "react";
// import "./NewsSection.css";

// function NewsSection() {
//   return (
//     <div className="news-section">
//       <div className="news-card">
//         <h3>News Title</h3>
//         <p>Short description of the news article...</p>
//       </div>
//       <div className="news-card">
//         <h3>Another News</h3>
//         <p>This is another news article preview.</p>
//       </div>
//     </div>
//   );
// }

// export default NewsSection;


// import React, { useEffect, useState } from "react";
// import "./NewsSection.css";

// function NewsSection() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&apiKey=5fa42db338274e69ba48b47d128733cb`
//     )
//       .then((response) => response.json())
//       .then((data) => setNews(data.articles.slice(0, 15))) // Show only 5 articles
//       .catch((error) => console.error("Error fetching news:", error));
//   }, []);

//   return (
//     <div className="news-section">
//       {/* <h2 id="lat">Latest News</h2> */}
//       {news.length > 0 ? (
//         news.map((article, index) => (
//           <div key={index} className="news-card">
//             <h3>{article.title}</h3>
//             <p>{article.description || "No description available."}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               Read more
//             </a>
//           </div>
//         ))
//       ) : (
//         <p>Loading news...</p>
//       )}
//     </div>
//   );
// }

// export default NewsSection;


import React, { useEffect, useState } from "react";
import "./NewsSection.css";

function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=5fa42db338274e69ba48b47d128733cb`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles.slice(0, 15))) // Show only 15 articles
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="news-section">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="news-card">
            {/* Display the image */}
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <h3>{article.title}</h3>
            <p>{article.description || "No description available."}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}

export default NewsSection;