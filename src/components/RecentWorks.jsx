"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const related = [
    { id: 1, title: "Web Project", img: "/img/port3.png" },
    { id: 2, title: "Web Project", img: "/img/port4.png" },
    { id: 3, title: "Web Project", img: "/img/port5.png" },
    { id: 4, title: "Web Project", img: "/img/port7.png" },
    { id: 5, title: "Web Project", img: "/img/port8.png" },
];

export default function RecentWorks() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium text-gray-800 tracking-[0.2em] uppercase relative inline-block">
                        ผลงานที่ผ่านมา
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-22 h-1 bg-orange-400 rounded-full"></span>
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-gray-600 leading-[1.8] font-light max-w-2xl mx-auto mb-4">
                        ตัวอย่างผลงาน ทำเว็บไซต์ช่วยสร้างความหน้าเชื่อถือ และออกแบบมาเพื่อช่วยเพิ่มการเข้าถึงกลุ่มลูกค้าบนโลกออนไลน์มากขึ้น
                    </p>
                </div>
                {/* Swiper Carousel */}
                <Swiper
                    spaceBetween={24}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 12 },
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                >
                    {related.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                                {/* รูปภาพ */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Gradient Overlay สำหรับอ่านง่ายขึ้น */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                </div>

                                {/* Content Container */}
                                <div className="flex justify-end items-end absolute inset-0 p-6">
                                    {/* Action Button */}
                                    <Link
                                        href={`/portfolio/${item.id}`}
                                        className="inline-flex items-center gap-1 text-sm font-medium text-white bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full hover:bg-white/30 hover:border-white/50 transition-all duration-200 group/btn"
                                    >
                                        <span>ดูรายละเอียด</span>
                                        <ExternalLink
                                            size={14}
                                            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View All Button */}
                <div className="flex justify-center mt-10">
                    <Link href="/portfolio">
                        <Button
                            className="relative bg-gradient-to-r from-[#ffb87a] to-[#ff9a56] hover:from-[#ff9a56] hover:to-[#e6935a] 
                   text-white font-medium rounded-2xl px-8 py-3 
                   transform group-hover:scale-105 transition-all duration-300 
                   shadow-lg shadow-orange-200/40 hover:shadow-xl hover:shadow-orange-200/50
                   before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0 
                   hover:before:opacity-100 before:transition-all before:duration-300
                   overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                ดูผลงานทั้งหมด
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Button>
                    </Link>

                </div>

            </div>
        </div>
    );
}
