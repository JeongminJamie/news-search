import { createSlice } from "@reduxjs/toolkit";

// fetch data by searched word 
export const fetchSearchData = (searchBarWord) => {
  return async (dispatch) => {
    const fetchBySearchBarWord = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?domains=wsj.com&q=${searchBarWord}&apiKey=1fc542c3515443c1aaeeea95ae52f0cf`
      );

      if (!response.ok) {
        throw new Error("키워드 검색 뉴스 패치 실패");
      }

      const searchedData = await response.json();

      return searchedData.articles;
    };

    try {
      const searchedData = await fetchBySearchBarWord();
      dispatch(searchActions.replaceSearchedNews(searchedData));
    } catch (error) {
      console.error(error.message);
    }
  };
};

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchBarWord: "",
    isSearched: false,
    searchedNews: [],
  },
  reducers: {
    setSearchBarWord(state, action) {
      state.searchBarWord = action.payload;
    },
    isSearched(state, action) {
      state.isSearched = action.payload;
    },
    replaceSearchedNews(state, action) {
      state.searchedNews = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
