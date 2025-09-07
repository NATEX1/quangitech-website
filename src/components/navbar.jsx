import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <img src="/logo.png" alt="Quangitech Logo" className="h-[60px]" />
      </div>
    </header>
  );
}
  