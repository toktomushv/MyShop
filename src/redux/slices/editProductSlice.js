import { createSlice } from "@reduxjs/toolkit";
import { getProduct, saveEditedProduct } from "../../api/products";

const productToEdit = createSlice({
  name: "productToEdit",
  initialState: {
    data: [],
    status: "default",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "default";
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(saveEditedProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveEditedProduct.fulfilled, (state, action) => {
        state.status = "default";
        state.data = action.payload;
      })
      .addCase(saveEditedProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productToEdit.reducer;
