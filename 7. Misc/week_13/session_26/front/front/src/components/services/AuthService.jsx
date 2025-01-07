import axios from "axios";
import { jwtDecode } from "jwt-decode";
const URL="http://localhost:8899/api/v1/auth";
const signUp=(data)=>{
   return axios.post(`${URL}/signup`,data);
}
const signIn=(data)=>{
    return axios.post(`${URL}/signin`,data);
}
const getToken=()=>{
    return localStorage.getItem("_token");
}
const isLoggedIn=()=>{
    return getToken()!=undefined?true:false;
}
const getDataFromToken=()=>{
    try{
  return  jwtDecode(getToken());
    }
    catch(err){
        return null;
    }
}
const isAdmin=()=>{
    console.log(getDataFromToken())
    return getDataFromToken().role==='admin'?true:false;
}
export {signIn,signUp,getToken,isLoggedIn,getDataFromToken,isAdmin};