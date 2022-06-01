import './login.css'

import {useState, useContext} from 'react'

import {AuthContext} from '../../store/user'
import { useNavigate } from "react-router-dom";
function LoginUsr(){
    let navigate = useNavigate();

    const {signIn, isAdmin} = useContext(AuthContext)

    const [userForm, setUserForm] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleOnChange = (evt) => {}

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        
            const user = {
                'email': evt.target.email.value,
                'password': evt.target.password.value
            }
            
            setIsLoading(true)
            signIn(user).then(res => {
                if (isAdmin){
                    setIsLoading(false)
                    navigate("/Home-admin");
                }else{
                    navigate("/");
                }
               
            })
        
    }

    return(
        <div className="container cont_form">
            <form onSubmit={handleSubmit}>
                <div className={`formulario ${isLoading && 'contanier-loading'}`}
                id='login_form_cont'>
                    <h1 style={{textAlign:"center"}}>Inicio de Sesi&oacute;n</h1>
                    <p>Ingrese su correo</p>
                    <p> electronico registrado</p>
                    <div className="grupo">
                        <input className="input_form" 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={handleOnChange}  
                        required /><span className="barra"></span>
                        <label className="label_form" htmlFor="">Email</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" 
                            onChange={handleOnChange}
                            type="password" name="password" id="passwprd" required 
                        /><span className="barra"></span>
                        <label className="label_form" htmlFor="">Contraseña</label>
                    </div>
                    <div  className="boton_form" id='btn_login'>
                        <button type="submit" >Iniciar Sesi&oacute;n</button>
                    </div>
                    <br />
                    <a href="">¿Se te olvido la contraseña?</a>
                </div>
            </form>
        </div>    
)}

export default LoginUsr