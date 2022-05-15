import Header from '../Componentes/Header'
import { Outlet  } from "react-router-dom";
import Inicio from '../Componentes/Inicio';
import Pie_de_pagina from '../Componentes/Pie_de_pagina/pieDePagina';

export default function Home(){

    /*
        <Header />
            <Inicio />
            <Outlet />
        <Pie_de_pagina />
    */

    return (
        <>
           <Header />
                <Outlet />
            <Pie_de_pagina />
       </>
    )    
}
