import { Navigate, Route, Outlet, useLocation } from 'react-router-dom';
import {useContext} from 'react'
import {AuthContext} from '../store/user'

export const PublicRoutes = () => {
    const {isAuthenticated, isAdmin} = useContext(AuthContext)
    let location = useLocation();
    if (isAuthenticated){
        if (isAdmin === true){
            console.log(location.state?.from?.pathname, '>>>>')
            return  <Navigate to={'/Home-admin'} state={{ from: location?.state?.from?.pathname }}/>
            //return  <Navigate to={location?.state?.from?.pathname || '/Home-admin'}/>
        }else if(isAdmin === false){
            return  <Navigate to={'/'} state={{ from: location?.state?.from?.pathname }}/>
           // return  <Navigate to={location.state?.from?.pathname || '/'} />
        }
        
    }
    return <Outlet/>
}