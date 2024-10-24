import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice";
import newProductReducer from "./slices/newProductSlice";
import editProductReducer from "./slices/editProductSlice";
import cartReducer from "./slices/cartSlice";
import deleteReducer from "./slices/deleteProductSlice"

const store = configureStore({
	reducer: {
		products: productsReducer,
		newProduct: newProductReducer,
		editProduct: editProductReducer,
		deleteProduct: deleteReducer,
		cart: cartReducer
	},
})

export default store;