import { Navigate, Route, Outlet, useLocation } from 'react-router-dom';
import {useContext} from 'react'
import {AuthContext} from '../store/user'

export const PublicRoutes = () => {
    const {isAuthenticated, isAdmin} = useContext(AuthContext)
    let location = useLocation();
    console.log('>>>>', location)
    if (isAuthenticated){
        if (isAdmin) return  <Navigate to="/Home-admin" state={{ from: location }} replace/>
        return  <Navigate to="/" state={{ from: location }} replace />
    }
    return <Outlet/>
}