
import {useState} from 'react'
import {search} from '../../services/catalogo'

const caracteristicasOpciones = [
    {
        name: 'Computadoras',
        value: 'computadoras',
    },
    {
        name: 'Proyector',
        value: 'proyector',
    },
    {
        name: 'Pizarra',
        value: 'pizarra',
    },
    {
        name: 'Todos',
        value: 'todos',
    },
]

const tipoOpciones = [
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
    {
        name: 'Todos',
        value: 'todos',
    },
]

const capacidadOpciones = [
    {
        name: '0-50',
        value: '50',
    },
    {
        name: '50-100',
        value: '100',
    },
    {
        name: '100-150',
        value: '150',
    },
    {
        name: '150-200',
        value: '200',
    },
    {
        name: '200-250',
        value: '250',
    },
    {
        name: 'Todos',
        value: 'todos',
    },
]


function Buscador({setAulas}){
    const [body, setBody] = useState({})

    const goBack = () => {
        window.history.back()
    }

    const handleChange = (evt) => {
        if((evt.target.value) == "todos"){//aqui habia un ||
            setBody({
                body
            })
        }else{
            if (evt.target.name === 'rango'){
                setBody({
                    ...body,
                    rangoBajo: parseInt(evt.target.value) - 50,
                    rangoAlto: parseInt(evt.target.value)
                })
            }else{ 
                setBody({
                    ...body,
                    [evt.target.name]: evt.target.value
                })
            }
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(body != []){   
            search(body).then(data => {
                if (data.length){
                    setAulas(data)
                }else{
                    setAulas(["vacio"])
                }
            })
        }else{
            search([]).then(data => {
                //console.log(data.Respuesta);
                if (data.length){
                    setAulas(data)
                }else{
                    setAulas(["vacio"])
                }
            })
        }
    }

    return(
        <form className="buscador_form" onSubmit={handleSubmit} id="frmBuscador">
        <div onClick={goBack} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
        <div className="container filtro">

            <input 
                id="Buscador" 
                className="bus_dor" 
                placeholder="Buscar por c&oacute;digo"
                name="buscar" 
                onChange={handleChange}
            ></input>

            <select className="form-select" aria-label="caracteristicas" id="bCarac"
                name="caracteristicas" 
                onChange={handleChange}
            >
                <option selected disabled>Caracter&iacute;sticas</option>
                {
                    caracteristicasOpciones.map(({name, value}) => (
                        <option value={value}>{name}</option>
                    ))
                }
            </select>

            <select className="form-select" aria-label="tipo" id="bTipo"
                name="tipo" 
                onChange={handleChange}
            >
                <option selected disabled>Tipo</option>
                {
                    tipoOpciones.map(({name, value}) => (
                        <option value={value}>{name}</option>
                    ))
                }
            </select>

            <select className="form-select" aria-label="capacidad" id="bCap"
                name="rango" 
                onChange={handleChange}
            >
                <option selected disabled>Capacidad</option>
                {
                    capacidadOpciones.map(({name, value}) => (
                        <option value={value}>{name}</option>
                    ))
                }
            </select>

            <button type="submit" id="btn_buscador">Buscar</button>
        </div>
    </form>
)}

export default Buscador