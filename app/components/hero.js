// import React from 'react';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <main className="min-h-screen flex-1 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('/bgimage.webp')] bg-center bg-fixed opacity-50"></div>
//       <section className="min-h-screen relative z-10">
//         <div className="text-center bg-purple-950 rounded-lg shadow-lg mb-5 mt-10 max-w-screen-xl mx-auto"><br />
//           <p className="text-3xl font-extrabold mt-5 mb-4 text-white">Welcome to Calgary Laughter Yoga and Adventures</p>
//           <p className="text-xl font-bold mb-12 text-white">Join our inclusive community, embrace playfulness & transform your life through intentional laughter.</p>
//           <div className="flex justify-center gap-4">
//             <img src="./first.png" alt="Laughing Image 1" className="w-48 h-48 mx-auto" />
//             <img src="./second.png" alt="Laughing Image 2" className="w-48 h-48 mx-auto" />
//             <img src="./third.png" alt="Laughing Image 3" className="w-48 h-48 mx-auto" />
//           </div><br />
//         </div>

//         <hr className="my-8 border-black mx-10" />

//         <div className="py-8 bg-yellow-50 rounded-lg shadow-lg mb-5 mt-10 max-w-screen-xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 text-center">Upcoming In-Person Events</h2>
//           <div className="flex justify-center items-center gap-4">
//             <img src="./upcomingevent.png" alt="Event" className="w-96 h-84" />
//             <div className="text-left">
//               <h3 className="text-2xl font-semibold mb-2">Laughter Adventures Conference</h3>
//               <p className="mb-1">Fri, May 03, 2024</p>
//               <p className="mb-4">Pocaterra Inn, Canmore</p>
//               <Link href="../upcoming" className="px-4 py-2 bg-black hover:underline text-white rounded">Details</Link>
//             </div>
//           </div>
//         </div>

//         <hr className="my-8 border-black mx-10" />

//         <div className="py-5 bg-purple-950 rounded-lg shadow-lg mb-5 mt-10 max-w-screen-xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 text-center text-white">Weekly Events Calendar</h2>
//           <div className="flex flex-row items-center gap-4 mx-auto max-w-4xl">
//             {/* Zoom Meet-Up Boxes */}
//             <div className="bg-black p-4 rounded shadow-md w-full max-w-md text-center text-yellow-50 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//               <p className="font-semibold">Zoom Meet-Up</p>
//               <p>Sun Jul 14th 5:00pm - 5:40pm</p>
//             </div>
//             <div className="bg-black p-4 rounded shadow-md w-full max-w-md text-center text-yellow-50 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//               <p className="font-semibold">Zoom Meet-Up</p>
//               <p>Sun Jul 21st 5:00pm - 5:40pm</p>
//             </div>
//             <div className="bg-black p-4 rounded shadow-md w-full max-w-md text-center text-yellow-50 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//               <p className="font-semibold">Zoom Meet-Up</p>
//               <p>Sun Jul 28th 5:00pm - 5:40pm</p>
//             </div>
//           </div>
//           <p className="mt-4 text-center mb-20 text-white">Sundays from 5:00-5:40 PM Mountain time we meet on Zoom and have in-person gatherings sporadically.</p>
//         </div>

//       </section>
//     </main>
//   );
// }


import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <main className="min-h-screen flex-1 relative overflow-hidden bg-purple-100">
      {/* <div className="absolute inset-0 bg-[url('/bgimage.webp')] bg-center bg-fixed opacity-20"></div> */}
      <section className="min-h-screen relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center bg-gradient-to-r from-purple-950 to-indigo-950 rounded-3xl shadow-2xl mb-12 mt-10 w-11/12 mx-auto p-8 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl sm:text-4xl font-extrabold mt-5 mb-4 text-white leading-tight">
            Welcome to Calgary Laughter Yoga and Adventures
          </h1>
          <p className="text-xl sm:text-xl font-bold mb-12 text-yellow-100">
            Join our inclusive community, embrace playfulness & transform your life through intentional laughter.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="./first.png" alt="Laughing Image 1" className="w-40 h-40 rounded-full border-4 border-yellow-300 shadow-lg" />
            <img src="./second.png" alt="Laughing Image 2" className="w-40 h-40 rounded-full border-4 border-yellow-300 shadow-lg" />
            <img src="./third.png" alt="Laughing Image 3" className="w-40 h-40 rounded-full border-4 border-yellow-300 shadow-lg" />
          </div>
        </div>
        
        <hr className="border-black" /> 

        <div className="py-12 bg-[#fefdec] rounded-3xl shadow-2xl mb-12 mt-16 w-11/12 mx-auto transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-950">Upcoming In-Person Event</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
            <img src="./upcomingevent.png" alt="Event" className="w-full md:w-1/2 max-w-md rounded-2xl shadow-lg" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-purple-950">Laughter Adventures Conference</h3>
              <p className="mb-2 flex items-center text-gray-700">
                <Calendar className="mr-2 h-5 w-5" /> Fri, May 03, 2024
              </p>
              <p className="mb-6 flex items-center text-gray-700">
                <MapPin className="mr-2 h-5 w-5" /> Pocaterra Inn, Canmore
              </p>
              <Link href="../upcoming" className="px-6 py-3 bg-gradient-to-r from-purple-950 to-indigo-950 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Event Details
              </Link>
            </div>
          </div>
        </div>
        
        <hr className="border-black" /> 

        <div className="py-12 bg-gradient-to-r from-purple-950 to-indigo-950 rounded-3xl shadow-2xl mb-12 mt-16 w-11/12 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Weekly Events Calendar</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 mx-auto w-full px-6">
            {[14, 21, 28].map((day) => (
              <div key={day} className="bg-black p-6 rounded-2xl shadow-md w-full max-w-lg text-center transform hover:scale-105 transition-transform duration-300">
                <p className="font-semibold text-xl mb-2 text-white">Zoom Meet-Up</p>
                <p className="text-purple-100 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" /> Sun Jul {day}th
                </p>
                <p className="text-purple-100 flex items-center justify-center mt-2">
                  <Clock className="mr-2 h-5 w-5" /> 5:00pm - 5:40pm
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-yellow-100 px-4">
            Join us every Sunday from 5:00-5:40 PM Mountain time on Zoom. We also have in-person gatherings sporadically.
          </p>
        </div>
      </section>
    </main>
  );
}

