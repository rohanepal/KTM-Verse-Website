import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";


// for get all product
export const getAllProducts=createAsyncThunk(
    "product/get",
    async (data, thunkAPI) => { 
    try{
        return await productService.getProducts(data);
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
});

// for get single product
export const getAProduct=createAsyncThunk(
    "product/getAProduct",
    async (id, thunkAPI) => { 
    try{
        return await productService.getSingleProduct(id);
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
});

// for add to wishlist
export const addToWishlist=createAsyncThunk(
    "product/wishlist",
    async (prodId, thunkAPI) => { 
    try{
        return await productService.addToWishlist(prodId);
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
});
// for rate a product
export const addRating=createAsyncThunk(
    "product/rating",
    async (data, thunkAPI) => { 
    try{
        return await productService.rateProduct(data);
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
});



const productState = {            // product state
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    meaasge:""
}

 // creating product slice
export const productSlice= createSlice({    
    name:"product",
   initialState:productState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        // creating product slice for get all products
        .addCase(getAllProducts.pending, (state) => {       // when pending
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled,(state,action) => {   // when fulfilled
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }) 
        .addCase(getAllProducts.rejected, (state, action) => {    // when rejected
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        // creating product slice for get single products
        .addCase(getAProduct.pending, (state) => {       // when pending
            state.isLoading = true;
        })
        .addCase(getAProduct.fulfilled,(state,action) => {   // when fulfilled
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleproduct = action.payload;
        }) 
        .addCase(getAProduct.rejected, (state, action) => {    // when rejected
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
         // creating wishlist slice for adding product to wishlist
         .addCase(addToWishlist.pending, (state) => {       // when pending
            state.isLoading = true;
        })
        .addCase(addToWishlist.fulfilled, (state, action) => {   // when fulfilled
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishList = action.payload;
            state.message = "Product Added To Wishlist..!"
        }) 
        .addCase(addToWishlist.rejected, (state, action) => {    // when rejected
            state.isLoading = false;
            state.isError = true; 
            state.isSuccess = false;
            state.message = action.error;
        })// creating cases for adding product review
        .addCase(addRating.pending, (state) => {       // when pending
           state.isLoading = true;
       })
       .addCase(addRating.fulfilled, (state, action) => {   // when fulfilled
           state.isLoading = false;
           state.isError = false;
           state.isSuccess = true;
           state.rating = action.payload;
           if (state.isSuccess) {
            toast.success("Rating Added To Product Successfully..!")
           }
       }) 
       .addCase(addRating.rejected, (state, action) => {    // when rejected
           state.isLoading = false;
           state.isError = true; 
           state.isSuccess = false;
           state.message = action.error;
       });
        
    },
 
});

export default productSlice.reducer;

