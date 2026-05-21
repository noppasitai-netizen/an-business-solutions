"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingLineButton() {
  const lineOALink = "https://line.me/ti/p/~@anbusiness"; // Placeholder LINE OA ID, easy to modify

  return (
    <a
      href={lineOALink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 right-6 bottom-20 lg:bottom-6 bg-[#06C755] hover:bg-[#05b34c] text-white p-3.5 rounded-full shadow-[0_4px_16px_rgba(6,199,85,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact us on LINE"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#06C755]/40 animate-ping -z-10 group-hover:animate-none" />
      
      {/* Icon */}
      <MessageCircle size={24} className="shrink-0 transition-transform duration-300 group-hover:rotate-12" fill="white" />
      
      {/* Tooltip on Hover (Desktop only) */}
      <span className="absolute right-14 bg-slate-900 border border-slate-800 text-slate-200 text-3xs font-semibold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        แอด LINE @anbusiness
      </span>
    </a>
  );
}
