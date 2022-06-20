import { baseUrl as api, headers } from './api.config';

export const headers2 = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export const get = (id) =>
  fetch(`${api}/usuario/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err))

export const getOne = (id) =>
  fetch(`${api}/usuario/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err))

export const getAll = () =>
  fetch(`${api}/usuarios`)
    .then((res) => res.json())
    .then((data) => data);

export const create = (body) =>
  fetch(`${api}/registro`, {method: 'POST', headers , body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const update = (body, id) =>
  fetch(`${api}/usuario/${id}`, {method: 'PUT', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const remove = (id) =>
  fetch(`${api}/usuario/${id}`, {method: 'DELETE', headers})
    .then((res) => res.json())
    .then((data) => data);