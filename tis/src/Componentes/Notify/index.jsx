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
        <strong><p>Codigo: {codigo} </p></strong> 
        <strong><p>fecha: {fechaReserva}</p></strong>
        <strong><p>periodo: {periodo}</p></strong>
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
        <strong><p>Codigo: {codigo} </p></strong> 
        <strong><p>fecha: {fechaReserva}</p></strong>
        <strong><p>periodo: {periodo}</p></strong>
        <strong><p>Motivo: {razon}</p></strong>
        <strong><p>Estado: Rechazado </p></strong>
        <button className='btn_card'>Recomendación</button>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    
)}

}

export default Notify