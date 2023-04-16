import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

// for get product
const postQuery = async (contactData) => {
    const response =await axios.post(`${base_url}enquiry`,contactData); // passing url from backend
    if(response.data){
        return response.data;
    }
};
 


export const contactService={
    postQuery,
};  