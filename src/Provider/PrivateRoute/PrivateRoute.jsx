import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        <h1>Please once secced....</h1>
    }
    if (user) {
        children;
    }
    else

        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;