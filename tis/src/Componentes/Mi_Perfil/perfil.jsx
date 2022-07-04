import { Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './perfil.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { get } from '../../services/user';

function OffCanvasExample({ name,nombre,apellido, ...props }) {
  const { logout, user } = useAuth();
  const [show, setShow] = useState(false);
  const userId = window.localStorage.getItem('userId');
  const [perfil, setPerfil] = useState([]);
  

  useEffect(() => {
    get(userId).then(setPerfil);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const redirectTo = () => {
    navigate(`/mis-reservas`);
  };

  const handleOnClick = () => {
    navigate('/auth');
    logout();
  };
  return (
    <>
      <a
        className='nav-menu-link'
        variant='primary'
        style={{ cursor: 'pointer' }}
        onClick={handleShow}
      >
        {/* {nombre} {apellido} */}
        Administrador
      </a>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <center>
            <Offcanvas.Title>Mi Perfil</Offcanvas.Title>
          </center>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='cont-img-perfil'>
            <img className='img-perfil' src='/assets/imagenes/perfilpordefecto.png' alt='' />
            <p style={{ marginTop: 12 + 'px' }}>
              {perfil.name} {perfil.apellido}
            </p>
            <p>{perfil.email}</p>
          </div>
          <div className='cont-btn-perfil'>
            <button onClick={handleOnClick}>Cerrar Sesión</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function MiPerfilAdm({name, apellido}) {
  return (
    <>
      {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} nombre ={name} apellido={apellido} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default MiPerfilAdm;
