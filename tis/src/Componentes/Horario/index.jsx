

function Horario({periodo}){
  return(

  <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
        <label className="form-check-label" for="flexRadioDefault2">
          {periodo}
        </label>
    </div>
  )
}

export default Horario