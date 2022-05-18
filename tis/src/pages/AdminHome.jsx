import HeaderAdm from '../Componentes/Header_Adm/headerAdm'
import { Outlet  } from "react-router-dom";
import Inicio from '../Componentes/Inicio';
import Pie_de_pagina from '../Componentes/Pie_de_pagina/pieDePagina';

export default function AdminHome(){

    return (
        <>
           <HeaderAdm />
                <Outlet />
            <Pie_de_pagina />
       </>
    )    
}