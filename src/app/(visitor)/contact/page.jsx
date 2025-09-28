"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative w-full h-[80px] bg-gradient-to-b from-[#1a5c48]/95 via-[#216452]/90 to-[#1a5c48]/95"></div>

            <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
                <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">Contact Us</h1>
                <nav className="text-sm font-light text-gray-600 mb-4 flex items-center gap-2">
                    <Link href="/" className="hover:text-gray-900">หน้าหลัก</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-800">ติดต่อเรา</span>
                </nav>
            </div>
            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: <MapPin className="w-10 h-10 mx-auto text-[#1a5c48]" />,
                                title: "Address",
                                detail: "234/145 Thepharak Rd. \n Mueang District, Samut Prakan",
                            },
                            {
                                icon: <Phone className="w-10 h-10 mx-auto text-[#1a5c48]" />,
                                title: "Phone",
                                detail: "081-234-5678",
                            },
                            {
                                icon: <Mail className="w-10 h-10 mx-auto text-[#1a5c48]" />,
                                title: "Email",
                                detail: "quangitech@gmail.com",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-3 hover:shadow-2xl hover:scale-105 transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                {item.icon}
                                <h3 className="text-2xl md:text-xl font-light text-gray-900 leading-relaxed">{item.title}</h3>
                                <p className="text-gray-600 leading-[1.8] font-light text-base">{item.detail}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                                Let’s Get in Touch
                            </h2>
                            <p className="text-gray-600 leading-[1.8] font-light text-base mb-8">
                                Have questions or want to work with us? Fill out the form and our team
                                will get back to you as soon as possible.
                            </p>
                            <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5c48]"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5c48]"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your Phone"
                                    className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5c48]"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5c48]"
                                    rows="5"
                                    required
                                ></textarea>
                                <button className="w-full py-3 bg-[#1a5c48] text-white rounded-xl font-semibold hover:bg-[#154a39] transition">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Google Map */}
                        <div
                            className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg"
                            data-aos="fade-left"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.4229951814614!2d100.61326217455682!3d13.632014100056663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a1bd6535f4d9%3A0xeb748e81ae4eb918!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4hOC4p-C4reC4meC4iOC4tOC5gOC4l-C4hCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1756442145141!5m2!1sth!2sth"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
