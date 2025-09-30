"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { ExternalLink, ChevronDown } from "lucide-react"; // <-- import ChevronDown

export default function NewsEvents() {
  const categories = ["ข่าว", "กิจกรรม"];
  const [selectedCategory, setSelectedCategory] = useState("ข่าว"); // <-- default เป็นข่าว
  const [currentPage, setCurrentPage] = useState(1);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // <-- ประกาศ state
  const itemsPerPage = 9;

  const items = [
    {
      slug: "open-project",
      title: "เปิดตัวโครงการใหม่",
      category: "ข่าว",
      description: "โครงการพัฒนาระบบจัดการฐานข้อมูล",
      image: "/img/default.png",
      date: "15 ก.ย. 2023",
    },
    {
      slug: "training-program",
      title: "อบรมการใช้งานโปรแกรม",
      category: "กิจกรรม",
      description: "กิจกรรมอบรมการใช้ระบบสำหรับเจ้าหน้าที่",
      image: "/img/default.png",
      date: "20 ก.ย. 2023",
    },
    {
      slug: "new-feature-update",
      title: "อัปเดตฟีเจอร์ใหม่",
      category: "ข่าว",
      description: "เพิ่มระบบการวิเคราะห์ข้อมูลเชิงลึก",
      image: "/img/default.png",
      date: "5 ต.ค. 2023",
    },
    {
      slug: "annual-seminar",
      title: "งานสัมมนาประจำปี",
      category: "กิจกรรม",
      description: "ร่วมงานสัมมนาและพบปะเครือข่าย",
      image: "/img/default.png",
      date: "12 ต.ค. 2023",
    },
  ];

  const filteredItems = items.filter(
    (i) => selectedCategory === "All" || i.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[80px] bg-gradient-to-b from-[#1a5c48]/95 via-[#216452]/90 to-[#1a5c48]/95"></div>

      <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">
          News and Events
        </h1>
        <nav className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800">
            หน้าหลัก
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">ข่าวสารและกิจกรรม</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/4 bg-white rounded-xl shadow p-6 sticky top-24 h-fit">
          <h3 className="text-xl font-bold mb-4">หมวดหมู่</h3>
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
              className={`transform transition-transform ${isAccordionOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isAccordionOpen && (
            <ul className="mt-2 bg-white border border-gray-200 rounded-lg shadow divide-y">
              <li
                className={`px-4 py-2 cursor-pointer ${selectedCategory === "All" ? "text-[#1a5c48]" : "text-gray-700"
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
                  className={`px-4 py-2 cursor-pointer ${selectedCategory === cat ? "text-[#1a5c48]" : "text-gray-700"
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

        {/* Main Content */}
        <main className="flex-1 w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-gray-800 font-semibold hover:underline"
                    >
                      อ่านต่อ <ExternalLink size={14} />
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
