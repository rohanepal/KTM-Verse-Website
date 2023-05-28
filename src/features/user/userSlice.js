import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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

// creating order
export const createAnOrder = createAsyncThunk(
    "user/cart/create-order",
    async (orderDetail, thunkAPI) => {
        try{
            return await authService.createOrder(orderDetail);
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// view cart
export const getUserCart = createAsyncThunk(
    "user/cart/get",
    async (data,thunkAPI) => {
        try{
            return await authService.getCart(data);
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// remove Product form cart
export const deleteCartProduct = createAsyncThunk(
    "user/cart/product/delete",
    async (data,thunkAPI) => {
        try{
            return await authService.removeProductFormCart(data);
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
// update Product form cart
export const updateCartProduct = createAsyncThunk(
    "user/cart/product/update",
    async (cartDetail,thunkAPI) => {
        try{
            return await authService.updateProductFormCart(cartDetail);
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// view my orders
export const getOrders = createAsyncThunk(
    "user/order/get",
    async (thunkAPI) => {
        try{
            return await authService.getUserOrders();
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
// empty cart
export const deleteUserCart = createAsyncThunk(
    "user/cart/delete",
    async (thunkAPI) => {
        try{
            return await authService.emptyCart();
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset_all")


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
                toast.error(action.payload.response.data.message)
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
                toast.error(action.payload.response.data.message)
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
       })// creating view cart slice 
       .addCase(getUserCart.pending, (state) => {       
          state.isLoading=true;              // when pending
      })
      .addCase(getUserCart.fulfilled, (state ,action) => {  
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;               // when fulfilled
          state.cartProducts = action.payload;
      }) 
      .addCase(getUserCart.rejected, (state,action) => {    
          state.isLoading = false;
          state.isError = true;             // when rejected
          state.isSuccess = false;
          state.message = action.error;
      })// creating cases for remove product from cart
      .addCase(deleteCartProduct.pending, (state) => {       
         state.isLoading=true;              // when pending
     })
     .addCase(deleteCartProduct.fulfilled, (state ,action) => {  
         state.isLoading = false;
         state.isError = false;
         state.isSuccess = true;               // when fulfilled
         state.deletedCartProduct = action.payload;
         if (state.isSuccess) {
            toast.success("Product Deleted From Cart Successfully!")
         }
     }) 
     .addCase(deleteCartProduct.rejected, (state,action) => {    
         state.isLoading = false;
         state.isError = true;             // when rejected
         state.isSuccess = false;
         state.message = action.error;
         if (state.isSuccess===false) {
            toast.error("Something Went Wrong!")
         }
     })// creating cases for update product from cart
     .addCase(updateCartProduct.pending, (state) => {       
        state.isLoading=true;              // when pending
    })
    .addCase(updateCartProduct.fulfilled, (state ,action) => {  
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;               // when fulfilled
        state.updatedCartProduct = action.payload;
        if (state.isSuccess) {
           toast.success("Product Updated  From Cart Successfully!")
        }
    }) 
    .addCase(updateCartProduct.rejected, (state,action) => {    
        state.isLoading = false;
        state.isError = true;             // when rejected
        state.isSuccess = false;
        state.message = action.error;
        if (state.isSuccess===false) {
           toast.error("Something Went Wrong!")
        }
    })// creating cases for create order
    .addCase(createAnOrder.pending, (state) => {       
       state.isLoading=true;              // when pending
   })
   .addCase(createAnOrder.fulfilled, (state ,action) => {  
       state.isLoading = false;
       state.isError = false;
       state.isSuccess = true;               // when fulfilled
       state.orderedProduct = action.payload;
       if (state.isSuccess) {
          toast.success("Order Placed Successfully!")
       }
   }) 
   .addCase(createAnOrder.rejected, (state,action) => {    
       state.isLoading = false;
       state.isError = true;             // when rejected
       state.isSuccess = false;
       state.message = action.error;
       if (state.isSuccess===false) {
          toast.error("Something Went Wrong!")
       }
   })// creating cases for get order
   .addCase(getOrders.pending, (state) => {       
      state.isLoading=true;              // when pending
  })
  .addCase(getOrders.fulfilled, (state ,action) => {  
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;               // when fulfilled
      state.getorderedProduct = action.payload;
  }) 
  .addCase(getOrders.rejected, (state,action) => {    
      state.isLoading = false;
      state.isError = true;             // when rejected
      state.isSuccess = false;
      state.message = action.error;
  })// creating cases for empty cart
  .addCase(deleteUserCart.pending, (state) => {       
     state.isLoading=true;              // when pending
 })
 .addCase(deleteUserCart.fulfilled, (state ,action) => {  
     state.isLoading = false;
     state.isError = false;
     state.isSuccess = true;               // when fulfilled
     state.deletedCart = action.payload;
 }) 
 .addCase(deleteUserCart.rejected, (state,action) => {    
     state.isLoading = false;
     state.isError = true;             // when rejected
     state.isSuccess = false;
     state.message = action.error;
 })
 .addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;

