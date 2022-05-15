import {useEffect, useState} from 'react'
import { getAll } from '../services/crud'
import { useNavigate } from "react-router-dom";
import Crud_table from "../Componentes/Crud_Table";
import Eliminar_modal from '../Componentes/Eliminar_modal';
import Formcrud_modal from '../Componentes/Formcrud_modal';

export default function Crud(){
    const [showModal, setShowModal] = useState(false)
    const [aulas, setAulas] = useState([])
    const [aulaSelected, setAulaSelected] = useState(null)

    useEffect(() => {
        getAll().then(setAulas)
    }, [])
  
    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/vista-forma-aul/`)        
    }


    const editAula = (aula) => {
        setAulaSelected(aula)
        setShowModal(true)
    }
     

    return (
    <main className="inicio">
        <div className="container">
            <div>
                <button className="redir-form-crud" type="button" onClick={redirectTo} ><a style={{textDecoration:"none", color:"black"}}>Crear Ambiente</a></button>
            </div>
            <div className="container" id="tabla_com" >
                <table className="table table-bordered" id="crud_table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Imagen</th>
                        <th colSpan="3">Datos</th>
                        <th scope="col" >Opciones</th>
                    </tr>
                    </thead>
                        <Crud_table aulas={aulas} 
                            setShowModal={setShowModal}
                            editAula={editAula}
                        />
                </table>
            </div>
        </div>
        {showModal && <Formcrud_modal aula={aulaSelected}/>}   
    </main>
        
    )    
}