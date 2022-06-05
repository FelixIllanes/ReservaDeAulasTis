import Crear_Usuario from '../Componentes/Crear_Usuario/Crear_Usuario'

export default function FormUser(){

    const goBack = () => {
        window.history.back()
    }


    return (
        <main className="inicio" style={{alignItems:"center"}}>
            <div className='btn_crud_usr'>
                <div onClick={goBack} style={{cursor: 'pointer'}}><i id="back" className="fa-solid fa-circle-arrow-left"></i></div>
            </div>
            <div className="container" style={{paddingTop:30+"px"}}>
                <Crear_Usuario />
            </div>
        </main>
    )    
}