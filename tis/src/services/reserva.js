import { baseUrl as api, headers } from './api.config';

export const getNotify = (id_user) =>
  fetch(`${api}/reserva/Todas/${id_user}`)
    .then((res) => res.json())
    .then((data) => data);

export const getToResponse = () =>
  fetch(`${api}/reserva/PorReservar`)
    .then((res) => res.json())
    .then((data) => data);

export const setAccept = (id) =>
  fetch(`${api}/reserva/Aceptar/${id}`, {method: 'PUT', headers})
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