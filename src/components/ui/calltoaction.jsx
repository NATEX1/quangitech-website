import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section className="relative pt-25 pb-25">
            <div
                className="absolute inset-0 bg-cover bg-start h-[600p]"
                style={{ backgroundImage: "url('/img/cta_bg.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-[#216452]/90 h-[600p]"></div>

            <div className="relative max-w-[1140px] mx-auto text-center px-4">
                <h2 className="text-3xl font-medium text-white tracking-[0.1em] uppercase drop-shadow-lg">
                    พร้อมเริ่มโปรเจกต์ของคุณกับเรา?
                </h2>
                <div className="w-40 h-1 bg-[#ffb87a] mx-auto mt-4 mb-6"></div>

                <p className="mt-4 text-white/80 text-lg md:text-xl leading-relaxed">
                    เรามีบริการครบวงจรด้านซอฟต์แวร์ เทคโนโลยีสารสนเทศ และดิจิทัล ไม่ว่าจะเป็นการพัฒนาเว็บไซต์
                    แอปพลิเคชัน การจัดการฐานข้อมูล และการอบรมคอมพิวเตอร์
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact" passHref>
                        <Button
                            className="bg-[#ffb87a] text-black hover:bg-[#e89f5d] font-semibold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                        >
                            เริ่มโครงการกับเรา
                        </Button>


                    </Link>
                    <Link href="/portfolio" passHref>
                        <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black cursor-pointer rounded-full">
                            ดูผลงานก่อนตัดสินใจ
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
