'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Payment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    countryCode: '+1'
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handlePayNowClick = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Redirecting to Square Payment Gateway, Thank You!');
    } else {
      alert('Please fill in all required fields.');
    }
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm">First Name is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-500 text-sm">Last Name is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Contact Number (optional)</label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border rounded-l px-3 py-2"
                >
                  <option value="+1">+1 (Canada)</option>
                  <option value="+1">+1 (US)</option>
                </select>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
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
