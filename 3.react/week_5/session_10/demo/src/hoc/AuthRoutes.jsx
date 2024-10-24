import { Navigate } from "react-router-dom";
const AuthRoute=({children})=>{
     let isLoggedIn=true;
     return isLoggedIn? children : <Navigate to="/" />
}
export default AuthRoute;