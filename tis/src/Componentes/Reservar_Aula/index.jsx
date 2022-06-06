import './res.css';
import {useEffect, useState} from 'react'
import Horario  from '../Horario'
import {  useParams } from 'react-router-dom';
import {get} from '../../services/catalogo';
import {Modal} from 'react-bootstrap'
import {assign} from '../../services/group'
import {reservarAula, getPeriodos} from '../../services/reserva'

function ReservarAula({fechaIni, grupos}){
    const [data, setData] = useState({})
    const [reservas, setReservas] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [showModalSucces, setShowModalSucces] = useState(false)
    const [body, setBody] = useState({})
    const [fecha, setFecha] = useState({})
    const idUser = window.localStorage.getItem('userId')
    
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
                id_users: idUser,
                id_aulas: id,
                codigo: data.codigo,
                cantidadPeriodo: 1,

                
            })
    }


    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log(body)
        setIsLoading(true)
        reservarAula(body).then(data => {
            if (data.Respuesta == "Reserva Creada Correctamente"){
               
                    closeModal()
                    document.getElementById("formReservaAmbientes").reset();
                    setIsLoading(false)
                    openModalSucces();
                    
            }

        })
        
    }

    return(
        <>
        <form id="formReservaAmbientes">
        <div id={`form_res_amb ${isLoading && 'contanier-loading'}`}>
                <div>
                
                <h1 style={{textAlign:"center",color:"black"}}>Reserva de Ambiente</h1>
                <h2 style={{textAlign:"center"}}><strong>Codigo de Aula</strong> {data.codigo}</h2>

                <div className="div_form">
                    <label>Materia y Grupo</label>
                    <select className="form-select" aria-label="materia_grupo"  name="id_grupos" onChange={handleChange}>                       
                    <option selected disabled>Seleccionar</option>
                    {grupos.map(({id_grupo, grupo, materia}) => (
                        <option value={id_grupo}>{materia} y {grupo}</option>
                    )) }
                    </select>
                </div>

                    {/* <div className="div_form">
                        <label>Mater&iacute;a</label><br />
                        <input className = "form_input" type="text" autoComplete='off'name="materia" onChange={handleChange} id="codigo" required pattern='[A-Za-z0-9 ]{5,15}' 
                        title='Letras y números. Mínimo 5 caracteres, máximo 15 '/>
                    </div>
                    <div className="div_form">
                        <label>Grupo</label><br />
                        <input className = "form_input" type="text" autoComplete='off' name="grupo" onChange={handleChange} id="grp" required pattern='[A-Za-z0-9 ]{1,15}' 
                        title='Letras y números. Mínimo 1 caracteres, máximo 15 '/>
                    </div> */} 
                    

                    <div className="div_form" style={{marginTop:15+"px"}}>
                        <label>Capacidad de Alumnos</label><br />
                        <input className = "form_input" type="number"  autoComplete='off'name="cantidadEstudiantes" onChange={handleChange} id="capAlum" required min={data.capacidad - 50} max={data.capacidad}/>
                    </div>
                    <div className="div_form">
                        <label>Fecha de Reserva</label><br />
                        <input className = "form_input" type="date" autoComplete='off'name="fechaReserva" min={fechaIni} onChange={handleChange} id="fechReser" required/>
                    </div>

                    <div className="div_form">
                        <label>Tipo de Reserva</label>
                        <select className="form-select"
                        aria-label="materia_grupo" 
                        id="materia_grupo_id" onChange={handleChange} name="tipo">
                            <option selected disabled>Seleccionar</option>   
                            <option value="Examen">Examen</option>
                            <option value="Elecciones">Elecciones</option>
                            <option value="Reuniones">Reuniones</option>
                            <option value="Otro">Otros</option>
                        </select>
                    </div>

                    <div className="div_form" style={{marginTop:15 +"px"}}>
                        <label>Motivo de la reserva</label><br />
                        <input className = "form_input" type="text" autoComplete='off'name="motivo" onChange={handleChange}  id="motRes" pattern='[A-Za-z0-9 ]{5,40}' 
                        title='Mínimo 5 caracteres, máximo 40 '/>
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
                    <div className="boton_form" id='btn_res_amb'>
                        <a className='selec_per_btn' onClick={openModal}>Seleccionar Horario</a>
                        <button type="reset">Cancelar</button>
                    </div>
                </div>
        </form> 
        {showModalSucces && <Modal show={showModalSucces} centered> 
        <div>
            <div className='delete_title'>
                <h2>¡Solicitud de reserva enviada!</h2>
            </div>
            <div className="modal-footer" style={{justifyContent:"center"}}>
                <button type="button" onClick={closeModalSucces} >Aceptar</button>
            </div>
        </div>
        </Modal>}
        </>  
    )
}

export default ReservarAula