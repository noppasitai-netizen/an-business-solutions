"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Cpu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "บริการ", href: "#services" },
    { label: "ทีมงาน", href: "#team" },
    { label: "รีวิว", href: "#testimonials" },
    { label: "ระบบงาน", href: "#ai-workflow" },
    { label: "ประเมินราคา", href: "#estimator" },
    { label: "แพ็กเกจ", href: "#pricing" },
    { label: "เดดไลน์ภาษี", href: "#deadlines" },
    { label: "คำถามที่พบบ่อย", href: "#faq" },
    { label: "ที่ตั้ง", href: "#location-contact" },
    { label: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav py-3.5 shadow-2xl shadow-brand-navy-deep/40"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group focus:outline-none">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                A&N
              </span>
              <span className="text-3xs sm:text-2xs uppercase bg-brand-cyan/10 border border-brand-cyan/35 text-brand-cyan px-2 py-0.5 rounded-full flex items-center gap-1 font-bold font-mono">
                <Cpu size={10} className="text-brand-cyan" /> Smart Office
              </span>
            </div>
            <span className="text-4xs sm:text-3xs uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
              Business Solutions
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-slate-300 hover:text-brand-cyan transition-colors nav-link py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#estimator"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal rounded-full shadow-[0_4px_10px_rgba(6,182,212,0.12)] hover:shadow-[0_0_14px_rgba(6,182,212,0.28)] transition-all hover:scale-105"
            >
              ประเมินราคาฟรี
              <ChevronRight size={14} className="ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#050814]/98 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "68px" }}
      >
        <nav className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-bold text-slate-300 hover:text-brand-cyan transition-colors border-b border-slate-900 pb-3"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#estimator"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3.5 text-sm font-extrabold text-brand-navy-dark bg-gradient-to-r from-brand-cyan to-brand-teal rounded-xl hover:shadow-lg transition-all"
          >
            ประเมินราคาฟรี
          </a>
        </nav>
      </div>
    </header>
  );
}
