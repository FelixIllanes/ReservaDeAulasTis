import './delete_crud.css'
import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {button} from 'react-bootstrap'

function Eliminar_modal({aula, closeAlert, removeAula}){
    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula || {}
    const [body, setBody] = useState(aula)

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        removeAula(id)
        closeAlert()
     }

    return(
        <form onSubmit={handleOnSubmit}>
            <div>
                <div className='delete_title'>
                    <label htmlFor="">¿Seguro que desea eliminar Ambiente <strong>{codigo}</strong>?</label>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn_eliminar" > Eliminar</button>
                    <button type="button" onClick={()=> closeAlert()} >Cancelar</button>
                </div>
            </div>
        </form>

)}

export default Eliminar_modal