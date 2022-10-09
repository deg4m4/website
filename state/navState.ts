import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./state";

export interface NavState {
  NavState: boolean;
}

const initialState: NavState = {
  NavState: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {

    setNavState(state, action) {
      state.NavState = action.payload;
    },

  },
});

export const { setNavState } = navSlice.actions;

export const selectNavState = (state: AppState) => state.nav.NavState;

export default navSlice;