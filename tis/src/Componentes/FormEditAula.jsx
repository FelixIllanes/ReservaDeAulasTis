import './Eliminar_modal/delete_crud.css'
import {useState} from 'react'
import {update} from '../services/aulas';
import {Alert} from 'react-bootstrap'
import React from 'react'

function FormEditAula({aula, closeModal, updateAula }){
    const [form, setForm] = useState(aula || {})
    const { id,  capacidad, codigo, caracteristicas, tipo, ubicacion} = form 
    const [errores, setErrores] = useState({})
    const [show, setShow] = useState(false);

    const handleOnChange = (evt) =>{
        setForm({
            ...form,
            [evt.target.name] : evt.target.value
        })
    }
    
    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        
        update(form, id).then(data => {

            if(data.codigo === 1){
                setErrores({
                    errores,
                    error: "Letras y numeros. Mínimo 3 caracteres, máximo 15"
                })
                setShow(true)
            }else{
                if(data.existe === 1){
                    setErrores({
                        errores,
                        error: "El código de ambiente ya existe"
                    })
                    setShow(true)
                }else{
                    updateAula(id, form)
                    closeModal()
                }
            }

        })
        
    }

    return (
        <form onSubmit={handleOnSubmit} className='form_mod'>
            <h2 >Editar Ambiente</h2>
            <div>
                <label>Código:</label> <br />
                <input className="form_mod_input" 
                    type="text" 
                    name="codigo" 
                    id="codigo_mod" 
                    placeholder="Codigo" 
                    defaultValue={codigo} required
                    pattern='[A-Za-z0-9 ]{3,15}'
                    title='Letras y numeros. Mínimo 3 caracteres, máximo 15'
                    onChange={handleOnChange}
                 ></input>    
            </div>
            <div>
                <label>Capacidad:</label> <br />
                <input className="form_mod_input" 
                    onChange={handleOnChange} 
                    type="number" 
                    name="capacidad" 
                    id="capacidad_mod" 
                    placeholder="Capacidad" 
                    defaultValue={capacidad}
                    required min={20} max={350}></input>  
            </div>
            <div>
                <label>Ubicación:</label> <br />
                <input className="form_mod_input" 
                onChange={handleOnChange} 
                type="text" 
                name="ubicacion" 
                id="ubicacion_mod" 
                placeholder="Ubicacion" 
                defaultValue={ubicacion}
                required pattern='[A-Za-z0-9 ]{7,40}' 
                title='Letras y numeros. Mínimo 6 caracteres, máximo 40 '></input>  
            </div>
            <div>
                <label>Características:</label> <br />
                <input className="form_mod_input" 
                onChange={handleOnChange} 
                type="text" 
                name="caracteristicas" 
                id="carac_mod"
                placeholder="Caracteristicas" 
                defaultValue={caracteristicas}
                required pattern='[A-Za-z0-9 ]{7,40}' 
                title='Letras y numeros. Mínimo 6 caracteres, máximo 40 '></input>  
            </div>
            <div>
            <label>Tipo:</label> <br />
                <select className="form-select" onChange={handleOnChange} 
                aria-label="tipo" 
                defaultValue={tipo}
                id="mod_Tipo" name="tipo">
                    <option value="Aula">Aula</option>
                    <option value="Laboratorio">Laboratorio</option>
                    <option value="Auditorio">Auditorio</option>
                </select> 
            </div>
            <div className='btn_modal_edit' style={{marginBottom:15+"px"}}>
                <button type='submit'> Enviar </button>
                <button type="button" onClick={()=> closeModal()} >Cancelar</button>
            </div>
            
            {show && <Alert variant="danger"  onClose={() => setShow(false)} dismissible>
                        <p>
                        {errores['error']} 
                        </p>
                    </Alert>
            }  
    </form>
    )
}
export default FormEditAula