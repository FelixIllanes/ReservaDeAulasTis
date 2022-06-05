import MisReservas from "../Componentes/Mis_Reservas"
import { useNavigate } from "react-router-dom";

export default function Mis_Reservas(){

    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/`)        
    }
    
    return (
        <main className="inicio">
            <div className='btn_crud_usr'>
                <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className="container" style={{paddingTop:30+"px"}}>
            <table className="table table-bordered" id="crud_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto usuario</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Cantidad de estudiantes</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                        <MisReservas />
                </table>
            </div>
        </main>
    )    
}