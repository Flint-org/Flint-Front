import { createSlice } from "@reduxjs/toolkit";

const bottomSheetSlice = createSlice({
  name: "bottomSheetRef",
  initialState: { bottomSheetRef: {} },
  reducers: {
    updateRef(state, action) {
      state.bottomSheetRef = action.payload;
    },
  },
});

export default bottomSheetSlice;
