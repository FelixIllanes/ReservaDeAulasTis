import Header from '../Componentes/Header'
import { Outlet  } from "react-router-dom";
import Pie_de_pagina from '../Componentes/Pie_de_pagina/pieDePagina';
import Formulario_aulas from '../Componentes/Formulario_aulas';

export default function Vista_formulario_aulas(){
    return (
        <main className='inicio'>
            <div className='container' style={{paddingTop:30+"px"}}>
                <Formulario_aulas />
            </div>
        </main>
        
    )    
}