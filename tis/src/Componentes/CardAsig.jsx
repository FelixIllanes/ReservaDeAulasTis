import { getImageUrl } from '../services/images'
import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { setAccept } from '../services/reserva'
import {useEffect, useState} from 'react'

const DEFAULT_IMAGE_PATH = "/assets/imagenes/logo_facultad.png"

function CardAsig({aula, id_reserva, openModal}) {
    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula


    const onAccept = (evt) => {
        setAccept(id_reserva, id).then(data => {
            if(data.Respuesta === 'Reserva Aceptada Correctamente'){
                openModal()
            }

        })
    }

    if(aula == [["vacio"]]){
        return(
            <div className='vacio_men'>
                <p style={{marginTop:90+"px"}}>No existen resultados para su busqueda</p>
            </div>
        )
    }

    if(aula == [["empty"]]){
        return(
            <div className='vacio_men'>
                <p style={{marginTop:90+"px"}}>No existen recomendaciones disponibles</p>
            </div>
        )
    }

    return (
        <div className="container img_carac">
            <div>
                <img className="imagen_aula" src={DEFAULT_IMAGE_PATH}  />
            </div>
            <div className="caracteristicas">
                <p><strong>Capacidad: </strong> {capacidad}</p>
                <p><strong>C&oacute;digo: </strong> {codigo}</p>
                <p><strong>Caracter&iacute;sticas: </strong> {caracteristicas}</p>
                <p><strong>Tipo: </strong>{tipo} </p>
                <p><strong>Ubicaci&oacute;n: </strong> {ubicacion}</p>
                <button onClick={onAccept} >Asignar Aula</button>
            </div>
        </div>
    )

}
export default CardAsig