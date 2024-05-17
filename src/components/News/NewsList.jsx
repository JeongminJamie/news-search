import React, { useEffect } from "react";
import "./NewsList.css";

import { useDispatch, useSelector } from "react-redux";

import { fetchNewsData } from "../../store/news-slice";
import News from "./News";

const NewsList = () => {
  const news = useSelector((state) => state.news.news);
  const dateFilteredNews = useSelector((state) => state.news.dateFilteredNews);
  const isDateFiltered = useSelector((state) => state.news.isDateFiltered);

  const dispatch = useDispatch();

  // fetch news data
  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  /*show the entire news when the date filter hasn't been used
  if the date filter used, only the news that matches to the date selected show up
  when there is no news for the selected date, just show the <p> tag
  */
  return (
    <div className="news-list--container">
      {!isDateFiltered ? (
        news.map((news) => (
          <News
            title={news.title}
            description={news.description}
            publishedAt={news.publishedAt}
          />
        ))
      ) : dateFilteredNews.length > 0 ? (
        dateFilteredNews.map((filteredNews) => (
          <News
            title={filteredNews.title}
            description={filteredNews.description}
            publishedAt={filteredNews.publishedAt}
          />
        ))
      ) : (
        <p>해당 날짜에 뉴스가 없습니다</p>
      )}
    </div>
  );
};

export default NewsList;
