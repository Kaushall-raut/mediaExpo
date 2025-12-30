import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    items: JSON.parse(localStorage.getItem("collection")) || [],
  },
  reducers: {
    addToCollection: (state, action) => {
      const exist = state.items.find((item) => item.id == action.payload.id);

      if (!exist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addToast: () => {
      toast.success("Added to collection !");
    },
    removeToast:()=>{
        toast.error("removed from collection")
    }
  },
});

export const { addToCollection, removeCollection, clearCollection ,addToast,removeToast} =
  collectionSlice.actions;

export default collectionSlice.reducer;
