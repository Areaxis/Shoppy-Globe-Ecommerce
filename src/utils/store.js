// import function to create redux store
import { configureStore } from "@reduxjs/toolkit";

// import cart reducer
import cartReducer from "./cartSlice";

// create redux store
export const store = configureStore({
  // add reducers to store
  reducer: {
    // cart state handled by cart reducer
    cart: cartReducer,
  },
});
