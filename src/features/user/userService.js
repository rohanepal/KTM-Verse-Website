import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


// for registering user
const register = async (userData) => {
    const response =await axios.post(`${base_url}user/register`,userData); // passing url from backend
    if(response.data){
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data));
          }
        return response.data;
    }
};

// for login user
const login = async (userData) => {
    const response =await axios.post(`${base_url}user/login`, userData); // passing url from backend
    if(response.data){
        return response.data;
    }
};

// for getting users wishlist
const getUserWishlist = async () => {
    const response =await axios.get(`${base_url}user/wishlist`, config); // passing url from backend
    if(response.data){
        return response.data;
    }
};

// for add to cart
const addToCart = async (cartData) => {
    const response =await axios.post(`${base_url}user/cart`, cartData, config); // passing url from backend
    if(response.data){
        return response.data;
    }
};



export const authService={
    register,
    login,
    getUserWishlist,
    addToCart,
};