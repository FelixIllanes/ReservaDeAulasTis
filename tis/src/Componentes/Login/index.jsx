import './login.css'

function LoginUsr(){
    return(
        <div className="container cont_form">
            <form action="" method="POST" id="login" enctype="multipart/form-data">
                <div className="formulario" id='login_form_cont'>
                    <h1 style={{textAlign:"center"}}>Inicio de Sesi&oacute;n</h1>
                    <p>Ingrese su correo</p>
                    <p> electronico registrado</p>

                    <div className="grupo">
                        <input className="input_form" type="email" name="" id="email" required /><span className="barra"></span>
                        <label className="label_form" for="">Email</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="password" name="" id="passwprd" required /><span className="barra"></span>
                        <label className="label_form" for="">Contraseña</label>
                    </div>
                    <div  className="boton_form" id='btn_login'>
                        <button type="submit" >Iniciar Sesi&oacute;n</button>
                    </div>
                    <br />
                    <a href="">¿Se te olvido la contraseña?</a> <br />
                    <a href="">Cambiar de contraseña</a>
                </div>
            </form>
        </div>    
)}

export default LoginUsr