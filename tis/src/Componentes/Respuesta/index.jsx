import {Card} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from 'react'

import './respuesta.css'

function Respuesta({reserva, acceptReserva, rejectReserva}){
    const { id, id_users, id_aulas, codigo, materia, grupo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, created_at, updated_at} = reserva
    const [body, setBody] = useState({})
    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const handleOnChange = (evt) => {
        setBody({
            ...body,
            motivo: evt.target.value
        })
    }

    const handleAccept= (evt) => {
        evt.preventDefault()
        acceptReserva(id)
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log(body)
        rejectReserva(id, body)
        closeModal()
    }

    return(
        <div>        
        <Card bg="Light" className='card_resp' style={{ width: '18rem', color:"black" }}>
            <Card.Header><strong>Solicitud del aula {codigo} </strong></Card.Header>
            <Card.Body className='position-relative'>
                <Card.Text>
                    <div className='peticion_cont'>
                        <p><strong>Código: </strong>  {codigo} </p>
                        <p><strong> Fecha: </strong>{fechaReserva}</p>
                        <p><strong> Periodo: </strong>{periodo}</p>
                        <p><strong> Motivo: </strong>{razon}</p>
                    </div>
                    <div className='resp_btn'>
                        <button className='btn_aceptar' type="button" onClick={handleAccept} >Aceptar</button>
                        <button className='btn_rechazar' type="button" onClick={()=> openModal()}>Rechazar</button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        {showModal && <Modal show={showModal} centered>
                        <div className='motivo_resp'>
                            <form onSubmit={handleOnSubmit}>
                                <div className='motivo'>
                                    <label >Motivo del Rechazo:</label><br />
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