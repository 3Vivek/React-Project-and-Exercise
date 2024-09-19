import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider"


const Logout=()=>{
    const {setToken}=useAuth();
    const navigate=useNavigate();

    const handleLogout=()=>{
        setToken();
        navigate('/',{replace:true})
    }
    setTimeout(()=>{
        handleLogout();
    },3*1000)

    return(
        <>
        <div>
            <h1>Logging out...</h1>
        </div>
        </>
    )
}

export default Logout;