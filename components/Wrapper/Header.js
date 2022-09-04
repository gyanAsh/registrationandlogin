import Image from 'next/image'
import React from 'react'
import myLogo  from '../../public/headerLogo.svg'

const Header = () => {
  return (
      <div className="h-24 bg-slate-900 text-white flex items-center justify-between px-12">
          <Image src={myLogo} alt="Overlay Icon" />
          <Button/>
    </div>
  )
}

export default Header

const Button = () => {
    return (
        <button className="w-36 h-14 bg-blue-700 rounded-xl ">Sign In</button>
    )
}