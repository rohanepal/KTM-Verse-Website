import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";


// for get all product
export const getAllProducts=createAsyncThunk(
    "product/get",
    async (thunkAPI) => { 
    try{
        return await productService.getProducts();
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
    async (prodID, thunkAPI) => { 
    try{
        return await productService.addToWishlist(prodID);
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
            state.addToWishlist = action.payload;
            state.message = "Product Added To Wishlist..!"
        }) 
        .addCase(addToWishlist.rejected, (state, action) => {    // when rejected
            state.isLoading = false;
            state.isError = true; 
            state.isSuccess = false;
            state.message = action.error;
        });
        
    },
 
});

export default productSlice.reducer;

