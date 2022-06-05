import Header from './Componentes/Header'
import Inicio from './Componentes/Inicio';
import Home from './pages/Home'
import { Routes, Route  } from "react-router-dom";
import './App.css';
import Catalogos from './pages/Catalogos';
import Vista_formulario_aulas from './pages/Vista_formulario_aulas'
import Crud from './pages/Crud'
import ReservarAula from './pages/ReservarAula';
import Login from './pages/Login';
import Respuesta_Reserva from './pages/Respuesta_Reserva'
import AdminHome from './pages/AdminHome';
import AdminIni from './Componentes/Inicio/adminin';
import Crud_Usuarios from './pages/Crud_Usuarios';
import Mis_Reservas from './pages/Mis_Reservas'
import FormUser from './pages/Formulario_Usuario';
import Rec_Cont from './pages/Rec_Cont';
import CambiarCont from './pages/CambiarCont'
import Recomendaciones_pag from './pages/Recomendaciones_pag'


import {PrivateDocRoutes, PrivateAdmRoutes} from './routes/privateRoutes'
import {PublicRoutes} from './routes/publicRoutes'
import {AuthProvider} from './store/user'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {/* Rutas para el docentes */}
          <Route element={<PrivateDocRoutes/>}>
            <Route path="/" element={<Home />} >
                <Route index element={<Inicio />}/>
                <Route path="reservar-aula/:id" element={<ReservarAula/>}/>
                <Route path="catalogo" element={<Catalogos/>}/>
                <Route path="mis-reservas" element={<Mis_Reservas/>}/>
                <Route path="recomendaciones/:carac/:tipo/:cap" element={<Recomendaciones_pag/>}/>
            </Route>
          </Route>
          {/*  Rutas para el adminstradores */}

          <Route element={<PrivateAdmRoutes/>}>
          <Route path="/Home-admin" element={<AdminHome/>}>
            <Route index element={<AdminIni />}/>
            <Route path="crud" element={<Crud/>}/>
            <Route path="respuesta-reserva" element={<Respuesta_Reserva/>}/>
            <Route path="vista-forma-aul" index element={<Vista_formulario_aulas/>}/>
            <Route path="crud-usarios" element={<Crud_Usuarios/>}/>
            <Route path="form-usuario" element={<FormUser/>}/>
          </Route>
          </Route>
          <Route element={<PublicRoutes/>}>
            <Route path="/register" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recuperar" element={<Rec_Cont/>}/>
            <Route path="/cambiar-cont/:email" element={<CambiarCont/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

const Catalogo = () => <h1>catalogo</h1>
export default App;
