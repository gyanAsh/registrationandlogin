import React, { useContext, useState } from 'react'
import Image from 'next/image'
import style from '../../styles/Image.module.css'
import illustration from '../../public/SignIn/illustrationSignUp.svg'
import googleIcon from '../../public/google.svg'
import Footer from '../Wrapper/Footer'
import {AuthStatus} from './index'
import { AuthContext } from '../Private'
const SignUp = () => {
  return (
    <div className="bg-white flex justify-between w-screen h-screen font-rope">
      <Image className={style.override} objectFit="contain" src={illustration} alt="Get better with money" />    
      <Register/>
      
    </div>
  )
}

export default SignUp

const Register = () => {
  return (
    <div className=" relative pt-12 pl-12 flex-1">
      <Form/>
      <Footer/>
    </div>
  )
}

const Form = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const {setLogin} = useContext(AuthStatus)
  const {setAuth} = useContext(AuthContext)
  return (
    <div className="flex flex-col justify-center items-center h-5/6">
      <div className="w-96">
        <div className="flex flex-col items-center font-rope gap-4 mb-10">
          <h3 className="text-gray-900 text-center text-3xl font-bold">Sign Up for an account</h3>
          <h5 className="text-center text-base font-normal text-slate-500">Send, spend and save smater</h5>
        </div>
        <button onClick={e => { e.preventDefault();setAuth(false)}} className="border border-zinc-300 rounded-xl h-14 w-full flex justify-center items-center gap-2"><Image objectFit="contain" width={24} src={googleIcon} alt="Google Icon"/>Sign in with Google</button>
        <div className="flex flex-row items-center flex-rope mt-4 mb-4">
          <span className="border-t border-zinc-300 w-full"></span>
          <p className="w-full text-center text-base font-normal text-slate-500">Or With Email</p>
          <span className="border-t border-zinc-300 w-full"></span>
        </div>
      <form onSubmit={e=>{e.preventDefault();setAuth(false)}} className="flex flex-col">
        <div className="flex flex-col relative gap-4">
            <div className="flex gap-4">
                <input className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-base font-rope font-medium tracking-wider" type="text" placeholder='First name'/>
                <input className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-base font-rope font-medium tracking-wider" type="text" placeholder='Last name'/>
            </div>
                <input className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-base font-rope font-medium tracking-wider" type="email" placeholder='Email'/>
                <input className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-base font-rope font-medium tracking-wider" type={viewPassword?"text":"password"} placeholder='Password'/>
            <button className="absolute bottom-4 right-4" onClick={(e) => { e.preventDefault(); setViewPassword(!viewPassword) }}><i className={`fa-regular fa-${viewPassword?'eye':'eye-slash'}`}></i></button>
        </div>
        <p className="text-base font-medium mt-6"> By creating an account, you agreeing to our <span className="text-base font-semibold">Privacy Policy</span>, and <span className="text-base font-semibold">Electronics Communication Policy.</span></p>
        <input type="submit" className="h-14 w-full border border-zinc-300 rounded-xl bg-blue-600 text-white text-base font-bold mt-8 mb-8" value="Sign Up"/>
      </form>
        <p className="flex flex-row justify-center text-base font-medium">Already have an account? <button className="font-bold ml-2" onClick={(e) => { e.preventDefault(); setLogin(true)}}>Sign In</button></p>
      </div>
    </div>
    
  )
}