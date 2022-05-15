
import {useState} from 'react'
import {create} from '../../services/crud'
import './formAu.css'

function Formulario_aulas(){

    const [body, setBody] = useState({})
    const formData = new FormData();

    const handleChange = (evt) => {

            if (evt.target.name === 'btnradio'){
                setBody({
                    ...body,
                    tipo: evt.target.value
                })
            }else{ 
                if (evt.target.name === 'imagen'){
                    setBody({
                        ...body,
                        imagen: evt.target.files[0]
                    })
                }else{ 
                    setBody({
                        ...body,
                        [evt.target.name]: evt.target.value
                    })
                }
            }
        
    }

   /*  const createForm = (evt, body) => {
        formData.append('codigo', body.codigo);
        formData.append('capacidad', body.capacidad);
        formData.append('ubicacion', body.ubicacion);
        formData.append('carcateristicas', body.caracteristicas);
        formData.append('tipo', body.tipo);
        formData.append('imagen', body.imagen, body.imagen);
        
    } */

    const handleSubmit = (evt) => {
       
        evt.preventDefault()
        console.log(body.codigo)
        const a = body.codigo 
        formData.append('codigo', body.codigo);
        formData.append('capacidad', body.capacidad);
        formData.append('ubicacion', body.ubicacion);
        formData.append('caracteristicas', body.caracteristicas);
        formData.append('tipo', body.tipo);
        formData.append('imagen', body.imagen);
       
            create(formData).then(data => {
                //if (data.length){
                   // setAulas(data)
                /* }else{
                    setAulas(["vacio"])
                } */
                console.log(data)
            })
    
    }
    
    return(
        <div className="container cont_form">
            <form onSubmit={handleSubmit} id="formRgs" encType='multipart/form-data'>
                <div className="formulario">
                    <h1 style={{textAlign:"center"}}>Crear Ambiente</h1>
                    <div className="ventana" id="alert_form">
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="codigo" onChange={handleChange} id="codigo" required /><span className="barra"></span>
                        <label className="label_form" htmlFor="">C&oacute;digo</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="capacidad" onChange={handleChange} id="capacidad" required /><span className="barra"></span>
                        <label className="label_form" htmlFor="">Capacidad</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="ubicacion" onChange={handleChange} id="ubicacion" required /><span className="barra"></span>
                        <label className="label_form" htmlFor="">Ubicaci&oacute;n</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="caracteristicas" onChange={handleChange} id="caracteristicas" required /><span className="barra"></span>
                        <label className="label_form" htmlFor="">Caracter&iacute;sticas</label>
                    </div>
                    <div className="checkbox_form">
                        <p>Seleccione el tipo de aula</p>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" onChange={handleChange} id="aula" value="Aula" defaultChecked />
                            <label className="btn btn-outline-primary" htmlFor="aula">Aula</label>
                        
                            <input type="radio" className="btn-check" name="btnradio" onChange={handleChange} id="laboratorio" value="Laboratorio" />
                            <label className="btn btn-outline-primary" htmlFor="laboratorio">Laboratorio</label>
                        
                            <input type="radio" className="btn-check" name="btnradio" onChange={handleChange} id="auditorio" value="Auditorio"/>
                            <label className="btn btn-outline-primary" htmlFor="auditorio">Auditorio</label>
                        </div>
                    </div>
                    <div className='file'>
                        <label htmlFor="archivo">Selecciona la imagen</label>
                        <input id="archivo" type="file" onChange={handleChange} name="imagen" accept="image/*"/>
                    </div>
                    <div className="boton_form">
                        <button type="submit" >Crear Ambiente</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </form>
        </div>    
)}

export default Formulario_aulas