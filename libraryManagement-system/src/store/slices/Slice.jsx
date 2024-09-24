import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "ProductSlice",
  initialState: [],
  reducers: {
    AddProduct(state, action) {
      state.push(action.payload);
    },
    DelateProduct(state, action) {
      state.splice(action.payload, 1);
    },
    CleareAll(state, action) {
      return [];
    },
  },
});
const Slice2 = createSlice({
  name: "ProductSlice",
  initialState: [],
  reducers: {
    PlusPrice(state, action) {
      state.push(action.payload);
    },
    MinusPrice(state, action) {
      state.splice(action.payload, 1);
    },
    Cleare(state, action) {
      return [];
    },
  },
});

export default Slice;
export { Slice2 };
export const { AddProduct, DelateProduct, CleareAll } = Slice.actions;
export const { PlusPrice, MinusPrice, Cleare } = Slice2.actions;
