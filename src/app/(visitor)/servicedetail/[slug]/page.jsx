"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const [mainImage, setMainImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch service details");
        const data = await res.json();
        console.log(data);

        setService(data);
        setMainImage(data?.image || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchService();
  }, [slug]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center py-20 text-red-500">{error}</p>;
  if (!service) return <p className="text-center py-20">Service not found.</p>;

  return (
    <>
      <div className="relative w-full h-[80px] bg-gradient-to-b from-[#1a5c48]/95 via-[#216452]/90 to-[#1a5c48]/95"></div>

      <div className="max-w-[1200px] mx-auto px-2 pt-12 md:pt-12 md:pb-4 relative border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">
          {service.title}
        </h1>
        <nav className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800">
            หน้าหลัก
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">{service.title}</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 flex items-center justify-center bg-white">
            {service.thumbnail && (
              <img
                src={service.thumbnail}
                alt={service.title}
                className="max-w-full max-h-full object-contain bg-white transition-transform duration-300 ease-in-out"
              />
            )}
          </div>

          {service.gallery && (
            <div
              className="flex overflow-x-auto gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 cursor-grab"
              ref={scrollRef}
              onMouseDown={(e) => {
                const slider = e.currentTarget;
                slider.isDown = true;
                slider.startX = e.pageX - slider.offsetLeft;
                slider.scrollLeftStart = slider.scrollLeft;
                slider.classList.add("cursor-grabbing");
                setIsDragging(false);
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
                const x = e.pageX - slider.startX;
                const walk = (x - slider.startX) * 2;
                slider.scrollLeft = slider.scrollLeftStart - walk;
                setIsDragging(true);
              }}
            >
              {service.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-30 h-20 md:w-30 md:h-20 rounded-lg overflow-hidden cursor-pointer shadow-md transition-transform hover:scale-105 border-2 ${mainImage === img
                      ? "border-white-400"
                      : "border-transparent"
                    }`}
                  onClick={() => {
                    if (!isDragging) setMainImage(img);
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 rounded-xl border-2 border-gray-200 p-6 md:w-1/2 flex flex-col justify-start">
          <span className="text-sm text-gray-500 mb-2">
            {new Date(service.createdAt).toLocaleDateString("th-TH", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            | {service.category.name}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {service.title}
          </h2>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <div
            className="prose max-w-full text-gray-700"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
