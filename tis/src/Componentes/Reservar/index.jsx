import './form.css'
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Modal,Alert} from 'react-bootstrap'
import {reservarAula} from '../../services/reserva'

function Reservar({fechaIni, grupos, user}){
    const { id, name, apellido, email, esAdmin} = user
    const [showModalSucces, setShowModalSucces] = useState(false)
    const [body, setBody] = useState({})
    const [fecha, setFecha] = useState({})
    const navigate = useNavigate()
    const nombreCompleto = name +" "+apellido
    const [show, setShow] = useState(false)
    const [errores, setErrores] = useState({})
    const openModalSucces = () => setShowModalSucces(true)
    const closeModalSucces = () => setShowModalSucces(false)
    

    const redirectTo = () => {
        navigate(`/`)        
    }
    const handleChange = (evt) => {
        if([evt.target.name]=="fechaReserva"){
            setFecha({
                ...fecha,
                fecha : evt.target.value
            })
        }
        setBody({
                ...body,
                [evt.target.name] : evt.target.value,
                id_users : id
        })
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        
        let date = new Date(body["fecha"]);
        //console.log(date.getDay()+1);
        if(date.getDay()+1 == 7){
            setErrores({
                errores,
                error: "No se aceptan reservas para el dia domingo",
            })
            setShow(true) 
        }else{
            if(body["periodo"] == 10 && body["cantidadPeriodo"] == 2){
                setErrores({
                    errores,
                    error: "En este horario solo puede seleccionar un periodo",
                })
                setShow(true) 
            }else{
                reservarAula(body).then(data => {
                    if (data.Respuesta == "Solicitud creada Correctamente"){
                        document.getElementById("formReservaAmbientes").reset();
                        openModalSucces();          
                    }
                })
            } 
        }
    }
    
    return(
        <>
        <form id="formReservaAmbientes" onSubmit={handleOnSubmit}>
            <div>
                <h1 style={{textAlign:"center",color:"black"}}>Reserva de Ambiente</h1>
                {show && <Alert variant="danger"  onClose={() => setShow(false)} dismissible>
                    <p>
                        {errores['error']} 
                    </p>
                </Alert>
                }
                <div className="div_form">
                    <label htmlFor="">Nombre*</label> <br />
                    <input className = "form_input" 
                    type="text" value={nombreCompleto} disabled/>
                </div>
                <div className="div_form">
                    <label>Materia y Grupo*</label>
                    <select className="form-select" aria-label="materia_grupo"  name="id_grupos" onChange={handleChange}>                       
                        <option selected disabled>Seleccionar</option>
                            {grupos.map(({id_grupo, grupo, materia}) => (
                            <option value={id_grupo}>{materia} y {grupo}</option>
                            )) }
                    </select>
                </div>
                <div className="div_form">
                    <label htmlFor="">Capacidad*</label> <br />
                    <input className = "form_input" onChange={handleChange}
                    type="number" name="cantidadEstudiantes" min={0} max={500}required/>
                </div>
                <div className="div_form">
                    <label>Fecha de Reserva*</label><br />
                    <input className = "form_input" type="date" autoComplete='off'name="fechaReserva" min={fechaIni} onChange={handleChange} id="fechReser" required/>
                </div>
                <div className="div_form">
                    <label>Tipo de Reserva*</label>
                    <select className="form-select"
                    aria-label="materia_grupo" 
                    id="materia_grupo_id" onChange={handleChange} name="tipo" required>
                        <option selected disabled>Seleccionar</option>   
                        <option value="Examen">Examen</option>
                        <option value="Elecciones">Elecciones</option>
                        <option value="Reuniones">Reuniones</option>
                        <option value="Otro">Otros</option>
                    </select>
                </div>
                <div className="div_form">
                    <label htmlFor="">Motivo de la Reserva</label> <br />
                    <input className = "form_input" onChange={handleChange}
                    type="text" name="motivo"
                    pattern='[A-Za-z0-9 ]{5, }' title='Este campo solo permite numeros y letras'/>
                </div>
                <div className="div_form">
                    <label>Seleccionar Horario*</label>
                    <select className="form-select"
                    aria-label="materia_grupo" 
                    id="materia_grupo_id" onChange={handleChange} name="periodo" required>
                        <option selected disabled>Seleccionar</option>   
                        <option value="1">06:45 - 08:15</option>
                        <option value="2">08:15 - 09:45</option>
                        <option value="3">09:45 - 11:15</option>
                        <option value="4">11:15 - 12:45</option>
                        <option value="5">12:45 - 14:15</option>
                        <option value="6">14:15 - 15:45</option>
                        <option value="7">15:45 - 17:15</option>
                        <option value="8">17:15 - 18:45</option>
                        <option value="9">18:45 - 20:15</option>
                        <option value="10">20:15 - 21:45</option>
                    </select>
                </div>
                <div className="div_form" style={{marginTop:15+"px"}}>
                    <label>Periodos a Reservar*</label>
                    <select className="form-select"
                    aria-label="materia_grupo" 
                    id="materia_grupo_id" onChange={handleChange} name="cantidadPeriodo" required>
                        <option selected disabled>Seleccionar Periodos</option>   
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="boton_form" id='btn_res_amb' style={{marginBottom:20+"px"}} >
                    <button>Reservar</button>
                    <button onClick={redirectTo}>Cancelar</button>
                </div>
                <center><p>Campos Obligatorios(*)</p></center>
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
export default Reservar