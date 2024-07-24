import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    
    <div className="flex bg-white  p-2">
        <img src="/logo (2).png" alt="logo" className="h-28 rounded-3xl"/>
        {/* <h1 className="text-2xl mt-7 ml-5 font-bold"></h1> */}
        <div className="flex flex-row ml-auto">
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="../">Home</Link>
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="./upcoming-events">Upcoming Events</Link>
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="">Training</Link>
            <Link className="text-xl mt-9 ml-28 font-semibold hover:underline" href="">Speakers</Link>
            <Link className="text-xl mt-9 ml-28 mr-10 font-semibold hover:underline" href="">About</Link>

        </div>  
  </div>
  
  )
};