import { Navigate } from "react-router-dom"
import { isAdmin, isLoggedIn } from "./services/AuthService"

const ProtectedRoute=({children})=>{
   return isLoggedIn()?children: <Navigate to="/" />
}
const AdminProtectedRoute=({children})=>{
    return isLoggedIn() && isAdmin()?children: <Navigate to="/dashboard" />
 }
export {ProtectedRoute,AdminProtectedRoute}