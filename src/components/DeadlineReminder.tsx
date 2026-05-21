"use client";

import React from "react";
import { Calendar, Clock, AlertCircle } from "lucide-react";

export default function DeadlineReminder() {
  const deadlines = [
    {
      type: "ภงด.3, ภงด.53",
      name: "ภาษีเงินได้หัก ณ ที่จ่าย",
      date: "ทุกวันที่ 7 ของเดือนถัดไป",
      onlineDate: "ยื่นออนไลน์ขยายเป็นวันที่ 15 ของเดือนถัดไป",
      note: "นำส่งเมื่อมีการจ่ายค่าบริการ/ค่าเช่า แก่บุคคลธรรมดาหรือนิติบุคคล",
      status: "รายเดือน"
    },
    {
      type: "ภพ.30",
      name: "ภาษีมูลค่าเพิ่ม (VAT)",
      date: "ทุกวันที่ 15 ของเดือนถัดไป",
      onlineDate: "ยื่นออนไลน์ขยายเป็นวันที่ 23 ของเดือนถัดไป",
      note: "สำหรับกิจการที่จดทะเบียนภาษีมูลค่าเพิ่ม มีหน้าที่จัดทำรายงานซื้อ-ขายและยื่นแบบ",
      status: "รายเดือน"
    },
    {
      type: "ภงด.1",
      name: "ภาษีเงินได้หัก ณ ที่จ่ายเงินเดือน",
      date: "ทุกวันที่ 7 ของเดือนถัดไป",
      onlineDate: "ยื่นออนไลน์ขยายเป็นวันที่ 15 ของเดือนถัดไป",
      note: "นำส่งรายละเอียดภาษีเงินได้พนักงานประจำที่มีเกณฑ์ต้องหัก ณ ที่จ่าย",
      status: "รายเดือน"
    },
    {
      type: "ประกันสังคม",
      name: "เงินสมทบกองทุนประกันสังคม",
      date: "ทุกวันที่ 15 ของเดือนถัดไป",
      onlineDate: "ยื่นออนไลน์ขยายเป็นวันที่ 15 ของเดือนถัดไป (หรือตามประกาศ สปส.)",
      note: "นำส่งเงินสมทบสัดส่วนนายจ้าง 5% และลูกจ้าง 5% (สูงสุดคนละ 750 บาท)",
      status: "รายเดือน"
    },
    {
      type: "ภงด.51",
      name: "ภาษีเงินได้นิติบุคคลครึ่งปี",
      date: "ภายใน 2 เดือนนับจากสิ้นสุดรอบบัญชีครึ่งปีแรก",
      onlineDate: "ยื่นออนไลน์ขยายระยะเวลาเพิ่มอีก 8 วัน (ปกติภายในวันที่ 8 กันยายน สำหรับรอบปีปฏิทิน)",
      note: "ประมาณการกำไรสุทธิประจำปีเพื่อคำนวณและนำส่งภาษีครึ่งปีสำหรับบริษัทหรือห้างหุ้นส่วนนิติบุคคล",
      status: "รายครึ่งปี"
    },
    {
      type: "ภงด.50, DBD e-Filing",
      name: "ภาษีเงินได้นิติบุคคลประจำปี & งบการเงิน",
      date: "ภายใน 150 วันนับจากวันปิดรอบบัญชี",
      onlineDate: "ยื่นงบการเงินผ่านระบบ DBD e-Filing ภายใน 1 เดือนนับจากวันประชุมใหญ่สามัญผู้ถือหุ้น",
      note: "ยื่นแบบภาษีประจำปีพร้อมแนบรายงานงบการเงินที่ผ่านการตรวจสอบโดยผู้สอบบัญชี",
      status: "รายปี"
    }
  ];

  return (
    <section id="deadlines" className="py-20 bg-[#070b19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full text-xs text-rose-400 font-medium">
            <Calendar size={14} /> Tax Deadlines
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            เดดไลน์สำคัญที่ระบบช่วยเตือน
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            หมดความกังวลเรื่องเอกสารหล่นหรือค่าปรับยื่นแบบล่าช้า ระบบแจ้งเตือนอัตโนมัติจะคอยอัปเดตสถานะงานยื่นภาษีของคุณ
          </p>
        </div>

        {/* Deadlines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
          {deadlines.map((dl, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-rose-500/30 transition-all duration-300 relative group"
            >
              <div className="absolute top-3 right-3 text-3xs font-mono font-bold bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded">
                {dl.status}
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-cyan block font-mono">{dl.type}</span>
                  <span className="text-2xs font-semibold text-white block leading-tight">{dl.name}</span>
                </div>

                <div className="p-3 bg-rose-500/5 border border-rose-500/10 rounded-xl">
                  <span className="text-3xs text-rose-400 block font-semibold">วันยื่นแบบตามกฎหมาย:</span>
                  <span className="text-2xs font-bold text-white block mt-0.5">{dl.date}</span>
                </div>

                <p className="text-3xs text-slate-400 leading-relaxed">
                  {dl.note}
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-3 mt-4 text-3xs text-slate-500 leading-normal">
                <span className="font-semibold block text-slate-400">กรณีส่งผ่านอินเทอร์เน็ต:</span>
                <span className="block mt-0.5">{dl.onlineDate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Recommendation Box */}
        <div className="glass-card-premium border border-brand-gold/20 p-6 rounded-2xl text-left flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold-light rounded-xl shrink-0">
            <Clock size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">ข้อแนะนำสำหรับ Workflow บัญชีที่ดี</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ทีม A&N Business Solutions <strong className="text-brand-gold-light">แนะนำให้ส่งเอกสารให้ครบก่อนวันที่ 3–5 ของเดือนถัดไป</strong> เพื่อให้ระบบคัดแยกเบื้องต้น และให้ทีมบัญชีมีเวลาตรวจสอบเอกสารความถูกต้องอย่างรอบคอบก่อนถึงกำหนดยื่นแบบจริง
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-1.5 text-3xs text-slate-600 mt-4 text-left pl-2">
          <AlertCircle size={12} />
          <span>กรณียื่นออนไลน์หรือมีประกาศขยายเวลาพิเศษ ให้ตรวจสอบความถูกต้องตามที่ประกาศโดยหน่วยงานรัฐของสรรพากร หรือสำนักงานประกันสังคมในแต่ละรอบงวดนั้นๆ อีกครั้ง</span>
        </div>

      </div>
    </section>
  );
}
