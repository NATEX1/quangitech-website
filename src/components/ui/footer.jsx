import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1a5c48] text-white">
      {/* Footer Top */}
      <div className="py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">

            {/* Column 1 */}
            <div>
              <a href="#" className="inline-block mb-6">
                <img src="/img/logocontact.png" alt="Quangitech" className="w-40" />
              </a>
              <ul className="text-sm text-white/80 uppercase leading-[1.8] space-y-2">
                <li className="flex items-center gap-2">
                  <p className="text-sm text-white/80 uppercase leading-[1.8]">
                    ที่อยู่ : 234/145 ถนนเทพารักษ์ ตำบลบางเมืองใหม่ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10270
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm text-white/80 uppercase leading-[1.8]">
                    เบอร์โทรศัพท์ :
                  </span>
                  <a
                    href="tel:9999999999"
                    className="text-[#ffb87a] hover:underline transition"
                  >
                    999-999-9999
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <p className="text-sm text-white/80 uppercase leading-[1.8]">
                    E-Mail :
                  </p>
                  <a
                    href="mailto:quangitech@gmail.com?subject=ติดต่อจากเว็บไซต์&body=สวัสดีครับ"
                    className="text-[#ffb87a] hover:underline transition"
                  >
                    quangitech@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-sm text-white/80 uppercase leading-[1.8]">
                    Facebook :
                  </p>
                  <a
                    href="https://www.facebook.com/p/Quangitech-100063857449990/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ffb87a] hover:underline transition"
                  >
                    Quangitech
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-medium text-[#ffb87a] tracking-[0.1em] uppercase mb-4">QUANGITECH CO., LTD.</h3>
              <p className="text-sm text-white/80 uppercase leading-[1.8]">
                บริษัท ควอนจิเทค จำกัด ผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และระบบออนไลน์มากกว่า 10 ปี
                เราพร้อมเป็นที่ปรึกษาและเดินเคียงข้างคุณตั้งแต่ก้าวแรก
                เพื่อสร้างเว็บไซต์ที่ตอบโจทย์ธุรกิจและการเติบโตอย่างยั่งยืน
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-medium text-[#ffb87a] tracking-[0.1em] uppercase mb-4">สินค้าและบริการ</h3>
              <ul className="space-y-2 text-sm uppercase text-white/80">
                {[
                  "System Development",
                  "Office Supplies",
                  "Data Analysis & Cleaning",
                  "Printing Services",
                  "Computer Training",
                  "Package Programs",
                ].map((service, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="relative inline-block hover:text-[#ffb87a] transition"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center py-4 text-sm uppercase text-white/80">
            <p>© 2025 Quangitech. All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0">Designed with by Quangitech</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
