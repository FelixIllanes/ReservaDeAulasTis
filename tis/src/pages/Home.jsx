import Header from '../Componentes/Header'
import {useState, useContext, useEffect} from 'react'
import { Outlet, useNavigate, Navigate, useLocation  } from "react-router-dom";
import Inicio from '../Componentes/Inicio';
import Pie_de_pagina from '../Componentes/Pie_de_pagina/pieDePagina';
import {AuthContext} from '../store/user'


export default function Home(){

    return (
        <>
           <Header />
                <Outlet />
            <Pie_de_pagina />
       </>
    )    
}
