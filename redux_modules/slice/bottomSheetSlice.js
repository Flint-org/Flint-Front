import { createSlice } from "@reduxjs/toolkit";

const bottomSheetSlice = createSlice({
  name: "bottomSheetRef",
  initialState: {
    bottomSheetRef: {},
    bottomSheetObj: {
      text_1: "",
      onPress_1: {},
      text_2: null,
      onPress_2: null,
    },
  },
  reducers: {
    updateRef(state, action) {
      state.bottomSheetRef = action.payload;
    },
    updateObj(state, action) {
      state.bottomSheetObj = action.payload;
    },
  },
});

export default bottomSheetSlice;
