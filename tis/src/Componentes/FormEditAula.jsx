import {useState} from 'react'
import React from 'react'
import Select from 'react-bootstrap/Button';
import FormSelect from 'react-bootstrap/Button'
import {update} from '../services/crud'


function FormEditAula({aula, closeModal}){
    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula || {}
    const [body, setBody] = useState(aula)

    const handleOnChange = (evt) =>{
        
        const aux = [evt.target.name]
        if(aux == "capacidad"){
            aula.capacidad = evt.target.value;
        }
        if(aux == "caracteristicas"){
            aula.caracteristicas = evt.target.value;
        }
        if(aux == "codigo"){
            aula.codigo = evt.target.value;
        }
        if(aux == "ubicacion"){
            aula.ubicacion = evt.target.value;
        }
        if(aux == "tipo"){
            aula.tipo = evt.target.value;
        }
        setBody({
            ...body,
            [evt.target.name] : evt.target.value
        })
    }
    
    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        //console.log(body)
        update(body,id)
        closeModal()
        //actualizar()
    }

    const actualizar = (evt) =>{
        window.location.reload();
    }
        
    if(tipo == 'aula'||tipo == 'Aula'){
        return (
            <form onSubmit={handleOnSubmit} className='form_mod'>
            <h2 >Editar Ambiente</h2>
            <div>
                <label>Código:</label>
                <input className="form_mod_input" 
                    type="text" 
                    name="codigo" 
                    id="codigo_mod" 
                    placeholder="Codigo" 
                    value={codigo}
                    onChange={handleOnChange}
                ></input>    
            </div>
            <div>
                <label>Capacidad:</label>
                <input className="form_mod_input" onChange={handleOnChange} type="text" name="capacidad" id="capacidad_mod" placeholder="Capacidad" value={capacidad}></input>  
            </div>
            <div>
                <label>Ubicación:</label>
                <input className="form_mod_input" onChange={handleOnChange} type="text" name="ubicacion" id="ubicacion_mod" placeholder="Ubicacion" value={ubicacion}></input>  
            </div>
            <div>
                <label>Características:</label>
                <input className="form_mod_input" onChange={handleOnChange} type="text" name="caracteristicas" id="carac_mod"placeholder="Caracteristicas" value={caracteristicas}></input>  
            </div>
            <div>
            <label>Tipo:</label>
                <select className="form-select" onChange={handleOnChange} aria-label="tipo" id="mod_Tipo" name="tipo">    
                    <option value="aula" selected>Aula</option>
                    <option value="laboratorio">Laboratorio</option>
                    <option value="auditorio">Auditorio</option>
                </select> 
            </div>
                <div className='btn_modal_edit'>
                <button> Enviar </button>
                <button type="button" onClick={()=> closeModal()} >Cancelar</button>
                </div>  </form>
        )
        }
    
        
        if(tipo == 'auditorio' || tipo == 'Auditorio'){
            return (
                <form onSubmit={handleOnSubmit} className='form_mod'>
                <h2 >Editar Ambiente</h2>
                <div>
                    <label>Código:</label>
                    <input className="form_mod_input" 
                        type="text" 
                        name="codigo" 
                        id="codigo_mod" 
                        placeholder="Codigo" 
                        value={codigo}
                        onChange={handleOnChange}
                    />    
                </div>
                <div>
                    <label>Capacidad:</label>
                    <input className="form_mod_input" onChange={handleOnChange} type="text" name="capacidad" id="capacidad_mod" placeholder="Capacidad" value={capacidad}/>
                </div>
                <div>
                    <label>Ubicación:</label>
                    <input className="form_mod_input" onChange={handleOnChange} type="text" name="ubicacion" id="ubicacion_mod" placeholder="Ubicacion" value={ubicacion}/>
                </div>
                <div>
                    <label>Características:</label>
                    <input className="form_mod_input" onChange={handleOnChange} type="text" name="caracteristicas" id="carac_mod"placeholder="Caracteristicas" value={caracteristicas}/>
                </div>
                <div>
                <label>Tipo:</label>
                    <select className="form-select" onChange={handleOnChange} aria-label="tipo" id="mod_Tipo" name="tipo">    
                        <option value="aula" >Aula</option>
                        <option value="laboratorio">Laboratorio</option>
                        <option value="auditorio" selected>Auditorio</option>
                    </select> 
                </div>
                    <div className='btn_modal_edit'>
                    <button> Enviar </button>
                    <button type="button" onClick={()=> closeModal()} >Cancelar</button>
                    </div>  </form>
            )
        }
    
        
        if(tipo == 'laboratorio' || tipo == 'Laboratorio'){
            return (
                <form onSubmit={handleOnSubmit} className='form_mod'>
                <h2 >Editar Ambiente</h2>
                <div>
                    <label>Código:</label>
                    <input className="form_mod_input" 
                        type="text" 
                        name="codigo" 
                        id="codigo_mod" 
                        placeholder="Codigo" 
                        value={codigo}
                        onChange={handleOnChange}
                    />    
                </div>
                <div>
                    <label>Capacidad:</label>
                    <input className="form_mod_input" onChange={handleOnChange} type="text" name="capacidad" id="capacidad_mod" placeholder="Capacidad" value={capacidad}/>
                </div>
                <div>
                    <label>Ubicación:</label>
                    <input className="form_mod_input" onChange={handleOnChange} type="text" name="ubicacion" id="ubicacion_mod" placeholder="Ubicacion" value={ubicacion}/>
                </div>
                <div>
                    <label>Características:</label>
                    <input className="form_mod_input" onChange={handleOnChange} type="text" name="caracteristicas" id="carac_mod"placeholder="Caracteristicas" value={caracteristicas}/>
                </div>
                <div>
                <label>Tipo:</label>
                    <select className="form-select" onChange={handleOnChange} aria-label="tipo" id="mod_Tipo" name="tipo">    
                        <option value="aula" >Aula</option>
                        <option value="laboratorio" selected>Laboratorio</option>
                        <option value="auditorio">Auditorio</option>
                    </select> 
                </div>
                    <div className='btn_modal_edit'>
                    <button> Enviar </button>
                    <button type="button" onClick={()=> closeModal()} >Cancelar</button>
                    </div>  </form>
            )
        }
}
export default FormEditAula