import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// action for productList

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({category,search,sort}) => {
    let url = "http://localhost:5000/api/products";
    const queryParams=[];

    if(category) queryParams.push(`category=${encodeURIComponent(category)}`);
    if(search) queryParams.push(`search=${encodeURIComponent(search)}`);
    if(sort) queryParams.push(`sort=${encodeURIComponent(sort)}`);

    if(queryParams.length>0){
        url+="?"+queryParams.join("&")
    }
     
    const response = await fetch(url);
    return response.json();
  }
);


const productSlice = createSlice({
  name: "productList",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isLoading = false;
      state.error = true;
    });
  },
});



export default productSlice.reducer;

// extraReducer to handle all cases
