import './cambiar_cont.css'
import {useState} from 'react'
import {sendCode, sendNewPass} from "../../services/auth"
import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {Alert} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'

function Cambiar_Cont(){

    const [body, setBody] = useState({})
    const [codigo, setCodigo] = useState({})
    const [errores, setErrores] = useState({})
    const [show, setShow] = useState(false);
    const [showModalSucces, setShowModalSucces] = useState(false)
    
    const {email}= useParams()
    const navigate = useNavigate()

    const openModalSucces = () => setShowModalSucces(true)
    const closeModalSucces = () => setShowModalSucces(false)

    const redirectTo = () => {
        navigate(`/login/`)        
    }

    const codigoChange = (evt) => {
        setCodigo({
                ...codigo,
                [evt.target.name] : evt.target.value,
                email:email,

        })
    }

    const handleChange = (evt) => {
        setBody({
                ...body,
                [evt.target.name] : evt.target.value,
                email:email,

        })
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        console.log(body)
        sendCode(codigo).then(data => {
            if (data.status === 1){
                if(body["password1"]===body["password2"]){
                    sendNewPass(body).then(data => {
                        openModalSucces();
                    })
                }else{
                    setErrores({
                        errores,
                        error: "Contraseñas no coinciden",
                    })
                    setShow(true)
                }
            }else{
                setErrores({
                    errores,
                    error: "Codigo ingresado no coincide",
                })
                setShow(true)
            }
        })
    }

    return(
        <>
    <div className="form_camb_cont">
        <form onSubmit={handleSubmit} className="camb_cont_form">
            <h1>Ingrese el Código</h1>
            <p>Se envio un código al correo: <strong>{email}</strong></p>
            {show && <Alert variant="danger"  onClose={() => setShow(false)} dismissible>
                <p>
                    {errores['error']}
                </p>
            </Alert>}
            <div>
                <label htmlFor="cod_camb">Código</label> <br />
                <input type="text" id="cod_camb" name="codigo" onChange={codigoChange} required/>
            </div>
            <div>
                <label htmlFor="cont">Nueva Contraseña</label> <br />
                <input type="password" id="cont" name="password1" onChange={handleChange} required pattern='[A-Za-z0-9]{8,20}' 
                title='Contraseña inválido, mínimo 8 caracteres máximos 20' />
            </div>
            <div>
                <label htmlFor="cont_rep">Repetir Contraseña</label> <br />
                <input type="password" id="cont_rep" name="password2" onChange={handleChange} required pattern='[A-Za-z0-9]{8,20}' 
                title='Contraseña inválido, mínimo 8 caracteres máximos 20'/>
            </div>
            <div>
                <button className='btn_cam_cont' type="submit">Aceptar Cambios</button>
            </div>
        </form>
    </div>
    {showModalSucces && <Modal show={showModalSucces} centered> 
    <div>
        <div className='delete_title'>
            <h2>¡Contraseña cambiada con exito!</h2>
        </div>
        <div className="modal-footer" style={{justifyContent:"center"}}>
            <button type="button" onClick={redirectTo} >Aceptar</button>
        </div>
    </div>
    </Modal>}
    </>
)}

export default Cambiar_Cont