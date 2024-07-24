import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import AdminLogin from "./components/adminlogin";
import Adminconsole from "./components/adminconsole";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AdminLogin/>

      <Footer/>
    </div>
    
  );
}
