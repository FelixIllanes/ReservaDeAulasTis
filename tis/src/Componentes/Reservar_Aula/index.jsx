import './res.css';
import {useEffect, useState} from 'react'
import Horario  from '../Horario'
import {  useParams } from 'react-router-dom';
import {get} from '../../services/catalogo';
import {Modal} from 'react-bootstrap'
import {reservarAula, getPeriodos} from '../../services/reserva'



const horarios = [
  '6:45 - 8:15',
  '8:15 - 9:45',
  '9:45 - 11:15',
  '11:15 - 12:45',
  '12:45 - 14:15',
  '14:15 - 15:45',
  '15:45 - 17:15',
  '17:15 - 18:45',
  '18:45 - 20:15',
  '20:15 - 21:45',
]

function ReservaAula(){
    const [data, setData] = useState({})
    const [reservas, setReservas] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [body, setBody] = useState({})
    const [fecha, setFecha] = useState({})
    


    const openModal = () => {
        setShowModal(true)
        getPeriodos(id, fecha).then(setReservas)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const {id}= useParams()

    useEffect(() => {
        get(id).then(data => {
            setData(data)
        })
    }, [])

    const handleChange = (evt) => {
        if([evt.target.name]=="fechaReserva"){
            setFecha({
                ...fecha,
                fecha : evt.target.value
            })
        }
        setBody({
                ...body,
                [evt.target.name] : evt.target.value
        })
    }
    const periodoChange = (evt) => {
            setBody({
                ...body,
                periodo: evt.target.value,
                id_users: 1,
                id_aulas: id,
                codigo: data.codigo,
                cantidadPeriodo: 1
                
            })
    }

    const datos = () => {
        setBody({
            ...body,
            id_users: 1,
            id_aulas: id,
            codigo: data.codigo,
            cantidadPeriodo: 1,
            
        })
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log(body)
        reservarAula(body)
        closeModal()
        document.getElementById("formReserva").reset();
    }

    return(
        <form id="formReserva">
        <div className="formulario" id="form_reserva">
        <div id="form_res_amb">
                <div>
                
                <h1 style={{textAlign:"center",color:"black"}}>Reserva de Ambiente</h1>
                <h2 style={{textAlign:"center"}}><strong>Codigo de Aula</strong> {data.codigo}</h2>

                    <div className="grupo">
                        <input className="input_form" type="text" name="materia" onChange={handleChange} id="codigo" required /><span className="barra"></span>
                        <label className="label_form" htmlFor="">Mater&iacute;a</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"  type="text" name="grupo" onChange={handleChange} id="grp" required/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Grupo</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"   type="number" name="cantidadEstudiantes" onChange={handleChange} id="capAlum" required/><span className="barra" ></span>
                        <label className="label_form" htmlFor="">Capacidad de Alumnos</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"   type="date" name="fechaReserva" onChange={handleChange} id="fechReser" required/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Fecha de Reserva</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form"  type="text" name="razon" onChange={handleChange}  id="motRes" required/><span className="barra"></span>
                        <label className="label_form" htmlFor="">Razon de la reserva</label>
                    </div>
                </div>
                {showModal && <Modal show={showModal}>
                    <div className='container modal_horario' style={{padding:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Horario de la reserva</h2>
                        
                        {
                            <Horario reservas={reservas}
                                periodoChange={periodoChange}/>
                        }
                        <div className="boton_form">
                            <button onClick={handleOnSubmit}>Reservar Aula</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                        </div>
                    </Modal>
                }
                    <div className="boton_form">
                        <a className='selec_per_btn' onClick={openModal}>Seleccionar Periodo</a>
                        <button type="reset">Cancelar</button>
                    </div>
                </div>
            </div>  
        </form>  
    )
}

export default ReservaAula