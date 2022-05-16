import {Button} from 'react-bootstrap'
import {Offcanvas} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import {getCardResponse} from '../../services/reserva'
import Notify from '../Notify'

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [reservas, setReservas] = useState([])

    useEffect(() => {
      getCardResponse(1).then(setReservas)
    }, [])
  
    return (
      <>
        <a className="nav-menu-link" variant="primary" style={{cursor:"pointer"}} onClick={handleShow}>
          Notificaciones
        </a>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Notificaciones</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          {reservas?.map(reserva => (
                <>
                <Notify reserva={reserva}/><br />
                </>
            ))}

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function Example() {
    return (
      <>
        {[ 'end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
  export default Example