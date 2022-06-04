import {useEffect, useState} from 'react'
import { getAll } from '../services/catalogo'

import Recomendaciones from '../Componentes/Recomendaciones'

export default function Catalogos(){
    const [aulas, setAulas] = useState([])

    useEffect(() => {
        getAll().then(setAulas)
    }, [])

    return (
        <main className="inicio">
            <div className='container'>
                <Recomendaciones  aulas={aulas}/>
            </div>
        </main>
    )    
}
