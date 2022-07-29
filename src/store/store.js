import { configureStore, createSlice } from "@reduxjs/toolkit";

const offCanvasSlice = createSlice({
  name: "canvas",
  initialState: { active: false },
  reducers: {
    toggle(state) {
      state.active = !state.active;
    },
  },
});
export const offCanvasActions = offCanvasSlice.actions;

const store = configureStore({
  reducer: {
    canvas: offCanvasSlice.reducer,
  },
});

export default store;
