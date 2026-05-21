"use client";

import React from "react";
import { FolderCheck, CalendarClock, Eye, Cpu } from "lucide-react";

export default function TrustBar() {
  const cards = [
    {
      icon: <FolderCheck className="text-brand-cyan" size={24} />,
      title: "เอกสารไม่หลุด",
      text: "มี checklist รายเดือน ช่วยตามเอกสารซื้อ ขาย ค่าใช้จ่าย ใบกำกับภาษี และ 50 ทวิ เพื่อลดการตกหล่นของข้อมูลทางภาษี",
    },
    {
      icon: <CalendarClock className="text-brand-cyan" size={24} />,
      title: "ภาษีตรงเวลา",
      text: "ระบบเตือนกำหนดยื่น ภงด.1, ภงด.3, ภงด.53, ภพ.30 และประกันสังคม ป้องกันเบี้ยปรับเงินเพิ่มล่าช้า",
    },
    {
      icon: <Eye className="text-brand-cyan" size={24} />,
      title: "เห็นสถานะงาน",
      text: "เจ้าของกิจการติดตามได้ว่างานไหนบันทึกเสร็จแล้ว งานไหนกำลังรอยื่น หรือเอกสารรายการใดที่ยังค้างตรวจทาน",
    },
    {
      icon: <Cpu className="text-brand-cyan" size={24} />,
      title: "บัญชี + Automation",
      text: "ไม่ใช่แค่รับยื่นภาษี แต่ช่วยวางระบบหลังบ้าน เชื่อมโปรแกรมบัญชีชั้นนำ ให้ธุรกิจของคุณดำเนินงานได้ง่ายขึ้น",
    },
  ];

  return (
    <section className="py-12 bg-[#090f23]/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card hover:border-brand-cyan/20 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                {card.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
