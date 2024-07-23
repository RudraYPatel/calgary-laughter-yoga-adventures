import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Link href="./admin-authentication">Admin Login</Link>
    </main>
  );
}