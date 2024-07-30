import React from 'react'

export default function Hero() {
  return (
    <main className='min-h-screen bg-white'>
        <div className='text-center'>
            <p className='text-3xl font-extrabold mb-4'>Welcome to Calgary Laughter Yoga and Adventures</p>
            <p className="text-xl mb-12">Join our inclusive community, embrace playfulness & transform your life through intentional laughter.</p>
            <div className="flex justify-center gap-4">
            <img src="./first.png" alt="Laughing Image 1" className="w-48 h-48 mx-auto" />
            <img src="./second.png" alt="Laughing Image 2" className="w-48 h-48 mx-auto" />
            <img src="./third.png" alt="Laughing Image 3" className="w-48 h-48 mx-auto" />
            </div>
            <hr className="my-8 border-gray-600 mx-10" />
        </div>
        <div className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming In-Person Events</h2>
        <div className="flex justify-center items-center gap-4">
        <img src="./upcomingevent.png" alt="Event" className="w-96 h-84" />
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-2">Laughter Adventures Conference</h3>
          <p className="mb-1">Fri, May 03, 2024</p>
          <p className="mb-4">Pocaterra Inn, Canmore</p>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Details</button>
        </div>
      </div>
      <hr className="my-8 border-gray-600 mx-10" />
    </div>
    <div className="py-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Weekly Events Calendar</h2>
      <div className="flex flex-row items-center gap-4 ml-20 ">
        <div className="bg-gray-300 p-4 rounded shadow-md w-full max-w-md text-center">
          <p className="font-semibold">Zoom Meet-Up</p>
          <p>Sun Jul 14th 5:00pm - 5:40pm</p>
        </div>
        <div className="bg-gray-300 p-4 rounded shadow-md w-full max-w-md text-center">
          <p className="font-semibold">Zoom Meet-Up</p>
          <p>Sun Jul 21st 5:00pm - 5:40pm</p>
        </div>
        <div className="bg-gray-300 p-4 rounded shadow-md w-full max-w-md text-center">
          <p className="font-semibold">Zoom Meet-Up</p>
          <p>Sun Jul 28th 5:00pm - 5:40pm</p>
        </div>
      </div>
      <p className="mt-4 text-center mb-20">Sundays from 5:00-5:40 PM Mountain time we meet on Zoom and have in-person gatherings sporadically.</p>
    </div>
    </main>
  )
}