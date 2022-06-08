import { getImageUrl } from '../services/images'
import { useNavigate } from "react-router-dom";

const DEFAULT_IMAGE_PATH = "assets/imagenes/logo_facultad.png"

function Card({aula}) {
    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula
    const navigate = useNavigate()
    console.log(aula)

    const redirectTo = () => {
        navigate(`/reservar-aula/${id}`)        
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
                <img className="imagen_aula" src={imagen ? getImageUrl(imagen) :  DEFAULT_IMAGE_PATH}  />
            </div>
            <div className="caracteristicas">
                <p><strong>Capacidad: </strong> {capacidad}</p>
                <p><strong>C&oacute;digo: </strong> {codigo}</p>
                <p><strong>Caracter&iacute;sticas: </strong> {caracteristicas}</p>
                <p><strong>Tipo: </strong>{tipo} </p>
                <p><strong>Ubicaci&oacute;n: </strong> {ubicacion}</p>
                <button  onClick={redirectTo}>Reservar</button>
            </div>
        </div>
    )

}
export default Card