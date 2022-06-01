import {useContext} from 'react'
import {AuthContext} from '../store/user'

export const useAuth = () => {
    const state = useContext(AuthContext)
    return state
}