import { Navigate, Route, Outlet, useLocation } from 'react-router-dom';
import {useContext} from 'react'
import {AuthContext} from '../store/user'
// haz la prueba xd

export const PrivateDocRoutes = () => {
    const {isAuthenticated, isAdmin} = useContext(AuthContext)
  
    let location = useLocation();
    return isAuthenticated && !isAdmin ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />;  
}

export const PrivateAdmRoutes = () => {
    const {isAuthenticated, isAdmin} = useContext(AuthContext)
    let location = useLocation();
    return isAuthenticated && isAdmin ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />;  
}