"use client";

import React, { useState } from "react";
import { Cpu, Send, CheckSquare, ShieldCheck, Bell, LayoutDashboard, FileText, AlertCircle, Calendar, ClipboardCheck, BarChart3 } from "lucide-react";

export default function AIWorkflowDemo() {
  const [activeTab, setActiveTab] = useState("missing");

  const steps = [
    {
      num: "01",
      title: "รับเอกสารหลายช่องทาง",
      text: "LINE, Email, Google Drive, OneDrive, FlowAccount, PEAK, Express, Excel หรือเอกสารกระดาษ",
      icon: <Send className="text-brand-cyan" size={18} />
    },
    {
      num: "02",
      title: "AI ช่วยจัดหมวดเบื้องต้น",
      text: "แยกซื้อ ขาย ค่าใช้จ่าย ใบกำกับภาษี ใบเสร็จ ใบหัก ณ ที่จ่าย และรายการที่ต้องตรวจเพิ่ม",
      icon: <Cpu className="text-brand-cyan" size={18} />
    },
    {
      num: "03",
      title: "Checklist เอกสารขาด",
      text: "ระบบสรุปรายการที่ยังขาดหรือเอกสารที่ข้อมูลไม่ครบ เช่น เลขผู้เสียภาษี วันที่ เลขที่เอกสาร หรือ VAT",
      icon: <CheckSquare className="text-brand-cyan" size={18} />
    },
    {
      num: "04",
      title: "นักบัญชีตรวจทาน",
      text: "ทีมบัญชีตรวจหลักฐาน ความถูกต้อง และประเด็นภาษีก่อนบันทึกหรือยื่นแบบ",
      icon: <ShieldCheck className="text-brand-gold-light" size={18} />
    },
    {
      num: "05",
      title: "แจ้งเตือนเดดไลน์",
      text: "แจ้งเตือน ภงด.3, ภงด.53, ภงด.1, ภพ.30, ประกันสังคม และการปิดงบการเงิน",
      icon: <Bell className="text-brand-cyan" size={18} />
    },
    {
      num: "06",
      title: "Dashboard เจ้าของกิจการ",
      text: "เห็นสถานะเอกสาร ภาษีที่ยื่นแล้ว ภาษีที่ต้องชำระ และรายการที่ควรระวัง",
      icon: <LayoutDashboard className="text-brand-cyan" size={18} />
    }
  ];

  const tabContents = {
    missing: {
      title: "รายงานเอกสารขาด/ไม่สมบูรณ์ (AI Auto-Checklist)",
      subtitle: "ระบบช่วยสแกนจุดบกพร่องในบิลเบื้องต้น เพื่อตามเอกสารได้ทันทีก่อนสิ้นเดือน",
      badge: "ตรวจพบ 3 รายการ",
      items: [
        {
          name: "ใบกำกับภาษีซื้อ - บจก. สมาร์ท ออฟฟิศ (ยอดเงิน 15,200 บาท)",
          issue: "ขาดเอกสารใบเสร็จรับเงินแนบประกอบ หรือหลักฐานชำระเงิน",
          status: "แจ้งเตือนใน LINE แล้ว",
          statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
        },
        {
          name: "ใบเสร็จค่าไฟฟ้าออฟฟิศ - การไฟฟ้านครหลวง",
          issue: "ไม่ระบุเลขประจำตัวผู้เสียภาษี 13 หลักของบริษัทคุณ",
          status: "รอแก้ไขบิล",
          statusColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
        },
        {
          name: "ใบสำคัญจ่าย - สัญญาเช่าออฟฟิศ (บุคคลธรรมดา)",
          issue: "ยอดจ่าย 20,000 บาท ขาดหลักฐานใบนำส่ง หัก ณ ที่จ่าย (ภงด.3 / 5%)",
          status: "รอนักบัญชีออก 50 ทวิย้อนหลัง",
          statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
        }
      ]
    },
    tax: {
      title: "แจ้งเตือนเดดไลน์ภาษีและนำส่งแบบ",
      subtitle: "ติดตามสถานะการจัดส่งภาษีรายเดือน ป้องกันค่าปรับยื่นล่าช้า",
      badge: "2 งานรอนำส่ง",
      items: [
        {
          name: "ภพ.30 (ภาษีมูลค่าเพิ่ม) - รอบเดือนเมษายน",
          issue: "ยอดขาย 350,000 บ. ยอดซื้อ 120,000 บ. ภาษีมูลค่าเพิ่มสุทธิที่ต้องชำระ 16,100 บาท",
          status: "พร้อมนำส่ง (ยื่นออนไลน์เดดไลน์ 23 พ.ค.)",
          statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
        },
        {
          name: "ภงด.3, ภงด.53 (หัก ณ ที่จ่าย) - รอบภาษีรายเดือน",
          issue: "รายการนำส่งหัก ณ ที่จ่าย 5 ยอด รวมเงินนำส่งภาษีสะสม 2,450 บาท",
          status: "ยื่นแบบสำเร็จแล้ว (เลขอ้างอิง RD-28491)",
          statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        },
        {
          name: "ประกันสังคม - ม.33 นำส่งรายเดือน",
          issue: "พนักงาน 4 คน ยอดรวมนำส่งเงินสมทบ 3,000 บาท",
          status: "ชำระเงินแล้ว (ผ่านระบบ K-Cash Connect)",
          statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        }
      ]
    },
    review: {
      title: "รายการรอความเห็นจากนักบัญชี (Human Accountant Review)",
      subtitle: "รายการที่ AI สแกนพบความผิดปกติ หรือประเด็นความถูกต้องทางภาษีที่ต้องให้นักบัญชีตรวจสอบ",
      badge: "รอตัดสินใจ 2 เรื่อง",
      items: [
        {
          name: "ใบเสร็จค่ารับรองลูกค้า - ร้านอาหารญี่ปุ่นเกียวโต (ยอด 8,500 บาท)",
          issue: "นักบัญชีแจ้งเตือน: ตรวจสอบว่าเป็นค่าใช้จ่ายรับรองลูกค้าตามระเบียบกรมสรรพากร (หักภาษีซื้อไม่ได้ แต่เป็นรายจ่ายบริษัทได้ไม่เกินโควตา)",
          status: "รอยืนยันรายชื่อแขก",
          statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
        },
        {
          name: "ใบกำกับภาษีซื้อ - บิลเติมน้ำมันรถยนต์ กข-9999",
          issue: "นักบัญชีแจ้งเตือน: รถยนต์คันดังกล่าวไม่ได้อยู่ในทะเบียนสินทรัพย์บริษัท หรือไม่ใช่รถยนต์กระบะบริการ/ขนส่ง (ภาษีซื้อต้องห้าม)",
          status: "ตรวจสอบสิทธิ์ใช้งาน",
          statusColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
        }
      ]
    },
    reports: {
      title: "ข้อมูลภาพรวมธุรกิจเบื้องต้น (SME Preliminary Executive Report)",
      subtitle: "รายงานงบดุล/กำไรขาดทุนเบื้องต้นรายเดือน เพื่อวางแผนกระแสเงินสดและสิทธิ์ลดหย่อน",
      badge: "อัปเดตวันนี้",
      items: [
        {
          name: "รายได้รวมสะสมเดือนปัจจุบัน (Estimated Income)",
          issue: "ยอดรวม 480,000 บาท (เพิ่มขึ้น 12% เมื่อเทียบกับเดือนที่แล้ว)",
          status: "กำลังเติบโต",
          statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        },
        {
          name: "ประมาณการกำไรสุทธิก่อนหักภาษี (Preliminary Profit)",
          issue: "รายได้ 480,000 บ. หัก ค่าใช้จ่ายบันทึกแล้ว 310,000 บ. กำไรขั้นต้นประมาณ 170,000 บาท",
          status: "วิเคราะห์แล้ว",
          statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
        },
        {
          name: "สถานะยอดภาษีซื้อ-ภาษีขาย (Net VAT Position)",
          issue: "ภาษีขายสะสม 33,600 บาท | ภาษีซื้อสะสม 22,120 บาท (มีหน้าที่ชำระภาษีมูลค่าเพิ่มสุทธิ 11,480 บาท)",
          status: "ข้อมูลพร้อมปิดงวด",
          statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
        }
      ]
    }
  };

  return (
    <section id="ai-workflow" className="py-20 bg-gradient-to-b from-[#070b19] via-[#090f23] to-[#070b19] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full text-xs text-brand-cyan font-medium">
            <Cpu size={14} className="animate-spin-slow" /> AI Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            ระบบ AI Automation ที่ช่วยให้งานบัญชีไม่กองปลายเดือน
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            AI ไม่ได้มาแทนที่คน แต่ช่วยเพิ่มประสิทธิภาพการจัดส่งและตรวจเอกสารให้เร็วขึ้นถึง 80% โดยมีนักบัญชีมืออาชีพคอยควบคุมและตรวจทานอย่างละเอียดก่อนยื่นสรรพากรและกระทรวงพาณิชย์ทุกครั้ง
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-16 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-brand-cyan/50 via-brand-teal/50 to-brand-gold/30 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col gap-3 relative hover:border-brand-cyan/20 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-2xs font-bold text-slate-500 font-mono">{step.num}</span>
                <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${idx === 3 ? "border-brand-gold/40 text-brand-gold-light" : "border-slate-800"}`}>
                  {step.icon}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {step.title}
                </h3>
                <p className="text-3xs text-slate-400 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dashboard Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-2xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">ดูตัวอย่างการแจ้งเตือนจากระบบ</span>
            
            <button
              onClick={() => setActiveTab("missing")}
              className={`p-4 rounded-xl text-left border transition-all flex items-center gap-3 w-full ${
                activeTab === "missing"
                  ? "bg-brand-cyan/10 border-brand-cyan/30 text-white"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              <AlertCircle size={18} className={activeTab === "missing" ? "text-brand-cyan" : ""} />
              <div className="text-left">
                <span className="text-xs font-semibold block">เอกสารขาด/ไม่สมบูรณ์</span>
                <span className="text-3xs text-slate-400 block mt-0.5">AI ตรวจจับข้อผิดพลาดในบิล</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("tax")}
              className={`p-4 rounded-xl text-left border transition-all flex items-center gap-3 w-full ${
                activeTab === "tax"
                  ? "bg-brand-cyan/10 border-brand-cyan/30 text-white"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              <Calendar size={18} className={activeTab === "tax" ? "text-brand-cyan" : ""} />
              <div className="text-left">
                <span className="text-xs font-semibold block">ภาษีใกล้ครบกำหนด</span>
                <span className="text-3xs text-slate-400 block mt-0.5">ระบบแจ้งเตือนวันยื่นแบบและยอดชำระ</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("review")}
              className={`p-4 rounded-xl text-left border transition-all flex items-center gap-3 w-full ${
                activeTab === "review"
                  ? "bg-brand-cyan/10 border-brand-cyan/30 text-white"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              <ClipboardCheck size={18} className={activeTab === "review" ? "text-brand-gold-light" : ""} />
              <div className="text-left">
                <span className="text-xs font-semibold block">รายการรอตรวจ (Accountant)</span>
                <span className="text-3xs text-slate-400 block mt-0.5">นักบัญชีช่วยตรวจประเด็นภาษีซื้อต้องห้าม</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("reports")}
              className={`p-4 rounded-xl text-left border transition-all flex items-center gap-3 w-full ${
                activeTab === "reports"
                  ? "bg-brand-cyan/10 border-brand-cyan/30 text-white"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              <BarChart3 size={18} className={activeTab === "reports" ? "text-brand-cyan" : ""} />
              <div className="text-left">
                <span className="text-xs font-semibold block">รายงานเจ้าของกิจการ</span>
                <span className="text-3xs text-slate-400 block mt-0.5">ข้อมูลวิเคราะห์กำไรขาดทุนรายเดือน</span>
              </div>
            </button>
          </div>

          {/* Interactive Screen Panel */}
          <div className="lg:col-span-8 glass-card rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-lg">
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-4 gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-brand-cyan">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {tabContents[activeTab as keyof typeof tabContents].title}
                    </h4>
                    <p className="text-3xs text-slate-400">
                      {tabContents[activeTab as keyof typeof tabContents].subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-3xs font-mono font-bold bg-brand-cyan/15 border border-brand-cyan/35 text-brand-cyan px-2.5 py-1 rounded-full self-start">
                  {tabContents[activeTab as keyof typeof tabContents].badge}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {tabContents[activeTab as keyof typeof tabContents].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-950/60 rounded-xl border border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <span className="font-semibold text-white block">{item.name}</span>
                      <span className="text-3xs text-slate-400 block leading-normal">{item.issue}</span>
                    </div>
                    <span className={`text-3xs font-medium px-2 py-0.5 rounded border self-start sm:self-center shrink-0 ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note compliance check */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-start gap-2 text-3xs text-slate-500 leading-normal">
              <span className="font-bold text-brand-gold">หมายเหตุสำคัญ:</span>
              <span>
                ข้อมูลเหล่านี้เป็นเพียงข้อสรุปที่ระบบช่วยประเมินเพื่อลดระยะเวลาการทำงาน ในกระบวนการขั้นสุดท้าย ทีมนักบัญชีจริงของ A&N Business Solutions จะตรวจสอบหลักฐานทางบัญชีตามมาตรฐานการบัญชี (TFRS) ก่อนนำยื่นกรมสรรพากรและกรมพัฒนาธุรกิจการค้าเสมอ
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
