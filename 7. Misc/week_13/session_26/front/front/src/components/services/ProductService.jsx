import axios from "axios";
const URL="http://localhost:8899/api/v1/products";
const saveProduct=(data)=>{
    return axios.post(`${URL}/add`,data);
}
export {saveProduct};