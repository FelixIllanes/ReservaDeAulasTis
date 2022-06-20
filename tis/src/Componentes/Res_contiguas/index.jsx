import {useEffect, useState} from 'react'
import { get } from '../../services/group'
import { getOne } from '../../services/aulas'

function AulasCont({reservaCont,focusCont1 ,focusCont2 ,openAlert2}){

   /*  const { id, id_users, id_aulas, id_grupos, codigo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, tipo, motivo, created_at, updated_at} = reserva */
    const [grupo, setGrupo] = useState([])
    const [aula, setAula] = useState([])

    useEffect(() => {
        get(reservaCont[0]["id_grupos"]).then(data =>{
            setGrupo(data)
        })
        getOne(reservaCont[1]["id_aulas"]).then(data =>{
            setAula(data)
        }) 
    }, [])

    const click= () =>  {
        focusCont1(reservaCont[0]["id"])
        focusCont2(reservaCont[1]["id"])
        openAlert2()
    }

    if(reservaCont == [["vacio"]]){
        return<></>      
    }

    return(
        <>
        <tr>
            <td>{reservaCont[0]["codigo"]} </td>
            <td>{reservaCont[0]["tipo"]}</td>
            <td>{grupo.materia} {grupo.grupo}</td>
            <td>{reservaCont[0]["cantidadEstudiantes"]}</td>
            <td>{aula.ubicacion}</td> 
            <td>{reservaCont[0]["fechaReserva"]}</td>
            <td>{reservaCont[0]["periodo"]}</td>
            <td>{reservaCont[0]["cantidadPeriodo"]}</td>
            <td>{reservaCont[0]["razon"]}</td>
            <td rowSpan="2">
            <div className="container crud_op">
                <button style={{marginBottom:10+"px"}} onClick={click}>Cancelar Reserva</button> 
            </div>
            </td>
        </tr>
        <tr>
            <td>{reservaCont[1]["codigo"]} </td>
            <td>{reservaCont[1]["tipo"]}</td>
            <td>{grupo.materia} {grupo.grupo}</td>
            <td>{reservaCont[1]["cantidadEstudiantes"]}</td>
            <td>{aula.ubicacion}</td>
            <td>{reservaCont[1]["fechaReserva"]}</td>
            <td>{reservaCont[1]["periodo"]}</td>
            <td>{reservaCont[1]["cantidadPeriodo"]}</td>
            <td>{reservaCont[1]["razon"]}</td>
        </tr>
        </> 
)}

export default AulasCont