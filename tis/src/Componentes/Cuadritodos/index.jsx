import './cuadritodos.css'

function CuadroPrioridadReporte({estadistica}){
     //estadistica.numAccept == verde
    //estadistica.numAcceptCount == verde creo contiguas
    //estadistica.numReject == rojo
    //estadistica.total == rojo color
    return(
        <div className='cuadritoMasGrande' style={{marginTop:20+"px"}}>
            <h5>Cantidad de reservas</h5>
            <div className="cuadritodos">
                <div>
                    <p>Aceptados: {estadistica.numAccept} </p>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"green" }}></i>
                </div>
                <div>
                    <p>Contiguas: {estadistica.numAcceptCount} </p>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"blue" }}></i>
                </div>
                <div>
                    <p>Rechazados: {estadistica.numReject}</p>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"red" }}></i>
                </div>
                <div>
                    <p>Total: {estadistica.total}</p>
                </div>
            </div>
        </div>
    )
}

export default CuadroPrioridadReporte