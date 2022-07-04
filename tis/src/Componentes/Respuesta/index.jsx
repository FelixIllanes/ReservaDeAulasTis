import {Card} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { get } from "../../services/user"

import './respuesta.css'

function Respuesta({reserva, acceptReserva, rejectReserva}){
    const { id, id_users, id_aulas, codigo, materia, grupo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon,tipo, motivo, observaciones, created_at, updated_at} = reserva
    const [body, setBody] = useState({})
    const [user, setUser] = useState({})
    const [showModal, setShowModal] = useState(false)
    let date = new Date(fechaReserva)
    var fechaNew = date.getUTCDate()+"-"+(date.getUTCMonth()+1)+"-"+date.getFullYear()

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)
    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/Home-admin/asignar-aula/${id}/${cantidadEstudiantes}/${fechaReserva}/${numPeriodo(periodo)}/${cantidadPeriodo}`)        
    }

    const numPeriodo = (per) =>{
        if(per == "6:45 - 8:15"){
            return 1
        }
        if(per == "8:15 - 9:45"){
            return 2
        }
        if(per == "9:45 - 11:15"){
            return 3
        }
        if(per == "11:15 - 12:45"){
            return 4
        }
        if(per == "12:45 - 14:15"){
            return 5
        }
        if(per == "14:15 - 15:45"){
            return 6
        }
        if(per == "15:45 - 17:15"){
            return 7
        }
        if(per == "17:15 - 18:45"){
            return 8
        }
        if(per == "18:45 - 20:15"){
            return 9
        }
        if(per == "20:15 - 21:45"){
            return 10
        }

    }

    useEffect(() => {
        get(id_users).then(setUser)
    }, [])


    const handleOnChange = (evt) => {
        setBody({
            ...body,
            razon: evt.target.value
        })
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log(body)
        rejectReserva(id, body)
        closeModal()
    }

    if(reserva == [["vacio"]]){
        return(
            <div className='vacio_men'>
                <p style={{marginTop:90+"px"}}>No hay peticiones en este momento</p>
            </div>
        )
    }

    let prioridad = "red";
    if(tipo == "Elecciones"){
        prioridad = "blue"
    }
    if(tipo == "Reuniones"){
        prioridad = "green"
    }
    if(tipo == "Otros"){
        prioridad = "gray"
    }

    return(
        <div>        
            <Card bg="Light" className='card_resp' style={{ width: '18rem', color:"black" }}>
                <Card.Header><strong>Solicitud de Reserva</strong></Card.Header>
                <Card.Body className='position-relative'>
                    <Card.Text>
                        <div className='peticion_cont'>
                            <p><strong> Docente: </strong> {user.name} {user.apellido}</p>
                            <p><strong> Fecha: </strong>{fechaNew ? fechaNew : "No existe fecha de reserva"}</p>
                            <p><strong> Cantidad de Estudiantes: </strong>{cantidadEstudiantes}</p>
                            <p><strong> Periodo: </strong>{periodo}</p>
                            <p><strong> Cantidad de Periodos: </strong>{cantidadPeriodo}</p>
                            <div className='prioridad'>
                                <p><strong> Tipo: </strong>{tipo}</p>
                                <i className="fa-solid fa-circle-arrow-up" style={{color:prioridad }}></i>
                            </div>
                            <p><strong> Motivo: </strong>{motivo ? motivo : "No se ingresó un motivo"}</p>
                            <p><strong> Observaciones: </strong>{observaciones}</p>
                        </div>
                        <div className='resp_btn'>
                            <button className='btn_aceptar' type="button" onClick={redirectTo} >Asignar</button>
                            <button className='btn_rechazar' type="button" onClick={()=> openModal()}>Rechazar</button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            {showModal && <Modal show={showModal} centered>
                <div className='motivo_resp'>
                    <form onSubmit={handleOnSubmit}>
                        <div className='motivo'>
                            <label >Razon del Rechazo:</label><br />
                            <input type="text" onChange={handleOnChange}  className='motivo_input' />
                        </div>
                        <div className='btn_motivo'>
                            <button>Enviar</button>
                            <button type="button" data-bs-dismiss="modal" onClick={()=> closeModal()}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </Modal>
                }
        </div>
    )}

export default Respuesta