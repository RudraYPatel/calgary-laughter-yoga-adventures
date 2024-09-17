import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Hero() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />
      <div className='text-center leading-relaxed'>
        <p className='text-3xl font-extrabold mt-5 mb-4'>Upcoming Training</p>
        <p className='text-3xl font-extrabold mt-5 mb-10'>Fall-2024</p>
      </div>
      <div className="flex justify-center gap-4">
        <img
          src="./training.jpg"
          alt="training"
          className="w-auto h-96 mx-auto border-2 border-black" 
        />
      </div>
      <div className='text-center leading-loose'>
        <p className='text-3xl font-extrabold mt-10 mb-4'>Certified Laughter Yoga Leader Training</p>
        <p className='mt-20 mb-4 mr-9 ml-9 gap-10'> 
          Enrich your life with laughter! Join us for this unique weekend training program that may change the way you live with joy through laughter! 
          After the completion of the training, you will be qualified as a Certified Laughter Yoga Leader (CLYL) with the Laughter Yoga International University; 
          this is an internationally recognized certification. As CLYL, you can lead Laughter Yoga sessions with corporate clients, seniors and healthcare facilities, 
          schools, colleges and universities, yoga and fitness centres, community groups and not-for-profit organizations, or integrate Laughter Yoga into your own business 
          practice, instruction, or healing modality.
        </p>
      </div>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-10 mt-10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            October 25-27, 2024 Friday 6:30-8:30pm Saturday 9:00-5:00pm Sunday
          </h2>
          <p className="text-lg">
            9:00am-3:00pm with a public event at 1:00pm
          </p>
          <p className="text-xl font-semibold">
            $395 early bird (by Sept 25); $495 regular price
          </p>
          <p className="text-sm text-gray-600">
            Partial scholarships may be available if you are facing financial barriers - please inquire.
          </p>
          <div className="pt-4">
            <button className="bg-black text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
