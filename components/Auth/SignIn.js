import React from 'react'
import Image from 'next/image'
import style from '../../styles/Image.module.css'
import illustration from '../../public/SignIn/illustration.png'
import logo from '../../public/Logo.svg'
import Footer from '../Wrapper/Footer'
const SignIn = () => {
  return (
    <div className="bg-white flex justify-between h-screen">
      <Login/>
      <Image className={style.override} objectFit="contain" src={illustration} alt="Get better with money" />
    </div>
  )
}

export default SignIn

const Login = () => {
  return (
    <div className=" relative pt-12 pl-12 flex-1">
      <Image className="" src={logo} alt="Overpay App" />
      <Form/>
      <Footer/>
    </div>
  )
}

const Form = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div>
        <h1>Sign in to Overpay</h1>
        <h5>Send, spend and save smater</h5>
      </div>
      <button>Sign in with Google</button>
      <form className="flex flex-col">
        <div className="flex flex-col relative">
          <input className="border border-zinc-300 rounded-xl" type="email" />
          <input className="border border-zinc-300 rounded-xl" type="password" />
          <button className="absolute bottom-0 right-0">eye close</button>
        </div>
        <div>
          <input type="radio" id="remember" name="remember" value="yes"/>
          <label for="remember">remember me</label>
          <h5>Forgot Password?</h5>
        </div>
        <submit>Sign In</submit>
      </form>
      <p>Don't have an account?<button>Sign Up</button></p>
    </div>
    
  )
}