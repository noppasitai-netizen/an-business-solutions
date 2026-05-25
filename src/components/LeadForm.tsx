"use client";

import React, { useState } from "react";
import { EstimatorResult } from "./InteractiveEstimator";
import { RiskResult } from "./TaxRiskChecker";
import { Send, CheckCircle, Mail, Phone, MapPin, User, Building, Landmark, ChevronRight, ShieldCheck, Lock, Award } from "lucide-react";

interface LeadFormProps {
  prefilledPackage: string | null;
  prefilledEstimatorData: EstimatorResult | null;
  prefilledRiskResult: RiskResult | null;
}

interface LeadPayload {
  contactName: string;
  companyName: string;
  phone: string;
  lineId: string;
  email: string;
  businessType: string;
  hasVat: string;
  documentCount: string;
  employeeCount: string;
  softwareUsed: string;
  hasBacklog: string;
  selectedPackage: string;
  neededServices: string[];
  riskScore: string;
  additionalMessage: string;
}

const saveToLocalStorage = (data: LeadPayload) => {
  try {
    const existingLeadsStr = localStorage.getItem("an_business_leads");
    const existingLeads = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
    existingLeads.push({
      ...data,
      id: Math.random().toString(36).substring(2, 9),
      localSavedAt: new Date().toISOString(),
    });
    localStorage.setItem("an_business_leads", JSON.stringify(existingLeads));
  } catch (e) {
    console.error("Failed to save lead in localStorage", e);
  }
};

export default function LeadForm({
  prefilledPackage,
  prefilledEstimatorData,
  prefilledRiskResult,
}: LeadFormProps) {
  // Fields State
  const [contactName, setContactName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [lineId, setLineId] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("ธุรกิจบริการ");
  const [hasVat, setHasVat] = useState("ยังไม่จด VAT");
  const [documentCount, setDocumentCount] = useState("0–30");
  const [employeeCount, setEmployeeCount] = useState("0");
  const [softwareUsed, setSoftwareUsed] = useState("ยังไม่มีระบบ");
  const [hasBacklog, setHasBacklog] = useState("ไม่มี");
  
  // Selected services checklist
  const [neededServices, setNeededServices] = useState<string[]>([]);
  const [additionalMessage, setAdditionalMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const availableServices = [
    { key: "monthly_accounting", label: "ทำบัญชีรายเดือน" },
    { key: "tax_filing", label: "ยื่นภาษีประจำงวด" },
    { key: "payroll_social", label: "Payroll / ประกันสังคม" },
    { key: "year_closing", label: "ปิดงบการเงินประจำปี" },
    { key: "company_registration", label: "จดทะเบียนบริษัท/ VAT" },
    { key: "accounting_setup", label: "วางระบบบัญชีเอกสาร" },
    { key: "ai_automation", label: "Workflow Setup" },
    { key: "backlog_accounting", label: "เคลียร์บัญชีย้อนหลัง" },
  ];

  // Sync state with props during render instead of using useEffect
  const [prevPrefilledEstimatorData, setPrevPrefilledEstimatorData] = useState<EstimatorResult | null>(null);
  if (prefilledEstimatorData !== prevPrefilledEstimatorData) {
    setPrevPrefilledEstimatorData(prefilledEstimatorData);
    if (prefilledEstimatorData) {
      setBusinessType(prefilledEstimatorData.businessType);
      setHasVat(prefilledEstimatorData.hasVat);
      setDocumentCount(prefilledEstimatorData.documentCount);
      setEmployeeCount(prefilledEstimatorData.employeeCount);
      setSoftwareUsed(prefilledEstimatorData.softwareUsed);
      setHasBacklog(prefilledEstimatorData.hasBacklog);

      // Pre-select package related services
      const services = ["monthly_accounting", "tax_filing"];
      if (prefilledEstimatorData.employeeCount !== "0") {
        services.push("payroll_social");
      }
      if (prefilledEstimatorData.recommendedPackage.includes("Controller") || prefilledEstimatorData.recommendedPackage.includes("Custom")) {
        services.push("ai_automation");
      }
      if (prefilledEstimatorData.hasBacklog !== "ไม่มี") {
        services.push("backlog_accounting");
      }
      setNeededServices(services);
    }
  }

  const toggleService = (key: string) => {
    if (neededServices.includes(key)) {
      setNeededServices(neededServices.filter((s) => s !== key));
    } else {
      setNeededServices([...neededServices, key]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !phone || !email) {
      alert("กรุณากรอกข้อมูลผู้ติดต่อ เบอร์โทรศัพท์ และอีเมลให้ครบถ้วน");
      return;
    }

    setIsSubmitting(true);

    const payload: LeadPayload = {
      contactName,
      companyName,
      phone,
      lineId,
      email,
      businessType,
      hasVat,
      documentCount,
      employeeCount,
      softwareUsed,
      hasBacklog,
      selectedPackage: prefilledPackage || (prefilledEstimatorData?.recommendedPackage ?? "None selected"),
      neededServices: neededServices
        .map((key) => availableServices.find((s) => s.key === key)?.label)
        .filter((label): label is string => label !== undefined),
      riskScore: prefilledRiskResult ? `${prefilledRiskResult.rating} (${prefilledRiskResult.score}/10)` : "Not Checked",
      additionalMessage,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // Fallback: Save to LocalStorage if API reports fallback or if webhook is missing
      if (!data.webhookTriggered) {
        saveToLocalStorage(payload);
      }

      setSubmitSuccess(true);
    } catch (err) {
      console.warn("API error, falling back to localStorage:", err);
      saveToLocalStorage(payload);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#050814] via-[#091026] to-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Context / Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full text-2xs text-brand-cyan font-bold tracking-wide uppercase">
                <Landmark size={12} /> Contact us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                ให้ทีม A&N ออกแบบการบันทึกบัญชีของกิจการคุณ
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                ส่งข้อมูลลักษณะธุรกิจของท่านเพื่อประเมินความพร้อมในการเชื่อมต่อระบบอัตโนมัติ และรับใบเสนอราคาทำบัญชีตามปริมาณรายการบิลจริงโดยไม่มีข้อผูกมัดใดๆ
              </p>
            </div>

            {/* Diagnostic Information Card */}
            {(prefilledPackage || prefilledRiskResult) && (
              <div className="space-y-4 bg-slate-950/80 border border-slate-800 p-5 rounded-2xl shadow-inner">
                <span className="text-4xs uppercase tracking-widest text-slate-500 font-bold block">ข้อมูลประกอบการขอเสนอราคา</span>
                
                {prefilledPackage && (
                  <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2.5">
                    <span className="text-slate-400 font-light">แพ็กเกจที่คำนวณได้:</span>
                    <span className="font-black text-brand-cyan font-mono uppercase">{prefilledPackage}</span>
                  </div>
                )}

                {prefilledEstimatorData && (
                  <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2.5">
                    <span className="text-slate-400 font-light">ประมาณการค่าบริการ:</span>
                    <span className="font-bold text-brand-gold-light font-mono">{prefilledEstimatorData.estimatedFee}</span>
                  </div>
                )}

                {prefilledRiskResult && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-light">ความเสี่ยงระบบภาษีเดิม:</span>
                    <span className={`font-bold font-mono ${
                      prefilledRiskResult.rating === "Low" ? "text-emerald-400" :
                      prefilledRiskResult.rating === "Medium" ? "text-amber-400" : "text-rose-500"
                    }`}>
                      {prefilledRiskResult.rating === "Low" ? "ต่ำ" : prefilledRiskResult.rating === "Medium" ? "ปานกลาง" : "สูงมาก"} ({prefilledRiskResult.score}/10 คะแนน)
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Traditional Contact Info */}
            <div className="space-y-4 pt-6 border-t border-slate-900">
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <Phone className="text-brand-cyan mt-1 shrink-0" size={16} />
                <div className="space-y-0.5">
                  <span className="text-slate-500 text-3xs font-bold uppercase tracking-wider block">เบอร์โทรศัพท์</span>
                  <a href="tel:0989123711" className="font-bold text-white hover:text-brand-cyan transition-colors font-mono">098-912-3711</a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <Mail className="text-brand-cyan mt-1 shrink-0" size={16} />
                <div className="space-y-0.5">
                  <span className="text-slate-500 text-3xs font-bold uppercase tracking-wider block">อีเมลผู้จัดการ</span>
                  <a href="mailto:Noppasit@annbusiness.com" className="font-bold text-white hover:text-brand-cyan transition-colors font-mono">Noppasit@annbusiness.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <MapPin className="text-brand-cyan mt-1 shrink-0" size={16} />
                <div className="space-y-0.5">
                  <span className="text-slate-500 text-3xs font-bold uppercase tracking-wider block">ที่ตั้งสำนักงานใหญ่</span>
                  <span className="text-slate-300 font-light leading-relaxed block text-3xs sm:text-2xs">
                    ตั้งอยู่ใน ตลาดพีทีที ปาร์ค มอลล์ เลขที่ 25/131 หมู่ที่ 2 ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl border border-slate-800 p-6 sm:p-8 text-left h-full shadow-2xl">
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Contact Name */}
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider"><User size={12} /> ชื่อผู้ติดต่อ *</label>
                      <input
                        type="text"
                        required
                        placeholder="ชื่อ-นามสกุล ของคุณ"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider"><Building size={12} /> ชื่อบริษัท / ห้างหุ้นส่วน</label>
                      <input
                        type="text"
                        placeholder="บจก. สมาร์ท เทรดดิ้ง"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider"><Phone size={12} /> เบอร์โทรศัพท์ติดต่อ *</label>
                      <input
                        type="tel"
                        required
                        placeholder="098-XXX-XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>

                    {/* LINE ID */}
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider"><ChevronRight size={12} /> LINE ID (สำหรับส่งไฟล์สรุป)</label>
                      <input
                        type="text"
                        placeholder="line-id-user"
                        value={lineId}
                        onChange={(e) => setLineId(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-3xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider"><Mail size={12} /> อีเมลหลักของบริษัท *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>
                  </div>

                  {/* Summary of Estimator Results */}
                  <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-4xs text-slate-400">
                    <div>
                      <span className="block font-bold text-slate-500 uppercase tracking-wide">ประเภทธุรกิจ:</span>
                      <span className="text-slate-200 font-semibold">{businessType}</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-500 uppercase tracking-wide">จดทะเบียน VAT:</span>
                      <span className="text-slate-200 font-semibold">{hasVat}</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-500 uppercase tracking-wide">บิลเอกสาร/เดือน:</span>
                      <span className="text-slate-200 font-semibold">{documentCount} บิล</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-500 uppercase tracking-wide">จำนวนพนักงาน:</span>
                      <span className="text-slate-200 font-semibold">{employeeCount} คน</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-500 uppercase tracking-wide">งานสะสมย้อนหลัง:</span>
                      <span className="text-slate-200 font-semibold">{hasBacklog}</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-500 uppercase tracking-wide">โปรแกรมบัญชี:</span>
                      <span className="text-slate-200 font-semibold">{softwareUsed}</span>
                    </div>
                  </div>

                  {/* Service needed checklist */}
                  <div className="space-y-2.5">
                    <label className="text-3xs font-bold text-slate-400 block uppercase tracking-wider">บริการที่ท่านสนใจ:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableServices.map((service) => {
                        const isChecked = neededServices.includes(service.key);
                        return (
                          <button
                            key={service.key}
                            type="button"
                            onClick={() => toggleService(service.key)}
                            className={`px-3 py-3 rounded-xl border text-left text-3xs font-bold flex items-center gap-2.5 transition-all ${
                              isChecked
                                ? "bg-brand-cyan/10 border-brand-cyan/45 text-brand-cyan"
                                : "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-250"
                            }`}
                          >
                            <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              isChecked ? "border-brand-cyan bg-brand-cyan text-brand-navy-dark" : "border-slate-800 bg-slate-900"
                            }`}>
                              {isChecked && <span className="w-1.5 h-1.5 bg-brand-navy-dark rounded-full" />}
                            </span>
                            <span>{service.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-3xs font-bold text-slate-400 block uppercase tracking-wider">รายละเอียดเพิ่มเติม</label>
                    <textarea
                      placeholder="เขียนรายละเอียดความต้องการของกิจการเพิ่มเติมที่นี่..."
                      rows={3}
                      value={additionalMessage}
                      onChange={(e) => setAdditionalMessage(e.target.value)}
                      className="w-full px-3.5 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                    />
                  </div>

                  {/* Security Seals & Submit CTA */}
                  <div className="space-y-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-extrabold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal rounded-xl hover:shadow-[0_0_14px_rgba(6,182,212,0.28)] hover:scale-105 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "กำลังส่งข้อมูลเข้าระบบ..." : "ส่งข้อมูลด่วนเพื่อขอใบเสนอราคาฟรี"}
                      <Send size={14} />
                    </button>

                    {/* Trust indicators right below CTA */}
                    <div className="flex flex-wrap justify-between items-center gap-3 px-2 text-4xs text-slate-500 font-mono border-t border-slate-900 pt-3">
                      <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-brand-cyan" /> PDPA Compliant</span>
                      <span className="flex items-center gap-1"><Lock size={12} className="text-brand-cyan" /> SSL Encrypted</span>
                      <span className="flex items-center gap-1"><Award size={12} className="text-brand-cyan" /> DBD Reg: 0115567033027</span>
                    </div>
                  </div>

                </form>
              ) : (
                // Success Screen
                <div className="text-center py-16 space-y-6 flex flex-col items-center">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.1)]">
                    <CheckCircle size={56} />
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-black text-white">ส่งคำร้องข้อมูลเรียบร้อยแล้ว</h3>
                    <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto font-light">
                      ผู้เชี่ยวชาญบัญชีและภาษีของบริษัท บริษัท เอ แอนด์ เอ็น บิสซิเนส โซลูชั่นส์ จำกัด ได้รับข้อมูลความต้องการแล้ว เราจะวิเคราะห์ข้อมูลเพื่อทำใบเสนอราคาและติดต่อกลับท่านภายใน 24 ชม.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all"
                  >
                    ยื่นคำขออื่นเพิ่ม
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
