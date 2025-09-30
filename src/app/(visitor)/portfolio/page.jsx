"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { ExternalLink, ChevronDown } from "lucide-react";

export default function Portfolio() {
  const categories = [
    "System Development",
    "Office Supplies",
    "Data Analysis & Cleaning",
    "Printing Services",
    "Computer Training",
    "Package Programs",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const worksPerPage = 12;

  // ตัวอย่างผลงาน static
  const works = [
    {
      slug: 1,
      title: "ระบบบริหารงานบุคคล",
      category: "System Development",
      description: "ระบบจัดการข้อมูลพนักงาน และรายงานประสิทธิภาพ",
      image: "img/port3.png",
      date: "5 ม.ค. 2023",
    },
    {
      slug: 2,
      title: "เว็บไซต์ร้านค้าออนไลน์",
      category: "System Development",
      description: "ออกแบบเว็บไซต์ e-commerce สำหรับธุรกิจขนาดเล็ก",
      image: "img/port5.png",
      date: "20 ก.พ. 2023",
    },
    {
      slug: 3,
      title: "ชุดอุปกรณ์สำนักงาน",
      category: "Office Supplies",
      description: "จัดเตรียมและจัดส่งอุปกรณ์สำนักงานครบชุด",
      image: "img/port6.png",
      date: "10 มี.ค. 2023",
    },
    {
      slug: 4,
      title: "รายงานวิเคราะห์ข้อมูล",
      category: "Data Analysis & Cleaning",
      description: "ทำความสะอาดและวิเคราะห์ข้อมูลเพื่อใช้ในการตัดสินใจ",
      image: "img/default.png",
      date: "25 เม.ย. 2023",
    },
    {
      slug: 5,
      title: "สื่อสิ่งพิมพ์โฆษณา",
      category: "Printing Services",
      description: "ออกแบบและพิมพ์โบรชัวร์ แผ่นพับ และป้ายประชาสัมพันธ์",
      image: "img/print2.png",
      date: "15 พ.ค. 2023",
    },
    {
      slug: 6,
      title: "อบรมคอมพิวเตอร์",
      category: "Computer Training",
      description: "จัดอบรมคอมพิวเตอร์พื้นฐานและโปรแกรมสำนักงาน",
      image: "img/print1.png",
      date: "30 มิ.ย. 2023",
    },
    {
      slug: 7,
      title: "โปรแกรมบัญชีสำเร็จรูป",
      category: "Package Programs",
      description: "พัฒนาโปรแกรมบัญชีสำหรับธุรกิจขนาดกลาง",
      image: "img/port7.png",
      date: "12 ก.ค. 2023",
    },
    {
      slug: 8,
      title: "ระบบจัดการคลังสินค้า",
      category: "System Development",
      description: "ระบบติดตามสินค้าและจัดการสต็อกอัตโนมัติ",
      image: "img/default.png",
      date: "8 ส.ค. 2023",
    },
    {
      slug: 9,
      title: "ออกแบบโปสเตอร์โฆษณา",
      category: "Printing Services",
      description: "ออกแบบโปสเตอร์ขนาดใหญ่สำหรับแคมเปญโฆษณา",
      image: "img/default.png",
      date: "18 ก.ย. 2023",
    },
    {
      slug: 10,
      title: "ฝึกอบรม Excel ขั้นสูง",
      category: "Computer Training",
      description: "อบรมการใช้ Excel เพื่อวิเคราะห์และสรุปข้อมูล",
      image: "img/default.png",
      date: "5 ต.ค. 2023",
    },
    {
      slug: 11,
      title: "เครื่องเขียนและอุปกรณ์สำนักงาน",
      category: "Office Supplies",
      description: "จัดส่งเครื่องเขียนและอุปกรณ์สำนักงานรายเดือน",
      image: "img/default.png",
      date: "22 ต.ค. 2023",
    },
    {
      slug: 12,
      title: "โปรแกรมจัดการลูกค้า",
      category: "Package Programs",
      description: "ระบบ CRM สำหรับติดตามลูกค้าและยอดขาย",
      image: "img/default.png",
      date: "3 พ.ย. 2023",
    },
    {
      slug: 13,
      title: "โปรแกรมจัดการลูกค้า",
      category: "Package Programs",
      description: "ระบบ CRM สำหรับติดตามลูกค้าและยอดขาย",
      image: "img/default.png",
      date: "15 ธ.ค. 2023",
    },
  ];

  // Filter works by category
  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((w) => w.category === selectedCategory);

  const totalPages = Math.ceil(filteredWorks.length / worksPerPage);
  const startIndex = (currentPage - 1) * worksPerPage;
  const currentWorks = filteredWorks.slice(
    startIndex,
    startIndex + worksPerPage
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[80px] bg-gradient-to-b from-[#1a5c48]/95 via-[#216452]/90 to-[#1a5c48]/95"></div>

      <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">
          Our Completed Projects
        </h1>
        <nav className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800">
            หน้าหลัก
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">ผลงานของเรา</span>
        </nav>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-8">
        {/* Sidebar (Desktop Only) */}
        <aside className="hidden md:block md:w-1/4 bg-white rounded-xl shadow p-6 sticky top-24 h-fit">
          <h3 className="text-xl font-bold mb-4">หมวดหมู่ผลงาน</h3>
          <ul className="space-y-2">
            <li
              className={`px-4 py-2 rounded-lg transition cursor-pointer ${selectedCategory === "All"
                ? "bg-white text-[#1a5c48] shadow-md"
                : "text-gray-700 hover:bg-gray-50 hover:shadow-md"
                }`}
              onClick={() => {
                setSelectedCategory("All");
                setCurrentPage(1);
              }}
            >
              All
            </li>
            {categories.map((cat) => (
              <li
                key={cat}
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${selectedCategory === cat
                  ? "bg-white text-[#1a5c48] shadow-md"
                  : "text-gray-700 hover:bg-gray-50 hover:shadow-md"
                  }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Accordion (Mobile) */}
        <div className="md:hidden mb-6 w-full">
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow border border-gray-200"
          >
            <span className="font-medium text-gray-700">
              {selectedCategory === "All" ? "ทั้งหมด" : selectedCategory}
            </span>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${isAccordionOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {isAccordionOpen && (
            <ul className="mt-2 bg-white border border-gray-200 rounded-lg shadow divide-y">
              <li
                className={`px-4 py-2 cursor-pointer ${selectedCategory === "All"
                  ? "text-[#1a5c48]"
                  : "text-gray-700"
                  }`}
                onClick={() => {
                  setSelectedCategory("All");
                  setCurrentPage(1);
                  setIsAccordionOpen(false);
                }}
              >
                All
              </li>
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`px-4 py-2 cursor-pointer ${selectedCategory === cat
                    ? "text-[#1a5c48]"
                    : "text-gray-700"
                    }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                    setIsAccordionOpen(false);
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Works */}
        <main className="flex-1 w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentWorks.map((work) => (
              <div
                key={work.slug}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative group">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h4 className="font-semibold">{work.title}</h4>
                      <p className="text-sm opacity-90">{work.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm line-clamp-2">
                    {work.description}
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{work.date}</span>

                    <Link
                      href={`/portfolio/${work.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-gray-800 font-semibold hover:underline"
                    >
                      ดูรายละเอียด <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 rounded">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
