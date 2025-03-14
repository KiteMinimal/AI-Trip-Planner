import React from 'react'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='flex items-center mx-36 my-10 gap-9 flex-col'>
        <h1 className='font-bold text-[50px] text-center'> <span className='text-[#f56551]'>Describe your next adventure with AI:</span> Personalize itineries at Your FingerStips.</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itenaries tailored to your interests and budgets. </p>
        <button onClick={() => {navigate('/CreateTrip')}} className='text-base text-white p-3 bg-black font-semibold rounded-md'>Get Started. It's Free</button>
    </div>
  )
}

export default Hero