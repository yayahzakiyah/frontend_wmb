import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../shared/hook/UseAuth";

const ProtectedRoute = () => {
    const {token} = useAuth()
    return token !== null ? <Outlet/> : <Navigate to='/' replace/>
};

export default ProtectedRoute;