import {createContext, useState, useEffect} from 'react'
import {auth} from '../services/auth'
import {get} from '../services/user'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    
    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        const userId = window.localStorage.getItem('userId')
        if (!token && !userId) {
            setIsAuthenticated(false)
        }else{
           //iniciar sesion -> pedir el detalle del usuario al back 
           //reload -> si hay token -> solicito detalle del usuario al back
           setIsAuthenticated(true)
           get(userId).then(setUser).catch(err => console.error(err))
        }
    },[])


    const authenticate = (user) => {
        console.log(user)
        const {id, fullName, email, esAdmin}  = user
        setUser({id, fullName, email, esAdmin})
        setIsAuthenticated(true)

        window.localStorage.setItem('userId', id)
        window.localStorage.setItem('token', user.access_token)
    }
   
    const signIn = (user) => {
        return auth(user).then(res => {
            authenticate(res)
        }).catch(err => {
           console.log(err)
        })
        
    }

    const signUp = () => {
        setIsAuthenticated(false)
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userId')
        setIsAuthenticated(false)
    }

    const vars = {isAuthenticated, isAdmin: user?.esAdmin === 'yes', signIn, signUp, logout, user}
    return (
        <AuthContext.Provider value={vars}>
            {children}
        </AuthContext.Provider>
    )
}