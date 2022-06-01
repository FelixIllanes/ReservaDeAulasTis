import {useEffect, useState} from 'react'
import LoginUsr from "../Componentes/Login"
import CrudUsuarios from "../Componentes/Crud_Usuarios"
import {Modal} from 'react-bootstrap'
import Delete_User from '../Componentes/Eliminar_modal/usuarioDelete';
import {useUser} from '../hooks/useUser'
import FormEditUser from '../Componentes/Formusrmod';
import { useNavigate } from "react-router-dom";

export default function Crud_Usuarios(){
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const {users, updateUser, removeUser, focusUser, user} = useUser()

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
            <div className="container" id="tabla_com" style={{paddingTop:30+"px"}} >
                <table className="table table-bordered" id="crud_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Foto usuario</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Rol</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                {users?.map((user, idx) => (
                    <CrudUsuarios
                        key={idx}
                        user={user}  
                        focusUser={focusUser}
                        openModal={openModal}
                        openAlert={openAlert}
                    />
                ))}
                    
                </table>
            </div>
            {showModal && <Modal show={showModal} centered> 
                            <FormEditUser user={user} closeModal={closeModal} updateUser={updateUser}/> 
                        </Modal>}
            {showAlert && <Modal show={showAlert} centered> 
                            <Delete_User user={user} closeAlert={closeAlert} removeUser={removeUser}/> 
                        </Modal>}    
        </main>
    )    
}