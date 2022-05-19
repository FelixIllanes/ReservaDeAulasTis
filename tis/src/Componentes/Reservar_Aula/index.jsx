import './res.css';
import {useEffect, useState} from 'react'
import Horario  from '../Horario'
import {  useParams } from 'react-router-dom';
import {get} from '../../services/catalogo';
import {Modal} from 'react-bootstrap'
import {reservarAula, getPeriodos} from '../../services/reserva'

function ReservaAula(){
    const [data, setData] = useState({})
    const [reservas, setReservas] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showModalSucces, setShowModalSucces] = useState(false)
    const [body, setBody] = useState({})
    const [fecha, setFecha] = useState({})
    
    
    const openModalSucces = () => setShowModalSucces(true)
    const closeModalSucces = () => setShowModalSucces(false)

    const openModal = () => {
        setShowModal(true)
        getPeriodos(id, fecha).then(setReservas)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const {id}= useParams()

    useEffect(() => {
        get(id).then(data => {
            setData(data)
        })
    }, [])

    const handleChange = (evt) => {
        if([evt.target.name]=="fechaReserva"){
            setFecha({
                ...fecha,
                fecha : evt.target.value
            })
        }
        setBody({
                ...body,
                [evt.target.name] : evt.target.value
        })
    }
    const periodoChange = (evt) => {
            setBody({
                ...body,
                periodo: evt.target.value,
                id_users: 1,
                id_aulas: id,
                codigo: data.codigo,
                cantidadPeriodo: 1,

                
            })
    }

    const datos = () => {
        setBody({
            ...body,
            id_users: 1,
            id_aulas: id,
            codigo: data.codigo,
            cantidadPeriodo: 1,
            
        })
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log(body)
        reservarAula(body).then(data => {
            if (data.Respuesta == "Reserva Creada Correctamente"){
                closeModal()
                document.getElementById("formReserva").reset();
                openModalSucces();
            }

        })
        
    }

    return(
        <>
        <form id="formReserva">
        <div className="formulario" id="form_reserva">
        <div id="form_res_amb">
                <div>
                
                <h1 style={{textAlign:"center",color:"black"}}>Reserva de Ambiente</h1>
                <h2 style={{textAlign:"center"}}><strong>Codigo de Aula</strong> {data.codigo}</h2>

                    <div className="grupo">
                        <input className="input_form" type="text" name="materia" onChange={handleChange} id="codigo" required pattern='[A-Za-z0-9 ]{3,15}' 
                        title='Letras y numeros. Mínimo 3 caracteres, máximo 15 '/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Mater&iacute;a</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"  type="text" name="grupo" onChange={handleChange} id="grp" required pattern='[A-Za-z0-9 ]{1,15}' 
                        title='Letras y numeros. Mínimo 1 caracteres, máximo 15 '/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Grupo</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"   type="number" name="cantidadEstudiantes" onChange={handleChange} id="capAlum" required min={20} max={200}/><span className="barra" ></span>
                        <label className="label_form" htmlFor="">Capacidad de Alumnos</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="date" name="fechaReserva" onChange={handleChange} id="fechReser" required/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Fecha de Reserva</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"  type="text" name="motivo" onChange={handleChange}  id="motRes" required pattern='[A-Za-z0-9 ]{5,40}' 
                        title='Letras y numeros. Mínimo 5 caracteres, máximo 40 '/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Motivo de la reserva</label>
                    </div>
                </div>
                {showModal && <Modal show={showModal}>
                    <div className='container modal_horario' style={{padding:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Horario de la reserva</h2>
                        
                        {
                            <Horario reservas={reservas}
                                periodoChange={periodoChange}/>
                        }
                        <div className="boton_form">
                            <button onClick={handleOnSubmit}>Reservar Aula</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                        </div>
                    </Modal>
                }
                    <div className="boton_form">
                        <a className='selec_per_btn' onClick={openModal}>Seleccionar Periodo</a>
                        <button type="reset">Cancelar</button>
                    </div>
                </div>
            </div>  
        </form> 
        {showModalSucces && <Modal show={showModalSucces} centered> 
        <div>
            <div className='delete_title'>
                <h2>¡Reserva creada con éxito!</h2>
            </div>
            <div className="modal-footer" style={{justifyContent:"center"}}>
                <button type="button" onClick={closeModalSucces} >Aceptar</button>
            </div>
        </div>
        </Modal>}
        </>  
    )
}

export default ReservaAula