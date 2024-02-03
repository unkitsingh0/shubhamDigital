import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "Home", // Initial state for the currentTab
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    currentTab(state, actions) {
      console.log("slice side bar ", actions);
      state.currentTab = actions.payload ? actions.payload : "Home";
    },
  },
});

export const { currentTab } = sideBarSlice.actions;
export default sideBarSlice.reducer;
