import { useEffect, useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=5fa42db338274e69ba48b47d128733cb`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles.slice(0, 5))); // Show only 5 articles
  }, []);

  return (
    <div className="news-section">
      <h2>Latest News</h2>
      {news.map((article, index) => (
        <div key={index} className="news-item">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
