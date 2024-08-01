'use client';

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Payment() {
  const handlePayNowClick = (event) => {
    event.preventDefault(); // Prevents form submission
    alert('Redirecting to Square Payment Gateway, Thank You!');
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 z-0" style={{ backgroundImage: "url('/bgimage.webp')" }}></div>
        <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative z-10">
          <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-800">First Name</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Last Name</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Contact Number (optional)</label>
              <div className="flex">
                <select
                  className="border rounded-l px-3 py-2"
                  defaultValue="+1"
                >
                  <option value="+1">+1 (Canada)</option>
                  <option value="+1">+1 (US)</option>
                
                </select>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-r"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              onClick={handlePayNowClick}
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
