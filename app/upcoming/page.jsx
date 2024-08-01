"use client";

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

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

  return (
    <main className='min-h-screen bg-white'>
      <Header />
      <div className='mt-5'>
        <p className='text-xl text-left m-10 font-semibold mb-4'>Play, grow and shine in the Canadian Rockies!</p>
        <p className="text-5xl font-extrabold mb-12 m-10">Laughter Adventures <br />Conference</p>
        <p className="mb-12 m-10">Fri, May 03, 2024 | Pocaterra Inn, Canmore</p>
        <div className="flex justify-center bg-gray-300 mt-2 mx-8">
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
        <hr className="my-7 border-black mx-10" />
        <div className="flex items-center justify-center mt-12">
          <div className="flex flex-row h-auto mb-5 border-black">
            <div className="flex-1 p-10">
              <p className="text-xl">Ticket Type</p>
              <p className="text-2xl">Regular Ticket</p>
            </div>
            <div className="flex-1 p-10 border-l-2 border-black">
              <p className="text-xl">Price</p>
              <p className="text-2xl">$475.00</p>
              <p>+$23.75 GST</p>
              <p>+$12.47 service fee</p>
              <div className="flex items-center mt-4">
                <button
                  className="bg-gray-500 text-white border-none py-2 px-4 rounded-xl  mr-4"
                  onClick={handleRegularIncrement}
                >
                  +
                </button>
                <span className="text-xl">{regularTicketCount}</span>
                <button
                  className="bg-gray-500 text-white border-none py-2 px-4 rounded-xl   ml-4"
                  onClick={handleRegularDecrement}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-7 border-black mx-10" />
        <div className="flex items-center justify-center mt-12">
          <div className="flex flex-row h-auto mb-5 border-black">
            <div className="flex-1 p-10">
              <p className="text-xl">Ticket Type</p>
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
            <div className="flex-1 p-10 border-l-2 border-black">
              <p className="text-xl">Price</p>
              <p className="text-2xl">Pay What You Want</p>
              <div className="flex items-center mt-4">
                <button
                  className="bg-gray-500 text-white border-none py-2 px-4 rounded-xl  mr-4"
                  onClick={handleSponsorshipIncrement}
                >
                  +
                </button>
                <span className="text-xl">${sponsorshipAmount.toFixed(2)}</span>
                <button
                  className="bg-gray-500 text-white border-none py-2 px-4 rounded-xl   ml-4"
                  onClick={handleSponsorshipDecrement}
                >
                  -
                </button>
              </div>
              <div className="mt-4">
                <label className="block text-xl mb-2">Enter Amount:</label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="border-2 border-gray-300 rounded-md py-2 px-4"
                />
                <button
                  className="bg-gray-500 text-white border-none py-2 px-4 rounded-xl ml-4"
                  onClick={handleSetCustomAmount}
                >
                  Set Amount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-left mt-12 mb-12 mr-10">
        <button className="bg-blue-500 text-white border-none py-2 hover:underline px-8 rounded-xl">
          Checkout
        </button>
      </div>
      <Footer />
    </main>
  );
}
