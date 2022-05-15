import React from 'react'
import {Modal} from 'react-bootstrap'

const tipoAmbientes = [
    {
        name: 'Aula',
        value: 'aula',
    },
    {
        name: 'Laboratorio',
        value: 'laboratorio',
    },
    {
        name: 'Auditorio',
        value: 'auditorio',
    },
]


function Formcrud_modal({aula}){

    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula || {}

    return(
        <Modal show={true} centered>
            
        <h2 >Editar Ambiente</h2>
        <div>
            <label>Codigo:</label>
            <input className="form_mod_input" 
                type="text" 
                name="codigo" 
                id="codigo_mod" 
                placeholder="Codigo" 
            />    
        </div>
        <div>
            <label>Capacidad:</label>
            <input className="form_mod_input" type="text" name="capacidad" id="capacidad_mod" placeholder="Capacidad" value={capacidad}/>
        </div>
        <div>
            <label>Ubicacion:</label>
            <input className="form_mod_input" type="text" name="ubicacion" id="ubicacion_mod" placeholder="Ubicacion" value={ubicacion}/>
        </div>
        <div>
            <label>Caracteristicas:</label>
            <input className="form_mod_input" type="text" name="caracteristicas" id="carac_mod"placeholder="Caracteristicas" value={caracteristicas}/>
        </div>
        <div>
            <label>Tipo:</label>
            <select className="form-select" aria-label="tipo" id="mod_Tipo">
                {
                    tipoAmbientes.map(({name, value}) => (

                        <option value={value}>{name}</option>
                        
                    ))
                }
            </select>
        </div>
        <button type="button" className="btn_eliminar" id="btn_eliminar" >Si, deseo elimniar</button>
        <button type="button" data-bs-dismiss="modal">Cancelar</button>
        
      </Modal> 
)}

export default Formcrud_modal