import React, { useEffect } from "react";
import "./NewsList.css";

import { useDispatch, useSelector } from "react-redux";

import { fetchNewsData } from "../../store/news-slice";
import News from "./News";

const NewsList = () => {
  const wholeNews = useSelector((state) => state.news.news);

  // date filter
  const isDateFiltered = useSelector((state) => state.news.isDateFiltered);
  const dateFilteredNews = useSelector((state) => state.news.dateFilteredNews);

  //search bar
  const isSearched = useSelector((state) => state.search.isSearched);
  const searchedNews = useSelector((state) => state.search.searchedNews);

  const dispatch = useDispatch();

  // fetch news data
  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  // show different news by filters
  const showNewsList = (news) => {
    return news.map((news) => (
      <News
        title={news.title}
        description={news.description}
        publishedAt={news.publishedAt}
      />
    ));
  };

  /*show the entire news when the date filter hasn't been used or the searched word doesn't exist.
  if the date filter used, only the news that matches to the date selected show up. (or only show the news for seared word)
  when there is no news for the selected date or searched word, just show the <p> tag.
  */
  const myNewsList = () => {
    const renderNewsList = () => {
      if (!isSearched && !isDateFiltered) {
        return showNewsList(wholeNews);
      }

      if (isSearched) {
        if (searchedNews.length > 0) {
          return showNewsList(searchedNews);
        } else {
          return <p>해당 키워드의 뉴스가 없습니다.</p>;
        }
      }

      if (isDateFiltered) {
        if (dateFilteredNews.length > 0) {
          return showNewsList(dateFilteredNews);
        } else {
          return <p>해당 날짜에 뉴스가 없습니다.</p>;
        }
      }
    };

    return renderNewsList();
  };

  return <div className="news-list--container">{myNewsList()}</div>;
};

export default NewsList;
