import { createSlice } from "@reduxjs/toolkit";

export const fetchNewsData = () => {
  return async (dispatch) => {
    // fetch data with api
    const fetchData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1fc542c3515443c1aaeeea95ae52f0cf"
      );

      // throw an error when failed to fetch
      if (!response.ok) {
        throw new Error("실패");
      }

      const newsData = await response.json();

      // get the array from newData (articles has an array of data)
      return newsData.articles;
    };

    try {
      const newsArticlesData = await fetchData();
      dispatch(newsActions.replaceNews(newsArticlesData));
    } catch (error) {
      console.error(error.message);
    }
  };
};

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    isDateFiltered: false,
    dateFilteredNews: [],
  },
  reducers: {
    replaceNews(state, action) {
      state.news = action.payload;
    },
    checkDateFiltered(state, action) {
      state.isDateFiltered = action.payload;
    },
    dateFilterNews(state, action) {
      const changedNewsByDate = state.news.filter(
        (news) =>
          new Date(news.publishedAt).toLocaleDateString() === action.payload
      );

      state.dateFilteredNews = changedNewsByDate;
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
