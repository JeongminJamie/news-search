import { createSlice } from "@reduxjs/toolkit";

export const fetchNewsData = () => {
  return async (dispatch) => {
    // fetch data with api
    const fetchData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-04-15&sortBy=publishedAt&apiKey=1fc542c3515443c1aaeeea95ae52f0cf"
      );

      // throw an error when failed to fetch
      if (!response.ok) {
        throw new Error("실패");
      }

      const newsData = await response.json();
      console.log(newsData);

      return newsData;
    };

    try {
      const newsData = fetchData();
      dispatch(newsActions.replaceNews(newsData));
    } catch (error) {
      console.error(error.message);
    }
  };
};

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
  },
  reducers: {
    replaceNews(state, action) {
      // state.news = action.payload;
      console.log(action.payload);
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
