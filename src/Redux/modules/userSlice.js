import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    clearUser: (state, action) => {
      state.isLoading = false;
      state.currentUser = null;
    },
  },
  extraReducers: {},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
