"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Executives() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section - Minimal Modern */}
      <section className="relative w-full h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('img/inner_bg.jpg')",
          }}
        ></div>

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0E201C]/90"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="space-y-8" data-aos="fade-up">
            {/* Minimal Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.05em] text-white leading-tight">
              EXECUTIVE{" "}
              <span className="font-extralight text-orange-300 ml-2">
                COMMITTEE
              </span>
            </h1>

            {/* Clean Breadcrumb */}
            <nav className="flex items-center justify-center space-x-4 text-sm font-light">
              <a
                href="/"
                className="text-white/70 hover:text-white transition-colors tracking-wide"
              >
                หน้าหลัก
              </a>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <span className="text-orange-300 tracking-wide">
                คณะผู้บริหาร
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* Executive Profile */}
          <article className="group" data-aos="fade-up">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-700 overflow-hidden">
              {/* Header */}
              <header className="mb-10">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
                    Leadership
                  </span>
                </div>
              </header>

              {/* Profile Content */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                {/* Photo */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
                      <Image
                        src="/img/cont3.png"
                        alt="นายกรสิกร ออมสิน - ประธานกรรมการบริหาร"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-3 leading-tight">
                      นาย<span className="font-normal">กรสิกร ออมสิน</span>
                    </h2>

                    <div className="space-y-2 mb-6">
                      <p className="text-lg font-medium text-orange-500">
                        ประธานกรรมการบริหาร
                      </p>
                      <p className="text-base text-gray-600 font-light">
                        บริษัท ควอนจิเทค จำกัด
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-orange-200 font-serif">
                      "
                    </div>
                    <div className="pl-8 pr-4">
                      <p className="text-lg font-light italic text-gray-700 leading-relaxed mb-4">
                        ความสำเร็จไม่ได้เกิดจากโชค
                        <br />
                        แต่เกิดจากวิสัยทัศน์และการลงมือทำอย่างต่อเนื่อง
                      </p>
                      <div className="h-px bg-gradient-to-r from-orange-200 to-transparent"></div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </article>

          {/* Organizational Structure */}
          <article className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-700">
              {/* Header */}
              <header className="mb-10">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
                    Organization
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                  โครงสร้าง
                  <span className="font-normal text-blue-500">องค์กร</span>
                </h2>
              </header>

              {/* Organizational Chart */}
              <figure className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-6">
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>

                  <Image
                    src="/img/org_structure.png"
                    alt="โครงสร้างองค์กรบริษัท ควอนจิเทค จำกัด"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <figcaption className="mt-4 text-center">
                  <p className="text-sm text-gray-500 font-light">
                    โครงสร้างองค์กรบริษัท ควอนจิเทค จำกัด
                  </p>
                </figcaption>
              </figure>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
