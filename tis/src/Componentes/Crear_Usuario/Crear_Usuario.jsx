import {useEffect, useState} from 'react'
import {create} from '../../services/user'
import {Modal} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import {getToAssign, assignAll} from '../../services/group'
import './formUsr.css'
import Materia_grupo from '../Materias_Grupos'
import { useNavigate } from "react-router-dom";


function Crear_Usuario(){

    const [body, setBody] = useState({})
    const [errores, setErrores] = useState({})
    const [assign, setAssign] = useState({})
    const [grupos, setGrupos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showModalSuccess, setShowModalSuccess] = useState(false)
    const [show, setShow] = useState(false);
    const [lleno, setLleno] = useState(false);
    const formData = new FormData();
    const navigate = useNavigate()

    const redirectTo = () => {
    navigate(`/Home-admin/crud-usarios`)        
    }

    const openModal = () => {
        getToAssign().then(data => {
            if (data.length){
                setGrupos(data)
            }else{
                setGrupos(["vacio"])
            }
        })
        setShowModal(true)
    }
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
            setLleno(true)
            setAssign({
                ...assign,
                [evt.target.name]: evt.target.value,
                correo: body['email'],
            })
        }
        if (!document.getElementById(evt.target.id).checked){
            var algo = evt.target.name
            setLleno(false)
            delete assign[algo]
        }
    }

    const validar = () => {


        var ExpRegNomApe="^[A-Za-z???? ]{3,20}$";
        var valApellido="^[A-Za-z???? ]{3,20}$";
        var valEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        var valPassFuerte="^[A-Za-z0-9]{8,20}$";


       if(!body["name"] || !body["apellido"] || !body["email"] || !body["password"] || !body["password_confirmation"]){
            setErrores({
                errores,
                error: "Llenar campo o campos vacios",
            }) 
            return false
       }
       //Evaluaci??n de Cadena Invalida de Nombre  
        if(body["name"].match(ExpRegNomApe)==null){
            console.log(body["name"])
            setErrores({
                errores,
                error: "Nombre inv??lido, solo se permiten letras m??nimo 3 caracteres m??ximo 20",
            }) 
            return false
        }
        //Evaluaci??n de Cadena Invalida de Apellido 
        if(body["apellido"].match(valApellido)==null){
            console.log(body["apellido"])
            setErrores({
                errores,
                error: "Apellido inv??lido, solo se permiten letras m??nimo 3 caracteres m??ximo 20",
            }) 
            return false
        }
        //Evaluaci??n de Cadena Invalida de Email 
        if(body["email"].match(valEmail)==null){
            setErrores({
                errores,
                error: "Campo email inv??lido",
            }) 
            return false
        }
        //Evaluaci??n de Cadena valida de Contrase??a Fuerte  
        if(body["password"].match(valPassFuerte)==null){
            setErrores({
                errores,
                error: "Contrase??a inv??lida, m??nimo 8 caracteres y m??ximos 20",
            }) 
            return false
        }
        //Evaluaci??n de Cadena valida de Contrase??a Fuerte 
        if(body["password_confirmation"].match(valPassFuerte)==null){
            setErrores({
                errores,
                error: "Contrase??a inv??lida, m??nimo 8 caracteres y m??ximos 20",
            }) 
            return false
        }
       return true

    }
    
    
    const handleSubmit = (evt) => {
       
        evt.preventDefault()
        if(validar()){
            if(body['password'] == body['password_confirmation']){

                if(lleno){

                    setIsLoading(true)

                    create(body).then(data => {
                        if (data.status === 1){
                
                            assignAll(assign).then(res => {

                                    closeModal();
                                    document.getElementById("formUser").reset();
                                    setIsLoading(false)
                                    setAssign({})
                                    openModalSuccess();      

                            }).catch(err => console.log(err))  
                        }

                        if(data.status === 0){
                            closeModal()
                            setIsLoading(false)
                            setErrores({
                                errores,
                                error: "El correo ingresado ya existe",
                            })
                            setAssign({})
                            setShow(true)
                        }
                    }).catch(err => console.log(err))
                }else{
                    closeModal()
                    setErrores({
                        errores,
                        error: "No hay materias disponibles o no selecciono ninguna mater??a",
                    })
                    setAssign({})
                    setShow(true)
                }  
            }else{
                closeModal()
                setErrores({
                    errores,
                    error: "Las contrase??as no son iguales",
                })
                setAssign({})
                setShow(true)
            }
        }else{
            closeModal();
            setAssign({})
            setShow(true)
        }
    }

    return(
        <>
        <form className='form_usr' id='formUser'>
            <h2 >Crear Usuario</h2>
            <div className = "inp_form_usr" style={{marginTop:30+"px"}}>
                <label>Nombre*</label><br />
                <input className="form_input_usr" 
                    type="text"
                    onChange={handleChange}  
                    name="name" 
                    id="nombreuser_mod" 
                    placeholder="Nombre"
                    autoComplete='off' 
                    required 
                    pattern='[A-Za-z ]{3,20}' 
                    title='Nombre inv??lido, m??nimo 3 caracteres m??ximo 20'
                 ></input>    
            </div>
            <div className = "inp_form_usr">
                <label>Apellido*</label><br />
                <input className="form_input_usr"  
                    type="text" 
                    onChange={handleChange} 
                    name="apellido" 
                    id="apellidouser_mod" 
                    placeholder="Apellido"
                    autoComplete='off' 
                    required pattern='[A-Za-z ]{3,20}' 
                    title='Apellido inv??lido, m??nimo 3 caracteres m??ximo 20'
                ></input>  
            </div>
            <div className = "inp_form_usr">
                <label>Email*</label><br />
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
                <label>Contrase??a*</label><br />
                <input className="form_input_usr" 
                type="password"
                onChange={handleChange}  
                name="password" 
                id="contrase??auser_mod"
                placeholder="Contrase??a"
                autoComplete='off'
                required pattern='[A-Za-z0-9]{8,20}' 
                title='Contrase??a inv??lido, m??nimo 8 caracteres m??ximos 20'
                ></input>  
            </div>
            <div className = "inp_form_usr">
                <label>Repetir Contrase??a*</label><br />
                <input className="form_input_usr" 
                type="password"
                onChange={handleChange}  
                name="password_confirmation" 
                id="contrase??auser_mod_dos"
                placeholder="Contrase??a"
                autoComplete='off'
                required pattern='[A-Za-z0-9]{8,20}' 
                title='Contrase??a inv??lido, m??nimo 8 caracteres m??ximos 20'
                ></input>  
            </div>
            <center><p>(*)Campos obligatorios</p></center>
            {showModal && <Modal show={showModal}>  
                <div className={`container modal_horario ${isLoading && 'contanier-loading'}`} style={{padding:"20px"}}>
                    <h2 style={{textAlign:"center"}}>Materias y grupos</h2>

                    {grupos.map(matGrupo => (
                        <Materia_grupo matGrupo={matGrupo}
                                grupoChange={grupoChange}
                            />
                        ))}

                    <div className="boton_form">
                        <button type='submit' onClick={handleSubmit}>Crear Usuario</button>
                        <button onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </Modal>
            }
                <div className='btn_form_user' style={{marginBottom:20+"px"}}>
                    <a className='selec_mat_btn' onClick={openModal}>Seleccionar Materias</a>
                    <button onClick={redirectTo} >Cancelar</button>
                </div>
            
                
            {show && <Alert variant="danger"  onClose={() => setShow(false)} dismissible>
                <p>
                  {errores['error']} 
                </p>
            </Alert>
            }  
            
            
        </form>

        {showModalSuccess && <Modal show={showModalSuccess} centered> 
        <div>
            <div className='delete_title'>
                <h2>??Usuario {body.name} creado con ??xito!</h2>
            </div>
            <div className="modal-footer" style={{justifyContent:"center"}} >
                <button type="button" onClick={closeModalSuccess} >Aceptar</button>
            </div>
        </div>
        </Modal>}
    </>
)}

export default Crear_Usuario