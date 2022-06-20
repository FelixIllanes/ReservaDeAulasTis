import './cuadrito.css'

function CuadroPrioridad(){
    return(
        <div className='cuadritoMasGrande'>
            <h2>Prioridades</h2>
            <div className="cuadrito">
                <div>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"red" }}></i>
                    <p>Muy alta</p>
                    <p>Examenes</p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"blue" }}></i>
                    <p>Alta</p>
                    <p>Elecciones</p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"green" }}></i>
                    <p>Media</p>
                    <p>Reuniones</p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-arrow-up" 
                    style={{color:"gray" }}></i>
                    <p>Baja</p>
                    <p>Otros</p>
                </div>
            </div>
        </div>
    )
}

export default CuadroPrioridad