import './res.css';
import {useState} from 'react'
import Horario  from '../Horario'
import {  useParams } from 'react-router-dom';
import {get} from '../../services/catalogo';



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

    const {id}= useParams()

    const goBack = () => {
        window.history.back()
    }

    get(id).then(data => {
        setData(data)
    })

    return(
        <div id="form_res_amb">
                <div>
                <div onClick={goBack} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
                <h1 style={{textAlign:"center",color:"black"}}>Reserva de Ambiente</h1>
                    <div className="grupo">
                        <input className="input_form" type="text" name="" id="nomDocente" required/><span className="barra"></span>
                        <label className="label_form" for="">Nombre Docente:</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="" id="materia" required/><span className="barra"></span>
                        <label className="label_form" for="">Mater&iacute;a</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="" id="grp" required/><span className="barra"></span>
                        <label className="label_form" for="">Grupo</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="number" name="" id="capAlum" required/><span className="barra" ></span>
                        <label className="label_form" for="">Capacidad de Alumnos</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="date" name="" id="fechReser" required/><span className="barra"></span>
                        <label className="label_form" for="">Fecha de Reserva</label>
                    </div>
                    <div className="grupo">
                        <input className="input_form" type="text" name="" id="motRes" required/><span className="barra"></span>
                        <label className="label_form" for="">Motivo de la reserva</label>
                    </div>
                </div>
                <div className='dos'>
                    <h2 style={{textAlign:"center"}}><strong>Codigo de Aula</strong> {data.codigo}</h2>
                    <h2 style={{textAlign:"center"}}>Horario de la reserva</h2>
                    {
                        horarios.map(periodo => (
                            <Horario periodo={periodo}/> 
                        ))
                    }
                    <div className="boton_form">
                        <button type="submit" >Crear Ambiente</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
    )
}

export default ReservaAula