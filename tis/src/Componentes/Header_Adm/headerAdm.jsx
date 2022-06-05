import { Link } from "react-router-dom";
import Example from '../Notificaciones'
import MiPerfilAdm from '../Mi_Perfil/perfil'
import { useState } from "react";
import './headerAdm.css'

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

]


function HeaderAdm(){
    const [toggle, setToggle] = useState(false)

    return(
    <header className="headerAdm">
        <nav className="navAdm">
            <img className="logoAdm" src="/assets/imagenes/logo_facultad.png" alt=""/>
            <p className="tituloAdm">Gestión de Reserva de Ambientes</p>
            <button className="nav-toggleAdm" onClick={()=> setToggle(!toggle)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`menu-navAdm ${toggle ? 'nav-menu_visibleAdm' : ''}`}>
                {
                    links.map(
                        ({url, name}, idx) => (
                        <li className="item-nav-menuAdm" key={idx}>
                            <Link to={url} className="nav-menu-linkAdm">{name}</Link>
                         </li>
                        )
                    )
                }
                 <li className="item-nav-menuAdm">
                    <MiPerfilAdm/>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default HeaderAdm