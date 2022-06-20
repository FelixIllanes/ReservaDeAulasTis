import { baseUrl as api, headers } from './api.config';

export const getNotify = (id_user) =>
  fetch(`${api}/reserva/Todas/${id_user}`)
    .then((res) => res.json())
    .then((data) => data);

export const getAccepted = (id_user) =>
  fetch(`${api}/reserva/Aceptar/${id_user}`)
    .then((res) => res.json())
    .then((data) => data);

export const getAcceptedContigua = (id_user) =>
  fetch(`${api}/reserva/AceptarCont/${id_user}`)
    .then((res) => res.json())
    .then((data) => data);

export const getToResponse = () =>
  fetch(`${api}/reserva/PorReservar`)
    .then((res) => res.json())
    .then((data) => data);

export const getFirst = () =>
  fetch(`${api}/reserva/Primeros`)
    .then((res) => res.json())
    .then((data) => data);

export const getLast = () =>
  fetch(`${api}/reserva/Ultimos`)
    .then((res) => res.json())
    .then((data) => data);

export const getUrgent = () =>
  fetch(`${api}/reserva/Urgencia`)
    .then((res) => res.json())
    .then((data) => data);

export const getEstadistica = () =>
  fetch(`${api}/reserva/Estadisticas`)
    .then((res) => res.json())
    .then((data) => data);

export const setAccept = (id_reserva, id) =>
  fetch(`${api}/reserva/Aceptar/${id_reserva}/${id}`, {method: 'PUT', headers})
    .then((res) => res.json())
    .then((data) => data);

export const setAcceptContiguas = (id_reserva, id_aula1, id_aula2) =>
  fetch(`${api}/reserva/Aceptar/${id_reserva}/${id_aula1}/${id_aula2}`, {method: 'PUT', headers})
    .then((res) => res.json())
    .then((data) => data);

export const setReject = (body,id) =>
  fetch(`${api}/reserva/Rechazar/${id}`, {method: 'PUT', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const reservarAula= (body) =>
  fetch(`${api}/reserva`, {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);
  
  
export const getPeriodos= (id, body) =>
  fetch(`${api}/reserva/periodos/${id}`,{method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const getRecomend= (body) =>
  fetch(`${api}/reserva/Recomendacion`,{method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const getRecomendContigua= (body) =>
  fetch(`${api}/reserva/RecomendacionContiguas`,{method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);
    
export const cancel = (id) =>
  fetch(`${api}/reserva/${id}`, {method: 'DELETE', headers})
    .then((res) => res.json())
    .then((data) => data);

export const cancelCont = (id1, id2) =>
  fetch(`${api}/reserva/${id1}/${id2}`, {method: 'DELETE', headers})
    .then((res) => res.json())
    .then((data) => data);

export const getAll = () =>
  fetch(`${api}/reserva/reporteTodosIndividual`)
    .then((res) => res.json())
    .then((data) => data);

export const getAllCont = () =>
  fetch(`${api}/reserva/reporteTodosContigua`)
    .then((res) => res.json())
    .then((data) => data);

export const getAcceptedReport = () =>
  fetch(`${api}/reserva/reporteAceptados`)
    .then((res) => res.json())
    .then((data) => data);

export const getRejectReport = () =>
  fetch(`${api}/reserva/reporteRechazados`)
    .then((res) => res.json())
    .then((data) => data);
