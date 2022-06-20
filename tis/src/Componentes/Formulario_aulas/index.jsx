
import {useState} from 'react'
import {create} from '../../services/aulas'
import {Modal} from 'react-bootstrap'
import './formAu.css'
import { useNavigate } from "react-router-dom";

function Formulario_aulas(){

    const [body, setBody] = useState({})
    const [showModal, setShowModal] = useState(false)
    const formData = new FormData();
    const navigate = useNavigate()

    const redirectTo = () => {
    navigate(`/Home-admin/crud`)        
}

    
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const handleChange = (evt) => {

            if (evt.target.name === 'btnradio'){
                setBody({
                    ...body,
                    tipo: evt.target.value
                })
            }else{ 
                /* if (evt.target.name === 'imagen'){
                    setBody({
                        ...body,
                        imagen: evt.target.files[0]
                    })
                }else{  */
                    setBody({
                        ...body,
                        [evt.target.name]: evt.target.value
                    })
                /* } */
            }
        
    }


    const handleSubmit = (evt) => {
       
        evt.preventDefault()

        formData.append('codigo', body.codigo);
        formData.append('capacidad', body.capacidad);
        formData.append('ubicacion', body.ubicacion);
        formData.append('caracteristicas', body.caracteristicas);
        formData.append('tipo', body.tipo);
  /*       formData.append('imagen', body.imagen); */
        create(formData).then(data => {
            if (data.ReFspuesta == "Agregado Correctamente"){
                document.getElementById("formRgs").reset();
                openModal();
            }

        })

    
    }
    
    return(
        <>
        <div className="container cont_form_au">
            <form onSubmit={handleSubmit} id="formRgs" encType='multipart/form-data'>
                <div className="formulario_au">
                    <h1 style={{textAlign:"center"}}>Crear Ambiente</h1>
                    <div className="ventana" id="alert_form">
                    </div>
                    <div className="div_form" style={{marginTop:40+"px"}}>
                        <label >C&oacute;digo*</label><br />
                        <input className = "form_input"
                        type="text" name="codigo" 
                        onChange={handleChange} 
                        id="codigo"
                        autoComplete='off' 
                        required 
                        pattern='[A-Za-z0-9 ]{3,15}' 
                        title='Letras y numeros. Mínimo 3 caracteres, máximo 15 ' />
                    </div>
                    <div className="div_form">
                        <label>Capacidad*</label> <br />
                        <input  className = "form_input"
                        type="number" 
                        name="capacidad" 
                        min={20} max={200}  
                        onChange={handleChange} 
                        id="capacidad"
                        autoComplete='off' 
                        required />
                    </div>
                    <div className="div_form">
                        <label>Ubicación</label>
                        <select className="form-select"
                        aria-label="materia_grupo" 
                        id="materia_grupo_id" onChange={handleChange} name="ubicacion" required>
                            <option selected disabled>Seleccionar Ubicación</option>   
                            <option value="Edificio Academico 2 planta baja">Edificio Nuevo planta baja</option>
                            <option value="Edificio Academico 2 piso 1">Edificio Nuevo piso 1</option>
                            <option value="Edificio Academico 2 piso 2">Edificio Nuevo piso 2</option>
                            <option value="Edificio Academico 2 piso 3">Edificio Nuevo piso 3</option>
                            <option value="Campus Central">Campus Central</option>
                            <option value="Trencito">Trencito</option>
                            <option value="Biblioteca">Biblioteca</option>
                            <option value="Laboratorios">Laboratorios FCyT</option>
                        </select>
                    </div>
                    <div className="div_form">
                        <label >Caracter&iacute;sticas*</label> <br />
                        <input className = "form_input" 
                        type="text" 
                        name="caracteristicas"  
                        onChange={handleChange}  
                        id="caracteristicas"
                        autoComplete='off' 
                        required 
                        pattern='[A-Za-z0-9 ]{7,40}' 
                        title='Letras y numeros. Mínimo 7 caracteres, máximo 40 ' />
                    </div>
                    <div className="checkbox_form">
                        <p>Seleccione el tipo de aula*</p>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            onChange={handleChange} 
                            id="aula" 
                            value="Aula"/>
                            <label className="btn btn-outline-primary" htmlFor="aula">Aula</label>
                        
                            <input type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            onChange={handleChange} 
                            id="laboratorio" 
                            value="Laboratorio" />
                            <label className="btn btn-outline-primary" htmlFor="laboratorio">Laboratorio</label>
                        
                            <input type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            onChange={handleChange} 
                            id="auditorio" 
                            value="Auditorio"/>
                            <label className="btn btn-outline-primary" htmlFor="auditorio">Auditorio</label>
                        </div>
                    </div>
{/*                     <div className='file'>
                        <label htmlFor="archivo">Selecciona la imagen*</label>
                        <input id="archivo" type="file" onChange={handleChange} name="imagen" accept="image/*" />
                    </div> */}
                    <center><p>(*)Campos obligatorios</p></center>
                    <div className="boton_form">
                        <button type="submit" >Crear Ambiente</button>
                        <button onClick={redirectTo}>Cancelar</button>
                    </div>
                </div>
            </form>
        </div> 
        {showModal && <Modal show={showModal} centered> 
        <div>
            <div className='delete_title'>
                <h2>¡Ambiente {body.codigo} creado con éxito!</h2>
            </div>
            <div className="modal-footer" style={{justifyContent:"center"}} >
                <button type="button" onClick={closeModal} >Aceptar</button>
            </div>
        </div>
        </Modal>} 
        </>  
)}

export default Formulario_aulas