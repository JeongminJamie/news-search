import { createSlice } from "@reduxjs/toolkit";

export const fetchSearchData = (searchedWord) => {
  return async (dispatch) => {
    const fetchBySearchedWord = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?domains=wsj.com&q=${searchedWord}&apiKey=1fc542c3515443c1aaeeea95ae52f0cf`
      );

      if (!response.ok) {
        throw new Error("키워드 검색 뉴스 패치 실패");
      }

      const searchedData = await response.json();

      return searchedData.articles;
    };

    try {
      const searchedData = await fetchBySearchedWord();
      dispatch(searchActions.replaceSearchedNews(searchedData));
    } catch (error) {
      console.error(error.message);
    }
  };
};

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchedWord: "",
    searchedNews: [],
  },
  reducers: {
    setWord(state, action) {
      state.searchedWord = action.payload;
    },
    replaceSearchedNews(state, action) {
      state.searchedNews = action.payload;
    },
    resetWord(state, action) {
      state.searchedWord = "";
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
