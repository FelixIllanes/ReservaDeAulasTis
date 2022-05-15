import {useEffect, useState} from 'react'
import { getAll } from '../services/crud'
import { useNavigate } from "react-router-dom";
import Crud_table from "../Componentes/Crud_Table";
import Eliminar_modal from '../Componentes/Eliminar_modal';
import Formcrud_modal from '../Componentes/Formcrud_modal';
import FormEditAula from '../Componentes/FormEditAula';
import {Modal} from 'react-bootstrap'
export default function Crud(){
    const [showModal, setShowModal] = useState(false)
    const [showKill, setShowKill] = useState(false)
    const [aulas, setAulas] = useState([])
    const [aulaSelected, setAulaSelected] = useState(null)

    useEffect(() => {
        getAll().then(setAulas)
    }, [])
  
    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/vista-forma-aul/`)        
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const openModalKill = () => setShowKill(true)
    const closeModalKill = () =>{
        setShowKill(false)
        //useEffect()
        //getAll().then(setAulas)
        //window.location.replace('http://localhost:3000/iniciarSesion');
    }


    const editAula = (aula) => {
        setAulaSelected(aula)
        setShowModal(true)
    }

    const deleteAula = (aula) => {
        setAulaSelected(aula)
        setShowKill(true)
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
                            deleteAula={deleteAula}
                        />
                </table>
            </div>
        </div>
        {showModal && <Modal show={showModal} centered> <FormEditAula aula={aulaSelected} closeModal={closeModal}/> </Modal>}
        {showKill && <Modal show={showKill} centered> <Eliminar_modal aula={aulaSelected} closeModalKill={closeModalKill}/> </Modal>}   
    </main>
        
    )    
}