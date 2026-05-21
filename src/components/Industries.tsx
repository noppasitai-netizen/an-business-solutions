"use client";

import React from "react";
import { Store, Utensils, Network, Globe, Briefcase, Building, HardHat, Check } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Store className="text-brand-cyan" size={24} />,
      title: "ร้านค้า / ค้าปลีก",
      pain: "บิลซื้อขายจำนวนมาก จัดเก็บยาก สต็อกสินค้าและกระแสเงินสดขยับตัวตลอดเวลา ต้องตามรายงานให้ทัน",
      help: "จัดวางโฟลว์จัดส่งเอกสารขาย ทำรายงานภาษีซื้อ-ขาย สรุปเอกสารค่าใช้จ่ายขาดเป็นระบบรายเดือน"
    },
    {
      icon: <Utensils className="text-brand-cyan" size={24} />,
      title: "คาเฟ่ / ร้านอาหาร",
      pain: "ยอดขายหลายระบบ (หน้าร้าน/เดลิเวอรี), บิลค่าวัตถุดิบรายวันยิบย่อย และอัตราเข้าออกของพนักงานค่อนข้างสูง",
      help: "ออกแบบระบบรวบรวมยอดขายประจำวัน บันทึกแยกประเภทต้นทุนวัตถุดิบ ดูแลบัญชีเงินเดือนและนำส่งประกันสังคม"
    },
    {
      icon: <Network className="text-brand-cyan" size={24} />,
      title: "แฟรนไชส์",
      pain: "มีหน้าร้านและสาขาย่อยหลายแห่ง เอกสารกระจายตัว และต้องการรายงานวิเคราะห์ผลงานแบบแยกสาขา",
      help: "ติดตั้ง Dashboard รายงานแยกสาขา วางระบบการรับบิลทางดิจิทัลจากรายหน้าร้านตรงเข้าสู่ศูนย์กลาง"
    },
    {
      icon: <Globe className="text-brand-cyan" size={24} />,
      title: "ธุรกิจออนไลน์ / Marketplace",
      pain: "ยอดโอนผ่านระบบชำระเงินหลายแห่ง มีเรื่องค่าธรรมเนียมแพลตฟอร์ม (Platform Fee) และเงิน settlement ซับซ้อน",
      help: "กระทบยอดรายการโอนจาก Shopee, Lazada, TikTok Shop, ตัดค่าธรรมเนียม และกระทบยอดบัญชีธนาคารให้ถูกต้อง"
    },
    {
      icon: <Briefcase className="text-brand-cyan" size={24} />,
      title: "บริษัทบริการ",
      pain: "รายได้ทยอยรับตามความสำเร็จของโปรเจกต์ งานออกใบแจ้งหนี้/ใบเสร็จ และประเด็น หัก ณ ที่จ่าย ต้องตรงงวด",
      help: "ดูแลความถูกต้องของใบหัก ณ ที่จ่าย (ภงด.3, ภงด.53), รายงาน 50 ทวิ และเช็กความสอดคล้องของเอกสารรับจ่าย"
    },
    {
      icon: <Building className="text-brand-cyan" size={24} />,
      title: "พื้นที่ให้เช่า / อสังหา",
      pain: "มีการจัดเก็บค่าเช่า ค่าส่วนกลาง เงินมัดจำสัญญา และการออกใบกำกับภาษีต้องแยกประเภทอย่างรอบคอบ",
      help: "วางระบบเอกสารรับเงินที่ถูกต้องตามนิยามทางภาษี และสรุปรายงานภาษีขายแยกหมวดเงินมัดจำสัญญาเช่า"
    },
    {
      icon: <HardHat className="text-brand-cyan" size={24} />,
      title: "รับเหมา / โครงการ",
      pain: "รับเงินเป็นงวดงาน มีค่าซื้อวัสดุหน้างานจากหลายแหล่ง ต้นทุนวัตถุดิบโครงการควบคุมยากและภาษีซับซ้อน",
      help: "แยกประเมินต้นทุนรายโครงการ (Job Costing) และสแกนเอกสารค่าใช้จ่ายหน้างานเพื่อสกรีนภาษีซื้อต้องห้าม"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-[#090f23]/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">INDUSTRIES WE SERVE</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            เราเข้าใจปัญหาของ SME หลายประเภทธุรกิจ
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            แต่ละธุรกิจมีปัญหาบัญชีและโฟลว์เอกสารไม่เหมือนกัน เราคัดสรรเทคโนโลยีและทีมผู้เชี่ยวชาญให้ตรงตามอุตสาหกรรมของคุณ
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-800 p-6 flex flex-col gap-4 hover:border-brand-cyan/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 border border-slate-800 text-brand-cyan rounded-xl group-hover:bg-brand-cyan/10 transition-colors shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {ind.title}
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <span className="text-3xs uppercase tracking-wider text-rose-400 font-bold block">ปัญหาหลังบ้านที่พบบ่อย (Pain Point):</span>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{ind.pain}</p>
                </div>
                
                <div className="space-y-1 pt-2 border-t border-slate-800/40">
                  <span className="text-3xs uppercase tracking-wider text-emerald-400 font-bold block">แนวทางที่ A&N เข้าไปช่วยเสริม (Solution):</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light flex items-start gap-1.5">
                    <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{ind.help}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
