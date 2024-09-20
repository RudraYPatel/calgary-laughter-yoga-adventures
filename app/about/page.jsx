import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Hero() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />
        <div className='text-center leading-relaxed'>
            <p className='text-3xl font-extrabold mt-10 mb-10'>Calgary Laughter Yoga and Adventures</p>
        </div>
        <div className='text-left leading-relaxed'>
            <p className='font-bold text-xl mt-20 mb-10 ml-8 '>The greatness of a community is most accurately measured by the compassionate action of its members.</p>
            <p className='font-bold mt-5 mb-20 ml-8'>- Coretta Scott King</p>
        </div>
        <div className="flex justify-center gap-4">
             <img
                src="./about.webp"
                 alt="about"
                className="w-auto h-96 mx-auto border-2 border-black" 
            />
        </div>
        <div className=' ml-10 leading-loose'>
            <p className='mt-20 mb-4 mr-9  gap-10'> 
            Well, hello there! </p>
            <p className='mb-4 gap-10'>We are Calgary Laughter Yoga, an inclusive group of folks from different walks of life with a passion for laughter and wellbeing. We want to ensure you feel welcome here and connect with our vibe! </p>
            <p className='mb-4 gap-10'>Our club has been running since 2013 in various spaces around Calgary. We started when three of us met at a laughter conference in Vancouver. Knowing that we all bring different strengths to the team, with a shared vision for joy, health and community, we joined forces and are building something stronger and better together than what we could have done on our own.
            </p>
        </div>
        <hr className="mb-10 mt-10  border-black"/>
        <div className='text-left ml-10 leading-relaxed'>
            <p className='text-xl font-extrabold mt-10 '>Our Vision</p>
            <p className='mt-5 mb-10'>All Calgarians and our extended neighbors feel joyful, are free from pain and are connected to their communitie</p>
            <p className='text-xl font-extrabold mt-10 '>Our Mission</p>
            <p className='mt-5 mb-10'>We are a supportive, inclusive and empowering community transforming lives for the better through intentional laughter.</p>
            <p className='text-xl font-extrabold mt-10 '>Our Values</p>
            <p className='mt-5 mb-1'>​• Connection, Belonging and Inclusivity</p>
            <p className='mt-5 mb-1'>• Compassion and Wellbeing</p>
            <p className='mt-5 mb-10'>​• Authenticity and Empowerment</p>   
            <p className='text-xl font-extrabold mt-10 '>Our Club</p>
            <p className='mt-5 mb-1 gap-10'>We have a free Laughter Club open to all ages and abilities and we meet on Sundays at 5pm Mountain Time, currently on Zoom. That's right - you can join us, for free, from the comfort of your own home!</p>
            <p className='mb-3'>When we meet in-person, we rent out space that is accessible so whether you are in a wheelchair, walk fast or slow, a marathon runner, a billionaire, or barely getting by, you are welcome to join us. Our favourite venue is the <a href="https://www.insideouttheatre.com/" target="_blank" class="underline">Inside Out Theatre</a> as it aligns with our values and is a fabulous space in the heart of downtown. You may find us around the city filling other spaces with joy and laughter as well! Please check the Events Calendar on the <a href="../hero.js" class="underline" target="_blank">Home Page</a> or <a href="https://www.facebook.com/calgarylaughteryoga" class="underline" target="_blank">Facebook</a> for updated in-person events. </p>
            <p className='mb-3'>In the spirit of respect, reciprocity and truth, we honour those who have come before us and acknowledge the traditional territories and oral practices of the Blackfoot (Siksika, Piikani, and Kainai), the Tsuut’ina (Sarcee), the Stoney Nakoda First Nations, the Métis Nation (Region 3), and all people who make their homes in the Treaty 7 region of Southern Alberta. </p>
        </div>
        <hr className="mb-10 mt-10 border-black"/>
        <div className='text-center leading-relaxed'>
            <p className='text-3xl font-extrabold mt-10 mb-10'>Calgary Laughter Club Online</p>
            <p className='text-3xl font-extrabold mt-10 mb-10'>Every Sunday 5:00-5:40 PM Mountain Time</p>
            <p className='text-2xl font-bold mt-20 mb-10 text-cyan-400'>Join Us On Zoom</p>
        </div>
        <div className='text-center mt-20 ml-10 leading-relaxed'>
            <p className='mb-3'>Every week, a fantastic team of unpaid facilitators hosts these free seminars for the local community.</p>
            <p className='mb-3'>Come through, introduce yourself, and laugh with us and other visitors from across the globe.</p>
            <p className='mb-3'>You could quickly discover that you're returning often!</p>
        </div>
        <div className='text-center leading-relaxed'>
            <p className='text-3xl font-extrabold mt-10 mb-10'>Calgary Laughter Club Sunday Brunch Potlucks</p>
            <p className='text-3xl font-extrabold mt-10 mb-10'>Sundays Quarterly 11:00am-1:00pm</p>
            <p className='text-2xl font-bold mt-20 mb-10 text-cyan-400'>Join us in-person at the <a href="https://www.insideouttheatre.com/" target="_blank" class="underline">Inside Out Theatre</a> & check <a href="https://www.facebook.com/calgarylaughteryoga" class="underline" target="_blank">Facebook</a> for dates</p>
        </div>
        <div className='text-center mt-20 ml-10 leading-relaxed'>
            <p className='mb-3'>These sessions are offered to our community by a fantastic collection of volunteer Facilitators, much like our online club.</p>
            <p className='mb-3'>They take turns. Nothing compares to a good laugh—well, except for a good laugh shared with delicious food and wonderful company! </p>
            <p className='mb-3'>Please bring a dish to share and a recommended $10 donation to help cover the costs of marketing and venue rental.  </p>
        </div>
        <div className='text-center ml-10 leading-relaxed'>
            <p className='text-xl font-extrabold mt-10 '>No cash? No problem! Please use the link to contribute below. 😊 </p>
        </div>
        <div className="flex justify-center items-center mt-20">
            <button className="bg-black text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Make A Donation
            </button>
        </div>
        <hr className="mb-10 mt-10  border-black"/>
        <div className='text-center mt-10 mb-10 ml-10 leading-relaxed'>
            <p className='mb-3'>In the spirit of respect, reciprocity and truth, we honour those who have come before us and acknowledge the traditional territories and oral practices of </p>
            <p className='mb-3'>the Blackfoot (Siksika, Piikani, and Kainai), the Tsuut’ina (Sarcee), the Stoney Nakoda First Nations, the Métis Nation (Region 3), and all people who make  </p>
            <p className='mb-3'>their homes in the Treaty 7 region of Southern Alberta.</p>
        </div>
        <Footer/>
    </main>
  )}

