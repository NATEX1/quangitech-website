"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchServices = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);
  return (
    <div>
      <section className="relative w-full h-[800px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/welcome_bg.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#216452]/95"></div>

        <div className="absolute inset-0 max-w-[1140px] mx-auto flex items-center">
          <div className="flex-1 space-y-4" data-aos="fade-right">
            <h1 className="text-[56px] font-bold leading-[1em] tracking-[1px] text-[#ffb87a]">
              Digital & IT Solutions <br /> Partner
            </h1>
            <p className="text-white">
              พันธมิตรด้านโซลูชันดิจิทัลและไอที ที่พร้อมพัฒนา ออกแบบ
              และดูแลระบบอย่างครบวงจร ตั้งแต่การให้คำปรึกษา วางแผนเชิงกลยุทธ์
              ไปจนถึงการสร้างสรรค์เทคโนโลยีที่ตอบโจทย์ธุรกิจ
              เพื่อช่วยให้องค์กรของคุณเติบโตอย่างมั่นคงในยุคดิจิทัล
            </p>
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
              <Button
                className={
                  "bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full"
                }
              >
                ข้อมูลองค์กร
              </Button>
              <Button
                className={
                  "bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full"
                }
              >
                ติดต่อเรา
              </Button>
            </div>
          </div>
          <div data-aos="flip-left">
            <img src="/header3.png" alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-[1140px] mx-auto flex py-[100px]">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl mb-4">บริษัท ควอนจิเทค จำกัด</h2>
          <p className="mb-4 text-[#565656]">
            บริษัท ควอนจิเทค จำกัด ได้ก่อตั้งในปี พ.ศ. 2560
            จากการรวมทีมผู้เชี่ยวชาญในด้านคอมพิวเตอร์ (Quantum Technology)
            เทคโนโลยีดิจิทัล (Digital Technology) และเทคโนโลยีสารสนเทศ
            (Information Technology) เพื่อช่วยองค์กรเปลี่ยนแปลงในทุกมิติ
            เรามีทีมงานมืออาชีพที่มีความเชี่ยวชาญและประสบการณ์มากกว่า 10 ปี
          </p>
          <div className="space-y-2">
            <div className="flex gap-6">
              <div>
                <img src="/icon2.png" width={60} height={60} alt="" />
              </div>
              <div>
                <h4 className="text-2xl text-[#1573b2] font-semibold mb-2">
                  มาตรฐานสากล
                </h4>
                <p className="text-[#565656]">
                  บริการเราใช้มาตรฐานการพัฒนาระดับสากลและกระบวนการที่ได้รับการรับรอง
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <img src="/icon2.png" width={60} height={60} alt="" />
              </div>
              <div>
                <h4 className="text-2xl text-[#1573b2] font-semibold mb-2">
                  มาตรฐานสากล
                </h4>
                <p className="text-[#565656]">
                  บริการเราใช้มาตรฐานการพัฒนาระดับสากลและกระบวนการที่ได้รับการรับรอง
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <img src="/icon2.png" width={60} height={60} alt="" />
              </div>
              <div>
                <h4 className="text-2xl text-[#1573b2] font-semibold mb-2">
                  มาตรฐานสากล
                </h4>
                <p className="text-[#565656]">
                  บริการเราใช้มาตรฐานการพัฒนาระดับสากลและกระบวนการที่ได้รับการรับรอง
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <img src="/r1.png" alt="" className="w-full h-full rounded-2xl" />
        </div>
      </section>

      <section className="bg-[#F4F4F4] relative">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
            className="w-full h-[100px]"
          >
            <path
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-[1140px] mx-auto py-16">
          <h2 className="text-center text-4xl font-semibold mb-4">
            We provide the best digital <br /> services
          </h2>
          <p className="text-center text-[#565656] mb-6">
            เรามอบบริการดิจิทัลที่ดีที่สุด ผสานความคิดสร้างสรรค์ เทคโนโลยี
            และกลยุทธ์ เพื่อสร้างโซลูชันที่ <br /> ทันสมัย
            ช่วยให้ธุรกิจของคุณเติบโตได้อย่างมั่นคงในยุคดิจิทัล
          </p>
          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow p-4 rounded-2xl flex flex-col items-center justify-between"
              >
                <h4 className="text-[#ffb87a] text-2xl font-semibold text-center">
                  {service.title}
                </h4>
                <p className="line-clamp-2 mb-2 text-[#565656] text-center">
                  {service.excerpt}
                </p>
                <div>
                  <Button className="bg-[#ffb87a] rounded-full w-full hover:bg-[#ffb87a] cursor-pointer">
                    Learn moresdsada
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
            className="w-full h-[100px]"
          >
            <path
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
