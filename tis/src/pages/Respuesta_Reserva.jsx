import Respuesta from "../Componentes/Respuesta"

import {useEffect, useState} from 'react'
import {getToResponse} from '../services/reserva'
import { useNavigate } from "react-router-dom";
import {useReservas} from '../hooks/useReservas'
import CuadroPrioridad from '../Componentes/Cuadro_Prioridad'

export default function Respuesta_Reserva(){

    const navigate = useNavigate()

    const {reservas, acceptReserva, reserva, rejectReserva, first, last, urgent} = useReservas()

    const redirectIni = () => {
        navigate(`/Home-admin/`)        
    }
    const redirectTo = () => {
        navigate(`/Home-admin/reporte`)        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(evt.target.value === "1"){
            first()
        }
        if(evt.target.value === "2"){
            last()
        }
        if(evt.target.value === "3"){
            urgent()
        }


    }


    return (
        <main className="inicio">
            <div className='btn_crud_usr'>
                <div onClick={redirectIni} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
                <form className="buscador_form" id="frmBuscador" style={{marginLeft:55+ "px"}}>
        <div className="container filtro">

            <select className="form-select" aria-label="caracteristicas" id="bCarac"
                name="caracteristicas" 
                onClick={handleSubmit} >
                <option selected disabled>Filtro por fecha</option>
                <option value="1" >Primeros en llegar</option>
                <option value="2">Ultimos en llegar</option>
                <option value="3">Urgencia</option>
            </select>
        </div>
    </form>
        <button className="report_btn" onClick={redirectTo}>Reporte Reservas</button>
            </div>
            <div className="container " style={{paddingTop:30+"px"}}>
            <CuadroPrioridad />
                <h1>Peticiones de reserva de ambientes</h1>
                <div className="resp_cont">
                    {reservas?.map(reserva => (
                        <>
                        <Respuesta reserva={reserva}
                                rejectReserva={rejectReserva}
                        />
                        </>
                    ))}
                </div>
            </div>
        </main>
    )    
}