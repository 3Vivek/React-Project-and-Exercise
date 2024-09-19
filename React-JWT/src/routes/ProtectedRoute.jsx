import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute=()=>{
   const {token}=useAuth();
   console.log("token",token);
   
   if(!token){
    // Check if the user is authenticated
    return <Navigate to="/login" />
   }
    // If authenticated, render the child routes
   return <Outlet />
}