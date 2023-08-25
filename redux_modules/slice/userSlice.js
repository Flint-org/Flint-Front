import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "token",
  initialState: { token: "" },
  reducers: {
    updateToken(state, action) {
      state.token = action.payload;
    },
  },
});

export default userSlice;
