function Formcrud_modal({aula}){

    const { id, imagen, capacidad, codigo, caracteristicas, tipo, ubicacion} = aula || {}
    
    return(
        <div className="modal fade" id="edit_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div id="alert">
                        </div>
                        <section className="form_mod" id="form_mod">
                           {id}
                           {codigo}
                           {caracteristicas}
                        </section>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" id="btn_form_modal" > Guardar cambios</button>
                        <button type="button" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
      </div> 
)}

export default Formcrud_modal