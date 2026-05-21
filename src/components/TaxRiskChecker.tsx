"use client";

import React, { useState } from "react";
import { ShieldAlert, AlertTriangle, ArrowRight, RefreshCw, Landmark, HeartPulse, ShieldCheck, Award } from "lucide-react";

export interface RiskResult {
  score: number;
  rating: "Low" | "Medium" | "High";
  message: string;
}

interface RiskCheckerProps {
  onCheckComplete: (result: RiskResult) => void;
}

interface Question {
  id: number;
  text: string;
  options: { label: string; value: string; risk: boolean }[];
}

export default function TaxRiskChecker({ onCheckComplete }: RiskCheckerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<RiskResult>({
    score: 0,
    rating: "Low",
    message: ""
  });

  const questions: Question[] = [
    {
      id: 1,
      text: "ธุรกิจของคุณส่งเอกสารบัญชีครบก่อนวันที่ 5 ของทุกเดือนหรือไม่",
      options: [
        { label: "ใช่, ส่งตรงเวลาเป็นประจำ", value: "yes", risk: false },
        { label: "ไม่ตรงเวลา / ส่งล่าช้าบ่อย", value: "no", risk: true },
        { label: "ไม่แน่ใจ / ส่งเอกสารตามสะดวก", value: "not_sure", risk: true }
      ]
    },
    {
      id: 2,
      text: "มีรายงานสรุปภาษีซื้อ-ภาษีขายแยกชัดเจนเป็นระบบหรือไม่",
      options: [
        { label: "มีระบบแยกหมวดหมู่ชัดเจน", value: "yes", risk: false },
        { label: "ไม่มีระบบ / ให้สำนักงานบัญชีสรุปอย่างเดียว", value: "no", risk: true },
        { label: "ไม่แน่ใจ", value: "not_sure", risk: true }
      ]
    },
    {
      id: 3,
      text: "มีการทำเรื่อง หัก ณ ที่จ่าย และออกใบรับรอง 50 ทวิ ครบถ้วนทุกครั้งที่มีจ่ายค่าบริการหรือไม่",
      options: [
        { label: "หักภาษีและออกหนังสือรับรองครบทุกครั้ง", value: "yes", risk: false },
        { label: "มีตกหล่นบ้าง / บางครั้งไม่ได้ออกบิล", value: "no", risk: true },
        { label: "ไม่แน่ใจ / ไม่เคยรู้จักใบ 50 ทวิ", value: "not_sure", risk: true }
      ]
    },
    {
      id: 4,
      text: "มีการกระทบยอดเงินในบัญชีธนาคาร (Bank Reconciliation) กับสมุดบัญชีทุกเดือนหรือไม่",
      options: [
        { label: "ทำเป็นประจำทุกเดือนสม่ำเสมอ", value: "yes", risk: false },
        { label: "ไม่ได้ทำ / ดูยอดเงินผ่านแอปธนาคารเท่านั้น", value: "no", risk: true },
        { label: "ไม่แน่ใจ", value: "not_sure", risk: true }
      ]
    },
    {
      id: 5,
      text: "มีพนักงานประจำและนำส่งเงินสมทบประกันสังคมถูกต้องตรงเวลาทุกงวดหรือไม่",
      options: [
        { label: "นำส่งตรงเวลา (หรือไม่มีพนักงานประจำ)", value: "yes", risk: false },
        { label: "นำส่งล่าช้าบ้าง / ยอดส่งไม่ตรงความเป็นจริง", value: "no", risk: true },
        { label: "ไม่แน่ใจ", value: "not_sure", risk: true }
      ]
    },
    {
      id: 6,
      text: "ที่ผ่านมาเคยยื่นแบบ ภพ.30 หรือ ภงด.1, ภงด.3, ภงด.53 ล่าช้าจนต้องชำระค่าปรับ/เบี้ยปรับทางภาษีหรือไม่",
      options: [
        { label: "ไม่เคยล่าช้าเลยแม้แต่ครั้งเดียว", value: "no", risk: false },
        { label: "เคยล่าช้า 1-2 ครั้งชำระเบี้ยปรับเล็กน้อย", value: "yes_sometimes", risk: true },
        { label: "โดนปรับบ่อยครั้ง / ล่าช้าเป็นส่วนใหญ่", value: "yes_often", risk: true }
      ]
    },
    {
      id: 7,
      text: "มีช่องทางการรับเงินของกิจการหลายช่องทาง (เงินโอน, หน้าร้าน, Marketplace) ใช่หรือไม่",
      options: [
        { label: "รับผ่านบัญชีบริษัทเดียว ตรวจสอบง่าย", value: "no", risk: false },
        { label: "ใช่, รับเงินหลายจุด ยอดโอนเยอะมากและคละกัน", value: "yes", risk: true },
        { label: "ไม่แน่ใจ", value: "not_sure", risk: true }
      ]
    },
    {
      id: 8,
      text: "มีรายการโอนจ่าย/ค่าใช้จ่ายบริษัทที่ไม่มีใบเสร็จหรือหลักฐานการชำระเงินที่ถูกต้องบ่อยครั้งหรือไม่",
      options: [
        { label: "ไม่มี, มีหลักฐานใบกำกับภาษีหรือบิลถูกต้องครบ", value: "no", risk: false },
        { label: "ใช่, โอนเงินส่วนตัวจ่ายบ่อย ไม่มีบิลประกอบ", value: "yes", risk: true },
        { label: "ไม่แน่ใจ", value: "not_sure", risk: true }
      ]
    },
    {
      id: 9,
      text: "ที่ผ่านมาเคยนำส่งงบการเงินประจำปีล่าช้ากว่าที่กฎหมายกำหนด (DBD e-Filing) หรือไม่",
      options: [
        { label: "นำส่งตรงเวลาทุกปีไม่มีค้าง", value: "no", risk: false },
        { label: "เคยยื่นงบล่าช้า / เคยได้รับหมายเรียกเตือน", value: "yes", risk: true },
        { label: "ไม่แน่ใจ / เพิ่งจัดตั้งบริษัทปีแรก", value: "not_sure", risk: false }
      ]
    },
    {
      id: 10,
      text: "ในแต่ละเดือน คุณเห็นตัวเลขกำไรสะสม ต้นทุน และประมาณการภาษีเพื่อวางแผนการเงินหรือไม่",
      options: [
        { label: "เห็นสรุปรายงานบริหารส่งตรงทุกเดือน", value: "no", risk: false },
        { label: "ไม่เห็นเลย, รู้ตัวเลขอีกทีตอนปิดงบปลายปี", value: "yes", risk: true },
        { label: "ไม่แน่ใจ", value: "not_sure", risk: true }
      ]
    }
  ];

  const handleAnswerSelect = (optionValue: string) => {
    const updatedAnswers = { ...answers, [questions[currentStep].id]: optionValue };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate Score
      let riskScore = 0;
      questions.forEach((q) => {
        const selectedVal = updatedAnswers[q.id];
        const matchingOpt = q.options.find((o) => o.value === selectedVal);
        if (matchingOpt?.risk) {
          riskScore += 1;
        }
      });

      let rating: "Low" | "Medium" | "High" = "Low";
      let message = "";

      if (riskScore <= 3) {
        rating = "Low";
        message = "สุขภาพระบบบัญชีของท่านอยู่ในเกณฑ์ดี มีความเสี่ยงภาษีต่ำ แนะนำให้ใช้ระบบตรวจสอบรายเดือนเพื่อป้องกันความผิดพลาดในอนาคต";
      } else if (riskScore <= 7) {
        rating = "Medium";
        message = "เริ่มพบจุดบกพร่องสะสมในเอกสารและระบบภาษี มีความเสี่ยงที่จะถูกประเมินภาษีย้อนหลังหรือเสียสิทธิ์ลดหย่อน ควรทบทวนระบบงานเอกสารด่วน";
      } else {
        rating = "High";
        message = "ระบบบัญชีและภาษีของท่านมีความเสี่ยงสะสมสูงมาก เสี่ยงต่อค่าปรับ สรรพากรเรียกตรวจสอบ และปิดงบการเงินล่าช้า แนะนำปรึกษานักบัญชีด่วนที่สุด";
      }

      const calculatedResult: RiskResult = {
        score: riskScore,
        rating,
        message
      };

      setResult(calculatedResult);
      setCompleted(true);
      onCheckComplete(calculatedResult);
    }
  };

  const resetChecker = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
  };

  const handleSendToForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const progressPercentage = Math.round(((currentStep + (completed ? 1 : 0)) / questions.length) * 100);

  return (
    <section id="risk-checker" className="py-20 bg-[#090f23]/40 border-y border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center bg-brand-cyan/10 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full text-2xs text-brand-cyan font-bold tracking-wide uppercase">
            <HeartPulse size={12} /> Tax Risk Diagnostic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            ประเมินความเสี่ยงภาษีและบัญชีของบริษัทคุณ
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            เช็กจุดเสี่ยงหลังบ้านที่อาจส่งผลให้โดนสรรพากรปรับย้อนหลัง หรือปิดงบล่าช้าใน 60 วินาที
          </p>
        </div>

        {/* Diagnostic Panel */}
        <div className="glass-card rounded-2xl border border-slate-800 text-left relative overflow-hidden">
          
          {/* Progress bar */}
          <div className="w-full bg-slate-950 h-1.5 relative">
            <div
              className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan h-1.5 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {!completed ? (
            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex justify-between items-center text-4xs font-bold text-slate-500 font-mono">
                <span>คำถามที่ {currentStep + 1} จาก {questions.length}</span>
                <span>{progressPercentage}% Completed</span>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
                {questions[currentStep].text}
              </h3>

              <div className="flex flex-col gap-3 pt-2">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleAnswerSelect(opt.value)}
                    className="w-full px-5 py-4 rounded-xl text-xs font-semibold text-left border border-slate-900 bg-slate-950/40 hover:bg-slate-900/60 hover:border-brand-cyan/35 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight size={14} className="text-slate-700 group-hover:text-brand-cyan opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Certified Health Certificate Result (High Conversion!)
            <div className="p-6 sm:p-10 text-center space-y-8 relative">
              
              {/* Certificate Border Decorative Style */}
              <div className="border-2 border-dashed border-slate-800 p-6 sm:p-8 rounded-xl bg-slate-950/20 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-4xs text-slate-700 font-mono tracking-widest uppercase">A&N Auditing Board</div>

                <div className="flex justify-center mb-4">
                  {result.rating === "Low" && (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                      <Award size={48} />
                    </div>
                  )}
                  {result.rating === "Medium" && (
                    <div className="p-4 bg-amber-500/10 border border-amber-500/25 text-amber-400 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                      <AlertTriangle size={48} />
                    </div>
                  )}
                  {result.rating === "High" && (
                    <div className="p-4 bg-rose-500/10 border border-rose-500/25 text-rose-500 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.2)] animate-bounce">
                      <ShieldAlert size={48} />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <span className="text-slate-500 text-4xs font-bold uppercase tracking-widest block">ใบประเมินผลการวิเคราะห์ระดับความเสี่ยง</span>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                    ระดับความเสี่ยงภาษี:{" "}
                    <span className={`${
                      result.rating === "Low" ? "text-emerald-400" :
                      result.rating === "Medium" ? "text-amber-400" : "text-rose-500"
                    }`}>
                      {result.rating === "Low" ? "ต่ำ (Low Risk)" : result.rating === "Medium" ? "ปานกลาง (Medium Risk)" : "สูงมาก (High Risk)"}
                    </span>
                  </h3>

                  {/* Visual score display */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full font-mono text-xs text-slate-400">
                    คะแนนความเสี่ยงสะสม: <strong className="text-white">{result.score}</strong> จาก 10 คะแนน
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed pt-2">
                    {result.message}
                  </p>
                </div>

                {/* Direct Action Plan recommendations based on severity */}
                <div className="mt-6 pt-5 border-t border-slate-800 text-left max-w-md mx-auto space-y-3">
                  <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest block">แผนงานแนะนำเร่งด่วน:</span>
                  <div className="space-y-2">
                    <div className="flex gap-2 text-2xs text-slate-400">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                      <span>{result.rating === "High" ? "ควรจัดทำรายงานกระทบยอดธนาคารและตรวจสอบ ภพ.30 ล่าช้าย้อนหลังด่วน" : "จัดระบบจัดเก็บบิลรายเดือนผ่าน LINE เพื่อลดบิลน้ำมันและบิลบันเทิงสูญหาย"}</span>
                    </div>
                    <div className="flex gap-2 text-2xs text-slate-400">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                      <span>{result.rating === "Low" ? "เตรียมตัวปิดงบการเงินและยื่นงบการเงินผ่านระบบ DBD e-Filing ให้ตรงเวลา" : "ทบทวนการทำเอกสารหัก ณ ที่จ่าย (ภงด.3, ภงด.53) และการออกใบ 50 ทวิ"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 max-w-md mx-auto">
                <button
                  onClick={handleSendToForm}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
                >
                  ให้ที่ปรึกษา A&N ช่วยวางแผนลดความเสี่ยงฟรี
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={resetChecker}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all"
                >
                  <RefreshCw size={12} /> เริ่มตรวจใหม่
                </button>
              </div>

              {/* Compliance Seals */}
              <div className="flex justify-center items-center gap-6 text-4xs text-slate-600 font-mono pt-2">
                <span className="flex items-center gap-1"><ShieldCheck size={10} /> PDPA Compliant</span>
                <span className="flex items-center gap-1"><Landmark size={10} /> สภาวิชาชีพบัญชี</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
