import {Popover} from 'react-bootstrap'
import {OverlayTrigger} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function HorarioCheck({reserva, periodoChange}){
    
  const {periodo, status, numPeriodo} = reserva
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Examen</Popover.Header>
      <Popover.Body>
        <p><strong>Docente:</strong> aqui docente</p>
        <p><strong>Materia:</strong> aqui materia</p>
        <p><strong>Cantidad de alumnos:</strong>  aqui cantidad</p>
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="danger">Inf</Button>
    </OverlayTrigger>
  );
  
  if(status == 1){
    return(
      <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled/>
      <label className="form-check-label" style={{color:"red"}} htmlFor="flexRadioDefault2">
        {periodo} <Example />
      </label>
      </div>
    )
    }else{
      return(
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={periodoChange} value={numPeriodo} id="flexRadioDefault2"/>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {periodo}
        </label>
        </div>
      )
    } 
  /*   return(
      <div className="check_cont">
        <p>
          <input type="checkbox" onChange={periodoChange} value={numPeriodo} name={numPeriodo} id={numPeriodo} className="input_materias" />
          <label htmlFor={numPeriodo}>{periodo}</label>
        </p>
      </div>
    ) */
}

export default HorarioCheck