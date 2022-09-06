import React, { createContext, useState } from 'react'
import Auth from '../Auth'
export const AuthContext = createContext()
const Index = ({ children }) => {
    const [isAuth, setAuth] = useState(true);
        if (isAuth) {
        return (
            <AuthContext.Provider value={{isAuth,setAuth}}>
                  <Auth/>  
            </AuthContext.Provider>
        ) 
        }
    return (
        <AuthContext.Provider value={{isAuth,setAuth}}>
        {children}  
        </AuthContext.Provider>
        ) 
}

export default Index