import './card.css'
import {Card} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { get } from '../../services/catalogo'
import {useEffect, useState} from 'react'

function Notify({reserva}){
  const [aula, setAula] = useState([])
  const { id, id_users, id_aulas, codigo, materia, grupo, cantidadEstudiantes, fechaReserva, periodo, cantidadPeriodo, aceptadoRechazado, razon, tipo, motivo, created_at, updated_at} = reserva

  useEffect(() => {
    get(id_aulas).then(setAula)
  }, [])

  const navigate = useNavigate()

  const redirectTo = () => {
      navigate(`/recomendaciones/${aula.id}/${aula.caracteristicas}/${aula.tipo}/${aula.capacidad}`)        
  }

  if(reserva == [["vacio"]]){
    return(
      <div className='vac_men_not_res'>
          <p>No existen notificaciones</p>
      </div>
    )
  }

  if(aceptadoRechazado == 1){
    return(
    <div>
<Card bg="success" style={{ width: '18rem', color:"white" }}>
    <Card.Header><strong>Respuesta a la solicitud</strong></Card.Header>
    <Card.Body>
      <Card.Text>
        <p><strong>Código: </strong>{codigo} </p> 
        <p><strong>Fecha: </strong>{fechaReserva}</p>
        <p><strong>Tipo: </strong>{tipo}</p>
        <p><strong>Periodo: </strong>{periodo}</p>
        <p><strong>Estado: Aceptado</strong> </p>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    
)}

if(aceptadoRechazado == 0){
    return(
    <div>
<Card bg="danger" style={{ width: '18rem', color:"white" }}>
    <Card.Header><strong>Respuesta a on la solicitud</strong></Card.Header>
    <Card.Body>
      <Card.Text>
        <p><strong>Código: </strong> {codigo} </p>
        <p><strong>Fecha: </strong>{fechaReserva}</p>
        <p><strong>Periodo: </strong>{periodo}</p>
        <p><strong>Tipo: </strong>{tipo}</p>
        <p><strong>Motivo: </strong>{razon}</p>
        <p><strong>Estado: </strong>Rechazado</p>
        <button className='btn_card' onClick={redirectTo}>Recomendación</button>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    
)}

}

export default Notify