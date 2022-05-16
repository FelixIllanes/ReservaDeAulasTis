import Respuesta from "../Componentes/Respuesta"

import {useEffect, useState} from 'react'
import {getToResponse} from '../services/reserva'

import {useReservas} from '../hooks/useReservas'

export default function Respuesta_Reserva(){

    //const [reservas, setReservas] = useState([])
    const {reservas, acceptReserva, reserva, rejectReserva} = useReservas()

    /* useEffect(() => {
        getToResponse().then(setReservas)
    }, []) */

    return (
        <main className="inicio">
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