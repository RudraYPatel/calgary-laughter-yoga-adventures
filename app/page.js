import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import AdminLogin from "./components/adminlogin";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero/>
      <Footer/>
    </div>
    
  );
}
