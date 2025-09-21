import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Footer Top */}
      <div className="py-12">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <a href="#">
                  <img src="img/logocontact.png" alt="Quangitech" className="w-40" />
                </a>
              </div>
              <p className="mb-2">
                <strong>ที่อยู่:</strong> 234/145 ถนนเทพารักษ์ ตำบลเทพารักษ์
                อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10270
              </p>
              <p className="mb-2">
                <strong>เบอร์โทรศัพท์:</strong> 9999999999
              </p>
              <p className="mb-2">
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:quangitech@gmail.com?subject=ติดต่อจากเว็บไซต์&body=สวัสดีครับ"
                  className="text-green-500 hover:underline"
                >
                  quangitech@gmail.com
                </a>
              </p>
              <p>
                <strong>Facebook :</strong>{" "}
                <a
                  href="https://www.facebook.com/p/Quangitech-100063857449990/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Quangitech
                </a>
              </p>
            </div>

            <div>
              <div className="mb-4">
                <p className="font-bold">QUANGITECH CO.,LTD.</p>
              </div>
              <p>
                บริษัท ควอนจิเทค จำกัด ผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และระบบออนไลน์มากกว่า
                10 ปี พร้อมให้คำปรึกษาฟรีสำหรับผู้ที่ต้องการเริ่มต้นธุรกิจออนไลน์
                เราพร้อมเดินเคียงข้างคุณตั้งแต่ก้าวแรก
                เพื่อสร้างสรรค์เว็บไซต์ที่ตอบโจทย์ธุรกิจและการเติบโตอย่างยั่งยืน
              </p>
            </div>

            <div>
              <div className="mb-4">
                <p className="font-bold">สินค้าและบริการ</p>
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    System Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Office Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Data Analysis & Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Printing Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Computer Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Package Programs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center py-4">
            <p>2025 © Quangitech.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
