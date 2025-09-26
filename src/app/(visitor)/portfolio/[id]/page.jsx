"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import RecentWorks from "@/components/RecentWorks";
import "swiper/css";
import "swiper/css/navigation";

export default function PortfolioDetail() {
  // ตัวอย่างสไลด์ผลงานที่เกี่ยวข้อง
  const relatedWorks = [
    {
      id: "1",
      title: "System Development",
      description:
        "บริการพัฒนาซอฟต์แวร์และระบบครบวงจร ครอบคลุมตั้งแต่การวิเคราะห์ความต้องการ ออกแบบ พัฒนา จนถึงการดูแลรักษา",
      content: [
        {
          title: "วัตถุประสงค์ของการจัดทำเว็บไซต์ ",
          detail:
            "GreenArea เป็นแพลตฟอร์มกลาง “Green Digital Platform” ที่ทำหน้าที่รายงานข้อมูลพื้นที่สีเขียวในเขตเมืองและชุมชน เพื่อช่วยให้หน่วยงานต่าง ๆ มีเครื่องมือในการประเมิน พัฒนา และวางนโยบายเป้าหมายเมืองสิ่งแวดล้อมยั่งยืนได้ โดยรายงานได้ทั้งพื้นที่สีเขียว (ไร่) และปริมาณการกักเก็บคาร์บอน (CO₂ eq) ของพื้นที่สีเขียวตามเกณฑ์ยุทธศาสตร์ชาติ 20 ปี",
        },
        {
          title: "แพ็กเกจเว็บไซต์ ",
          detail:
            "Starter GreenArea Platform: Basic Monitoring Package (อาจปรับเป็นระบุระดับการใช้งานหรือฟีเจอร์เป็นแพ็กเกจเบื้องต้น)",
        },
        {
          title: "ภาษา ",
          detail: "รองรับ 1 ภาษา (ภาษาไทย) – เน้นใช้งานในประเทศไทย",
        },
        {
          title: "เข้าชมเว็บไซต์ได้ที่ ",
          detail: "https://greenarea.dcce.go.th/",
        },
      ],
      image: "/img/port5.png",
      gallery: [
        "/img/port5.png",
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
        "/img/default.png",
      ],
      date: "20 ก.พ. 2023",
      category: "System Development",
    },
  ];

  const Title = relatedWorks[0]; // ตอนนี้ใช้ static เลือกตัวแรกไปก่อน
  const scrollRef = useRef(null);

  const [mainImage, setMainImage] = useState(Title.image);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[80px] bg-gradient-to-t from-[#0d3a2d] to-[#1a5c48]"></div>

      <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">
          System Development
        </h1>
        <nav className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800">
            หน้าหลัก
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/portfolio" className="hover:text-gray-800">
            ผลงานของเรา
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">{Title.title}</span>
        </nav>
      </div>

      {/* Portfolio Detail Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        {/* Left Column: Main Image + Gallery */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Main Image Container */}
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 flex items-center justify-center bg-white">
            <img
              src={mainImage}
              alt={Title.title}
              className="max-w-full max-h-full object-contain bg-white transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Gallery */}
          <div
            className="flex overflow-x-auto gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 cursor-grab"
            ref={scrollRef}
            onMouseDown={(e) => {
              const slider = scrollRef.current;
              if (!slider) return;
              slider.isDown = true;
              slider.startX = e.pageX - slider.offsetLeft;
              slider.scrollLeftStart = slider.scrollLeft;
              slider.classList.add("cursor-grabbing");
              setIsDragging(false);
            }}
            onMouseLeave={() => {
              const slider = scrollRef.current;
              if (!slider) return;
              slider.isDown = false;
              slider.classList.remove("cursor-grabbing");
            }}
            onMouseUp={() => {
              const slider = scrollRef.current;
              if (!slider) return;
              slider.isDown = false;
              slider.classList.remove("cursor-grabbing");
            }}
            onMouseMove={(e) => {
              const slider = scrollRef.current;
              if (!slider || !slider.isDown) return;
              e.preventDefault();
              const x = e.pageX - slider.startX;
              const walk = x * 2;
              slider.scrollLeft = slider.scrollLeftStart - walk;
              setIsDragging(true);
            }}
          >
            {Title.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-30 h-20 md:w-30 md:h-20 rounded-lg overflow-hidden cursor-pointer shadow-md transition-transform hover:scale-105 border-2 ${
                  mainImage === img ? "border-white-400" : "border-transparent"
                }`}
                onClick={() => {
                  if (!isDragging) setMainImage(img);
                }}
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

        {/* Right Column: Text */}
        <div className="bg-gray-100 rounded-xl border-2 border-gray-200 p-6 md:w-1/2 flex flex-col justify-start">
          <span className="text-sm text-gray-500 mb-2">
            {Title.date} | {Title.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{Title.title}</h2>
          <p className="text-gray-700 mb-4">{Title.description}</p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-4">
            {Title.content.map((line, idx) => (
              <li key={idx}>
                <strong className="text-gray-800">{line.title}:</strong>{" "}
                <span>{line.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <RecentWorks />
      {/* Footer */}
      <Footer />
    </>
  );
}
