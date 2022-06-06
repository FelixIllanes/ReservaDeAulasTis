import {useEffect, useState} from 'react'
import Card from '../Card'

function Recomendaciones({aulas}){
    
    

    return(
        <div className="container Catalogo" id="tableBody_Users">
            {aulas?.map(aula => (
                <Card 
                   aula={aula}  
                />
            ))}
        </div>
)}

export default Recomendaciones