import { Navigate, Route, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
    const isAuthenticated = true 
    return isAuthenticated  ? <Outlet/> : <Navigate to="/login" />
}