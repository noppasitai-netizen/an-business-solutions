"use client";

import React from "react";
import { Check, X, HelpCircle, Tag, Sparkles, ArrowRight } from "lucide-react";

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  const handleSelect = (pkgName: string) => {
    onSelectPackage(pkgName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      name: "Starter",
      price: "2,500",
      tag: "เริ่มต้น",
      bestFor: "SME เอกสารน้อย ยังไม่จด VAT",
      includes: [
        "เอกสารไม่เกิน 30 รายการ/เดือน",
        "ทำบัญชีรายเดือนตามมาตรฐาน",
        "ตรวจเอกสารเบื้องต้น",
        "ยื่น ภงด.3, ภงด.53 ตามรายการที่มี",
        "AI-assisted document checklist",
        "สรุปรายการเอกสารที่ค้างส่ง",
        "ปรึกษาบัญชีพื้นฐานผ่าน LINE"
      ],
      excludes: [
        "ไม่รวม ภพ.30 (ภาษีมูลค่าเพิ่ม)",
        "ไม่รวม Payroll และประกันสังคม",
        "ไม่รวมการปิดงบการเงินประจำปีและค่าสอบบัญชี"
      ],
      ctaText: "ประเมิน Starter",
      highlight: false
    },
    {
      name: "Smart VAT",
      price: "4,500",
      tag: "สำหรับธุรกิจจด VAT",
      bestFor: "SME ที่มีซื้อขายทั่วไปทุกเดือน",
      includes: [
        "เอกสารไม่เกิน 70 รายการ/เดือน",
        "ทำบัญชีรายเดือนพร้อมลงสมุด",
        "รายงานภาษีซื้อ-ขาย ยื่นแบบ ภพ.30",
        "ยื่น ภงด.1, ภงด.3, ภงด.53 ตามรายการที่มี",
        "AI-assisted VAT/WHT checklist",
        "แจ้งเตือนเดดไลน์ยื่นแบบรายงวด",
        "ปรึกษานักบัญชีวิชาชีพผ่าน LINE"
      ],
      excludes: [
        "ไม่รวม Payroll และประกันสังคม",
        "ไม่รวมการปิดงบการเงินประจำปีและค่าสอบบัญชี"
      ],
      ctaText: "เลือก Smart VAT",
      highlight: false
    },
    {
      name: "Growth",
      price: "6,500",
      tag: "แนะนำเป็นพิเศษ",
      bestFor: "ธุรกิจเอกสารปานกลาง มีพนักงาน และต้องการสรุปแบบย่อ",
      includes: [
        "เอกสารไม่เกิน 120 รายการ/เดือน",
        "ทำบัญชีรายเดือนครบถ้วน",
        "กระทบยอดบัญชีธนาคารเบื้องต้น",
        "ยื่นแบบ ภพ.30, ภงด.1, ภงด.3, ภงด.53",
        "Payroll และประกันสังคม ไม่เกิน 5 คน",
        "AI missing document tracker",
        "สรุปผลการดำเนินงานสำหรับบริหาร",
        "ปรึกษานักบัญชีผ่าน LINE / โทรศัพท์"
      ],
      excludes: [
        "ไม่รวมการปิดงบการเงินประจำปีและค่าสอบบัญชี"
      ],
      ctaText: "ขอประเมิน Growth",
      highlight: true
    },
    {
      name: "Controller",
      price: "9,500",
      tag: "บัญชีเชิงบริหาร",
      bestFor: "ธุรกิจที่ต้องการระบบวิเคราะห์ภาพรวมและการควบคุมการเงิน",
      includes: [
        "เอกสารไม่เกิน 220 รายการ/เดือน",
        "ทำบัญชีรายเดือนชุดสมบูรณ์",
        "ยื่นภาษีรายเดือนที่เกี่ยวข้องครบถ้วน",
        "Payroll และประกันสังคม ไม่เกิน 10 คน",
        "Monthly dashboard สำหรับผู้บริหาร",
        "วิเคราะห์รายการที่มีความเสี่ยงทางภาษี",
        "วางระบบการอนุมัติโฟลว์เอกสารเบื้องต้น",
        "Quarterly Review สรุปผลทางโทร/ซูม ไตรมาสละครั้ง"
      ],
      excludes: [
        "ไม่รวมการปิดงบการเงินประจำปีและค่าสอบบัญชี"
      ],
      ctaText: "คุยกับที่ปรึกษา",
      highlight: false
    }
  ];

  const addOns = [
    { name: "Payroll พนักงานเพิ่มเติมจากแพ็กเกจ", price: "100 บาท / คน / เดือน (ขั้นต่ำ 1,500 บาท)" },
    { name: "ประกันสังคม Standalone (นำส่งรายเดือนอย่างเดียว)", price: "2,500 บาท / เดือน" },
    { name: "ยื่นแบบแสดงรายการรายครั้ง (ภงด.1, ภงด.3, ภงด.53 หรือ ภพ.30)", price: "500 บาท / แบบ / ครั้ง" },
    { name: "จัดทำ 50 ทวิ หรือ ภงด.1ก สรุปรายปี", price: "เริ่มต้น 1,500 บาท / ปี" },
    { name: "ปิดงบการเงินประจำปี (สำหรับลูกค้าทำบัญชีรายเดือน)", price: "เริ่มต้น 9,900 บาท / ปี" },
    { name: "ปิดงบการเงินประจำปี (สำหรับลูกค้าทั่วไป)", price: "เริ่มต้น 12,000 บาท / ปี" },
    { name: "ตรวจสอบเอกสารย้อนหลัง / คีย์ข้อมูลย้อนหลัง", price: "เริ่มต้น 3,000 บาท / เดือนย้อนหลัง" },
    { name: "จดทะเบียนภาษีมูลค่าเพิ่มออนไลน์ (VAT)", price: "2,900 บาท" },
    { name: "ขึ้นทะเบียนประกันสังคมนายจ้างใหม่", price: "2,900 บาท" },
    { name: "จดทะเบียนจัดตั้งบริษัทจำกัด", price: "8,900 – 9,900 บาท (ไม่รวมค่าธรรมเนียมราชการ)" },
    { name: "แก้ไขเปลี่ยนแปลงรายการทะเบียนบริษัท (กรรมการ/ที่อยู่)", price: "3,550 บาท / รายการ" },
    { name: "วางระบบเอกสาร ควบคุมการอนุมัติภายใน", price: "เริ่มต้น 5,900 บาท" },
    { name: "AI Automation แจ้งเตือนเอกสารเฉพาะกิจการ", price: "เริ่มต้น 15,000 บาท / โปรเจกต์" }
  ];

  return (
    <section id="pricing" className="py-25 bg-[#050814] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-brand-cyan/10 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full text-2xs text-brand-cyan font-bold tracking-wide uppercase">
            <Tag size={12} /> Pricing & Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            แพ็กเกจค่าบริการทำบัญชีและยื่นภาษีรายเดือน
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            ค่าบริการเริ่มต้นมีความโปร่งใส ยืดหยุ่น และคิดตามปริมาณรายการเอกสารจริงที่ระบบตรวจนับได้
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16 pt-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? "bg-gradient-to-b from-[#111e40] to-[#050814] border-2 border-brand-cyan shadow-[0_0_40px_rgba(6,182,212,0.2)] scale-105 z-10 lg:-translate-y-4"
                  : "glass-card border border-slate-800 hover:border-slate-800"
              } p-6 sm:p-7`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-gold text-brand-navy-dark text-4xs font-black tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles size={10} className="animate-spin-slow" /> RECOMMENDED
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className={`text-4xs font-bold px-2.5 py-1 rounded font-mono ${
                    pkg.highlight ? "bg-brand-cyan text-brand-navy-dark font-black uppercase tracking-wide" : "bg-slate-900 text-slate-400"
                  }`}>
                    {pkg.tag}
                  </span>
                  <h3 className="text-xl font-black text-white mt-3.5 tracking-tight">{pkg.name}</h3>
                  <p className="text-slate-400 text-4xs mt-1.5 min-h-[32px] leading-relaxed">{pkg.bestFor}</p>
                </div>

                <div className="my-6">
                  <span className="text-slate-500 text-4xs font-bold block uppercase tracking-wider">เริ่มต้น</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-4xl font-black text-white tracking-tight">{pkg.price}</span>
                    <span className="text-slate-400 text-2xs">บาท/เดือน</span>
                  </div>
                </div>

                <div className="space-y-4.5 border-t border-slate-800 pt-4">
                  <div className="space-y-2.5">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-2xs leading-tight">
                        <Check size={14} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-slate-300 font-light">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.excludes.length > 0 && (
                    <div className="space-y-2.5 border-t border-slate-800/60 pt-3">
                      {pkg.excludes.map((exc, i) => (
                        <div key={i} className="flex items-start gap-2 text-4xs text-slate-500">
                          <X size={12} className="text-slate-700 shrink-0 mt-0.5" />
                          <span className="font-light">{exc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleSelect(pkg.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-2xs font-extrabold transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-navy-dark shadow-[0_4px_12px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom / Multi Branch Card */}
        <div className="glass-card-premium border border-brand-teal/20 p-6 sm:p-8 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-left">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
              แพ็กเกจ Custom / Multi-Branch (หลายสาขา / รูปแบบซับซ้อน)
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl font-light">
              สำหรับธุรกิจขนาดกลางที่มีจุดรับชำระเงินหลายจุด, แฟรนไชส์, กิจการนำเข้า-ส่งออกที่มีการทำพิธีการศุลกากร, ธุรกิจอีคอมเมิร์ซที่มีการกระทบยอด Settlement ยอดเงินโอนปริมาณมากจากหลาย Marketplace (Shopee, Lazada, TikTok Shop) หรือระบบฝากขายสินค้า
            </p>
          </div>
          <div className="text-center md:text-right shrink-0">
            <span className="text-4xs text-slate-500 block font-mono font-bold uppercase tracking-wider">เริ่มต้น</span>
            <span className="text-xl sm:text-2xl font-black text-brand-teal block mb-3 font-mono">12,000 บาท/เดือน</span>
            <button
              onClick={() => handleSelect("Custom / Multi-Branch")}
              className="inline-flex items-center gap-1.5 px-5 py-3.5 text-2xs font-extrabold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              ขอใบเสนอราคาเฉพาะกรณี
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Exclusions Note (Compliant Disclaimers) */}
        <div className="bg-slate-950/60 border border-slate-900/80 p-6 rounded-2xl mb-16 text-left space-y-3">
          <h4 className="text-xs font-bold text-brand-gold-light flex items-center gap-1.5">
            <HelpCircle size={14} /> หมายเหตุและขอบเขตงานบริการบัญชี (Pricing Disclaimers)
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-3xs sm:text-2xs text-slate-400">
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ราคาเริ่มต้น:</strong> อัตราแพ็กเกจด้านบนเป็นราคาเริ่มต้นของแต่ละช่วงปริมาณงาน</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ยังไม่รวม VAT 7%:</strong> อัตราค่าบริการรายเดือนยังไม่รวมภาษีมูลค่าเพิ่ม</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ไม่รวมค่าธรรมเนียมราชการ:</strong> ไม่รวมค่าธรรมเนียมต่างๆ ที่เรียกเก็บโดยหน่วยงานราชการ</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ไม่รวมค่าผู้สอบบัญชี:</strong> ไม่รวมค่าบริการผู้สอบบัญชีรับอนุญาตในการตรวจสอบงบการเงินประจำปี</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ไม่รวมค่าโปรแกรมบัญชี:</strong> ไม่รวมค่าลิขสิทธิ์ซอฟต์แวร์บัญชีออนไลน์ (เช่น PEAK Account หรือ FlowAccount)</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ไม่รวมงานย้อนหลัง:</strong> ไม่รวมค่าบริการบันทึกรายการบัญชีย้อนหลัง (Backlog) ก่อนเริ่มสัญญา</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ไม่รวมภาษีอากรที่กิจการต้องชำระจริง:</strong> ภาษีและเงินสมทบที่กิจการต้องนำส่งตรงแก่กรมสรรพากร / สำนักงานประกันสังคม</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-brand-cyan mt-0.5">•</span>
              <span><strong>ราคาขึ้นอยู่กับจำนวนเอกสาร สถานะ VAT จำนวนพนักงาน และความซับซ้อนของธุรกิจ:</strong> อัตราค่าบริการจะปรับเปลี่ยนตามลักษณะและความซับซ้อนของธุรกิจของคุณ</span>
            </li>
          </ul>
        </div>

        {/* Add-ons Table */}
        <div className="space-y-6 text-left">
          <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
            <HelpCircle className="text-brand-cyan" size={18} /> อัตราค่าบริการเสริมอื่นๆ และงานจดทะเบียนนิติบุคคล (Add-ons)
          </h3>
          <div className="glass-card rounded-2xl border border-slate-900 overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 divide-y divide-slate-900">
              {addOns.map((add, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 p-4 text-2xs hover:bg-slate-900/30 transition-colors gap-1 sm:gap-4"
                >
                  <div className="sm:col-span-8 font-bold text-slate-300 flex items-center">
                    {add.name}
                  </div>
                  <div className="sm:col-span-4 text-brand-cyan sm:text-right font-mono font-bold flex items-center sm:justify-end">
                    {add.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
