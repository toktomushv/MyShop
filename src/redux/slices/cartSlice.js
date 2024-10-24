import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      const productToAdd = action.payload;
      state.cart = [...state.cart, productToAdd];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeToCart(state, action) {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter(
        (product) => product.id !== productIdToRemove
      );
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
