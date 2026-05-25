"use client";

import React, { useState, useEffect } from "react";
import { CalculatePackage } from "@/utils/pricingLogic";
import { Calculator, Check, AlertTriangle, ArrowRight, ArrowLeft, Layers, Info } from "lucide-react";

export interface EstimatorResult {
  businessType: string;
  hasVat: string;
  documentCount: string;
  employeeCount: string;
  hasBacklog: string;
  softwareUsed: string;
  recommendedPackage: string;
  estimatedFee: string;
}

interface EstimatorProps {
  onEstimateComplete: (result: EstimatorResult) => void;
}

// Static options declared outside component to avoid recreate reference & dependency issues
const docOptions = ["0–30", "31–70", "71–120", "121–220", "มากกว่า 220"];
const empOptions = ["0", "1–5", "6–10", "11–30", "มากกว่า 30"];

export default function InteractiveEstimator({ onEstimateComplete }: EstimatorProps) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("ธุรกิจบริการ");
  const [hasVat, setHasVat] = useState("ยังไม่จด VAT");
  
  const [docIndex, setDocIndex] = useState(0);
  const [empIndex, setEmpIndex] = useState(0);

  const [hasBacklog, setHasBacklog] = useState("ไม่มี");
  const [softwareUsed, setSoftwareUsed] = useState("ยังไม่มีระบบ");

  // Calculate recommendation on every render
  const docValue = docOptions[docIndex];
  const empValue = empOptions[empIndex];
  const recommendation = CalculatePackage(
    businessType,
    hasVat,
    docValue,
    empValue,
    hasBacklog
  );

  // Sync to parent on change using useEffect
  useEffect(() => {
    onEstimateComplete({
      businessType,
      hasVat,
      documentCount: docValue,
      employeeCount: empValue,
      hasBacklog,
      softwareUsed,
      recommendedPackage: recommendation.pkg,
      estimatedFee: recommendation.price,
    });
  }, [businessType, hasVat, docValue, empValue, hasBacklog, softwareUsed, recommendation.pkg, recommendation.price, onEstimateComplete]);

  const handleSendToForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section id="estimator" className="py-20 bg-gradient-to-b from-[#050814] via-[#091026] to-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-brand-cyan/10 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full text-2xs text-brand-cyan font-bold tracking-wide uppercase">
            <Calculator size={12} /> Price Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            ประเมินค่าบริการทำบัญชีและภาษีของบริษัทคุณ
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            ระบุรายละเอียดรูปแบบบริษัทของคุณ เพื่อระบบการคำนวณประเมินแพ็กเกจที่เหมาะสมและเรตราคาแนะนำโดยประมาณทันที
          </p>
        </div>

        {/* Wizard Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left max-w-6xl mx-auto">
          
          {/* Left: Interactive Wizard Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            
            <div>
              {/* Wizard Step Progress bar */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-4xs uppercase tracking-widest text-brand-cyan font-bold font-mono">
                  ขั้นตอน {step} จาก 3
                </span>
                <div className="flex gap-1.5">
                  <div className={`h-1.5 w-8 rounded-full transition-all duration-300 ${step >= 1 ? "bg-brand-cyan" : "bg-slate-800"}`} />
                  <div className={`h-1.5 w-8 rounded-full transition-all duration-300 ${step >= 2 ? "bg-brand-cyan" : "bg-slate-800"}`} />
                  <div className={`h-1.5 w-8 rounded-full transition-all duration-300 ${step >= 3 ? "bg-brand-cyan" : "bg-slate-800"}`} />
                </div>
              </div>

              {/* STEP 1: Business Profile */}
              {step === 1 && (
                <div className="space-y-6 animate-pulse-subtle [animation-duration:15s]">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">1. ข้อมูลลักษณะธุรกิจ</h3>
                    <p className="text-4xs text-slate-400">ระบุประเภทและสถานะจดทะเบียนเพื่อจำแนกประเภทรายงาน</p>
                  </div>
                  
                  <div>
                    <label className="text-2xs font-semibold text-slate-300 block mb-2.5">ประเภทของธุรกิจหลัก</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "ธุรกิจบริการ",
                        "ค้าปลีก / ร้านค้า",
                        "ร้านอาหาร / คาเฟ่",
                        "ธุรกิจออนไลน์ / Marketplace",
                        "แฟรนไชส์",
                        "พื้นที่ให้เช่า / อสังหา",
                        "รับเหมา / โครงการ",
                        "อื่น ๆ",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setBusinessType(type)}
                          className={`px-3 py-3 rounded-xl text-2xs font-bold text-left border transition-all ${
                            businessType === type
                              ? "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/45 shadow-[0_0_8px_rgba(6,182,212,0.06)]"
                              : "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-2xs font-semibold text-slate-300 block mb-2.5">สถานะการจดทะเบียนภาษีมูลค่าเพิ่ม (VAT)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "ยังไม่จด VAT",
                        "จด VAT แล้ว",
                        "ไม่แน่ใจ / ต้องการให้ช่วยประเมิน",
                      ].map((vat) => (
                        <button
                          key={vat}
                          type="button"
                          onClick={() => setHasVat(vat)}
                          className={`px-3 py-3 rounded-xl text-2xs font-bold text-center border transition-all ${
                            hasVat === vat
                              ? "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/45 shadow-[0_0_8px_rgba(6,182,212,0.06)]"
                              : "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                          }`}
                        >
                          {vat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Volume & Scalability */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">2. ปริมาณบิลและจำนวนพนักงาน</h3>
                    <p className="text-4xs text-slate-400">ปริมาณรายการช่วยให้กำหนดจำนวนชั่วโมงทำงานของนักบัญชี</p>
                  </div>

                  {/* Document Volume Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-2xs font-semibold text-slate-300">จำนวนเอกสารต่อเดือน (ใบกำกับภาษี ซื้อ/ขาย, บิล, ใบเสร็จ)</label>
                      <span className="text-2xs font-mono font-black text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded">
                        {docOptions[docIndex]} รายการ/เดือน
                      </span>
                    </div>
                    <div className="relative pt-2">
                      <input
                        type="range"
                        min="0"
                        max="4"
                        step="1"
                        value={docIndex}
                        onChange={(e) => setDocIndex(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                      />
                      <div className="flex justify-between text-4xs text-slate-500 mt-2.5 font-mono">
                        <span>0-30</span>
                        <span>31-70</span>
                        <span>71-120</span>
                        <span>121-220</span>
                        <span>220+</span>
                      </div>
                    </div>
                  </div>

                  {/* Employee Count Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center">
                      <label className="text-2xs font-semibold text-slate-300">จำนวนพนักงานในปัจจุบัน (เพื่อคำนวณประกันสังคม และยื่น ภงด.1)</label>
                      <span className="text-2xs font-mono font-black text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2 py-0.5 rounded">
                        {empOptions[empIndex] === "0" ? "ไม่มีพนักงาน" : `${empOptions[empIndex]} คน`}
                      </span>
                    </div>
                    <div className="relative pt-2">
                      <input
                        type="range"
                        min="0"
                        max="4"
                        step="1"
                        value={empIndex}
                        onChange={(e) => setEmpIndex(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-teal"
                      />
                      <div className="flex justify-between text-4xs text-slate-500 mt-2.5 font-mono">
                        <span>ไม่มี</span>
                        <span>1-5 คน</span>
                        <span>6-10 คน</span>
                        <span>11-30 คน</span>
                        <span>30+ คน</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Backlog & Existing Systems */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">3. งานค้างและเครื่องมือที่ใช้</h3>
                    <p className="text-4xs text-slate-400">ตรวจสอบความพร้อมของระบบข้อมูลเดิมเพื่อการย้ายงานอย่างไร้รอยต่อ</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-2xs font-semibold text-slate-300 block">มีงานบัญชีย้อนหลังที่ต้องสะสางหรือไม่</label>
                      <select
                        value={hasBacklog}
                        onChange={(e) => setHasBacklog(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950 border border-slate-900 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="ไม่มี">ไม่มี (เริ่มงานงวดปัจจุบัน)</option>
                        <option value="มี 1–3 เดือน">มีงานค้างย้อนหลัง 1–3 เดือน</option>
                        <option value="มี 4–12 เดือน">มีงานค้างย้อนหลัง 4–12 เดือน</option>
                        <option value="มากกว่า 1 ปี">มีงานค้างย้อนหลังมากกว่า 1 ปี</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-2xs font-semibold text-slate-300 block">ระบบบัญชี/ซอฟต์แวร์ที่ใช้งานอยู่ในปัจจุบัน</label>
                      <select
                        value={softwareUsed}
                        onChange={(e) => setSoftwareUsed(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950 border border-slate-900 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="ยังไม่มีระบบ">ยังไม่มีระบบ (ใช้ Excel/บิลกระดาษ)</option>
                        <option value="FlowAccount">FlowAccount</option>
                        <option value="PEAK">PEAK Account</option>
                        <option value="Express">Express</option>
                        <option value="Excel">Microsoft Excel</option>
                        <option value="เอกสารกระดาษ">เอกสารกระดาษล้วน</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-900 flex items-start gap-2.5">
                    <Info size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                    <p className="text-4xs text-slate-400 leading-relaxed">
                      หากเลือกโปรแกรมบัญชีคลาวด์ เช่น FlowAccount หรือ PEAK ทีมงานของเราสามารถเชื่อมข้อมูลและดึงรายงานความเคลื่อนไหวทางภาษีแบบอัตโนมัติมาตรวจเช็กได้รวดเร็วยิ่งขึ้น
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons inside Wizard */}
            <div className="flex justify-between items-center pt-6 border-t border-slate-900 mt-6">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ArrowLeft size={14} /> ย้อนกลับ
              </button>
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all"
                >
                  ถัดไป <ArrowRight size={14} />
                </button>
              ) : (
                <span className="text-3xs text-brand-cyan font-bold flex items-center gap-1">
                  <Check size={12} /> ข้อมูลประเมินคำนวณครบถ้วนแล้ว
                </span>
              )}
            </div>

          </div>

          {/* Right: Premium Recommendations Box */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card-premium p-6 sm:p-8 rounded-2xl border border-brand-cyan/20 space-y-6 shadow-xl sticky top-24">
              <div>
                <span className="text-4xs uppercase tracking-widest text-slate-400 font-bold block mb-1">ผลประเมินแพ็กเกจ</span>
                <span className="text-2xs text-brand-cyan font-extrabold inline-flex items-center gap-1 bg-brand-cyan/10 border border-brand-cyan/25 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
                  <Layers size={10} /> Recommended Package
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1 bg-gradient-to-r from-brand-cyan via-brand-teal to-white bg-clip-text text-transparent">
                  {recommendation.pkg}
                </div>
                <div className="text-sm font-bold text-brand-gold-light mt-1 flex items-center gap-1">
                  <span className="text-2xs text-slate-400 font-normal">ราคาประมาณการ:</span> {recommendation.price}
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-4">
                <span className="text-2xs font-bold text-slate-300 block mb-3.5">ขอบเขตงานที่รวมอยู่ในราคานี้:</span>
                <ul className="space-y-2.5">
                  {recommendation.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <Check size={14} className="text-brand-cyan shrink-0 mt-0.5" />
                      <span className="leading-tight">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer block compliant with guidelines */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 space-y-2">
                <div className="flex gap-2 text-brand-gold-light items-center">
                  <AlertTriangle size={14} className="shrink-0" />
                  <span className="text-4xs font-bold uppercase tracking-wider">เงื่อนไขการประเมินราคา</span>
                </div>
                <p className="text-4xs text-slate-400 leading-normal">
                  ราคาประเมินเริ่มต้นโดยประมาณ (ยังไม่รวม VAT 7%) ไม่รวมค่าธรรมเนียมราชการ ไม่รวมค่าผู้สอบบัญชี ไม่รวมค่าโปรแกรมบัญชี ไม่รวมงานย้อนหลัง และไม่รวมภาษีอากรที่กิจการต้องชำระจริง โดยราคาขึ้นอยู่กับจำนวนเอกสาร สถานะ VAT จำนวนพนักงาน และความซับซ้อนของธุรกิจ
                </p>
              </div>

              <button
                onClick={handleSendToForm}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal rounded-xl hover:shadow-[0_0_12px_rgba(6,182,212,0.24)] transition-all hover:scale-[1.02] active:scale-95"
              >
                ส่งผลประเมินเพื่อรับใบเสนอราคาฟรี
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
