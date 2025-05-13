import libraryReducer from "./slices/librarySlice";
import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    library: libraryReducer,
    results: resultsReducer
  }
});

export default store;