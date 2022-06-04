import { baseUrl as api, headers } from './api.config';

export const get = (id) =>
    fetch(`${api}/grupo/${id}`)
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.error(err))

export const getToAssign = () =>
    fetch(`${api}/grupo/paraAsignar`)
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.error(err))

export const getByUser = (id) =>
    fetch(`${api}/grupo/User/${id}`)
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.error(err))

export const assign = (body) =>
    fetch(`${api}/grupo/Asignar`, {method: 'PUT', headers, body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.error(err))

export const assignAll = (body) =>
    fetch(`${api}/grupo/AsignarTodos`, {method: 'PUT', headers, body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => console.error(err))