function MisReservas(){
    return(
        <>
        <tbody>
            <tr>
                <td>Ambiente</td>
                <td>Motivo</td>
                <td>Materia</td>
                <td>Fecha</td>
                <td>Hora</td>
                <td>
                <div className="container crud_op">
                    <button style={{marginBottom:10+"px"}}>Cancelar Reserva</button> 
                </div>
                </td>
            </tr> 
        </tbody>
    </>
)}

export default MisReservas