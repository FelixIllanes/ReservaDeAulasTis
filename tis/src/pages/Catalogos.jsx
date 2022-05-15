import {useEffect, useState} from 'react'
import { getAll } from '../services/catalogo'

import Catalogo from '../Componentes/Catalogo';
import Buscador from '../Componentes/Buscador';

export default function Catalogos(){
    const [aulas, setAulas] = useState([])

    useEffect(() => {
        getAll().then(setAulas)
    }, [])

    return (
        <main className="inicio">
            <div className='container'>
                <Buscador setAulas={setAulas}/>
                <Catalogo  aulas={aulas}/>
            </div>
        </main>
    )    
}
