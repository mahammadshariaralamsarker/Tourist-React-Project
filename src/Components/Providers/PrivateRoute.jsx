import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import useAuth from "./UseAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    
    if (loading) {
        return <h1 className="text-4xl"><span className="loading loading-infinity loading-lg"></span></h1>
    }
    if( !user ){
        return <Navigate to='/signup' state={location?.pathname || '/'} />
    }
      
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;