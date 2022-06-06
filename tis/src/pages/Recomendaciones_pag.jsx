import {useEffect, useState} from 'react'
import { getRecomend } from '../services/reserva'
import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Recomendaciones from '../Componentes/Recomendaciones'

export default function Recomendaciones_pag(){
    const {id,carac, tipo, cap}= useParams()
    const [body, setBody] = useState({
        id_aula: id,
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
        console.log("render")
        getRecomend(body).then(data => {
            if (data.length){
                setAulas(data)
            }else{
                setAulas(["empty"])
            }
        })
    }, [])

        return (
        <main className="inicio">
            <div className='btn_crud_usr'>
            <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            <h1 style={{color:"black", marginTop:15+"px",marginLeft:25+"%"}}>Ambientes recomendados</h1>
            </div>
            <div className='container' style={{paddingTop:1+"px"}}>
                
                <Recomendaciones  aulas={aulas}/>
            </div>
        </main>
    )    
}

    
