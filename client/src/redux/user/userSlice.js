import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loding: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sigInStart: (state) => {
      state.loding = true;
      state.error = null;
    },
    sigInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loding = false;
      state.error = null;
    },
    sigInFailure: (state, action) => {
      state.loding = false;
      state.error = action.payload;
    },
  },
});

export const { sigInStart, sigInSuccess, sigInFailure } = userSlice.actions;

export default userSlice.reducer;
