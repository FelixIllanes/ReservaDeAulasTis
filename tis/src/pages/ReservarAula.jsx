import Horario from "../Componentes/Horario"
import {useEffect, useState} from 'react'
import {getByUser} from '../services/group'
import {get} from '../services/user'
import Reservar from "../Componentes/Reservar"
import { useNavigate } from "react-router-dom";

export default function ReservaAula(){
    const [ini, setIni] = useState({})
    const [user, setUser] = useState({})
    const [grupos, setGrupos] = useState([])
    const navigate = useNavigate()

    const redirectTo = () => {
        navigate(`/`)        
    }

    useEffect(() => {
        const userId = window.localStorage.getItem('userId')
        const fechaDate = Date.now()
        const hoy = new Date(fechaDate)
        let aux = ""
        console.log(hoy.getDay())
        if(hoy.getDate() < 10){
            if(hoy.getMonth() < 10){
                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+"0"+(hoy.getDate()+2)
                setIni(aux)
            }else{
                aux = hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+"0"+(hoy.getDate()+2)
                setIni(aux)
            }
        }else{
            if(hoy.getMonth()+1 == 2){
                if(hoy.getDate() == 29){
                    aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+2)+"-0"+(2)
                    setIni(aux)
                }else{
                    if(hoy.getDate() == 28){
                        aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+2)+"-0"+(1)
                        setIni(aux)
                    }else{
                        aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+(hoy.getDate()+2)
                        setIni(aux)
                    }
                }
            }else{
                if(hoy.getMonth()+1 == 1 || hoy.getMonth()+1 == 3 || hoy.getMonth()+1 == 5 || hoy.getMonth()+1 == 7 || hoy.getMonth()+1 == 8 || hoy.getMonth()+1 == 10 || hoy.getMonth()+1 == 12){
                    if(hoy.getDate() == 31){
                        if(hoy.getMonth() < 9){
                            aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+2)+"-0"+(2)
                            setIni(aux)
                        }else{
                            aux = hoy.getFullYear()+"-"+(hoy.getMonth()+2)+"-0"+(2)
                            setIni(aux)
                        }
                    }else{
                        if(hoy.getDate() == 30){
                            if(hoy.getMonth() < 9){
                                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+2)+"-0"+(1)
                                setIni(aux)
                            }else{
                                aux = hoy.getFullYear()+"-"+(hoy.getMonth()+2)+"-0"+(1)
                                setIni(aux)
                            }
                        }else{
                            if(hoy.getMonth() < 10){
                                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+(hoy.getDate()+2)
                                setIni(aux)
                            }else{
                                aux = hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+(hoy.getDate()+2)
                                setIni(aux)
                            }
                        }
                    }
                }else{
                    if(hoy.getDate() == 30){
                        if(hoy.getMonth() < 9){
                            aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+2)+"-"+(2)
                            setIni(aux)
                        }else{
                            aux = hoy.getFullYear()+"-"+(hoy.getMonth()+2)+"-"+(2)
                            setIni(aux)
                        }
                    }else{
                        if(hoy.getDate() == 29){
                            if(hoy.getMonth() < 9){
                                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+2)+"-0"+(1)
                                setIni(aux)
                            }else{
                                aux = hoy.getFullYear()+"-"+(hoy.getMonth()+2)+"-0"+(1)
                                setIni(aux)
                            }
                        }else{
                            if(hoy.getMonth() < 10){
                                aux = hoy.getFullYear()+"-0"+(hoy.getMonth()+1)+"-"+(hoy.getDate()+2)
                                setIni(aux)
                            }else{
                                aux = hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+(hoy.getDate()+2)
                                setIni(aux)
                            }
                        }
                    }
                }
            }
        }
        get(userId).then(setUser)
        getByUser(userId).then(setGrupos)

    }, [])

    return (
        <main className="inicio">
            <div className="container" style={{paddingTop:30+"px"}}>
                <div onClick={redirectTo} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
        
                <Reservar
                    fechaIni={ini}
                    grupos={grupos}
                    user={user}/>
            </div>
        </main>
    )    
}