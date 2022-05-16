import { Link } from "react-router-dom";
import Example from '../Notificaciones'

const links = [
    {
        url:'crud',
        name: 'Crud',
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

    return(
    <header className="header">
        <nav className="nav">
            <img className="logo" src="assets/imagenes/logo_facultad.png" alt=""/>
            <p className="titulo">Sistema de Reserva de Ambientes</p>
            <button className="nav-toggle">
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="menu-nav">
                {
                    links.map(
                        ({url, name}, idx) => (
                        <li className="item-nav-menu" key={idx}>
                            <Link to={url} className="nav-menu-link">{name}</Link>
                         </li>
                        )
                    )
                }
            
            </ul>
        </nav>
    </header>
    )
}

export default HeaderAdm