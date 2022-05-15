import {useState} from 'react'
import Formcrud_modal from '../Formcrud_modal';
import RowCrud from '../RowCrud' 

function Crud_table ({aulas = [], setShowModal, editAula}){
    return(
        <>
            {aulas?.map((aula, idx) => (
                <RowCrud
                    key={idx}
                    aula={aula}  
                    editAula={editAula}
                />
            ))}
          
        </>    
)}
            
export default Crud_table