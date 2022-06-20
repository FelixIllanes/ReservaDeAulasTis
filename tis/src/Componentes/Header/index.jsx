import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../../services/user';
import MiPerfil from '../Mi_Perfil';
import Example from '../Notificaciones';


const links = [
  {
    url: '/reservar-aula/:id',
    name: 'Reserva',
  },
];




function Header() {


  const userId = window.localStorage.getItem('userId');
  const [perfil, setPerfil] = useState([]);
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    get(userId).then(setPerfil);
  }, []);


  return (
    <header className='header'>
      <nav className='nav'>
        <img className='logo' src='assets/imagenes/logo_facultad.png' alt='' />
        <p className='titulo'>Sistema de Reserva de Ambientes</p>
        <button className='nav-toggle' onClick={() => setToggle(!toggle)}>
          <i className='fa-solid fa-bars'></i>
        </button>

        <ul className={`menu-nav ${toggle ? 'nav-menu_visible' : ''}`}>
          <li className='item-nav-menu'>
            <Example />
          </li>

          {links.map(({ url, name }, idx) => (
            <li className='item-nav-menu' key={idx}>
              <Link to={url} className='nav-menu-link'>
                {name}
              </Link>
            </li>
          ))}
          <li className='item-nav-menu'>
            <MiPerfil name = {perfil.name} apellido = {perfil.apellido}/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

