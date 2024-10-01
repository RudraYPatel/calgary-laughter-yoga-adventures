// 'use client';

// import React, { useState } from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import Link from 'next/link';

// export default function Upcoming() {
//   const [regularTicketCount, setRegularTicketCount] = useState(0);
//   const [sponsorshipAmount, setSponsorshipAmount] = useState(0);
//   const [customAmount, setCustomAmount] = useState('');

//   const handleRegularIncrement = () => {
//     setRegularTicketCount(regularTicketCount + 1);
//   };

//   const handleRegularDecrement = () => {
//     if (regularTicketCount > 0) {
//       setRegularTicketCount(regularTicketCount - 1);
//     }
//   };

//   const handleSponsorshipIncrement = () => {
//     setSponsorshipAmount(sponsorshipAmount + 1);
//   };

//   const handleSponsorshipDecrement = () => {
//     if (sponsorshipAmount > 0) {
//       setSponsorshipAmount(sponsorshipAmount - 1);
//     }
//   };

//   const handleCustomAmountChange = (event) => {
//     setCustomAmount(event.target.value);
//   };

//   const handleSetCustomAmount = () => {
//     const amount = parseFloat(customAmount);
//     if (!isNaN(amount) && amount >= 0) {
//       setSponsorshipAmount(amount);
//     }
//   };

//   const handleCheckoutClick = (event) => {
//     if (regularTicketCount === 0) {
//       event.preventDefault();
//       alert('You have to add at least one ticket');
//     }
//   };

//   const regularTicketPrice = 475.00;
//   const gst = 23.75;
//   const serviceFee = 12.47;

//   const totalRegularTicketPrice = regularTicketCount * (regularTicketPrice + gst + serviceFee);
//   const totalAmount = totalRegularTicketPrice + sponsorshipAmount;

//   return (
//     <main className="min-h-screen bg-white">
//       <Header />
//       <div className='mt-5'>
//         <p className='text-xl text-left m-10 font-semibold mb-4'>Play, grow and shine in the Canadian Rockies!</p>
//         <p className="text-5xl font-extrabold mb-12 m-10">Laughter Adventures <br />Conference</p>
//         <p className="mb-12 m-10">Fri, May 03, 2024 | Pocaterra Inn, Canmore</p>
//         <div className="flex justify-center bg-gray-300 mt-2 mx-8">
//           <img src="./upcomingevent.png" alt="Laughing Image" className="w-auto h-96" />
//         </div>
//         <p className="text-xl font-semibold mt-10 ml-10">Time & Location</p>
//         <p className="ml-10 mt-6">May 03, 2024, 3:00 p.m. MDT – May 05, 2024, 3:00 p.m. MDT</p>
//         <p className="ml-10 mt-6">Pocaterra Inn, Canmore, 1725 Bow Valley Trail, Canmore, AB T1W 2W1, Canada</p>
//       </div>
//       <div className="border-t-2 mt-6 border-black"></div>
//       <div className="flex flex-row items-left mr-6">
//         <p className="text-4xl text-left m-10 font-extrabold mb-12">Tickets</p>
//       </div>
//       <div>
//         <hr className="my-7 border-black mx-10" />
//         <div className="flex items-center justify-center mt-12">
//           <div className="flex flex-row h-auto mb-5 border-black">
//             <div className="flex-1 p-10">
//               <p className="text-xl">Ticket Type</p>
//               <p className="text-2xl">Regular Ticket</p>
//             </div>
//             <div className="flex-1 p-10 border-l-2 border-black">
//               <p className="text-xl">Price</p>
//               <p className="text-2xl">$475.00</p>
//               <p>+$23.75 GST</p>
//               <p>+$12.47 service fee</p>
//               <div className="flex items-center mt-4">
//                 <button
//                   className="bg-black text-white border-none py-2 px-4 rounded-xl  mr-4"
//                   onClick={handleRegularDecrement}
//                 >
//                   -
//                 </button>
//                 <span className="text-xl">{regularTicketCount}</span>
//                 <button
//                   className="bg-black text-white border-none py-2 px-4 rounded-xl   ml-4"
//                   onClick={handleRegularIncrement}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr className="my-7 border-black mx-10" />
//         <div className="flex items-center justify-center mt-12">
//           <div className="flex flex-row h-auto mb-5 border-black">
//             <div className="flex-1 p-10">
//               <p className="text-xl">Ticket Type</p>
//               <p className="text-2xl">Sponsorship Donation</p>
//               <p>This "ticket" is to contribute financially to support the conference for things such as:</p>
//               <ul className="list-disc list-inside">
//                 <li>Scholarships for people facing financial barriers</li>
//                 <li>Sponsoring a Presenter or a particular session</li>
//                 <li>Contributing to an activity (I.e. Acts of Kindness Scavenger Hunt or World Laughter Day)</li>
//                 <li>Anything else you would like to support</li>
//               </ul>
//               <p>Thank you for supporting the Laughter Adventures Conference!</p>
//             </div>
//             <div className="flex-1 p-10 border-l-2 border-black">
//               <p className="text-xl">Price</p>
//               <p className="text-2xl">Pay What You Want</p>
//               <div className="flex items-center mt-4">
//                 <button
//                   className="bg-black text-white border-none py-2 px-4 rounded-xl  mr-4"
//                   onClick={handleSponsorshipDecrement}
//                 >
//                   -
//                 </button>
//                 <span className="text-xl">${sponsorshipAmount.toFixed(2)}</span>
//                 <button
//                   className="bg-black text-white border-none py-2 px-4 rounded-xl   ml-4"
//                   onClick={handleSponsorshipIncrement}
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <label className="block text-xl mb-2">Enter Amount:</label>
//                 <input
//                   type="number"
//                   value={customAmount}
//                   onChange={handleCustomAmountChange}
//                   className="border-2 border-gray-300 rounded-md py-2 px-4"
//                 />
//                 <button
//                   className="bg-black hover:underline text-white border-none py-2 px-4 rounded-xl ml-4"
//                   onClick={handleSetCustomAmount}
//                 >
//                   Set Amount
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end items-center mt-16 mb-12 mr-10 space-x-4">
//         <div className="text-xl font-semibold">
//           Total Amount: ${totalAmount.toFixed(2)}
//         </div>
//         <Link href='../payment' onClick={handleCheckoutClick}>
//           <button
//             className="bg-black text-white border-none py-2 hover:underline px-8 rounded-xl"
//           >
//             Checkout
//           </button>
//         </Link>
//       </div>
//       <Footer />
//     </main>
//   );
// }


'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Upcoming() {
  const [regularTicketCount, setRegularTicketCount] = useState(0);
  const [sponsorshipAmount, setSponsorshipAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');

  const handleRegularIncrement = () => {
    setRegularTicketCount(regularTicketCount + 1);
  };

  const handleRegularDecrement = () => {
    if (regularTicketCount > 0) {
      setRegularTicketCount(regularTicketCount - 1);
    }
  };

  const handleSponsorshipIncrement = () => {
    setSponsorshipAmount(sponsorshipAmount + 1);
  };

  const handleSponsorshipDecrement = () => {
    if (sponsorshipAmount > 0) {
      setSponsorshipAmount(sponsorshipAmount - 1);
    }
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleSetCustomAmount = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount >= 0) {
      setSponsorshipAmount(amount);
    }
  };

  const handleCheckoutClick = (event) => {
    if (regularTicketCount === 0) {
      event.preventDefault();
      alert('You have to add at least one ticket');
    }
  };

  const regularTicketPrice = 475.00;
  const gst = 23.75;
  const serviceFee = 12.47;

  const totalRegularTicketPrice = regularTicketCount * (regularTicketPrice + gst + serviceFee);
  const totalAmount = totalRegularTicketPrice + sponsorshipAmount;

  return (
    <main className="min-h-screen bg-purple-100">
      <Header />
      <div className='mt-5'>
        <p className='text-xl text-left m-10 font-semibold mb-4'>Play, grow and shine in the Canadian Rockies!</p>
        <p className="text-5xl font-extrabold mb-12 m-10">Laughter Adventures <br />Conference</p>
        <p className="mb-12 m-10">Fri, May 03, 2024 | Pocaterra Inn, Canmore</p>
        <div className="flex justify-center bg-[#fefdec] rounded-lg mt-2 mx-8">
          <img src="./upcomingevent.png" alt="Laughing Image" className="w-auto h-96" />
        </div>
        <p className="text-xl font-semibold mt-10 ml-10">Time & Location</p>
        <p className="ml-10 mt-6">May 03, 2024, 3:00 p.m. MDT – May 05, 2024, 3:00 p.m. MDT</p>
        <p className="ml-10 mt-6">Pocaterra Inn, Canmore, 1725 Bow Valley Trail, Canmore, AB T1W 2W1, Canada</p>
      </div>
      <div className="border-t-2 mt-6 border-black"></div>
      <div className="flex flex-row items-left mr-6">
        <p className="text-4xl text-left m-10 font-extrabold mb-12">Tickets</p>
      </div>
      <div>
 


        <div className="bg-gradient-to-r from-purple-950 to-indigo-950 p-6 mb-5 rounded-md shadow-md mx-10"> {/* Change this class to your desired purple color */}
          <div className="flex flex-row text-yellow-50">
            <div className="flex-1 p-10">
              <p className="text-2xl text-yellow-100 font-bold">Ticket Type</p>
              <p className="text-xl text-yellow-100">Regular Ticket</p>
            </div>
            <div className="flex-1 p-10 border-l-2 text-yellow-50 border-black">
              <p className="text-2xl text-yellow-100">Price</p>
              <p className="text-2xl">$475.00</p>
              <p>+$23.75 GST</p>
              <p>+$12.47 service fee</p>
              <div className="flex items-center mt-4">
                <button
                  className="bg-black text-yellow-50 border-none py-2 px-4 rounded-xl mr-4 transform hover:scale-105 transition-transform duration-300"
                  onClick={handleRegularDecrement}
                >
                  -
                </button>
                <span className="text-xl">{regularTicketCount}</span>
                <button
                  className="bg-black text-yellow-50 border-none py-2 px-4 rounded-xl ml-4 transform hover:scale-105 transition-transform duration-300"
                  onClick={handleRegularIncrement}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-7 border-black mx-10" />

        <div className="bg-gradient-to-r from-purple-950 to-indigo-950 p-6 mb-5 rounded-md shadow-md mx-10"> {/* Same background color for consistency */}
          <div className="flex flex-row">
            <div className="flex-1 p-10 text-yellow-50">
              <p className="text-2xl text-yellow-100 font-bold">Ticket Type</p>
              <p className="text-2xl">Sponsorship Donation</p>
              <p>This "ticket" is to contribute financially to support the conference for things such as:</p>
              <ul className="list-disc list-inside">
                <li>Scholarships for people facing financial barriers</li>
                <li>Sponsoring a Presenter or a particular session</li>
                <li>Contributing to an activity (I.e. Acts of Kindness Scavenger Hunt or World Laughter Day)</li>
                <li>Anything else you would like to support</li>
              </ul>
              <p>Thank you for supporting the Laughter Adventures Conference!</p>
            </div>
            <div className="flex-1 p-10 border-l-2 text-black border-black">
              <p className="text-2xl font-bold text-yellow-100">Price</p>
              <p className="text-xl text-yellow-100">Pay What You Want</p>
              <div className="flex items-center mt-4">
                <button
                  className="bg-black text-yellow-50 border-none py-2 px-4 rounded-xl mr-4 transform hover:scale-105 transition-transform duration-300"
                  onClick={handleSponsorshipDecrement}
                >
                  -
                </button>
                <span className="text-xl text-yellow-50">${sponsorshipAmount.toFixed(2)}</span>
                <button
                  className="bg-black text-yellow-50 border-none py-2 px-4 rounded-xl ml-4 transform hover:scale-105 transition-transform duration-300"
                  onClick={handleSponsorshipIncrement}
                >
                  +
                </button>
              </div>
              <div className="mt-4">
                <label className="block text-xl mb-2 text-yellow-50">Enter Amount:</label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="border-2 border-gray-300 rounded-md py-2 px-4"
                />
                <button
                  className=" hover:underline text-black border-none py-2 px-4 rounded-xl ml-4 bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-purple-700 hover:to-indigo-700  font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onClick={handleSetCustomAmount}
                >
                  Set Amount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-16 mb-12 mr-10 space-x-4">
        <div className="text-xl font-semibold">
          Total Amount: ${totalAmount.toFixed(2)}
        </div>
        <Link href='../payment' onClick={handleCheckoutClick}>
          <button
            className="bg-black text-white border-none py-2 hover:underline px-8 rounded-xl bg-gradient-to-r from-purple-950 to-indigo-950 hover:from-purple-700 hover:to-indigo-700  font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Checkout
          </button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}

