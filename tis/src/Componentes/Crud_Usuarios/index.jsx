import { useState } from 'react';
import { getImageUrl } from '../../services/images'


//const DEFAULT_IMAGE_PATH = "assets/imagenes/logo_facultad.png"

 const DEFAULT_IMAGE_PATH = "/assets/imagenes/perfilpordefecto.png"
function CrudUsuarios({user, focusUser, openModal, openAlert}){
    const { id, name, apellido, email, password, esAdmin} = user

    const handleEdit = () => {
        focusUser(user)
        openModal()
    }


    const handleDelete =() =>{
        focusUser(user)
        openAlert()
    }

    let tipo = "Administrador" 
    if(esAdmin === 'no'){
        tipo = "Docente"
    }

    /*En lugar de 3 ponemos el id del usuario con el que estamos logeado */
    if(id == 3){
        return <></>
    }

    return(
    <>
        <tbody>
            <tr>
                <td><b>ID:</b>{id}</td>
                <td className="img_col" rowSpan="2">
                    <div className="container">
                        <img className="imagen_crud" src={DEFAULT_IMAGE_PATH}  />
                    </div>
                </td>
                <td><b>Nombre:</b> {name} {apellido}</td>
                <td><b>Email;</b> {email}</td>
                <td><b>Contraseña:</b> {password}</td>
                <td>{tipo}</td>
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
        </tbody>
    </>
    
)}

export default CrudUsuarios