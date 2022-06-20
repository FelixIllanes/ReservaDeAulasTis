import { baseUrl as api, headers } from './api.config';

export const headers2 = {
  'Content-Type': 'multipart/form-data'
}

export const get = (id) =>
  fetch(`${api}/ambientes/${id}`)
    .then((res) => res.json())
    .then((data) => data);

export const getOne = (id) =>
  fetch(`${api}/ambientes/${id}`)
    .then((res) => res.json())
    .then((data) => data);    

export const getAll = () =>
  fetch(`${api}/ambientes`)
    .then((res) => res.json())
    .then((data) => data);

export const create = (body) =>
  fetch(`${api}/ambientes`, {method: 'POST', headers2, body: body})
    .then((res) => res.json())
    .then((data) => data);

export const update = (body, id) =>
  fetch(`${api}/ambientes/${id}`, {method: 'PUT', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const remove = (id) =>
  fetch(`${api}/ambientes/${id}`, {method: 'DELETE', headers})
    .then((res) => res.json())
    .then((data) => data);