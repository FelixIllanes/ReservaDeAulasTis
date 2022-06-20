import CardAsig from "../Componentes/CardAsig";
import {  useParams } from 'react-router-dom';
import {Modal} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { getRecomend, getRecomendContigua } from '../services/reserva'
import { useNavigate } from "react-router-dom";
import Contiguas from '../Componentes/Contiguas'

export default function AsignarAula(){
    const {id, cantidad,date, per, cantPeriodo}= useParams()
    const [body, setBody] = useState({
        capacidad: cantidad,
        fecha: date,
        periodo: per,
        cantidadPeriodo: cantPeriodo,
    })
    const [aulas, setAulas] = useState([])
    const [aulasContiguas, setAulasContiguas] = useState([])
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const openModal = () => setShowModal(true)
    const closeModal = () => {
        setShowModal(false)
        redirectIni()
    }

    useEffect(() => {
        getRecomend(body).then(data => {
            if (data.length){
                setAulas(data)
            }else{
                setAulas(["empty"])
            }
        })
        getRecomendContigua(body).then(data => {
            if (data.length){
                setAulasContiguas(data)
            }else{
                setAulasContiguas(["vacio"])
            }
        })
    }, [])

    const redirectIni = () => {
        navigate(`/Home-admin/respuesta-reserva`)        
    }

    return (
        <main className="inicio" style={{ paddingTop: 25 + 'px' }}  >
            <div onClick={redirectIni} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i>
                <h1 style={{marginLeft:60+"px"}}>Aulas recomendadas</h1>
            </div>  
            <div className="container Catalogo" id="tableBody_Users" >
                {aulas?.map(aula => (
                    <CardAsig 
                    aula={aula}
                    id_reserva = {id}
                    openModal = {openModal}  
                    />
                ))}
            </div>
            <div>
                <h1>Aulas contiguas</h1>
                <div className='container doble_recomendacion'>
                {aulasContiguas?.map(aulasCont => (
                    <Contiguas
                    aulasCont = {aulasCont}
                    id_reserva = {id}
                    openModal = {openModal} 
                    />
                ))}
                </div>
            </div>
            {showModal && <Modal show={showModal} centered> 
                <div>
                    <div className='delete_title'>
                        <h2>¡Reserva creada con éxito!</h2>
                    </div>
                    <div className="modal-footer" style={{justifyContent:"center"}} >
                        <button type="button" onClick={closeModal} >Aceptar</button>
                    </div>
                </div>
            </Modal>} 

        </main>
    )    
}