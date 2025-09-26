"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { ExternalLink } from "lucide-react";

export default function NewsEvents() {
    const categories = ["ข่าว", "กิจกรรม"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // ข้อมูลตัวอย่าง static
    const items = [
        {
            id: 1,
            title: "เปิดตัวโครงการใหม่",
            category: "ข่าว",
            description: "โครงการพัฒนาระบบจัดการฐานข้อมูล",
            image: "img/default.png",
            date: "15 ก.ย. 2023",
        },
        {
            id: 2,
            title: "อบรมการใช้งานโปรแกรม",
            category: "กิจกรรม",
            description: "กิจกรรมอบรมการใช้ระบบสำหรับเจ้าหน้าที่",
            image: "img/default.png",
            date: "20 ก.ย. 2023",
        },
        {
            id: 3,
            title: "อัปเดตฟีเจอร์ใหม่",
            category: "ข่าว",
            description: "เพิ่มระบบการวิเคราะห์ข้อมูลเชิงลึก",
            image: "img/default.png",
            date: "5 ต.ค. 2023",
        },
        {
            id: 4,
            title: "งานสัมมนาประจำปี",
            category: "กิจกรรม",
            description: "ร่วมงานสัมมนาและพบปะเครือข่าย",
            image: "img/default.png",
            date: "12 ต.ค. 2023",
        },
    ];

    // Filter ข้อมูล
    const filteredItems =
        selectedCategory === "All"
            ? items
            : items.filter((i) => i.category === selectedCategory);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[80px] bg-gradient-to-t from-[#0d3a2d] to-[#1a5c48]"></div>

            {/* Content Section */}
            <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 bg-white rounded-xl shadow p-6 sticky top-24 h-fit">
                    <h3 className="text-xl font-bold mb-4">หมวดหมู่</h3>
                    <ul className="space-y-2">
                        <li
                            className={`cursor-pointer ${selectedCategory === "All" ? "text-[#ffb87a]" : "text-gray-700"}`}
                            onClick={() => {
                                setSelectedCategory("All");
                                setCurrentPage(1);
                            }}
                        >
                            ทั้งหมด
                        </li>
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                className={`cursor-pointer ${selectedCategory === cat ? "text-[#ffb87a]" : "text-gray-700"}`}
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

                {/* Main Content */}
                <main className="flex-1 w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentItems.map((item) => (
                            <div
                                key={item.id}
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
                                    <p className="text-gray-700 text-sm line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-xs text-gray-500">{item.date}</span>
                                        <Link
                                            href={`/news/${item.id}`}
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
