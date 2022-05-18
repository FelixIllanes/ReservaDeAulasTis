import './horario.css'
import HorarioCheck from './horarioCheck'
import {useState} from 'react'

function Horario({reservas=[], periodoChange}){
  
  
  return(
        reservas.map(reserva => (
            <HorarioCheck reserva={reserva}
                      periodoChange={periodoChange}
            />
        ))
    
)
}

export default Horario