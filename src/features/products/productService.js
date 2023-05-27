import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
console.log(config);

// for get product
const getProducts = async (data) => {
    console.log(data)
    const response =await axios.get(`${base_url}product?${data?.brand?`brand=${data?.brand}&&`:""}${data?.tag?`tags=${data?.tag}&&`:""}${data?.category?`category=${data?.category}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`); // passing url from backend
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

// for write review of product
const rateProduct = async (data) => {
    const response = await axios.put(`${base_url}product/rating`, data, config);
    if(response.data){
        return response.data; 
    }
}

export const productService={
    getProducts,
    addToWishlist,
    getSingleProduct,
    rateProduct,
};