import {useState} from 'react'
import Formcrud_modal from '../Formcrud_modal';
import RowCrud from '../RowCrud' 

function Crud_table ({aulas = [], setShowModal, focusAula}){
    return(
        <>
            {aulas?.map((aula, idx) => (
                <RowCrud
                    key={idx}
                    aula={aula}  
                    focusAula={focusAula}
                />
            ))}
          
        </>    
)}
            
export default Crud_table