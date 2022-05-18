import Horario from "../Componentes/Horario"
import ReservarAula from "../Componentes/Reservar_Aula"

export default function ReservaAula(){
    const goBack = () => {
        window.history.back()
    }
    return (
        <main className="inicio">
                    <div className="container" style={{paddingTop:30+"px"}}>
                    <div onClick={goBack} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
                    
                        <ReservarAula />
                        </div>
        
        </main>
    )    
}