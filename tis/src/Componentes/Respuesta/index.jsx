import {Card} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from 'react'

import './respuesta.css'

function Respuesta({reserva, acceptReserva}){
    const { id, id_users, id_aulas, codigo, materia, grupo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, created_at, updated_at} = reserva
    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const handleAccept= (evt) => {
        evt.preventDefault()
        acceptReserva(id)
    }

    return(
        <div>        
        <Card bg="Light" className='card_resp' style={{ width: '18rem', color:"black" }}>
            <Card.Header><strong>Solicitud del aula {id_aulas} </strong></Card.Header>
            <Card.Body className='position-relative'>
                <Card.Text>
                    <div className='peticion_cont'>
                        <p><strong>Codigo: </strong>  {codigo} </p>
                        <p><strong> fecha: </strong>{fechaReserva}</p>
                        <p><strong> periodo: </strong>{periodo}</p>
                        <p><strong> Motivo: </strong>{razon}</p>
                    </div>
                    <div className='resp_btn'>
                        <button className='btn_aceptar' type="button" onClick={handleAccept} >Aceptar</button>
                        <button className='btn_rechazar' type="button">Rechazar</button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>

        <Modal>
            <form action="">
                <div>
                    <label htmlFor="">Motivo del Rechazo</label>
                    <input type="text" />
                </div>
                <button type="button" >Enviar</button>
                <button type="button" data-bs-dismiss="modal">Cancelar</button>
            </form>
        </Modal>
        </div>
    )}

export default Respuesta