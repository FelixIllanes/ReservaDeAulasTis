import {useEffect, useState} from 'react'
import { getCardResponse, getToResponse, setAccept, setReject} from '../services/reserva'

export const useReservas = () => {
    const [reservas, setReservas] = useState([])
    const [reserva, setReserva] = useState(null)

    useEffect(() => {
        getToResponse().then(setReservas)
    }, [])

    const acceptReserva = (id, codigo, periodo, fecha, id_aulas) => {
        const newReservas = reservas.filter(reserva => reserva.id !== id )  
        /* const newReservas1 = newReservas .filter(reserva => reserva.periodo !== periodo ) 
        const newReservas2 = newReservas1.filter(reserva => reserva.fecha !== fecha )  */
        /* const newReservas = reservas.filter(reserva => reserva.id_aulas !== fecha.id_aulas)  */
        setReservas(newReservas)
        setAccept(id)
    }

    const rejectReserva = (id, body) => {
        const newReservas = reservas.filter(reserva => reserva.id !== id)//borra el dato de pantalla
        setReservas(newReservas)
        setReject(body, id)
    }

return {reservas, acceptReserva, reserva, rejectReserva }
}