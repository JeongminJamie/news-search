import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news-slice";

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export default store;
