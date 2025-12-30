import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/search";
import collectionSlice from "./features/collection";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    collection: collectionSlice,
  },
});
