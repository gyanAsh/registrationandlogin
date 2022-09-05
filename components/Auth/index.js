import React, {useState,createContext} from 'react'
import ForgetPassword from './ForgetPassword';
import SignIn from './SignIn'
import SignUp from './SignUp'
export const AuthStatus = createContext();
const index = () => {
  const [login, setLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false)
  if (login && !forgotPassword){
    return (
      <AuthStatus.Provider value={{setLogin,forgotPassword,setForgotPassword}}>
        <SignIn/>
      </AuthStatus.Provider>
    ) 
  } else if (forgotPassword) {
    return (
      <AuthStatus.Provider value={{setLogin,forgotPassword,setForgotPassword}}>
        <ForgetPassword/>
      </AuthStatus.Provider>
    )
  }else{
    return (
      <AuthStatus.Provider value={{setLogin,forgotPassword,setForgotPassword}}>
      <SignUp/>
      </AuthStatus.Provider>
  )
  }
    
}

export default index