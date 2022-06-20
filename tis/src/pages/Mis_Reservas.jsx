import MisReservas from "../Componentes/Mis_Reservas"
import { useNavigate } from "react-router-dom";
import { getAccepted, getAcceptedContigua,cancel,cancelCont } from '../services/reserva'
import {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import AulasCont from '../Componentes/Res_contiguas'

export default function Mis_Reservas(){

    var userId = window.localStorage.getItem('userId')
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    const [showAlert2, setShowAlert2] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [reservas, setReservas] = useState([])
    const [reservasCont, setReservasCont] = useState([])
    const [reserva, setReserva] = useState(null)
    const [reservaCont1, setReservaCont1] = useState(null)
    const [reservaCont2, setReservaCont2] = useState(null)
    

    const openAlert = () => setShowAlert(true)
    const closeAlert = () => setShowAlert(false)

    const openAlert2 = () => setShowAlert2(true)
    const closeAlert2 = () => setShowAlert2(false)

    const openSuccess = () => setShowSuccess(true)
    const closeSuccess = () => setShowSuccess(false)

    const focusReserva = (id) =>  {
        setReserva(id)
    }
    const focusCont1 = (idCont1) =>  {
        setReservaCont1(idCont1)
    }
    const focusCont2 = (idCont2) =>  {
        setReservaCont2(idCont2)
    }

    useEffect(() => {
      
        getAccepted(userId).then(data => {
            if (data.length){
                setReservas(data)
            }else{
                setReservas(["vacio"])
            }
        })

        getAcceptedContigua(userId).then(data => {
            if (data.length){
                setReservasCont(data)
            }else{
                setReservasCont(["vacio"])
            }
        })
    }, [])

    const redirectTo = () => {
        navigate(`/`)        
    }

    const resCancel = () => {
        const newReservas = reservas.filter(res => res.id != reserva)//borra el dato de pantalla
        setReservas(newReservas)
        setReservasCont(reservasCont)
        cancel(reserva)
        closeAlert()
        openSuccess()
    }
    const resCancelCont = () => {
        const newReservas = reservasCont.filter((res) => {
            if(res[0]["id"] !== reservaCont1 && res[1]["id"] != reservaCont2){
                return res
            }
        })//borra el dato de pantalla
        setReservasCont(newReservas)
        cancelCont(reservaCont1, reservaCont2)
        closeAlert2()
        openSuccess()
    }
    
    return (
        <main className="inicio">
            <div className='btn_crud_usr'>
                <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className="container" style={{paddingTop:30+"px"}} id="tabla_com">
            <table className="table table-bordered" id="crud_table">
                <thead>
                    <tr>
                        <th>Código Aula</th>
                        <th>Tipo</th>
                        <th>Materia y grupo</th>
                        <th>Cant. Est.</th>
                        <th>Ubicación</th>
                        <th>Fecha</th>
                        <th>Horario</th>
                        <th>Periodo(s)</th>
                        <th>Razón</th>
                        <th>Cancerlar reserva</th>
                    </tr>
                </thead>
                        <tbody>
                            {reservas?.map((reserva, idx) => (
                                <>
                                <MisReservas key={idx}
                                    reserva={reserva}
                                    focusReserva={focusReserva}
                                    reservasCont={reservasCont}
                                    openAlert={openAlert}
                                />
                                </>
                            ))}

                            {reservasCont?.map((reservaCont, idx) => (
                                <>
                                <AulasCont key={idx} 
                                        reservaCont = {reservaCont}
                                        focusCont1  = {focusCont1}
                                        focusCont2  = {focusCont2}
                                        openAlert2={openAlert2}
                                />
                                </>
                            ))}

                        </tbody>
                </table>
                {showAlert && <Modal show={showAlert} centered>
                    <div>
                        <div className='delete_title'>
                            <h2>¿Seguro desea cancelar la Reserva?</h2>
                        </div>
                        <div className="modal-footer" style={{justifyContent:"center"}}>
                            <button type="button" onClick={resCancel} >Aceptar</button>
                            <button type="button" onClick={closeAlert} >Cancelar</button>
                        </div>
                    </div> 
                </Modal>}
                {showAlert2 && <Modal show={showAlert2} centered>
                    <div>
                        <div className='delete_title'>
                            <h2>¿Seguro desea cancelar la Reserva?</h2>
                        </div>
                        <div className="modal-footer" style={{justifyContent:"center"}}>
                            <button type="button" onClick={resCancelCont} >Aceptar</button>
                            <button type="button" onClick={closeAlert2} >Cancelar</button>
                        </div>
                    </div> 
                </Modal>}
                {showSuccess && <Modal show={showSuccess} centered>
                    <div>
                        <div className='delete_title'>
                            <h2>¡Reserva Cancelada Exitosamente!</h2>
                        </div>
                        <div className="modal-footer" style={{justifyContent:"center"}}>
                            <button type="button" onClick={closeSuccess} >Aceptar</button>
                        </div>
                    </div> 
                </Modal>}
            </div>
        </main>
    )    
}