
import { getImageUrl } from '../services/images'



function RowCrud({aula, focusAula, openModal, openAlert}){
    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula


    const handleEdit = () => {
        focusAula(aula)
        openModal()
    }

    const handleDelete =() =>{
        focusAula(aula)
        openAlert()
    }
    var DEFAULT_IMAGE_PATH = "/assets/imagenes/aula.jpeg"
      if(tipo == "Laboratorio"){
        DEFAULT_IMAGE_PATH = "/assets/imagenes/laboratorio.jpeg"
    }
    if(tipo == "Auditorio"){
        DEFAULT_IMAGE_PATH = "/assets/imagenes/Auditorio.jpeg"
    } 
    return(
        <>
    <tbody>
        <tr>
            <th rowSpan="2">{id}</th>
                <td className="img_col" rowSpan="2">
                    <div className="container">
                        <img className="imagen_crud" src= {DEFAULT_IMAGE_PATH}  />
                    </div>
                </td>
                <td><b>C&oacute;digo:</b> {codigo}</td>
                <td><b>Tipo:</b> {tipo} </td>
                <td><b>Capacidad:</b> {capacidad} </td>
                <td className="btn_crud" rowSpan="2" >
                <div className="container crud_op">
                    <button
                    data-bs-toggle="modal"
                    data-bs-targett="#edit_modal"
                    onClick={handleEdit} 
                    style={{marginBottom:10+"px"}}>Editar</button> <br /> 

                    <button id="borrar_crud" 
                        className="btn_eliminar" 
                        data-bs-target="#exampleModal" 
                        data-bs-toggle="modal" 
                        onClick={handleDelete}>Eliminar</button>
                </div>
                </td>
                    </tr>
                    <tr>
                <td><b>Ubicaci&oacute;n:</b> {ubicacion} </td>
                <td colSpan="2" ><b>Caracter&iacute;sticas:</b> {caracteristicas} </td>
        </tr>
          
    </tbody>
    </>
    )
}
export default RowCrud