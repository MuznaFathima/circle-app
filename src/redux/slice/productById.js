import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// action for product by id

export const fetchProductById = createAsyncThunk(
  "fetchProductsById",
  async (id) => {
    const response = await fetch(`http://localhost:5000/api/products/${id}`);
    return response.json();
  }
);

const productByIdSlice = createSlice({
  name: "productById",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isLoading = false;
      state.error = true;
    });
  },
});
export default productByIdSlice.reducer;
