"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import GradientButton from "@/components/ui/GradientButton";
import "swiper/css";
import "swiper/css/pagination";

const related = [
    { id: 1, title: "Web Project", img: "/img/port3.png", slug: "web-project-1" },
    { id: 2, title: "Web Project", img: "/img/port4.png", slug: "web-project-2" },
    { id: 3, title: "Web Project", img: "/img/port5.png", slug: "web-project-3" },
    { id: 4, title: "Web Project", img: "/img/port7.png", slug: "web-project-4" },
    { id: 5, title: "Web Project", img: "/img/port8.png", slug: "web-project-5" },
];

export default function RecentWorks() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-[0.1em] uppercase relative inline-block">
                        ผลงานที่ผ่านมา
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-22 h-1 bg-orange-400 rounded-full"></span>
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-gray-600 leading-[1.8] font-light max-w-2xl mx-auto mb-4">
                        ตัวอย่างผลงาน ทำเว็บไซต์ช่วยสร้างความหน้าเชื่อถือ และออกแบบมาเพื่อช่วยเพิ่มการเข้าถึงกลุ่มลูกค้าบนโลกออนไลน์มากขึ้น
                    </p>
                </div>

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
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                </div>

                                <div className="flex justify-end items-end absolute inset-0 p-6">
                                    <Link
                                        href={`/portfolio/${item.slug}`}
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

                <div className="flex justify-center mt-10">
                    <GradientButton href="/portfolio">ดูผลงานทั้งหมด</GradientButton>
                </div>
            </div>
        </div>
    );
}
