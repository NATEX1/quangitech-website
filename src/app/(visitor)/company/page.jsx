"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Company() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-[80px] bg-gradient-to-t from-[#0d3a2d] to-[#1a5c48]"></div>

            <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
                <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">Company Information</h1>
                <nav className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                    <Link href="/" className="hover:text-gray-800">หน้าหลัก</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-800">ข้อมูลองค์กร</span>
                </nav>
            </div>

            {/* Main Content - Clean Layout */}
            <section className="relative py-20 bg-gray-50/50">
                <div className="max-w-5xl mx-auto px-6 space-y-16">

                    {/* Our Beginning */}
                    <article className="group" data-aos="fade-up">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-700">

                            {/* Header */}
                            <header className="mb-10">
                                <div className="inline-flex items-center space-x-3 mb-4">
                                    <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
                                        Our Beginning
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                                    จุดเริ่มต้นของ
                                    <span className="font-normal text-orange-500"> ควอนจิเทค</span>
                                </h2>
                            </header>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 leading-[1.8] font-light text-base md:text-lg mb-8">
                                    บริษัท ควอนจิเทค จำกัด ได้ก่อตั้งในปีพ.ศ. 2560 จากการมองเห็นเทคโนโลยีทางด้าน
                                    ควอนตัม (Quantum Technology) เทคโนโลยีดิจิตอล (Digital Technology)
                                    และเทคโนโลยีสารสนเทศ (Information Technology) ที่จะเป็นเครื่องมือขับเคลื่อนโลกในอนาคต
                                </p>

                                <p className="text-gray-600 leading-[1.8] font-light text-base md:text-lg mb-8">
                                    ประกอบด้วยความคิดและความตั้งใจของทีมงานและผู้บริหารทางด้านเทคโนโลยีสารสนเทศรุ่นใหม่ที่มีประสบการณ์ด้านเทคโนโลยีสารสนเทศไม่น้อยกว่า 15 ปี
                                    ซึ่งบริษัทให้บริการหลักทางด้านการเป็นที่ปรึกษา วิเคราะห์ ออกแบบและพัฒนาระบบสารสนเทศ
                                    เพื่อให้ตรงกับความต้องการขององค์กร
                                </p>
                            </div>

                            {/* Quote */}
                            <blockquote className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-orange-50/50 rounded-2xl border-l-4 border-orange-400" data-aos="fade-in" data-aos-delay="200">
                                <p className="text-lg md:text-xl font-light text-gray-700 italic text-center leading-relaxed">
                                    "เพราะไม่ต้องการเหมือนใคร... เราจึงแตกต่าง"
                                </p>
                            </blockquote>

                            {/* Image */}
                            <figure className="mt-12">
                                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                                    <img
                                        src="/img/cont1.png"
                                        alt="ภาพแสดงการเริ่มต้นของควอนจิเทค"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </figure>
                        </div>
                    </article>

                    {/* Our Goals */}
                    <article className="group" data-aos="fade-up">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-700">

                            {/* Header */}
                            <header className="mb-10">
                                <div className="inline-flex items-center space-x-3 mb-4">
                                    <div className="w-1 h-8 bg-[#1a5c48] rounded-full"></div>
                                    <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
                                        Our Mission
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                                    เป้าหมายของ
                                    <span className="font-normal text-[#1a5c48]"> ควอนจิเทค</span>
                                </h2>
                            </header>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none mb-10">
                                <p className="text-gray-600 leading-[1.8] font-light text-base md:text-lg">
                                    บริษัท ควอนจิเทค จำกัด พร้อมที่จะก้าวขึ้นสู่ความเป็นผู้นำทางธุรกิจอย่างเต็มรูปแบบด้วยนโยบาย
                                    และปรัชญาในการทำงานยึดหลัก "มุ่งมั่นพัฒนาระบบสารสนเทศ ด้วยเทคโนโลยี
                                    ที่ทันสมัย เพื่อให้เกิดความแตกต่างและเป็นประโยชน์แก่ลูกค้า"
                                    เราภูมิใจอย่างยิ่งที่ได้มีโอกาสใช้ความรู้ความสามารถให้บริการแก่ลูกค้าทุกท่าน
                                </p>
                            </div>

                            {/* Highlight Box */}
                            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 leading-[1.8] font-light flex-1">
                                        เรามุ่งเน้นการนำเสนอโซลูชันเทคโนโลยีที่ล้ำสมัยและมีประสิทธิภาพ
                                        เพื่อช่วยให้ลูกค้าของเราเติบโตและแข่งขันได้ในยุคดิจิทัล
                                        โดยยึดหลักความจริงใจ ความรับผิดชอบ และความเป็นมืออาชีพในการให้บริการ
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <figure className="mt-12">
                                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                                    <img
                                        src="/img/cont2.png"
                                        alt="ภาพแสดงเป้าหมายของควอนจิเทค"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </figure>
                        </div>
                    </article>
                </div>
            </section>


            <Footer />
        </div>
    );
}