import {useEffect, useState} from 'react'
import { get } from '../../services/group'
import { getOne } from '../../services/user'




function Reporte({reserva,focusReserva,reservasCont}){

    const { id, id_users, id_aulas, id_grupos, codigo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, tipo, motivo, created_at, updated_at} = reserva
    const [grupo, setGrupo] = useState([])
    const [user, setUser] = useState([])
    let date = new Date(fechaReserva)
    var fechaNew = date.getUTCDate()+"-"+(date.getUTCMonth()+1)+"-"+date.getFullYear()

    useEffect(() => {
        get(id_grupos).then(data =>{
            setGrupo(data)
        })

        getOne(id_users).then(data =>{
            setUser(data)
        })
    }, [])


    if(reserva == [["vacio"]]){
        return<></>      
    }

    let color = "green"
    if(aceptadoRechazado == 0){
        color = "red"
    }

    return(
        <>
        <tr>
            <td>{user.name} {user.apellido}</td>
            <td>{codigo ? codigo :  "Aula No Asignada"}</td>
            <td>{tipo}</td>
            <td>{grupo.materia} {grupo.grupo}</td>
            <td>{cantidadEstudiantes}</td>
            <td>{fechaNew ? fechaNew : "No existe fecha de reserva"}</td>
            <td>{periodo}</td>
            <td>{cantidadPeriodo}</td>
            <td>{razon ? razon :  "Reserva Individual"}</td>
            <td><i className="fa-solid fa-circle-arrow-up" 
                style={{color:color }}></i></td>
        </tr>
        </> 
)}

export default Reporte