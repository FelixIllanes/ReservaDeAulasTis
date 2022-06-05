import './rec_cont.css'
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import {sendEmail} from "../../services/auth"
import {Alert} from 'react-bootstrap'


function RecuperarCont(){
    const [body, setBody] = useState({})
    const [errores, setErrores] = useState({})
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    


    const redirectTo = () => {
        navigate(`/cambiar-cont/${body["email"]}`)        
    }

    const handleChange = (evt) => {
        setBody({
                ...body,
                [evt.target.name] : evt.target.value
        })
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        setIsLoading(true)
        sendEmail(body).then(data => {
            if (data.status === 1){
                redirectTo()
            }else{
                setErrores({
                    errores,
                    error: "correo no registrado",
                })
                setShow(true)
            }
        })
    }

    return(
    <>
    <div className={`form_rec_cont ${isLoading && 'contanier-loading'}`}>
        
        <form onSubmit={handleSubmit} className="rec_cont_form">
            <h1>Ingrese su correo</h1>

            {show && <Alert variant="danger"  onClose={() => setShow(false)} dismissible>
                <p>
                    {errores['error']}
                </p>
            </Alert>
            }

            <div >
                <label htmlFor="email_rec_cont">Email</label> <br />
                <input type="email" id="email_rec_cont" name="email" onChange={handleChange} required/>
            </div>
            <div>
                <button className='btn_rec_cont' type="submit" >Recuperar contraseña</button>
            </div>
        </form>
    </div>
    
    </>
)}

export default RecuperarCont