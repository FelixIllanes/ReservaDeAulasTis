
import Formulario_aulas from '../Componentes/Formulario_aulas';
import { useNavigate } from "react-router-dom";

export default function Vista_formulario_aulas(){

const navigate = useNavigate()

const redirectTo = () => {
    navigate(`/Home-admin/crud`)        
}
    return (
        <main className='inicio'>
            <div className='btn_crud_usr'>
                <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className='container' style={{paddingTop:30+"px"}}>
                <Formulario_aulas />
            </div>
        </main>
        
    )    
}