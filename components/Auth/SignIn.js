import React, { useContext, useState } from 'react'
import Image from 'next/image'
import style from '../../styles/Image.module.css'
import illustration from '../../public/SignIn/illustration.png'
import googleIcon from '../../public/google.svg'
import logo from '../../public/Logo.svg'
import Footer from '../Wrapper/Footer'
import { AuthStatus } from './index'
import {AuthContext} from '../Private'
const SignIn = () => {
  return (
    <div className="bg-white flex justify-between h-screen font-rope">
      <Login />
      <Image className={style.override} objectFit="contain" src={illustration} alt="Get better with money" />
      </div>
  )
}

export default SignIn

const Login = () => {
  return (
    <div className=" relative pt-12 pl-12 flex-1">
      <Image className="" src={logo} alt="Overpay App" />
      <Form />
      <Footer/>
    </div>
  )
}

const Form = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const {setLogin,setForgotPassword} = useContext(AuthStatus);
  const {setAuth} = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center h-5/6">
      <div className="w-96">
        <div className="flex flex-col items-center font-rope gap-4 mb-10">
          <h3 className="text-gray-900 text-center text-3xl font-bold">Sign in to Overpay</h3>
          <h5 className="text-center text-base font-normal text-slate-500">Send, spend and save smater</h5>
        </div>
        <button onClick={e=>{e.preventDefault();setAuth(false)}} className="border border-zinc-300 rounded-xl h-14 w-full flex justify-center items-center gap-2"><Image objectFit="contain" width={24} src={googleIcon} alt="Google Icon"/>Sign in with Google</button>
        <div className="flex flex-row items-center flex-rope mt-4 mb-4">
          <span className="border-t border-zinc-300 w-full"></span>
          <p className="w-full text-center text-base font-normal text-slate-500">Or With Email</p>
          <span className="border-t border-zinc-300 w-full"></span>
        </div>
      <form onSubmit={e=>{e.preventDefault();setAuth(false)}} className="flex flex-col">
        <div className="flex flex-col relative gap-4">
          <input className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-base font-rope font-medium tracking-wider" type="email" placeholder='Username or email'/>
            <input className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-base font-rope font-medium tracking-wider" type={viewPassword?"text":"password"} placeholder='Password'/>
            <button className="absolute bottom-4 right-4" onClick={(e) => { e.preventDefault(); setViewPassword(!viewPassword) }}><i className={`fa-regular fa-${viewPassword?'eye':'eye-slash'}`}></i></button>
        </div>
          <div className="flex justify-between mt-6">
              <button htmlFor="remember" className="text-base font-semibold text-slate-800" onClick={(e) => { e.preventDefault(); setRemember(!remember) }}>
                <i className={`${remember ? 'fa-solid fa-circle-check text-blue-600' : 'fa-regular fa-circle text-zinc-400'} mr-3`}></i>
                Remember me
              </button>
              <button onClick={(e) => { e.preventDefault(); setForgotPassword(true)}}className="text-base font-semibold text-blue-600">Forgot Password?</button>
        </div>
        <input type="submit" className="h-14 w-full border border-zinc-300 rounded-xl bg-blue-600 text-white text-base font-bold mt-8 mb-8" value="Sign In"/>
      </form>
        <p className="flex flex-row justify-center text-base font-medium">Don't have an account? <button className="font-bold ml-2" onClick={(e) => { e.preventDefault(); setLogin(false)}}>Sign Up</button></p>
      </div>
    </div>
    
  )
}