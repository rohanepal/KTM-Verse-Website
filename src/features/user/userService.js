import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


// for registering user
const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData); // passing url from backend
    if (response.data) {
        if (response.data) {
            return response.data;
        }
    }
};

// for login user
const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData); // passing url from backend
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
};

// for getting users wishlist
const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config); // passing url from backend
    if (response.data) {
        return response.data;
    }
};

// for add to cart
const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config); // passing url from backend
    if (response.data) {
        return response.data;
    }
};

// for view cart
const getCart = async (data) => {
    const response = await axios.get(`${base_url}user/cart`, data); // passing url from backend
    if (response.data) {
        return response.data;
    }
};

// for removing cart product
const removeProductFormCart = async (data) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${data.id}`, data.config2); // passing url from backend
    if (response.data) {
        return response.data;
    }
};

// for update product quantity in cart
const updateProductFormCart = async (cartDetail) => {
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config); // passing url from backend
    if (response.data) {
        return response.data;
    }
};

 // for creating order
 const createOrder = async (orderDetail) => {
    const response = await axios.post(`${base_url}user/cart/create-order`,orderDetail, config); // passing url from backend
    if (response.data) {
        return response.data;
    }
};
// for get my order
const getUserOrders = async () => {
    const response = await axios.get(`${base_url}user/getmyorders`, config); // passing url from backend
    if (response.data) {
        return response.data;
    }
};

// for cart clear
const emptyCart = async () => {
    const response = await axios.delete(`${base_url}user/empty-cart`, config); // passing url from backend
    if (response.data) {
        return response.data;
    }
};



export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFormCart,
    updateProductFormCart,
    createOrder,
    getUserOrders,
    emptyCart,
};

