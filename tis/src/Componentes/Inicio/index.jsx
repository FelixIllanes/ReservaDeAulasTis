
import {useEffect, useState} from 'react'
import {get} from '../../services/user'

function Inicio(){
    const [user, setUser] = useState([])

    useEffect(()=> {
        const userId = window.localStorage.getItem('userId')
        get(userId).then(setUser)
    }, [])

return(
    <div className="container">   
        <div className="container descripcion">
            <p><center>Bienvenido {user.name} </center></p>
            <p><center>Docente</center></p>
            <p style={{marginTop:30+"px"}}><center>Facultad de Ciencias y Tecnologia</center></p>
            <p><center>UMSS</center></p>
        </div>
   </div> 
)}

export default Inicio