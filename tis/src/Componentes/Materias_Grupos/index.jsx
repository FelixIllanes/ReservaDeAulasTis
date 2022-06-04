import './materia_check.css'

function Materia_grupo({matGrupo, grupoChange}){

    const {nombre, id_grupo, grupo, materia} = matGrupo
    
    return(
        <div className="check_cont">
            <p>
                <input type="checkbox" onChange={grupoChange} value={id_grupo} name={nombre} id={id_grupo} className="input_materias" />
                <label htmlFor={id_grupo}>{materia} y {grupo}</label>
            </p>
        </div>
)}

export default Materia_grupo