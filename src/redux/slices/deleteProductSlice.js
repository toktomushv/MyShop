import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/products"

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${API_URL}/${productId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const productToDeleteSlice = createSlice({
  name: "productToDelete",
  initialState: {
    data: null,
    status: "default",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.status = "default";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productToDeleteSlice.reducer;
