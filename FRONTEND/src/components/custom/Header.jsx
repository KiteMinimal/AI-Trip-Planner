import React from 'react'

const Header = () => {


  return (
    <div className='shadow-sm flex items-center justify-between '>
        <img className='ml-2' src="/logo.svg" alt="logoipsum" />
        <button  className='text-md text-white font-semibold p-3 m-4 rounded-lg bg-black'>Sign up</button>
    </div>
  )
}

export default Header