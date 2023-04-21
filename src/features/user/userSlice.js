import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

const getCustomerfromlocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {           // initial state
    user : getCustomerfromlocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    meaasge: "",
};

// for registering user
export const registerUser=createAsyncThunk(
    "auth/register",
    async (userData,thunkAPI) => {
    try{
        return await authService.register(userData)
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
});

// for login user
export const loginUser=createAsyncThunk(
    "auth/login",
    async (userData,thunkAPI) => {
    try{
        return await authService.login(userData)
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
});

// getting user wishlist
export const getUserProductWishlist = createAsyncThunk(
    "user/wishlist",
    async (thunkAPI) => {
        try{
            return await authService.getUserWishlist();
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
// add product to cart
export const addProdToCart = createAsyncThunk(
    "user/cart/add",
    async (cartData, thunkAPI) => {
        try{
            return await authService.addToCart(cartData);
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

 // creating authentation slice
export const authSlice= createSlice({    
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(registerUser.pending, (state) => {    // creating authentation slice for register user   
            state.isLoading=true;    // when pending
        })
        .addCase(registerUser.fulfilled, (state, action) => {   // when fulfilled
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdUser = action.payload;
            if (state.isSuccess === true) {
                toast.info("Sign Up Successfull")
            }
        }) 
        .addCase(registerUser.rejected, (state, action) => {    // when rejected
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })   
        .addCase(loginUser.pending,(state) => {        // creating authentation slice for login user
            state.isLoading=true;                         // when pending
        })
        .addCase(loginUser.fulfilled, (state, action) => {   
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;                       // when fulfilled
            state.user = action.payload;
            if (state.isSuccess === true) {
                toast.info("Login Successfull")
            }
        }) 
        .addCase(loginUser.rejected,(state,action) => {   
            state.isLoading = false;
            state.isError = true;                  // when rejected
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error(action.error)
             }
        })   // creating wishlist slice for getting user wishlist
         .addCase(getUserProductWishlist.pending,(state) => {       
            state.isLoading=true;              // when pending
        })
        .addCase(getUserProductWishlist.fulfilled, (state ,action) => {  
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;               // when fulfilled
            state.wishlist = action.payload;
        }) 
        .addCase(getUserProductWishlist.rejected,(state,action) => {    
            state.isLoading = false;
            state.isError = true;             // when rejected
            state.isSuccess = false;
            state.message = action.error;
        }) // creating add to cart slice 
        .addCase(addProdToCart.pending, (state) => {       
           state.isLoading=true;              // when pending
       })
       .addCase(addProdToCart.fulfilled, (state ,action) => {  
           state.isLoading = false;
           state.isError = false;
           state.isSuccess = true;               // when fulfilled
           state.cartProduct = action.payload;
           if (state.isSuccess) {
            toast.success("Product Added To Cart")
           }
       }) 
       .addCase(addProdToCart.rejected, (state,action) => {    
           state.isLoading = false;
           state.isError = true;             // when rejected
           state.isSuccess = false;
           state.message = action.error;
       });
    },
 
});

export default authSlice.reducer;

