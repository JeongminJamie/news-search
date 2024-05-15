import React, { useEffect } from "react";
import "./NewsList.css";

import { useDispatch, useSelector } from "react-redux";

import { fetchNewsData } from "../../store/news-slice";

const NewsList = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  return <div className="news-list--container"></div>;
};

export default NewsList;
