import './contiguas.css'
import { setAcceptContiguas } from '../../services/reserva'

function Contiguas({aulasCont, id_reserva, openModal}){

    //const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula

    const onAccept = (evt) => {
        setAcceptContiguas(id_reserva, aulasCont[0].id, aulasCont[1].id).then(data => {
            if(data.Respuesta === 'Reserva Aceptada Correctamente'){
                openModal()
            }

        })
    }

    if(aulasCont == [["vacio"]]){
        return(
            <div className='vacio_men'>
                <p style={{marginTop:90+"px"}}>No existen aulas contiguas para recomendar</p>
            </div>
        )
    }

    return(
        <div className='cont_doble_rec'>
            <div className='card_asig_cont'>
                <div className='img_asig'>
                    <img className="imagen_aula_asig" src="/assets/imagenes/logo_facultad.png" alt="" />
                </div>
                <div className="caracteristicas_asig">
                    <p><strong>Capacidad: </strong> {aulasCont[0].capacidad}</p>
                    <p><strong>C&oacute;digo: </strong> {aulasCont[0].codigo}</p>
                    <p><strong>Caracter&iacute;sticas: </strong> {aulasCont[0].caracteristicas}</p>
                    <p><strong>Tipo: </strong>{aulasCont[0].tipo} </p>
                    <p><strong>Ubicaci&oacute;n: </strong></p> 
                    <p>{aulasCont[0].ubicacion}</p>
                </div>
            </div>
            <div className='card_asig_cont'>
                <div className='img_asig'>
                    <img className="imagen_aula_asig" src="/assets/imagenes/logo_facultad.png" alt="" />
                </div>
                <div className="caracteristicas_asig">
                    <p><strong>Capacidad: </strong> {aulasCont[1].capacidad}</p>
                    <p><strong>C&oacute;digo: </strong> {aulasCont[1].codigo}</p>
                    <p><strong>Caracter&iacute;sticas: </strong> {aulasCont[1].caracteristicas}</p>
                    <p><strong>Tipo: </strong>{aulasCont[1].tipo} </p>
                    <p><strong>Ubicaci&oacute;n: </strong></p> 
                    <p>{aulasCont[1].ubicacion}</p>
                </div>
            </div>
            <div>
                <button onClick={onAccept} >Asignar Aulas</button>
            </div>
        </div>
    )
}

export default Contiguas