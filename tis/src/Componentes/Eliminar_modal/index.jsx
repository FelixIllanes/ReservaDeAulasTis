function Eliminar_modal(){
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5>¿Seguro que desea Eliminar?</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn_eliminar" id="btn_eliminar" >Si, deseo elimniar</button>
                        <button type="button" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
)}

export default Eliminar_modal