import MisReservas from "../Componentes/Mis_Reservas"
import { useNavigate } from "react-router-dom";
import { getAll, getAllCont,getAcceptedReport ,getRejectReport, getEstadistica } from '../services/reserva'
import {useEffect, useState} from 'react'
import Reporte from '../Componentes/Reporte'
import ContReporte from '../Componentes/Cont_Rep'
import CuadroPrioridadReporte from '../Componentes/Cuadritodos'

export default function Reporte_page(){

    const navigate = useNavigate()
    const [reservas, setReservas] = useState([])
    const [estadistica, setEstadistica] = useState([])
    const [reservasCont, setReservasCont] = useState([])

    useEffect(() => {
      
        getAll().then(data => {
            if (data.length){
                setReservas(data)
            }else{
                setReservas(["vacio"])
            }
        })

        getAllCont().then(data => {
            if (data.length){
                setReservasCont(data)
            }else{
                setReservasCont(["vacio"])
            }
        })
        getEstadistica().then(setEstadistica)
    }, [])

    console.log(estadistica)

    const redirectTo = () => {
        navigate(`/Home-admin/respuesta-reserva`)        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(evt.target.value === "1"){
            getAcceptedReport().then(data => {
                if (data.length){
                    setReservas(data)
                }else{
                    setReservas(["vacio"])
                }
            })
            getAllCont().then(data => {
                if (data.length){
                    setReservasCont(data)
                }else{
                    setReservasCont(["vacio"])
                }
            })
        }
        if(evt.target.value === "2"){
            getRejectReport().then(data => {
                if (data.length){
                    setReservas(data)
                }else{
                    setReservas(["vacio"])
                }
            })
            setReservasCont(["vacio"])
        }
        if(evt.target.value === "3"){
            getAll().then(data => {
                if (data.length){
                    setReservas(data)
                }else{
                    setReservas(["vacio"])
                }
            })
    
            getAllCont().then(data => {
                if (data.length){
                    setReservasCont(data)
                }else{
                    setReservasCont(["vacio"])
                }
            })
        }


    }

    //estadistica.numAccept == verde
    //estadistica.numAcceptCount == verde creo
    //estadistica.numReject == rojo
    //estadistica.total == rojo color

    return (
        <main className="inicio">
            <div className="filter_report">
                <div className='btn_crud_usr'>
                    <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
                </div>
                <div className="container filtro">
                <select className="form-select" aria-label="report_filter" id="filtro_reporte"
                    name="report_filter" 
                    onClick={handleSubmit}>
                    <option selected disabled>Filtro</option>
                    <option value="1" >Aceptados</option>
                    <option value="2">Rechazados</option>
                    <option value="3">Todos</option>
                </select>
                </div>
                <div>
                    <CuadroPrioridadReporte estadistica={estadistica} />
                </div>
            </div>
            <div className="container" style={{paddingTop:30+"px"}} id="tabla_com">
            <table className="table table-bordered" id="crud_table">
                <thead>
                    <tr>
                        <th>Docente</th>
                        <th>Código Aula</th>
                        <th>Tipo</th>
                        <th>Materia y grupo</th>
                        <th>Cant. Est.</th>
                        <th>Fecha</th>
                        <th>Horario</th>
                        <th>Periodo(s)</th>
                        <th>Razón</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                        <tbody>
                            {reservas?.map((reserva, idx) => (
                                <>
                                <Reporte key={idx}
                                    reserva={reserva}
                                />
                                </>
                            ))}

                            {reservasCont?.map((reservaCont, idx) => (
                                <>
                                <ContReporte key={idx} 
                                        reservaCont = {reservaCont}
                                />
                                </>
                            ))}

                        </tbody>
                </table>
            </div>
        </main>
    )    
}