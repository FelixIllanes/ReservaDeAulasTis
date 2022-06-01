import {Offcanvas} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import './perfil.css'
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../hooks/useAuth'


function OffCanvasExample({ name, ...props }) {
    const {logout, user} = useAuth()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    const redirectTo = () => {
      navigate(`/mis-reservas`)        
  }

    return (
      <>
        <a className="nav-menu-link" variant="primary" style={{cursor:"pointer"}} onClick={handleShow}>
          Mi perfil
        </a>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Mi Perfil</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className='cont-img-perfil'>
                <img className="img-perfil" src="/assets/imagenes/perfilpordefecto.png" alt=""/>
                <p style={{marginTop:12+'px'}}>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
            <div className='cont-btn-perfil'>
                <button onClick={redirectTo}>Mis reservas</button>
                <button onClick={()=> logout()}>Cerrar Sesión</button>
            </div>
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function MiPerfil() {
    return (
      <>
        {[ 'start'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
  export default MiPerfil