import HeaderAdm from '../Componentes/Header_Adm/headerAdm'
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useEffect} from 'react'
import Inicio from '../Componentes/Inicio';
import Pie_de_pagina from '../Componentes/Pie_de_pagina/pieDePagina';

export default function AdminHome(){
    
    let navigate = useNavigate();
    let location = useLocation();
    console.log(location)
    /*
    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if (!token) {
            //navigate('/login', {from: location.pathname}) 
            return <Navigate to="/login" state={{ from: location }} replace />;  
        }
    },[])
    */
    return (
        <>
           <HeaderAdm />
                <Outlet />
            <Pie_de_pagina />
       </>
    )    
}