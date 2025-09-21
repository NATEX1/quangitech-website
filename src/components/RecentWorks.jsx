"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function RecentWorks({ works }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="bg-[#216452] py-16 text-white relative">
      <div className="max-w-[1140px] mx-auto text-center relative">
        <h2
          className="text-3xl font-bold text-[#ffb87a] mb-2"
          data-aos="zoom-out"
          data-aos-duration="2400"
        >
          our recent works
        </h2>
        <p
          className="mb-10 text-sm md:text-base text-white/90"
          data-aos="zoom-out"
          data-aos-duration="2500"
        >
          ผลงานตัวอย่างที่แสดงถึงความเชี่ยวชาญและคุณภาพการทำงานของเรา
          ครอบคลุมตั้งแต่การออกแบบ พัฒนา และให้คำปรึกษาด้านดิจิทัล
        </p>

        <div className="absolute top-[220px] -left-20 flex items-center z-20">
          <div className="swiper-button-prev-custom
                    w-12 h-12 flex items-center justify-center
                    rounded-full bg-white/80 hover:bg-white
                    text-[#216452] text-3xl cursor-pointer shadow-md">
            ❮
          </div>
        </div>
        <div className="absolute top-[220px] -right-20 flex items-center z-20">
          <div className="swiper-button-next-custom
                    w-12 h-12 flex items-center justify-center
                    rounded-full bg-white/80 hover:bg-white
                    text-[#216452] text-3xl cursor-pointer shadow-md">
            ❯
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="mb-8 relative"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div
                className="relative bg-white shadow overflow-hidden"
                data-aos="flip-left"
                data-aos-delay="1000"
              >
                <img
                  src={work.image}
                  alt={`work ${work.id}`}
                  className="w-full h-auto"
                />

                <a
                  href="/#"
                  className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(29,164,128,0.6) 0%, rgba(33,100,82,0.6) 100%)",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">ระบบ (SAR)</h3>
                  <p className="text-sm">System Development</p>
                </a>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="custom-pagination flex justify-center mt-6
    [&_.swiper-pagination-bullet]:!bg-white
    [&_.swiper-pagination-bullet]:opacity-50
    [&_.swiper-pagination-bullet-active]:!bg-white
    [&_.swiper-pagination-bullet-active]:opacity-100
    [&_.swiper-pagination-bullet-active]:scale-125
    [&_.swiper-pagination-bullet]:transition-all
    [&_.swiper-pagination-bullet]:duration-300
  "
        ></div>
        <br />
        <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full">
          ดูเพิ่มเติม
        </Button>
      </div>
    </section>
  );
}
