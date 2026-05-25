"use client";

import React from "react";
import { BookOpen, FileText, Users, Landmark, FileSignature, LayoutGrid, Cpu, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BookOpen className="text-brand-cyan" size={24} />,
      title: "ทำบัญชีรายเดือน",
      text: "บันทึกบัญชีสมบูรณ์แบบ จัดระเบียบหมวดหมู่เอกสารให้ถูกต้องตามกฎหมาย ทำรายงานกระทบยอดธนาคาร และจัดทำรายงานสรุปสถานะงานบัญชีรายเดือน",
    },
    {
      icon: <FileText className="text-brand-cyan" size={24} />,
      title: "ยื่นภาษีรายเดือน",
      text: "ดูแลความถูกต้องและยื่นแบบแสดงรายการภาษีมูลค่าเพิ่ม (ภพ.30), ภาษีเงินได้หัก ณ ที่จ่าย (ภงด.1, ภงด.3, ภงด.53) และแบบที่เกี่ยวข้องตามลักษณะธุรกิจ",
    },
    {
      icon: <Users className="text-brand-cyan" size={24} />,
      title: "Payroll และประกันสังคม",
      text: "คำนวณเงินเดือนพนักงาน ออกสลิปเงินเดือน (Payslip) รายงาน 50 ทวิ, ยื่น ภงด.1ก และดำเนินการนำส่งประกันสังคมตามเงื่อนไขแพ็กเกจ",
    },
    {
      icon: <Landmark className="text-brand-cyan" size={24} />,
      title: "ปิดงบการเงินและยื่นงบการเงินประจำปี",
      text: "จัดทำงบดุล งบกำไรขาดทุน และประสานงานผู้สอบบัญชีรับอนุญาต เพื่อตรวจสอบงบการเงินประจำปี ก่อนยื่นนำส่งผ่านระบบ DBD e-Filing และยื่น ภงด.50",
    },
    {
      icon: <FileSignature className="text-brand-cyan" size={24} />,
      title: "งานทะเบียนนิติบุคคล",
      text: "จดทะเบียนจัดตั้งบริษัทจำกัด, ขึ้นทะเบียนผู้เสียภาษีมูลค่าเพิ่ม (จด VAT), แก้ไขรายละเอียดนิติบุคคล เปลี่ยนแปลงกรรมการ ย้ายสำนักงาน หรือเพิ่มวัตถุประสงค์ธุรกิจ",
    },
    {
      icon: <LayoutGrid className="text-brand-cyan" size={24} />,
      title: "วางระบบเอกสารและบัญชี",
      text: "ออกแบบโฟลว์เอกสารรับ-จ่าย กำหนดผังบัญชีที่สอดคล้องกับธุรกิจ วางระบบอนุมัติภายใน (Approval Flow) เพื่อลดขั้นตอนซ้ำซ้อนและป้องกันการทุจริต",
    },
    {
      icon: <Cpu className="text-brand-cyan" size={24} />,
      title: "ระบบอัตโนมัติงานบัญชี",
      text: "ออกแบบและเชื่อมต่อระบบการติดตามเอกสารผ่าน LINE, ระบบเตือนเดดไลน์อัตโนมัติ และ Dashboard รายงานผลการดำเนินงานแบบเรียลไทม์เฉพาะกิจการของคุณ",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#070b19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            บริการบัญชี ภาษี และระบบหลังบ้านครบสำหรับ SME
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            ให้ทีมงานนักบัญชีมืออาชีพและระบบอัตโนมัติของเราช่วยแบ่งเบาภาระงานหลังบ้าน เพื่อให้คุณมีเวลาโฟกัสกับการขยายธุรกิจได้อย่างเต็มที่
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-brand-cyan/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl inline-block text-brand-cyan group-hover:bg-brand-cyan/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.text}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-400 group-hover:text-brand-cyan flex items-center gap-1.5 transition-colors"
                >
                  ขอรายละเอียดบริการ
                  <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
