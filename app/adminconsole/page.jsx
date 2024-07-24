"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useUserAuth } from "@/app/auth-context";
import { redirect } from "next/navigation";

export default function AdminConsole() {
  const { user, googleSignIn, firebaseSignOut } = useUserAuth();

  const handleSignOut = () => {
    firebaseSignOut();
  };

  return (
    <main>
      {user? (<div>
        <Header />
        <main
        className="flex-grow flex items-center justify-center bg-cover bg-center p-6 "
        style={{ backgroundImage: "url('/bgimage.webp')" }}
      >
        <div className="bg-white bg-opacity-75 p-10 rounded-xl shadow-md text-center max-w-lg mx-auto">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="h-24 w-24 mx-auto rounded-full mb-8"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800">
              View as user
            </button>
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800">
              Manage Dashboard
            </button>
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800">
              Update Schedule
            </button>
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800">
              Manage User Info
            </button>
          </div>
          <button
            onClick={handleSignOut}
            className="mt-8 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
          >
            Log Out
          </button>
        </div>
      </main>
      <Footer />
      </div>) : 
      redirect('/')
      }
      
     

    </main>
  );
}
