import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productList";
import productsByIdReducer from "./slice/productById"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsById:productsByIdReducer,
  },
});

// configure store is given by redux toolkit to create store easier and more cleaner code. it includes redux-thunk and redux-devtools automatically.
