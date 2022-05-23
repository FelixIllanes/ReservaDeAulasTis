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

import {PrivateRoutes} from './routes/privateRoutes'

function App() {
  return (
    <div className="App">
      <Routes>
        
        {/* Rutas para el docentes */}
          <Route path="/" element={<Home />} >
              <Route index element={<Inicio />}/>
              <Route path="reservar-aula/:id" element={<ReservarAula/>}/>
              <Route path="catalogo" element={<Catalogos/>}/>
          </Route>

       {/*  Rutas para el adminstradores */}
        <Route path="/Home-admin/" element={<AdminHome/>}>
          <Route index element={<AdminIni />}/>
          <Route path="crud" element={<Crud/>}/>
          <Route path="respuesta-reserva" element={<Respuesta_Reserva/>}/>
          <Route path="vista-forma-aul" index element={<Vista_formulario_aulas/>}/>
        </Route>

          <Route path="/register" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

const Catalogo = () => <h1>catalogo</h1>
export default App;
