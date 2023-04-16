import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
console.log(config);

// for get product
const getProducts = async (userData) => {
    const response =await axios.get(`${base_url}product`); // passing url from backend
    if(response.data){
        return response.data;
    }
};

// for getting single product
const getSingleProduct = async (id) => {
    const response =await axios.get(`${base_url}product/${id}`); // passing url from backend
    if(response.data){
        return response.data;
    }
};

// for adding product to wishlist
const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
    if(response.data){
        return response.data; 
    }
}


export const productService={
    getProducts,
    addToWishlist,
    getSingleProduct,
    
};