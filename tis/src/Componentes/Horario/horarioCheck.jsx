
function HorarioCheck({reserva, periodoChange}){
    
  const {periodo, status, numPeriodo} = reserva
  
  if(status == 1){
    return(
      <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled/>
      <label className="form-check-label" style={{color:"red"}} htmlFor="flexRadioDefault2">
        {periodo} No disponible
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
}

export default HorarioCheck