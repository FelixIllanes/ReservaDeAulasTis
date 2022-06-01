import { Link } from "react-router-dom";
import Example from '../Notificaciones'
import MiPerfilAdm from '../Mi_Perfil/perfil'
import { useState } from "react";

const links = [
    {
        url:'crud',
        name: 'Gestión de Ambientes',
    },
    {
        url:'crud-usarios',
        name:'Gestión de usuarios' 

    },
    {
        url:'respuesta-reserva',
        name: 'Peticiones',
    },
    {
        url:'vista-forma-aul',
        name: 'Crear Ambiente',
    },
]


function HeaderAdm(){
    const [toggle, setToggle] = useState(false)

    return(
    <header className="header">
        <nav className="nav">
            <img className="logo" src="/assets/imagenes/logo_facultad.png" alt=""/>
            <p className="titulo">Gestión de Reserva de Ambientes</p>
            <button className="nav-toggle" onClick={()=> setToggle(!toggle)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`menu-nav ${toggle ? 'nav-menu_visible' : ''}`}>
                {
                    links.map(
                        ({url, name}, idx) => (
                        <li className="item-nav-menu" key={idx}>
                            <Link to={url} className="nav-menu-link">{name}</Link>
                         </li>
                        )
                    )
                }
                 <li className="item-nav-menu">
                    <MiPerfilAdm/>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default HeaderAdm