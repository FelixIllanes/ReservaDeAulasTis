
import {useState} from 'react'
import React from 'react'

function FormEditUser({user, closeModal, updateUser }){
    const [form, setForm] = useState(user || {})
    const { id, name, apellido, email, password, esAdmin} = form

    const handleOnChange = (evt) =>{
        setForm({
            ...form,
            [evt.target.name] : evt.target.value,
            password: password,
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
                    required pattern='[A-Za-zÑñ ]{3,20}' 
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
                    required 
                    title='Apellido inválido, mínimo 3 caracteres máximo 20'
                    ></input>  
            </div>
            <div>
                <label>Email:</label>
                <input className="form_mod_input" 
                onChange={handleOnChange} 
                type="text" 
                name="email" 
                id="emailuser_mod" 
                placeholder="Email" 
                defaultValue= {email}
                required
                pattern="[a-zA-Z0-9Ññ_]+([.][a-zA-Z0-9Ññ_]+)*@[a-zA-Z0-9Ññ_]+([.][a-zA-Z0-9Ññ_]+)*[.][a-zA-Z]{1,5}"
                ></input>  
            </div>
                <div className='btn_modal_edit'>
                <button type='submit'> Enviar </button>
                <button type="button" onClick={()=> closeModal()} >Cancelar</button>
            </div>  
        </form>
    )
}
export default FormEditUser