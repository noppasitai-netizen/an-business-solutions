"use client";

import React from "react";
import { Cpu, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep border-t border-slate-900 pt-16 pb-24 md:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                A&N Business Solutions
              </span>
              <span className="text-xs uppercase bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                <Cpu size={10} /> Smart Accounting
              </span>
            </div>
            <p className="text-xs text-slate-400 font-bold">
              บริษัท เอ แอนด์ เอ็น บิสซิเนส โซลูชั่นส์ จำกัด (เลขทะเบียนนิติบุคคล: 0115567033027)
            </p>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md font-light">
              สำนักงานบัญชีและที่ปรึกษาระบบบัญชีสำหรับ SME ไทย ที่ผสานการทำงานร่วมกันระหว่างนักบัญชีวิชาชีพผู้เชี่ยวชาญกับระบบอัตโนมัติในการอำนวยความสะดวก Checklist ติดตามเอกสาร และควบคุมเดดไลน์ภาษี
            </p>
          </div>

          {/* Column 2: Direct Contact info */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-2">
              ข้อมูลติดต่อ & สถานที่ตั้งสำนักงาน
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed font-light">
                  ออฟฟิศตั้งอยู่ใน โครงการตลาดพีทีที ปาร์ค มอลล์ (PTT Park Mall บางนา-ตราด กม.8) เลขที่ 25/131 หมู่ที่ 2 ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-cyan shrink-0" />
                <span className="text-slate-300">เบอร์โทรศัพท์ติดต่อ: </span>
                <a href="tel:0989123711" className="text-white hover:text-brand-cyan transition-colors font-semibold font-mono">098-912-3711</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-cyan shrink-0" />
                <span className="text-slate-300">อีเมลติดต่อ: </span>
                <a href="mailto:Noppasit@annbusiness.com" className="text-white hover:text-brand-cyan transition-colors font-mono">Noppasit@annbusiness.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal and Disclaimer Notice */}
        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-900 mb-8 text-3xs text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-400 mb-1">ข้อความปฏิเสธความรับผิดชอบทางกฎหมาย (Legal Disclaimer):</p>
          ข้อมูลทางภาษี ตัวเลข แพ็กเกจ และระบบ checklist ที่อ้างอิงบนหน้าเว็บไซต์นี้ถูกจัดขึ้นเพื่อวัตถุประสงค์ในการเผยแพร่ข้อมูลเบื้องต้นและส่งเสริมความเข้าใจทั่วไปเกี่ยวกับแนวทางการจัดการเอกสารบัญชีของ SME เท่านั้น ไม่ใช่คำวินิจฉัยภาษี คำปรึกษาทางกฎหมาย หรือข้อผูกพันที่มีลักษณะถาวรสำหรับการพิจารณาคดีความภาษีเฉพาะทางเป็นรายกรณี การประเมินราคาที่สมบูรณ์ โครงสร้างการทำงาน และขอบเขตการทำงานร่วมกันจะสอดคล้องและยึดถือตามเอกสารใบเสนอราคา (Quotation) และสัญญาจ้างบริการทำบัญชีอย่างเป็นลายลักษณ์อักษรที่ตกลงร่วมกันระหว่างทั้งสองฝ่ายเท่านั้น
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-4xs text-slate-500 gap-4">
          <span>&copy; {currentYear} บริษัท เอ แอนด์ เอ็น บิสซิเนส โซลูชั่นส์ จำกัด. สงวนลิขสิทธิ์ตามกฎหมาย</span>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">เงื่อนไขการใช้บริการ</span>
            <span className="hover:text-slate-300 cursor-pointer">นโยบายความเป็นส่วนตัว (PDPA)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
