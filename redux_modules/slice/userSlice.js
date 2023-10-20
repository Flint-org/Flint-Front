import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "flintToken",
  initialState: { accessToken: "", refreshToken: "" },
  reducers: {
    updateToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export default userSlice;
