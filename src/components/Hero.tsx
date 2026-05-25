"use client";

import React from "react";
import { CheckCircle2, ChevronRight, ShieldCheck, Clock, MessageSquare, Sparkles, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#050814] via-[#090f24] to-[#050814] dashboard-grid-line">
      {/* Background blobs for ambient glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[110px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-teal/3 rounded-full blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 self-start bg-gradient-to-r from-brand-cyan/10 to-brand-teal/10 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full text-2xs text-brand-cyan font-bold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              Next-Gen Accounting for Thai SME
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              สำนักงานบัญชี SME <br />
              ที่ใช้ <span className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-gold-light bg-clip-text text-transparent glow-text-cyan">AI ช่วยตรวจ</span> <br />
              เอกสาร ภาษี เดดไลน์ ไม่หลุดมือ
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              <strong>ไม่ใช่แค่รับทำบัญชี แต่ช่วยให้เจ้าของกิจการเห็นสถานะเอกสาร ภาษี และเดดไลน์ก่อนปัญหาเกิด</strong> ด้วยระบบที่เชื่อมโยงนักบัญชีวิชาชีพผู้เชี่ยวชาญร่วมกับ AI Automation ในการคัดกรอง บันทึก จัดเก็บล่วงหน้า
            </p>

            {/* Premium USP Bullets */}
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded text-brand-cyan shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm">
                  <strong>เริ่มต้น 2,500 บาท/เดือน</strong> เหมาะกับผู้ประกอบการ SME หรือ Startup
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded text-brand-cyan shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm">
                  <strong>AI-assisted checklist</strong> ตรวจสอบจุดบกพร่องและเอกสารขาดทันที
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded text-brand-cyan shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm">
                  แจ้งเตือนเดดไลน์ยื่นแบบ <strong>ภงด.3, ภงด.53, ภงด.1, ภพ.30, ประกันสังคม</strong> และงบการเงิน
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded text-brand-cyan shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm">
                  ทำงานร่วมกับ <strong>FlowAccount, PEAK, Express, Excel, LINE</strong> และเอกสารกระดาษ
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-gold/10 border border-brand-gold/30 rounded text-brand-gold-light shrink-0 mt-0.5">
                  <Sparkles size={16} className="text-brand-gold-light" />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm font-medium">
                  <span className="text-brand-gold-light font-bold">นักบัญชีหรือผู้ทำบัญชีตรวจทานก่อนบันทึกบัญชีและยื่นแบบภาษี</span> (AI ช่วยจัดหมวดหมู่และแจ้งเตือนเดดไลน์ แต่ไม่ได้แทนนักบัญชี)
                </span>
              </div>
            </div>

            {/* CRO Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-extrabold text-brand-navy-dark bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan bg-[size:200%_auto] hover:bg-[right_center] rounded-xl hover:shadow-[0_0_16px_rgba(6,182,212,0.24)] transition-all hover:scale-105"
              >
                ประเมินแพ็กเกจด้วยตัวเองใน 3 นาที
                <ChevronRight size={16} className="ml-1" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all"
              >
                เปรียบเทียบแพ็กเกจบริการ
              </a>
            </div>
          </div>

          {/* Right Column: Next-Gen SaaS Dashboard Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Ambient Backlight for Dashboard */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/12 to-brand-teal/12 blur-3xl opacity-20 pointer-events-none rounded-2xl" />

            {/* Dashboard Mockup Panel */}
            <div className="w-full max-w-[430px] glass-card-premium rounded-2xl p-5 border border-brand-cyan/20 shadow-2xl relative overflow-hidden">
              
              {/* Header inside Mockup */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-3.5 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-4xs text-slate-400 font-mono tracking-wider ml-1.5 uppercase">A&N Accounting Hub</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="text-4xs text-emerald-400 font-mono font-bold tracking-widest uppercase">LIVE SECURE</span>
                </div>
              </div>

              {/* Parsing Action Simulation (AI Processing Indicator) */}
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-900 mb-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-brand-cyan" />
                    <span className="text-3xs font-semibold text-white font-mono">INV-2026-0048.pdf</span>
                  </div>
                  <span className="text-4xs text-brand-cyan font-mono">AI Scanning...</span>
                </div>
                {/* Scanner bar animation */}
                <div className="w-full bg-slate-900 h-1.5 rounded-full relative overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan h-1.5 rounded-full w-2/3" />
                </div>
                <div className="flex justify-between text-4xs text-slate-500 mt-2 font-mono">
                  <span>ตรวจพบคู่ค้า: บจก. ซัพพลายโก</span>
                  <span>ยอดเงิน: 18,500.00 บ. (VAT 7%)</span>
                </div>
              </div>

              {/* Quick Status KPIs */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-4xs text-slate-400 font-bold block mb-1">เอกสารงวดบัญชีนี้</span>
                  <span className="text-xl font-black text-white font-mono">112 <span className="text-3xs font-medium text-slate-400">รายการ</span></span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-4xs text-slate-400 font-bold block mb-1">สแกนเสร็จสิ้น</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">98 <span className="text-3xs font-medium text-slate-400">รายการ</span></span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-4xs text-slate-400 font-bold block mb-1">ส่งสอบบัญชีเพิ่มเติม</span>
                  <span className="text-xl font-black text-amber-400 font-mono">10 <span className="text-3xs font-medium text-slate-400">รายการ</span></span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-4xs text-slate-400 font-bold block mb-1">รอใบสำคัญจ่ายแนบ</span>
                  <span className="text-xl font-black text-rose-400 font-mono">4 <span className="text-3xs font-medium text-slate-400">รายการ</span></span>
                </div>
              </div>

              {/* Tax Checklist Overview */}
              <div className="space-y-2.5 mb-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest block mb-1">สถานะภาษีประจำงวดบัญชี</span>
                
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="text-slate-300 font-semibold">ภพ.30 (ภาษีมูลค่าเพิ่ม)</span>
                  <span className="text-4xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-bold font-mono">เตือนส่งข้อมูล</span>
                </div>
                
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="text-slate-300 font-semibold">ภงด.3, ภงด.53 (หัก ณ ที่จ่าย)</span>
                  <span className="text-4xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold font-mono">จัดทำแบบแล้ว</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-slate-300 font-semibold">ประกันสังคม</span>
                  <span className="text-4xs bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded font-bold font-mono">รอยืนยันยอด</span>
                </div>
              </div>

              {/* AI Verification Workflow Details */}
              <div className="space-y-3 bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-cyan" /> AI checklist status</span>
                  <span className="font-bold text-brand-cyan font-mono">94% Complete</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan h-1.5 rounded-full" style={{ width: "94%" }} />
                </div>
                
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-300 flex items-center gap-1.5"><Clock size={14} className="text-brand-gold-light" /> Human Accountant Review</span>
                  <span className="font-bold text-brand-gold-light flex items-center gap-1 font-mono text-3xs">
                    <span className="w-1.5 h-1.5 bg-brand-gold-light rounded-full" />
                    Reviewing Entries
                  </span>
                </div>
              </div>

            </div>

            {/* Floating Trust Badges with Micro-animations */}
            <div className="absolute -top-6 -left-8 bg-slate-950/95 border border-brand-cyan/30 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-float [animation-duration:5s]">
              <div className="bg-brand-cyan/15 p-2 rounded-lg text-brand-cyan border border-brand-cyan/20">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <span className="text-4xs text-slate-400 font-bold block uppercase tracking-wider">AI Check</span>
                <span className="text-2xs font-extrabold text-white">ช่วยคัดกรองจุดผิดบิล</span>
              </div>
            </div>

            <div className="absolute bottom-10 -right-8 bg-slate-950/95 border border-brand-gold/30 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-float [animation-delay:1.5s] [animation-duration:6s]">
              <div className="bg-brand-gold/15 p-2 rounded-lg text-brand-gold-light border border-brand-gold/20">
                <Clock size={18} />
              </div>
              <div className="text-left">
                <span className="text-4xs text-slate-400 font-bold block uppercase tracking-wider">Review</span>
                <span className="text-2xs font-extrabold text-white">นักบัญชีตรวจทานก่อนยื่น</span>
              </div>
            </div>

            <div className="absolute -bottom-8 left-6 bg-slate-950/95 border border-brand-teal/30 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-float [animation-delay:3s] [animation-duration:5.5s]">
              <div className="bg-brand-teal/15 p-2 rounded-lg text-brand-teal border border-brand-teal/20">
                <MessageSquare size={18} />
              </div>
              <div className="text-left">
                <span className="text-4xs text-slate-400 font-bold block uppercase tracking-wider">Integration</span>
                <span className="text-2xs font-extrabold text-white">ตามและส่งบิลผ่าน LINE</span>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
