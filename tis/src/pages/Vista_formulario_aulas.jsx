import Header from '../Componentes/Header'
import { Outlet  } from "react-router-dom";
import Pie_de_pagina from '../Componentes/Pie_de_pagina/pieDePagina';
import Formulario_aulas from '../Componentes/Formulario_aulas';

export default function Vista_formulario_aulas(){

    const goBack = () => {
        window.history.back()
    }

    return (
        <main className='inicio'>
            <div className='btn_crud_usr'>
                <div onClick={goBack} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className='container' style={{paddingTop:30+"px"}}>
                <Formulario_aulas />
            </div>
        </main>
        
    )    
}