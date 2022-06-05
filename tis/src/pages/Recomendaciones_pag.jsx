import {useEffect, useState} from 'react'
import { getRecomend } from '../services/reserva'
import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Recomendaciones from '../Componentes/Recomendaciones'

export default function Recomendaciones_pag(){
    const {carac, tipo, cap}= useParams()
    const [body, setBody] = useState({
        caracteristicas: carac,
        tipo: tipo,
        capacidad: cap,
    })
    const [aulas, setAulas] = useState([])

    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/`)        
    }
    
    useEffect(() => {
        console.log(body)
        getRecomend(body).then(setAulas)
    }, [])

    return (
        <main className="inicio">
            <div className='btn_crud_usr'>
            <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className='container' style={{paddingTop:1+"px"}}>
                <Recomendaciones  aulas={aulas}/>
            </div>
        </main>
    )    
}
