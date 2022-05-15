import './delete_crud.css'
import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {button} from 'react-bootstrap'
import {remove} from '../../services/crud'
import {getAll} from '../../services/crud'

function Eliminar_modal({aula, closeModalKill}){
    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula || {}
    const [body, setBody] = useState(aula)

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
         //console.log(body)
         remove(id)
         closeModalKill()
         //window.location.reload();
         //actualizar()
         //redirectTo()
        
         //getAllAula(true)
     }

    //

     const actualizar = (evt) =>{
        window.location.reload();
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <div>
                <div className='delete_title'>
                    <label htmlFor="">¿Seguro que desea Eliminar Ambiente <strong>{codigo}</strong>?</label>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn_eliminar" > Eliminar</button>
                    <button type="button" onClick={()=> closeModalKill()} >Cancelar</button>
                </div>
            </div>
        </form>

)}

export default Eliminar_modal