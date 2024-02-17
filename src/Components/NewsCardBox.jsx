import React from 'react';
import './style.css';
import dummyImage from './dummy.png';
const NewsCardBox = ({ article }) => {

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="card-box">
      <img src={article.urlToImage || dummyImage} alt="Article" className="card-img" />
      <div className="card-text">
        <h3>{truncateTitle(article.title, 70)}</h3>
        <h4>{article.author ? `Author: ${article.author}` : 'Author: Not Available'}</h4>
        <h5>PublishedAt: {article.publishedAt}</h5>
        <a href={article.url} target="_blank">Read Article</a>
      </div>
    </div>


  );
};

export default NewsCardBox;
