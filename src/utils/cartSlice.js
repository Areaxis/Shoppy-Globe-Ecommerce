// import function to create redux slice
import { createSlice } from "@reduxjs/toolkit";

// create cart slice
const cartSlice = createSlice({
  // name of slice
  name: "cart",

  // initial state for cart
  initialState: {
    items: [],
    search: ""
  },

  // reducers to change state
  reducers: {

    // add product to cart
    addToCart: (state, action) => {
      // check if product already exists in cart
      const existing = state.items.find(
        i => i.id === action.payload.id
      );

      // if product exists increase quantity
      if (existing) {
        existing.qty += 1;
      } else {
        // else add new product with quantity 1
        state.items.push({
          ...action.payload,
          qty: 1
        });
      }
    },

    // remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        i => i.id !== action.payload
      );
    },

    // increase quantity of product
    increaseQty: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload
      );
      item.qty += 1;
    },

    // decrease quantity of product
    decreaseQty: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload
      );

      // do not allow quantity below 1
      if (item.qty > 1) {
        item.qty -= 1;
      }
    },

    // clear all items from cart
    clearCart: (state) => {
      state.items = [];
    },

    // set search text
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

// export actions
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  setSearch
} = cartSlice.actions;

// export reducer
export default cartSlice.reducer;
