import './card.css'
import {Card} from 'react-bootstrap'

function Notify({reserva}){
  const { id, id_users, id_aulas, codigo, materia, grupo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, created_at, updated_at} = reserva
  
  if(aceptadoRechazado == 1){
    return(
    <div>
<Card bg="success" style={{ width: '18rem', color:"white" }}>
    <Card.Header><strong>Respuesta a la solicitud</strong></Card.Header>
    <Card.Body>
      <Card.Text>
        <strong><p>Código: {codigo} </p></strong> 
        <strong><p>Fecha: {fechaReserva}</p></strong>
        <strong><p>Periodo: {periodo}</p></strong>
        <strong><p>Motivo: {razon}</p></strong>
        <strong><p>Estado: Aceptado </p></strong>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    
)}

if(aceptadoRechazado == 0){
    return(
    <div>
<Card bg="danger" style={{ width: '18rem', color:"white" }}>
    <Card.Header><strong>Respuesta a la solicitud</strong></Card.Header>
    <Card.Body>
      <Card.Text>
        <p><strong>Código: </strong> {codigo} </p>
        <p><strong>Fecha: </strong>{fechaReserva}</p>
        <p><strong>Periodo: </strong>{periodo}</p>
        <p><strong>Motivo: </strong>{razon}</p>
        <p><strong>Estado: </strong>Rechazado</p>
        <button className='btn_card'>Recomendación</button>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    
)}

}

export default Notify