import {useEffect, useState} from 'react'
import { getCardResponse, getToResponse, setAccept } from '../services/reserva'

export const useReservas = () => {
    const [reservas, setReservas] = useState([])
    const [reserva, setReserva] = useState(null)

    /* useEffect(() => {
        getAll().then(setAulas)
    }, [])

    const updateAula = (id, body) => {
        const newAulas = aulas.map((aula) => aula.id === id ? body : aula)
        setAulas(newAulas)
        update(body, id)
    }

    const removeAula = (id) => {
        const newAulas = aulas.filter(aula => aula.id !== id)
        setAulas(newAulas)
        remove(id)
    }

    const focusAula = (aula) =>  {
        console.log(aula)
        setAula(aula)
    } */

    useEffect(() => {
        getToResponse().then(setReservas)
    }, [])

    const acceptReserva = (id) => {
        const newReservas = reservas.filter(reserva => reserva.id !== id)
        setReservas(newReservas)
        setAccept(id)
    }

return {reservas, acceptReserva, reserva }
}