import { Link } from "react-router-dom";
import MiPerfilAdm from '../Mi_Perfil/perfil'
import { useEffect, useState } from 'react';
import { get } from '../../services/user';
import './headerAdm.css'

const links = [
    {
        url:'crud',
        name: 'Ambientes',
    },
    {
        url:'crud-usarios',
        name:'Usuarios' 

    },
    {
        url:'respuesta-reserva',
        name: 'Peticiones',
    },
    {
        url: 'catalogo',
        name: 'Catálogo',
      },

]

function HeaderAdm(){

    const userId = window.localStorage.getItem('userId');
    const [perfil, setPerfil] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        get(userId).then(setPerfil);
      }, []);

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
                    <MiPerfilAdm name = {perfil.name} apellido = {perfil.apellido}/>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default HeaderAdm