import {useEffect, useState} from 'react'
import { getCardResponse, getToResponse, setAccept, setReject, getFirst, getLast, getUrgent} from '../services/reserva'

export const useReservas = () => {
    const [reservas, setReservas] = useState([])
    const [reserva, setReserva] = useState(null)

    useEffect(() => {
        getToResponse().then(data => {
            if (data.length){
                setReservas(data)
            }else{
                setReservas(["vacio"])
            }
        })
    }, [])

    const acceptReserva = (id, codigo, periodo, fecha, id_aulas) => {
        const newReservas = reservas.filter((reserva) => {
            console.log(reserva.periodo)
            console.log(periodo)
            if(reserva.periodo !== periodo && reserva.fechaReserva !== fecha && reserva.id != id){
                return reserva
            }
        })

        setReservas(newReservas)
        setAccept(id)
    }

    const rejectReserva = (id, body) => {
        const newReservas = reservas.filter(reserva => reserva.id !== id)//borra el dato de pantalla
        setReservas(newReservas)
        setReject(body, id)
    }

    const first = () => {
        getFirst().then(data => {
            //if (data.length){
                setReservas(data)
            //}else{
                //setAulas(["vacio"])
            //}
        })
    }

    const last = () => {
        getLast().then(data => {
            //if (data.length){
                setReservas(data)
            //}else{
                //setAulas(["vacio"])
            //}
        })
    }

    const urgent = () => {
        getUrgent().then(data => {
            //if (data.length){
                setReservas(data)
            //}else{
                //setAulas(["vacio"])
            //}
        })
    }


return {reservas, acceptReserva, reserva, rejectReserva , first, last, urgent}
}