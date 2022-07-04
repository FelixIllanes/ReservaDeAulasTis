import {useEffect, useState} from 'react'
import { get } from '../../services/group'
import { getOne } from '../../services/aulas'


function MisReservas({reserva,focusReserva,reservasCont,openAlert}){

    const { id, id_users, id_aulas, id_grupos, codigo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, tipo, motivo, created_at, updated_at} = reserva
    const [grupo, setGrupo] = useState([])
    const [aula, setAula] = useState([])
    let date = new Date(fechaReserva)
    var fechaNew = date.getUTCDate()+"-"+(date.getUTCMonth()+1)+"-"+date.getFullYear()

    useEffect(() => {
        get(id_grupos).then(data =>{
            setGrupo(data)
        })
        getOne(id_aulas).then(data =>{
            setAula(data)
        })
    }, [])

    const click= () =>  {
        
        focusReserva(id)
        openAlert()
    }

    if(reserva == [["vacio"]]){
        return<></>      
    }

    return(
        <>
        <tr>
            <td>{codigo}</td>
            <td>{tipo}</td>
            <td>{grupo.materia} {grupo.grupo}</td>
            <td>{cantidadEstudiantes}</td>
            <td>{aula.ubicacion}</td>
            <td>{fechaNew ? fechaNew : "No existe fecha de reserva"}</td>
            <td>{periodo}</td>
            <td>{cantidadPeriodo}</td>
            <td>{razon ? razon :  "Reserva Individual"}</td>
            <td>
            <div className="container crud_op">
                <button style={{marginBottom:10+"px"}} onClick={click}>Cancelar Reserva</button> 
            </div>
            </td>
        </tr>
        </> 
)}

export default MisReservas