"use client";

import React from "react";
import { MessageSquarePlus, FileSearch, Settings, PenTool, TrendingUp } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <MessageSquarePlus size={24} className="text-brand-cyan" />,
      title: "1. ส่งข้อมูลกิจการ",
      text: "กรอกข้อมูลรายละเอียดประเภทธุรกิจ จำนวนบิลเอกสารเฉลี่ย สถานะภาษีมูลค่าเพิ่ม (VAT) จำนวนพนักงาน และโปรแกรมที่ใช้อยู่ ผ่านหน้าระบบประเมินราคาฟรี"
    },
    {
      icon: <FileSearch size={24} className="text-brand-cyan" />,
      title: "2. ประเมินแพ็กเกจ",
      text: "ทีมงานวิเคราะห์และแจ้งแพ็กเกจที่ลงตัวกับธุรกิจคุณ พร้อมจัดแจงขอบเขตการทำงาน เงื่อนไขสิ่งที่รวมและไม่รวมอย่างโปร่งใส เพื่อให้ไม่มีการคิดเงินเพิ่มเติมแฝง"
    },
    {
      icon: <Settings size={24} className="text-brand-cyan" />,
      title: "3. ตั้งระบบรับเอกสาร",
      text: "เซ็ตอัปช่องทางการส่งเอกสาร (LINE, Shared Drive, ฯลฯ) จัดวาง Checklist ประจำเดือนของบริษัท และตกลงรอบการปิดส่งเอกสารประจำงวดอย่างเป็นระบบ"
    },
    {
      icon: <PenTool size={24} className="text-brand-gold-light" />,
      title: "4. ทำบัญชีและยื่นภาษี",
      text: "นักบัญชีของ A&N บันทึกบัญชี ตรวจสอบความถูกต้องของใบกำกับภาษี ออกหัก ณ ที่จ่าย และนำยื่นสรรพากรตามรอบ พร้อมแจ้งเตือนสถานะงานทุกงวด"
    },
    {
      icon: <TrendingUp size={24} className="text-brand-cyan" />,
      title: "5. ปรับ Workflow ให้ดีขึ้น",
      text: "นำผลการสรุปและข้อผิดพลาดในงบแต่ละเดือน มาแนะนำการปรับปรุงโฟลว์บิลหลังบ้าน ลดเอกสารตกหล่น และเชื่อมระบบอัตโนมัติให้เหมาะสม"
    }
  ];

  return (
    <section className="py-20 bg-[#070b19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">HOW IT WORKS</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            เริ่มใช้บริการง่ายใน 5 ขั้นตอน
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            เปลี่ยนจากระบบบัญชีที่กระจัดกระจายและเดดไลน์หลุดบ่อย ให้กลายเป็นเรื่องโปร่งใส ตรวจสอบได้ และสะดวกรวดเร็วในไม่กี่วัน
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-800 -z-10" />
          
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            >
              {/* Icon Sphere */}
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center relative shadow-lg group hover:border-brand-cyan hover:bg-slate-950 transition-all duration-300">
                {step.icon}
                <span className="absolute bottom-[-6px] right-[-6px] w-6 h-6 rounded-full bg-[#131d3f] border border-slate-800 text-2xs font-mono font-bold flex items-center justify-center text-slate-300">
                  0{idx + 1}
                </span>
              </div>

              {/* Text */}
              <div className="space-y-2 mt-2 px-4 md:px-0">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
