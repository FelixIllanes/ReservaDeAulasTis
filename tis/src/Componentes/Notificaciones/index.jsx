import {Button} from 'react-bootstrap'
import {Offcanvas} from 'react-bootstrap'
import {useEffect, useState} from 'react'


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          Notificaciones
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Aqui las notificaciones que algun dia vamos a poner 
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