import Respuesta from "../Componentes/Respuesta"

import {useEffect, useState} from 'react'
import {getToResponse} from '../services/reserva'
import { useNavigate } from "react-router-dom";
import {useReservas} from '../hooks/useReservas'

export default function Respuesta_Reserva(){


    const navigate = useNavigate()

    //const [reservas, setReservas] = useState([])
    const {reservas, acceptReserva, reserva, rejectReserva} = useReservas()

    /* useEffect(() => {
        getToResponse().then(setReservas)
    }, []) */

    const redirectIni = () => {
        navigate(`/Home-admin/`)        
    }


    return (
        <main className="inicio">
            <div className='btn_crud_usr'>
                <div onClick={redirectIni} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className="container " style={{paddingTop:30+"px"}}>
            <h1>Peticiones de reserva de ambientes</h1>
            <div className="resp_cont">
            {reservas?.map(reserva => (
                <>
                <Respuesta reserva={reserva}
                        acceptReserva={acceptReserva}
                        rejectReserva={rejectReserva}
                />
                </>
            ))}
                </div>
            </div>
        </main>
    )    
}