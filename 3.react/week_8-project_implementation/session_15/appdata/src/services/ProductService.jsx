import axios from "axios";
const API_URL="https://dummyjson.com/products";
const getAllProducts=()=>{
   return axios.get(API_URL);
}
const getProductById=(id)=>{
  return axios.get(`${API_URL}/${id}`);
}
const getCategories=()=>{
    return axios.get(`${API_URL}/categories`);
}
const getProductByCategory=(cat)=>{
  return axios.get(`${API_URL}/category/${cat}`);
}
export {getAllProducts,getProductById,getCategories,getProductByCategory};