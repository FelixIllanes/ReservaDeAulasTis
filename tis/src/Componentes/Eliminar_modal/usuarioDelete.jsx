import './delete_crud.css'
import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {button} from 'react-bootstrap'

function Delete_User({user, closeAlert, removeUser}){
    const { id, name, apellido, email, password, esAdmin} = user || {}
    const [body, setBody] = useState(user)

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        removeUser(id)
        closeAlert()
     }

    return(
        <form onSubmit={handleOnSubmit}>
            <div>
                <div className='delete_title'>
                    <label htmlFor="">¿Seguro que desea Eliminar al usuario <strong>{name}</strong>?</label>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn_eliminar" > Eliminar</button>
                    <button type="button" onClick={()=> closeAlert()} >Cancelar</button>
                </div>
            </div>
        </form>

)}

export default Delete_User