import Horario from "../Componentes/Horario"
import {useEffect, useState} from 'react'
import {getByUser} from '../services/group'
import ReservarAula from "../Componentes/Reservar_Aula"

export default function ReservaAula(){
    const [ini, setIni] = useState({})
    const [grupos, setGrupos] = useState([])

    const goBack = () => {
        window.history.back()
    }

    useEffect(() => {
        const userId = window.localStorage.getItem('userId')
        const fechaDate = Date.now()
        const hoy = new Date(fechaDate)
        let aux = ""
        if(hoy.getDay() < 10){
            if(hoy.getMonth() < 10){
                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+"0"+hoy.getDate()
                setIni(aux)
            }else{
                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+"0"+hoy.getDate()
                setIni(aux)
            }
        }else{
            if(hoy.getMonth() < 10){
                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+"0"+hoy.getDate()
                setIni(aux)
            }else{
                aux = hoy.getFullYear()+"-0"+hoy.getMonth()+"-"+"0"+hoy.getDay()
                setIni(aux)
            }
        }
        getByUser(userId).then(setGrupos)

    }, [])

    return (
        <main className="inicio">
            <div className="container" style={{paddingTop:30+"px"}}>
                <div onClick={goBack} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
        
                <ReservarAula 
                    fechaIni={ini}
                    grupos={grupos}/>
            </div>
        </main>
    )    
}