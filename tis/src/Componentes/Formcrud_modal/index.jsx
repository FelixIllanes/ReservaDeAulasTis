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
            <input className="form_mod_input" type="number" name="capacidad" id="capacidad_mod" placeholder="Capacidad" value={capacidad} required min={20} max={200}/>
        </div>
        <div>
            <label>Ubicacion:</label>
            <input className="form_mod_input" type="text" name="ubicacion" id="ubicacion_mod" placeholder="Ubicacion" value={ubicacion} required pattern='[A-Za-z0-9 ]{3,15}' title='Letras y numeros. Mínimo 6 caracteres, máximo 40 '/>
        </div>
        <div>
            <label>Caracteristicas:</label>
            <input className="form_mod_input" type="text" name="caracteristicas" id="carac_mod"placeholder="Caracteristicas" value={caracteristicas} required pattern='[A-Za-z0-9 ]{3,15}' title='Letras y numeros. Mínimo 6 caracteres, máximo 40 '/>
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