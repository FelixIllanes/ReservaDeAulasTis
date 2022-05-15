import { baseUrl as api, headers } from './api.config';

export const get = (id) =>
  fetch(`${api}/ambientes/${id}`)
    .then((res) => res.json())
    .then((data) => data);

export const getAll = () =>
  fetch(`${api}/ambientes`)
    .then((res) => res.json())
    .then((data) => data);

export const create = (body) =>
  fetch(`${api}/ambientes`, {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);