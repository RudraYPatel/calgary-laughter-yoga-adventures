import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <main className='bg-purple-50 '>
    <div className="flex   p-2">
        <img src="/logo (2).png" alt="logo" className="h-24 "/>
        <div className="flex flex-row ml-auto">
          <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="../">Home</Link>
          <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="../upcoming">Upcoming Events</Link>
          <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="../training">Training</Link>
          <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="../speaker">Speakers</Link>
          <Link className="text-xl mt-9 ml-28 mr-10 font-semibold hover:underline" href="../about">About</Link>
        </div>      
  </div>
  <hr className=" border-black" /> 
  </main>
  )
};