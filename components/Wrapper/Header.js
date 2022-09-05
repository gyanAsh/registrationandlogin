import Image from 'next/image'
import React, { useContext } from 'react'
import myLogo  from '../../public/headerLogo.svg'
import { AuthContext } from '../Private'

const Header = () => {
  return (
    <div className="h-24 bg-slate-900 text-white flex items-center justify-between px-12 absolute top-0 w-full">{/* absolute top-0 w-full */}
          <Image src={myLogo} alt="Overlay Icon" />
          <Button/>
    </div>
  )
}

export default Header

const Button = () => {
  const {setAuth,isAuth} = useContext(AuthContext)
    return (
      <button className="w-36 h-14 bg-blue-700 rounded-xl " onClick={e => {e.preventDefault() ; setAuth(true)}}>{isAuth?'Sign In':'Log out'}</button>
    )
}