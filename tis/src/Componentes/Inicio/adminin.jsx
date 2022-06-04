import './inicio.css'
import {useEffect, useState} from 'react'
import {get} from '../../services/user'

function AdminIni(){
    const [user, setUser] = useState([])

    useEffect(()=> {
        const userId = window.localStorage.getItem('userId')
        get(userId).then(setUser)
    }, [])


    return(
    <div className="container">
        
        <div className="container descripcion-Adm">
            <div className="inicio_btns">
                <button>Gestion de usuarios</button><br />
                <button>Gestion de ambientes</button><br />
                <button>Crear usuario</button><br />
                <button>Crear ambiente</button>
            </div>
            <div>
                <p><center>Bienvenido al inicio {user.name} </center></p>
                <p><center>Facultad de Ciencias y Tecnologia</center></p>
                <p><center>UMSS</center></p>
            </div>
        </div>
   </div> 
)}

export default AdminIni