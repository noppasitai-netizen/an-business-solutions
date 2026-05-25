"use client";

import React, { useState } from "react";
import { LayoutDashboard, CheckCircle, AlertCircle, Calendar, FileText, TrendingUp, HelpCircle, ChevronRight } from "lucide-react";

export default function DashboardPreview() {
  const [selectedMonth, setSelectedMonth] = useState("เมษายน");

  const monthlyData = {
    "เมษายน": {
      income: "458,200.00",
      expense: "312,450.00",
      profit: "145,750.00",
      vatBuy: "15,400.00",
      vatSell: "28,950.00",
      vatNet: "13,550.00",
      completeness: 84,
      missingCount: 5,
      deadline: "ภพ.30 (เมษายน)",
      deadlineNote: "ครบกำหนด 23 พ.ค. (เหลือ 2 วัน)",
      chartPoints: "M 0 80 Q 50 60 100 70 T 200 40 T 300 30 T 400 10"
    },
    "มีนาคม": {
      income: "412,800.00",
      expense: "298,600.00",
      profit: "114,200.00",
      vatBuy: "13,200.00",
      vatSell: "26,800.00",
      vatNet: "13,600.00",
      completeness: 100,
      missingCount: 0,
      deadline: "ภพ.30 (มีนาคม)",
      deadlineNote: "ยื่นแบบสำเร็จแล้วเมื่อ 23 เม.ย.",
      chartPoints: "M 0 90 Q 50 70 100 80 T 200 50 T 300 45 T 400 25"
    }
  };

  const current = monthlyData[selectedMonth as keyof typeof monthlyData];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050814] via-[#091026] to-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-brand-cyan/10 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full text-2xs text-brand-cyan font-bold tracking-wide uppercase">
            <LayoutDashboard size={12} /> ตัวอย่าง (Demo)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            เจ้าของกิจการเห็นสถานะบัญชีและภาษีได้ทุกวัน
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            ติดตามรายการความคืบหน้าการยื่นแบบภาษีรายเดือน ปริมาณบิลสะสม และแจ้งเตือนจุดบกพร่องจากระบบพอร์ทัลของเราได้ตลอดเวลา
          </p>
        </div>

        {/* Dashboard Mockup Grid Container */}
        <div className="glass-card-premium rounded-3xl border border-slate-800 p-5 sm:p-7 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          
          {/* Mock Browser Top Navigation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-6 gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-4xs text-slate-500 font-mono hidden md:inline ml-3">https://portal.annbusiness.com/dashboard/demo</span>
            </div>
            
            {/* Interactive Month Switcher Tabs */}
            <div className="flex items-center gap-2.5 self-start sm:self-center">
              <span className="text-4xs text-slate-500 font-bold uppercase tracking-wider">งวดบัญชี:</span>
              <div className="bg-slate-950 p-1 rounded-lg border border-slate-900 flex gap-1">
                {Object.keys(monthlyData).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`px-3 py-1 rounded text-4xs font-extrabold transition-all ${
                      selectedMonth === m
                        ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20"
                        : "text-slate-400 hover:text-slate-200 border border-transparent"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="text-right">
                <span className="text-4xs text-slate-300 font-bold block">บริษัทตัวอย่าง ก. จำกัด (สำนักงานใหญ่)</span>
                <span className="text-5xs text-slate-500 font-mono tracking-wide block">ข้อมูลตัวอย่าง (Demo)</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-cyan text-xs font-bold font-mono">
                DM
              </div>
            </div>
          </div>

          {/* Dashboard Main Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            
            {/* Left Dashboard Panel: Financial Trend & Stats (8 Columns) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* KPIs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Metric Card 1 */}
                <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[110px]">
                  <div className="flex justify-between items-start">
                    <span className="text-4xs text-slate-400 font-bold uppercase tracking-widest">ความครบถ้วนบิล</span>
                    <CheckCircle className="text-emerald-400" size={14} />
                  </div>
                  <div>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-white font-mono">{current.completeness}%</span>
                      <span className="text-5xs text-slate-500">(เป้าหมาย 95% ก่อนยื่นแบบ)</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2.5">
                      <div className="bg-emerald-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${current.completeness}%` }} />
                    </div>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[110px]">
                  <div className="flex justify-between items-start">
                    <span className="text-4xs text-slate-400 font-bold uppercase tracking-widest">บิลค้างส่งตรวจ</span>
                    <AlertCircle className={current.missingCount > 0 ? "text-rose-500" : "text-emerald-400"} size={14} />
                  </div>
                  <div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className={`text-2xl font-black font-mono ${current.missingCount > 0 ? "text-rose-400" : "text-emerald-400"}`}>
                        {current.missingCount}
                      </span>
                      <span className="text-5xs text-slate-500">รายการเอกสารขาดส่ง</span>
                    </div>
                    <span className="text-5xs text-slate-500 block mt-2.5 font-medium">คัดกรองและตรวจสอบโดยระบบ checklist</span>
                  </div>
                </div>

                {/* Metric Card 3 */}
                <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[110px]">
                  <div className="flex justify-between items-start">
                    <span className="text-4xs text-slate-400 font-bold uppercase tracking-widest">เดดไลน์ถัดไป</span>
                    <Calendar className="text-brand-cyan" size={14} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block mt-2">{current.deadline}</span>
                    <span className="text-5xs text-slate-400 block mt-1">{current.deadlineNote}</span>
                  </div>
                </div>

              </div>

              {/* Financial Trend SVG Chart Card */}
              <div className="bg-slate-950/70 border border-slate-900 p-5 rounded-2xl space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-2xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-brand-cyan" /> รายงานสรุปงบกำไรขาดทุนเบื้องต้น (SME Summary)
                  </span>
                  <span className="text-5xs text-slate-500 font-mono">อัปเดต ณ วันที่ 21 พ.ค. 2569</span>
                </div>
                
                {/* SVG Visual Curved Graph */}
                <div className="w-full h-32 bg-slate-900/40 rounded-xl relative border border-slate-900/60 p-2 overflow-hidden flex items-end">
                  <svg className="w-full h-full absolute inset-0 text-brand-cyan" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d={`${current.chartPoints} L 400 100 L 0 100 Z`} fill="url(#chartGrad)" />
                    <path d={current.chartPoints} fill="none" stroke="currentColor" strokeWidth="2" className="transition-all duration-700" />
                  </svg>
                  <div className="flex justify-between w-full text-5xs text-slate-500 font-mono z-10 px-2 pb-1">
                    <span>ต้นเดือน</span>
                    <span>กลางงวด</span>
                    <span>วันยื่นแบบภาษี</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="border-l-2 border-brand-cyan pl-3">
                    <span className="text-5xs text-slate-400 block font-bold uppercase tracking-wider">รายได้ตามเอกสารที่บันทึก</span>
                    <span className="text-base font-black text-white font-mono">{current.income} <span className="text-3xs font-medium text-slate-400">บ.</span></span>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-3">
                    <span className="text-5xs text-slate-400 block font-bold uppercase tracking-wider">รายจ่ายบิลที่มีหลักฐานครบ</span>
                    <span className="text-base font-black text-slate-300 font-mono">{current.expense} <span className="text-3xs font-medium text-slate-400">บ.</span></span>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-3">
                    <span className="text-5xs text-slate-400 block font-bold uppercase tracking-wider">ประมาณการกำไรสุทธิ</span>
                    <span className="text-base font-black text-brand-gold-light font-mono">{current.profit} <span className="text-3xs font-medium text-slate-400">บ.</span></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">ภาษีซื้อสะสมงวดนี้:</span>
                    <span className="font-bold text-slate-200 font-mono">{current.vatBuy} บ.</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">ภาษีขายสะสมงวดนี้:</span>
                    <span className="font-bold text-slate-200 font-mono">{current.vatSell} บ.</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:col-span-2 pt-2.5 border-t border-dashed border-slate-900">
                    <span className="text-slate-300 font-bold">ยอดนำส่งภาษีมูลค่าเพิ่มสุทธิประเมิน (ภพ.30 คาดว่าจะชำระเพิ่ม):</span>
                    <span className="font-black text-rose-400 font-mono">{current.vatNet} บ.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Dashboard Panel: Communications & Year Closing (4 Columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Accountant Queries Chat list */}
              <div className="bg-slate-950/70 border border-slate-900 p-5 rounded-2xl space-y-4">
                <span className="text-2xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                  <HelpCircle size={14} className="text-brand-gold-light" /> บันทึกสอบถามจากสำนักงานบัญชี
                </span>
                
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-900 text-3xs space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-brand-gold-light">ใบเสร็จค่าน้ำมันรถยนต์ กข-1234</span>
                      <span className="text-slate-500 font-mono">12 พ.ค.</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-light">
                      &quot;รายการเติมน้ำมันของรถคันนี้ นำมาบันทึกเป็นรายจ่ายบริษัทได้ หรือเป็นรถยนต์ส่วนบุคคลของกรรมการคะ?&quot;
                    </p>
                    <button className="text-brand-cyan font-bold hover:underline cursor-pointer flex items-center gap-0.5">
                      พิมพ์ตอบข้อมูล <ChevronRight size={10} />
                    </button>
                  </div>

                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-900 text-3xs space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-brand-gold-light">หลักฐานหัก ณ ที่จ่าย ภงด.3</span>
                      <span className="text-slate-500 font-mono">10 พ.ค.</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-light">
                      &quot;มียอดโอนออกค่าการตลาดออนไลน์ 25,000 บ. ขาดเอกสาร 50 ทวิ แนบประกอบ เพื่อยื่นนำส่ง รบกวนส่งเพิ่มเติมด้วยค่ะ&quot;
                    </p>
                    <button className="text-brand-cyan font-bold hover:underline cursor-pointer flex items-center gap-0.5">
                      อัปโหลดไฟล์เพิ่ม <ChevronRight size={10} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress on Annual DBD e-Filing Closing */}
              <div className="bg-slate-950/70 border border-slate-900 p-5 rounded-2xl space-y-3">
                <span className="text-2xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                  <FileText size={14} className="text-brand-cyan" /> สถานะงานปิดงบการเงินปี 2568
                </span>
                <div className="flex justify-between text-3xs text-slate-400 font-mono pt-1">
                  <span>ตรวจงบส่งผู้สอบบัญชี</span>
                  <span className="font-bold text-brand-cyan">68%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan h-2 rounded-full" style={{ width: "68%" }} />
                </div>
                <p className="text-4xs text-slate-500 leading-relaxed pt-1.5">
                  * จัดทำงบเสนอคณะกรรมการอนุมัติ และเตรียมนำส่งกระทรวงพาณิชย์ผ่านระบบ DBD e-Filing ภายใน 31 พฤษภาคม 2569
                </p>
              </div>

            </div>

          </div>

          {/* Live Security Disclaimer Compliance Footer inside Mockup */}
          <div className="mt-6 pt-4 border-t border-slate-900/80 flex items-start gap-2.5 text-3xs text-slate-500 leading-relaxed text-left">
            <span className="font-bold text-brand-cyan shrink-0">ข้อชี้แจงการใช้งาน:</span>
            <span>
              ตัวเลขทางการเงินและประมาณการกำไรสุทธิสะสมใน Client Portal นี้ คำนวณเบื้องต้นจากการตรวจนับบิลผ่านระบบคัดกรองอัตโนมัติ เพื่อเป็นข้อมูลอำนวยความสะดวกแก่ผู้ประกอบการในการประมาณการสภาพคล่องและการเตรียมภาษีเท่านั้น การจัดทำบัญชีและยื่นแบบภาษีรายเดือนจะได้รับการตรวจทานโดยนักบัญชีหรือผู้ทำบัญชีของ A&N Business Solutions ก่อนยื่นแบบภาษี และงบการเงินประจำปีจะได้รับการตรวจสอบโดยผู้สอบบัญชีรับอนุญาตตามขอบเขตงานปิดงบประจำปี
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
