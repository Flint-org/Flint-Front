import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import bottomSheetSlice from "./slice/bottomSheetSlice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    bottomSheet: bottomSheetSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
