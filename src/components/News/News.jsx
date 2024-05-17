import React from "react";
import "./News.css";

const News = ({ title, description, publishedAt }) => {
  
  return (
    <div className="news-container">
      <div className="news-title">{title}</div>
      <div className="news-description">{description}</div>
      <div className="news-publishedAt">
        {new Date(publishedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default News;
