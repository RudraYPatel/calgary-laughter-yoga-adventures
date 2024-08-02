"use client"
import React from 'react';
import Link from 'next/link';
import AdminLogin from '../adminlogin/page';


export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo (2).png" alt="logo" className="h-28 rounded-3xl" />
            <div className="ml-24 text-black">
              <div className="font-bold mb-2">Explore</div>
              <ul>
                <li><a href="#" className="hover:underline">Our Club</a></li>
                <li><a href="#" className="hover:underline">Donations</a></li>
              </ul>
            </div>
            <div className="ml-44 text-black">
              <div className="font-bold mb-2">Service</div>
              <ul>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><Link href="../adminlogin" className="hover:underline">Admin Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-black mr-32">
            <div className="font-bold mb-2">Contact</div>
            <ul>
              <li className="flex items-center">
                <span className="ml-2">405-995-6546</span>
              </li>
              <li className="flex items-center">
                <span className="ml-2">laughteradventurescanada@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-right text-sm text-black">
          <div>© 2023 by YYC Laughter Yoga And Adventures.</div>
        </div>
      </div>
    </footer>
  );
}
