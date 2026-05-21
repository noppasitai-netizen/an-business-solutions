"use client";

import React from "react";
import { MessageCircle, Calculator, PhoneCall } from "lucide-react";

export default function StickyMobileCTA() {
  const lineOALink = "https://line.me/ti/p/~@anbusiness"; // Placeholder LINE ID URL, easy to edit
  const phoneNumber = "tel:0989123711";

  const handleScrollToEstimator = (e: React.MouseEvent) => {
    e.preventDefault();
    const estimatorSection = document.getElementById("estimator");
    if (estimatorSection) {
      estimatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 p-2 px-3 shadow-2xl flex items-center justify-between gap-2.5">
      
      {/* Phone Call */}
      <a
        href={phoneNumber}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl text-3xs font-bold text-slate-300 bg-slate-900 border border-slate-800 active:bg-slate-800 transition-colors"
      >
        <PhoneCall size={12} className="text-brand-cyan" />
        <span>โทรเลย</span>
      </a>

      {/* Line OA link */}
      <a
        href={lineOALink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl text-3xs font-bold text-white bg-[#06C755] hover:bg-[#05b34c] active:scale-95 transition-all shadow-[0_4px_10px_rgba(6,199,85,0.25)]"
      >
        <MessageCircle size={12} fill="white" />
        <span>แอด LINE</span>
      </a>

      {/* Estimator Scroll */}
      <a
        href="#estimator"
        onClick={handleScrollToEstimator}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl text-3xs font-bold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal active:scale-95 transition-all shadow-[0_4px_10px_rgba(6,182,212,0.25)]"
      >
        <Calculator size={12} />
        <span>ประเมินราคา</span>
      </a>

    </div>
  );
}
