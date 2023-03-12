import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({children}:any) => {
   const {authState}=useContext(AuthContext)
    if(!authState.isAuth){
        return <Navigate to="/" />
    }
    return children
}

export default PrivateRoute
