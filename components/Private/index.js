import React, { useState } from 'react'
import Auth from '../Auth'
const index = ({ children }) => {
    const [isAuth, setAuth] = useState(true);
        if (isAuth) {
        return <Auth/> 
        }
        return children
}

export default index