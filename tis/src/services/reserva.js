import { baseUrl as api, headers } from './api.config';

export const getCardResponse = (id) =>
  fetch(`${api}/reserva/Todas/${id}`)
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