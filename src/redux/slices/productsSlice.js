import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/products";

const productsSlice = createSlice({
	name: "productsSlcie",
	initialState: {
		data: [],
		status: "defalult",
		error: null
	},
	reducers: {},
	extraReducers: (build) => {
		build
			.addCase(getAllProducts.pending, (state) => {
				state.status = "loading"
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.status = "default";
				state.data = action.payload;
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default productsSlice.reducer;