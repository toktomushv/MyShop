import { createSlice } from "@reduxjs/toolkit";
import { addNewProduct } from "../../api/products";

const newProductSlice = createSlice({
	name: "newProductSlice",
	initialState: {
		data: [],
		status: "defalult",
		error: null
	},
	reducers: {},
	extraReducers: (build) => {
		build
			.addCase(addNewProduct.pending, (state) => {
				state.status = "loading"
			})
			.addCase(addNewProduct.fulfilled, (state, action) => {
				state.status = "default";
				state.data = action.payload;
			})
			.addCase(addNewProduct.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default newProductSlice.reducer;