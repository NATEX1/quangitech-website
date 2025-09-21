"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import RecentWorks from "@/components/RecentWorks";
import Footer from "@/components/ui/footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "@/components/contact";

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

  const works = [
    {
      id: 1,
      image: "img/port3.png",
    },
    {
      id: 2,
      image: "img/port4.png",
    },
    {
      id: 3,
      image: "img/port5.png",
    },
    {
      id: 4,
      image: "img/port7.png",
    },
    {
      id: 5,
      image: "img/port8.png",
    },
    {
      id: 6,
      image: "img/port6.png",
    },
  ];

  const clients = [
    "/img/client1.png",
    "/img/client2.png",
    "/img/client3.png",
    "/img/client4.png", 
    "/img/client5.png",
    "/img/client6.png",
    "/img/client7.png",
    "/img/client8.png",
    "/img/client1.png",
    "/img/client2.png",  
    "/img/client3.png",
    "/img/client4.png",  
  ];

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
            <div className="flex gap-4">
              <Button
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full"
              >
                ข้อมูลองค์กร
              </Button>
              <Button
                data-aos="fade-up"
                data-aos-delay="700"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full"
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
            <div className="flex mt-3" data-aos="zoom-in" data-aos-delay="300">
              <div>
                <img
                  className="w-16 h-16 rounded-full transition-transform duration-500 hover:scale-x-[-1]"
                  src="img/icon2.png"
                  alt=""
                />
              </div>
              <div className="ml-4 flex-1 self-center">
                <h4 className="text-xl font-medium mb-2 text-[#1573b2]">มาตรฐานสากล</h4>
                <p className="text-gray-700">
                  บริการเราใช้มาตรฐานการพัฒนาระดับสากลและกระบวนการที่ได้รับการรับรอง
                </p>
              </div>
            </div>

            <div className="flex mt-3" data-aos="zoom-in" data-aos-delay="300">
              <div>
                <img
                  className="w-16 h-16 rounded-full transition-transform duration-500 hover:scale-x-[-1]"
                  src="img/icon3.png"
                  alt=""
                />
              </div>
              <div className="ml-4 flex-1 self-center">
                <h4 className="text-xl font-medium mb-2 text-[#1573b2]">บริการให้คำปรึกษา</h4>
                <p className="text-gray-700">
                  เราพร้อมที่จะให้คำปรึกษา ออกแบบ และพัฒนาโซลูชันที่เหมาะสมกับธุรกิจของคุณอย่างครบวงจร
                </p>
              </div>
            </div>

            <div className="flex mt-3" data-aos="zoom-in" data-aos-delay="300">
              <div>
                <img
                  className="w-16 h-16 rounded-full transition-transform duration-500 hover:scale-x-[-1]"
                  src="img/icon4.png"
                  alt=""
                />
              </div>
              <div className="ml-4 flex-1 self-center">
                <h4 className="text-xl font-medium mb-2 text-[#1573b2]">ความปลอดภัยสูง</h4>
                <p className="text-gray-700">
                  ระบบของเราออกแบบด้วยมาตรการรักษาความปลอดภัยชั้นนำ
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
          <div className="grid grid-cols-3 gap-6" data-aos="slide-up" data-aos-duration="1500">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl flex flex-col items-center justify-between transition-transform transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)"
                }}
              >
                <h4 className="text-[#ffb87a] text-2xl font-semibold text-center">
                  {service.title}
                </h4>
                <p className="line-clamp-2 mb-2 text-[#565656] text-center">
                  {service.excerpt}
                </p>
                <div>
                  <Button className="bg-[#ffb87a] rounded-full w-full hover:bg-[#FFA500] cursor-pointer">
                    Learn more
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

      <RecentWorks works={works} />
      <Contact />

      <section className="relative pt-30 pb-30">
        <div
          className="absolute inset-0 bg-cover bg-start h-[600p]"
          style={{ backgroundImage: "url('/img/cta_bg.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-[#216452]/90 h-[600p]"></div>

        <div className="relative max-w-[1140px] mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffb87a]">
            Looking for the best digital agency and marketing solution?
          </h2>
          <p className="mt-4 text-white/90 hidden sm:block">
            เรามีบริการครบวงจรด้านซอฟต์แวร์ เทคโนโลยีสารสนเทศ และดิจิทัล
            ไม่ว่าจะเป็นการพัฒนาเว็บไซต์ แอปพลิเคชัน การจัดการฐานข้อมูล และการอบรมคอมพิวเตอร์
          </p>
          <Link href="/contact" passHref>
            <Button className="mt-6 bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full">
              ติดต่อเรา
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 mt-24 mb-24 py-16">
        <div className="max-w-[1140px] mx-auto text-center px-4">
          {/* h2 อยู่นอก bg */}
          <h2 className="text-3xl font-bold mb-8">our valued clients</h2>

          {/* กล่องสีพื้นหลัง */}
          <div className="bg-[#f1f1f1] p-6">
            <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 gap-10">
              {clients.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`client ${idx + 1}`}
                  className="w-full h-auto object-contain rounded-md shadow-lg"
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
