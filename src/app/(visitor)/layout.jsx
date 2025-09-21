import Navbar from "@/components/navbar";
import BackToTop from "@/components/ui/BackToTop";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <BackToTop />
    </div>
  );
}
