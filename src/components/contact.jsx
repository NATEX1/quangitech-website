"use client";

import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMobileAlt, FaEnvelopeOpenText, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!isClient) return null;

    return (
        <section id="contact" className="py-24">
            <div className="max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                {/* Left */}
                <div className="w-full lg:w-5/12 text-center mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="1100">
                    <h2 className="text-3xl font-bold">Let's connect!</h2>
                    <p className="mt-4 hidden sm:block">
                        มาติดต่อกันวันนี้แล้วค้นพบวิธีที่เราจะช่วยให้ธุรกิจของคุณเติบโตไปข้างหน้า
                    </p>

                    <ul className="space-y-4 mt-6">
                        <li className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center hover:scale-105 transition-transform">
                            <a href="tel:0812345678" className="my-2">
                                <FaMobileAlt size={48} color="#FFB87A" className="hover:animate-shake" />
                            </a>
                            <h3 className="text-xl font-bold text-[#333]">081-234-5678</h3>
                        </li>
                        <li className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center hover:scale-105 transition-transform">
                            <a href="mailto:quangitech@gmail.com" className="my-2">
                                <FaEnvelopeOpenText size={48} color="#e83a0f" className="hover:animate-shake-mail" />
                            </a>
                            <h3 className="text-xl font-bold text-[#333]">quangitech@gmail.com</h3>
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:w-6/12 pt-4 lg:pt-0 text-center">
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full h-12 px-4 rounded shadow-md focus:outline-none" data-aos="fade-left" data-aos-delay="1000" required />
                        <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded shadow-md focus:outline-none" data-aos="fade-left" data-aos-delay="1100" required />
                        <input type="text" placeholder="Phone" className="w-full h-12 px-4 rounded shadow-md focus:outline-none" data-aos="fade-left" data-aos-delay="1200" required />
                        <textarea placeholder="Message" className="w-full h-40 px-4 py-2 rounded shadow-md focus:outline-none" data-aos="fade-left" data-aos-delay="1300" required></textarea>
                        <Button className="w-full py-3 mt-3 bg-[#FFB87A] text-white rounded flex items-center justify-center gap-2 hover:bg-[#e6a85f]" data-aos="fade-left" data-aos-delay="1400">
                            <FaPaperPlane /> Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
