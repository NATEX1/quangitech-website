import { Geist, Geist_Mono, Inter, Kanit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Loading from "../components/loading";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ["latin", "latin-ext", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "Quangitech",
  description: "Quangitech Website",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased`}>
        <Toaster position="top-right" richColors />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
