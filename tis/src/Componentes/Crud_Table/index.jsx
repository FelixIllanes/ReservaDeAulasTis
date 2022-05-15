import {useState} from 'react'
import Formcrud_modal from '../Formcrud_modal';
import RowCrud from '../RowCrud' 

function Crud_table ({aulas = [], setShowModal, editAula,deleteAula}){
    return(
        <>
            {aulas?.map((aula, idx) => (
                <RowCrud
                    key={idx}
                    aula={aula}  
                    editAula={editAula}
                    deleteAula={deleteAula}
                />
            ))}
          
        </>    
)}
            
export default Crud_table