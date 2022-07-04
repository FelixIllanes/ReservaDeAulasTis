import {useEffect, useState} from 'react'
import { get } from '../../services/group'
import { getOne } from '../../services/user'

function ContReporte({reservaCont}){

   /*  const { id, id_users, id_aulas, id_grupos, codigo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, tipo, motivo, created_at, updated_at} = reserva */
    const [grupo, setGrupo] = useState([])
    const [user, setUser] = useState([])
    let date = new Date(reservaCont[0]["fechaReserva"])
    var fechaNew = date.getUTCDate()+"-"+(date.getUTCMonth()+1)+"-"+date.getFullYear()

    useEffect(() => {
        get(reservaCont[0]["id_grupos"]).then(data =>{
            setGrupo(data)
        })

        getOne(reservaCont[0]["id_users"]).then(data =>{
            setUser(data)
        })
    }, [])


    if(reservaCont == [["vacio"]]){
        return<></>      
    }

    return(
        <>
        <tr>
            <td rowSpan="2"> {user.name} {user.apellido}</td>
            <td>{reservaCont[0]["codigo"]} </td>
            <td>{reservaCont[0]["tipo"]}</td>
            <td>{grupo.materia} {grupo.grupo}</td>
            <td>{reservaCont[0]["cantidadEstudiantes"]}</td>
            <td>{fechaNew ? fechaNew : "No existe fecha de reserva"}</td>
            <td>{reservaCont[0]["periodo"]}</td>
            <td>{reservaCont[0]["cantidadPeriodo"]}</td>
            <td rowSpan="2">{reservaCont[0]["razon"]}</td>
            <td rowSpan="2">
            <i className="fa-solid fa-circle-arrow-up" 
                style={{color:"blue" }}></i>
            </td>
        </tr>
        <tr>
            <td>{reservaCont[1]["codigo"]} </td>
            <td>{reservaCont[1]["tipo"]}</td>
            <td>{grupo.materia} {grupo.grupo}</td>
            <td>{reservaCont[1]["cantidadEstudiantes"]}</td>
            <td>{fechaNew ? fechaNew : "No existe fecha de reserva"}</td>
            <td>{reservaCont[1]["periodo"]}</td>
            <td>{reservaCont[1]["cantidadPeriodo"]}</td>
        </tr>
        </> 
)}

export default ContReporte