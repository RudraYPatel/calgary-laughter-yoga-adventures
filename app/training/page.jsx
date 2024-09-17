import React from 'react'
import Link from 'next/link'
import Header from '../components/header'

export default function Hero() {
  return (
    
    <main className='min-h-screen bg-white'>
        <Header/> 
        <div className='text-center'>
            <p className='text-3xl font-extrabold mt-5 mb-4'>Upcoming Training</p>
            <p className='text-3xl font-extrabold mt-5 mb-4'>Fall-2024</p>
       </div> 
       <div className="flex justify-center gap-4">
            <img src="./training.jpg" alt="training" className="w-fit h-96 mx-auto" />
        </div>
           
    </main>
  )
}