import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";

// for adding query
export const createQuery=createAsyncThunk(
    "contact/post",
    async (contactData, thunkAPI) => { 
    try{
        return await contactService.postQuery(contactData);
    }catch(error){
         return thunkAPI.rejectWithValue(error) 
    }
})



const contactState = {            // initial contact state
    contact: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    meaasge:""
}

 // creating contact slice
export const contactSlice= createSlice({    
    name:"contact",
   initialState:contactState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        // creating contact slice for adding a query
        .addCase(createQuery.pending, (state) => {       // when pending
            state.isLoading = true;
        })
        .addCase(createQuery.fulfilled,(state,action) => {   // when fulfilled
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.contact = action.payload;
            if (state.isSuccess === true)  {
                toast.success("Contact Form is Submitted Successfully")
            }
        }) 
        .addCase(createQuery.rejected, (state, action) => {    // when rejected
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true)  {
                toast.success("Something Went Wrong, Try Again")
            }
        })
    }, 
 
});

export default contactSlice.reducer;

