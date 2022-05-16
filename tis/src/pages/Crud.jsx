import {useEffect, useState} from 'react'
import RowCrud from '../Componentes/RowCrud' 
//import { getAll } from '../services/au'
import { useNavigate } from "react-router-dom";
import Crud_table from "../Componentes/Crud_Table";
import Eliminar_modal from '../Componentes/Eliminar_modal';
import Formcrud_modal from '../Componentes/Formcrud_modal';
import FormEditAula from '../Componentes/FormEditAula';
import {Modal} from 'react-bootstrap'

import {useAulas} from '../hooks/useAulas'

export default function Crud(){
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const {aulas, updateAula, removeAula, focusAula, aula} = useAulas()

    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/vista-forma-aul/`)        
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const openAlert = () => setShowAlert(true)
    const closeAlert = () => setShowAlert(false)


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
            {aulas?.map((aula, idx) => (
                <RowCrud
                    key={idx}
                    aula={aula}  
                    focusAula={focusAula}
                    openModal={openModal}
                    openAlert={openAlert}
                />
            ))}

                </table>
            </div>
        </div>
        {showModal && <Modal show={showModal} centered> 
                            <FormEditAula aula={aula} closeModal={closeModal} updateAula={updateAula}/> 
                        </Modal>}
        {showAlert && <Modal show={showAlert} centered> 
                            <Eliminar_modal aula={aula} closeAlert={closeAlert} removeAula={removeAula}/> 
                        </Modal>}   
    </main>
        
    )    
}