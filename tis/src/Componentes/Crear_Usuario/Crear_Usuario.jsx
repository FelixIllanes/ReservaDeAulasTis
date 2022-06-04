import {useEffect, useState} from 'react'
import {create} from '../../services/user'
import {Modal} from 'react-bootstrap'
import {getToAssign, assignAll} from '../../services/group'
import './formUsr.css'
import Materia_grupo from '../Materias_Grupos'

function Crear_Usuario(){

    const [body, setBody] = useState({})
    const [assign, setAssign] = useState({})
    const [grupos, setGrupos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showModalSuccess, setShowModalSuccess] = useState(false)
    const formData = new FormData();

    useEffect(()=> {
        getToAssign().then(setGrupos)
    }, [])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const openModalSuccess = () => setShowModalSuccess(true)
    const closeModalSuccess = () => setShowModalSuccess(false)

    const handleChange = (evt) => {

            if (evt.target.name === 'imagen'){
                setBody({
                    ...body,
                    imagen: evt.target.files[0]
                })
            }else{ 
                setBody({
                    ...body,
                    [evt.target.name]: evt.target.value,
                    esAdmin: "no",
                })
            }
    }

    const grupoChange = (evt) => {

        if (document.getElementById(evt.target.id).checked){
            setAssign({
                ...assign,
                [evt.target.name]: evt.target.value,
                correo: body['email'],
            })
        }
        if (!document.getElementById(evt.target.id).checked){
            var algo = evt.target.name
            delete assign[algo]
        }
    }
    
    const handleSubmit = (evt) => {
       
        evt.preventDefault()
        /* formData.append('codigo', body.codigo);
        formData.append('capacidad', body.capacidad);
        formData.append('ubicacion', body.ubicacion);
        formData.append('caracteristicas', body.caracteristicas);
        formData.append('tipo', body.tipo);
        formData.append('imagen', body.imagen); */
        setIsLoading(true)
        create(body).then(data => {
    
            if (data.status === 1){
    
                assignAll(assign).then(res => {
            
                   
                    /*  if (res.Respuesta == 'Aceptados con exito'){  */
                        closeModal();
                        document.getElementById("formUser").reset();
                        setIsLoading(false)
                        openModalSuccess();
                        
                   /*  } */
               }).catch(err => console.log(err))  
            }
        })  
    }

    return(
        <>
        <form className='form_usr' id='formUser'>
            <h2 >Crear Usuario</h2>
            <div className = "inp_form_usr" style={{marginTop:30+"px"}}>
                <label>Nombre:</label><br />
                <input className="form_input_usr" 
                    type="text"
                    onChange={handleChange}  
                    name="name" 
                    id="nombreuser_mod" 
                    placeholder="Nombre"
                    autoComplete='off' 
                    required pattern='[A-Za-z ]{3,20}' 
                    title='Nombre inválido, mínimo 3 caracteres máximo 20'
                 ></input>    
            </div>
            <div className = "inp_form_usr">
                <label>Apellido:</label><br />
                <input className="form_input_usr"  
                    type="text" 
                    onChange={handleChange} 
                    name="apellido" 
                    id="apellidouser_mod" 
                    placeholder="Apellido"
                    autoComplete='off' 
                    required pattern='[A-Za-z ]{3,20}' 
                    title='Apellido inválido, mínimo 3 caracteres máximo 20'
                ></input>  
            </div>
            <div className = "inp_form_usr">
                <label>Email:</label><br />
                <input className="form_input_usr" 
                type="email"
                onChange={handleChange}  
                name="email" 
                id="emailuser_mod" 
                placeholder="Email"
                autoComplete='off'
                required 
                ></input>  
            </div>
            <div className = "inp_form_usr">
                <label>Contraseña:</label><br />
                <input className="form_input_usr" 
                type="password"
                onChange={handleChange}  
                name="password" 
                id="contraseñauser_mod"
                placeholder="Contraseña"
                autoComplete='off'
                required
                ></input>  
            </div>
            <div className = "inp_form_usr">
                <label>Repetir Contraseña:</label><br />
                <input className="form_input_usr" 
                type="password"
                onChange={handleChange}  
                name="password_confirmation" 
                id="contraseñauser_mod_dos"
                placeholder="Contraseña"
                autoComplete='off'
                required
                ></input>  
            </div>

            {showModal && <Modal show={showModal}>  
              {/*  <div className={`formulario ${isLoading && 'contanier-loading'}`}>  */}
                    <div className={`container modal_horario ${isLoading && 'contanier-loading'}`} style={{padding:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Materias y grupos</h2>

                        {grupos.map(matGrupo => (
                            <Materia_grupo matGrupo={matGrupo}
                                    grupoChange={grupoChange}
                                />
                            ))}

                        <div className="boton_form">
                            <button onClick={handleSubmit}>Crear Usuario</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                    </div>
       {/*         </div>  */} 
            </Modal>
            }

                <div className='btn_form_user'>
                    <a className='selec_mat_btn' onClick={openModal}>Seleccionar Materias</a>
                    <button type="button" >Cancelar</button>
                </div>  
        </form>



        {showModalSuccess && <Modal show={showModalSuccess} centered> 
        <div>
            <div className='delete_title'>
                <h2>¡Usuario {body.name} creado con éxito!</h2>
            </div>
            <div className="modal-footer" style={{justifyContent:"center"}} >
                <button type="button" onClick={closeModalSuccess} >Aceptar</button>
            </div>
        </div>
        </Modal>}
    </>
)}

export default Crear_Usuario