import MisReservas from "../Componentes/Mis_Reservas"

export default function Mis_Reservas(){
    return (
        <main className="inicio">
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