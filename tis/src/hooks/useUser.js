import {useEffect, useState} from 'react'
import { getAll, update, remove } from '../services/user'

export const useUser = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        getAll().then(setUsers)
    }, [])

    const updateUser = (id, body) => {
        const newUsers = users.map((user) => user.id === id ? body : user)
        setUsers(newUsers)
        /* update(body, id) */
    }

    const removeUser = (id) => {
        const newUsers = users.filter(user => user.id !== id)
        setUsers(newUsers)
        remove(id)
    }

    const focusUser = (user) =>  {
        //console.log(user)
        setUser(user)
    }

return {users, updateUser, removeUser, focusUser, user}
}