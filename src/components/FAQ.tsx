"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "ราคา 2,500 บาท/เดือน รวมทุกอย่างไหม",
      answer: "เป็นราคาเริ่มต้นสำหรับธุรกิจเอกสารน้อย (ไม่เกิน 30 รายการต่อเดือน) และยังไม่ได้จดทะเบียนภาษีมูลค่าเพิ่ม (VAT) รายละเอียดสิ่งที่รวมและไม่รวมทั้งหมดจะชี้แจงในใบเสนอราคาอย่างชัดเจน เช่น บริการยื่น ภพ.30, บัญชีเงินเดือน (Payroll), นำส่งประกันสังคม, บริการปิดงบการเงินประจำปี และค่าธรรมเนียมผู้สอบบัญชี จะไม่รวมอยู่ในราคาเริ่มต้นนี้"
    },
    {
      question: "ใช้ AI แล้วข้อมูลจะถูกต้อง 100% ไหม",
      answer: "AI ไม่สามารถทำงานแทนนักบัญชีได้ และระบบไม่ได้ตรวจสอบถูกต้อง 100% โดยอัตโนมัติทั้งหมด ระบบ AI Automation ของเราทำหน้าที่เพียงช่วยสแกนบิลเบื้องต้น จัดเรียงหมวดหมู่ ตรวจเลข 13 หลัก และตรวจสอบรายการเอกสารขาดหาย (Checklist) เพื่อช่วยให้คุณทำงานร่วมกับเราได้เร็วขึ้น ส่วนการจัดทำและตรวจทานข้อมูลจริง การบันทึกบัญชี และการยื่นแบบภาษีทั้งหมดจะได้รับการดูแลและตรวจทานโดยนักบัญชีหรือผู้ทำบัญชีของ A&N Business Solutions ทุกขั้นตอนก่อนนำส่ง"
    },
    {
      question: "ยังใช้เอกสารกระดาษอยู่ เริ่มต้นใช้บริการได้ไหม",
      answer: "สามารถเริ่มได้ทันทีครับ ทีมงาน A&N ยินดีช่วยวางกระบวนการส่งเอกสารและเซ็ต Checklist ทาง LINE หรือ Google Drive ให้เหมาะสมกับความถนัดของกิจการคุณในปัจจุบัน จากนั้นเราจะแนะนำแนวทางการปรับเปลี่ยนเป็นระบบไฟล์ดิจิทัลทีละขั้นตอนเพื่อประหยัดทรัพยากรในอนาคต"
    },
    {
      question: "รับทำบัญชีย้อนหลังที่ค้างคาไหม",
      answer: "เรารับประเมินและคีย์งานบัญชีย้อนหลังเป็นกรณีไป โดยทีมงานจะพิจารณาจากจำนวนเดือนที่ค้าง จำนวนเอกสาร สถานะบิล/ภาษีซื้อขาย และความเร่งด่วนในประเด็นทางกฎหมาย ค่าบริการงานย้อนหลังจะคิดแยกจากค่าทำบัญชีรายเดือนปกติในใบเสนอราคา"
    },
    {
      question: "รองรับโปรแกรมบัญชี FlowAccount, PEAK หรือ Express หรือไม่",
      answer: "รองรับทั้งหมดครับ ทีมงานมีความคุ้นเคยกับโปรแกรมบัญชีสำเร็จรูปและคลาวด์ยอดนิยมในไทย เราสามารถร่วมออกแบบโฟลว์เอกสาร แนะนำการคีย์รายได้/ค่าใช้จ่าย ดึงข้อมูลรายงานออกมาทำกระทบยอด หรือใช้ข้อมูลจากระบบเหล่านั้นมาปิดงวดบัญชีรายเดือนได้อย่างมีประสิทธิภาพ"
    },
    {
      question: "ต้องส่งเอกสารให้สำนักงานบัญชีภายในวันไหนของเดือน",
      answer: "แนะนำให้ส่งเอกสารให้ครบถ้วนก่อนวันที่ 3–5 ของเดือนถัดไป เพื่อให้ระบบอัตโนมัติมีเวลาจัดหมวดหมู่ และให้ทีมนักบัญชีของ A&N มีเวลาตรวจสอบข้อเท็จจริง ทำการกระทบยอด ตรวจสอบข้อมูลผู้ประกอบการคู่ค้า ก่อนที่จะถึงกำหนดเวลากองยื่นภาษีของภาครัฐจริง"
    },
    {
      question: "ถ้าจำนวนเอกสารในแต่ละเดือนเกินขอบเขตแพ็กเกจ จะคิดค่าบริการอย่างไร",
      answer: "หากมีบางงวดที่เอกสารเกินเพียงเล็กน้อย เราจะมีมาตรการอนุโลมให้ แต่หากปริมาณเอกสารและธุรกรรมของกิจการคุณเพิ่มขึ้นอย่างต่อเนื่องติดต่อกันเกิน 2-3 เดือน ทีมงานจะติดต่อเพื่อแนะนำปรับปรุงแพ็กเกจให้สอดคล้องกับปริมาณงานจริง เพื่อไม่ให้เกิดภาระงานที่ติดขัดหรือข้อจำกัดในการให้บริการ"
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-[#070b19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full text-xs text-brand-cyan font-medium">
            <HelpCircle size={14} /> F.A.Q
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            คำถามที่พบบ่อย (FAQ)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            ตอบคำถามและคลายข้อสงสัยเกี่ยวกับการบริการบัญชี ภาษี ระบบเทคโนโลยี และกรอบเวลาทำงานร่วมกับ A&N Business Solutions
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center text-sm md:text-base font-bold text-white hover:text-brand-cyan transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="text-brand-cyan shrink-0 ml-4" size={18} />
                  ) : (
                    <ChevronDown className="text-slate-400 shrink-0 ml-4" size={18} />
                  )}
                </button>
                
                <div
                  className={`transition-all duration-350 overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-slate-800" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-slate-300 text-xs sm:text-sm leading-relaxed font-light bg-slate-900/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
