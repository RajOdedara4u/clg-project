import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slices/Slice";
import { Slice2 } from "./slices/Slice";
const store = configureStore({
  reducer: {
    product: Slice.reducer,
    price: Slice2.reducer,
  },
});

export default store;
