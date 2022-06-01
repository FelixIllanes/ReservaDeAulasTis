
import {useState} from 'react'
import React from 'react'
import Select from 'react-bootstrap/Button';
import FormSelect from 'react-bootstrap/Button'


function FormEditUser({user, closeModal, updateUser }){
    const [form, setForm] = useState(user || {})
    const { id, name, apellido, email, password, esAdmin} = form

    const handleOnChange = (evt) =>{
        setForm({
            ...form,
            [evt.target.name] : evt.target.value
        })
    }
    
    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        updateUser(id, form)
        closeModal()
    }

    return (
            <form onSubmit={handleOnSubmit} className='form_mod'>
            <h2 >Editar Usuario</h2>
            <div>
                <label>Nombre:</label>
                <input className="form_mod_input" 
                    type="text" 
                    name="name" 
                    id="nombreuser_mod" 
                    placeholder="Nombre" 
                    defaultValue= {name}
                    required pattern='[A-Za-z ]{3,20}' 
                    title='Nombre inválido, mínimo 3 caracteres máximo 20'
                    onChange={handleOnChange}
                 ></input>    
            </div>
            <div>
                <label>Apellido:</label>
                <input className="form_mod_input" 
                    onChange={handleOnChange} 
                    type="text" 
                    name="apellido" 
                    id="apellidouser_mod" 
                    placeholder="Apellido" 
                    defaultValue= {apellido}
                    required pattern='[A-Za-z ]{3,20}' 
                    title='Apellido inválido, mínimo 3 caracteres máximo 20'
                ></input>  
            </div>
            <div>
                <label>Email:</label>
                <input className="form_mod_input" 
                onChange={handleOnChange} 
                type="email" 
                name="email" 
                id="emailuser_mod" 
                placeholder="Email" 
                defaultValue= {email}
                ></input>  
            </div>
            <div>
                <label>Contraseña:</label>
                <input className="form_mod_input" 
                type="text" 
                name="password" 
                id="contraseñauser_mod"
                placeholder="Contraseña"
                readOnly 
                defaultValue= {password}
                ></input>  
            </div>
            <div>
            <label>Tipo:</label>
                <select className="form-select" onChange={handleOnChange} 
                aria-label="tipo" 
                defaultValue={esAdmin.toLowerCase()}
                id="mod_Tipo" name="esAdmin">    
                    <option value="no" selected>Docente</option>
                    <option value="yes">Administrador</option>
                </select> 
            </div>
                <div className='btn_modal_edit'>
                <button type='submit'> Enviar </button>
                <button type="button" onClick={()=> closeModal()} >Cancelar</button>

                </div>  </form>
    )
}
export default FormEditUser