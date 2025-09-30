"use client";

import React, { useState, useRef } from "react";
import Footer from "@/components/ui/footer";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function NewsEventDetail() {
  const params = useParams();
  const { slug } = params;

  const items = [
    {
      slug: "open-project",
      title: "เปิดตัวโครงการใหม่",
      category: "ข่าว",
      description: "โครงการพัฒนาระบบจัดการฐานข้อมูล",
      content: "รายละเอียดเพิ่มเติมเกี่ยวกับโครงการพัฒนาระบบจัดการฐานข้อมูล...",
      image: "/img/new1.png",
      date: "15 ก.ย. 2023",
      gallery: [
        "/img/new1.png",
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
      ],
    },
    {
      slug: "training-program",
      title: "อบรมการใช้งานโปรแกรม",
      category: "กิจกรรม",
      description: "กิจกรรมอบรมการใช้ระบบสำหรับเจ้าหน้าที่",
      content: "รายละเอียดกิจกรรมอบรมการใช้ระบบสำหรับเจ้าหน้าที่...",
      image: "/img/default.png",
      date: "20 ก.ย. 2023",
      gallery: [
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
      ],
    },
  ];

  const item = items.find((i) => i.slug === slug);

  const scrollRef = useRef(null);
  const [mainImage, setMainImage] = useState(item ? item.image : "");

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">ไม่พบข่าวหรือกิจกรรมนี้</p>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-[80px] bg-gradient-to-b from-[#1a5c48]/95 via-[#216452]/90 to-[#1a5c48]/95"></div>
      <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">
          {item.title}
        </h1>
        <nav className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800">
            หน้าหลัก
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/news" className="hover:text-gray-800">
            ข่าวและกิจกรรม
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">{item.title}</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 flex items-center justify-center bg-white">
            <img
              src={mainImage}
              alt={item.title}
              className="max-w-full max-h-full object-contain bg-white transition-transform duration-300 ease-in-out"
            />
          </div>
          {/* Gallery */}
          <div
            className="flex overflow-x-auto gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 cursor-grab"
            ref={scrollRef}
            onMouseDown={(e) => {
              const slider = e.currentTarget;
              slider.isDown = true;
              slider.startX = e.pageX - slider.offsetLeft;
              slider.scrollLeftStart = slider.scrollLeft;
              slider.classList.add("cursor-grabbing");
            }}
            onMouseLeave={(e) => {
              const slider = e.currentTarget;
              slider.isDown = false;
              slider.classList.remove("cursor-grabbing");
            }}
            onMouseUp={(e) => {
              const slider = e.currentTarget;
              slider.isDown = false;
              slider.classList.remove("cursor-grabbing");
            }}
            onMouseMove={(e) => {
              const slider = e.currentTarget;
              if (!slider.isDown) return;
              e.preventDefault();
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - slider.startX) * 2;
              slider.scrollLeft = slider.scrollLeftStart - walk;
            }}
          >
            {item.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-30 h-20 md:w-30 md:h-20 rounded-lg overflow-hidden cursor-pointer shadow-md transition-transform hover:scale-105 border-2 ${mainImage === img ? "border-gray-400" : "border-transparent"
                  }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl border-2 border-gray-200 p-6 md:w-1/2 flex flex-col justify-start">
          <span className="text-sm text-gray-500 mb-2">
            {item.date} | {item.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <div className="text-gray-600 leading-relaxed">{item.content}</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
