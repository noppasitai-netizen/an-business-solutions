"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BadgeCheck, Building2, CalendarDays, UserRoundCheck } from "lucide-react";

const ownerPhotoSrc = "/team/owner.jpg";

export default function Team() {
  const [showPhoto, setShowPhoto] = useState(true);

  const qualifications = [
    {
      icon: <BadgeCheck size={18} className="text-brand-cyan" />,
      label: "เลขผู้ทำบัญชีขึ้นทะเบียน (สภาวิชาชีพบัญชี/TFAC)",
      value: "1100701975072",
    },
    {
      icon: <CalendarDays size={18} className="text-brand-cyan" />,
      label: "ประสบการณ์ (ปี)",
      value: "5 ปี",
    },
    {
      icon: <Building2 size={18} className="text-brand-cyan" />,
      label: "เลขนิติบุคคล 13 หลัก",
      value: "0115567033027",
    },
  ];

  const experienceAreas = [
    "ธุรกิจปั๊มน้ำมัน",
    "ให้เช่าอสังหาริมทรัพย์",
    "ให้เช่าพื้นที่ทำตลาด",
    "ขายของออนไลน์ผ่านแพลตฟอร์ม",
  ];

  return (
    <section
      id="team"
      className="relative overflow-hidden border-y border-slate-900 bg-gradient-to-b from-[#050814] via-[#090f24] to-[#050814] py-20 text-slate-100 dashboard-grid-line"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="glass-card relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 shadow-2xl shadow-black/40">
              {showPhoto ? (
                <Image
                  src={ownerPhotoSrc}
                  alt="นพสิทธิ์ เอี่ยมลออธนี"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                  priority={false}
                  onError={() => setShowPhoto(false)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 p-5 text-brand-cyan">
                    <UserRoundCheck size={44} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-white">รูปเจ้าของสำนักงาน</p>
                    <p className="text-xs leading-relaxed text-slate-400">
                      TODO: เพิ่มไฟล์รูปจริงที่ public/team/owner.jpg ก่อนเผยแพร่หน้าเว็บจริง
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3.5 py-1.5 text-2xs font-bold uppercase tracking-wide text-brand-cyan">
              <UserRoundCheck size={12} /> ทีมงานผู้รับผิดชอบ
            </div>

            <div className="mt-5 space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                นพสิทธิ์ เอี่ยมลออธนี
              </h2>
              <p className="text-base font-semibold text-brand-cyan">
                กรรมการ
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                ขึ้นทะเบียนผู้ทำบัญชีและปฏิบัติตามมาตรฐานวิชาชีพของสภาวิชาชีพบัญชีฯ
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {qualifications.map((item) => (
                <div key={item.label} className="glass-card rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-brand-cyan/25 bg-brand-cyan/10">
                    {item.icon}
                  </div>
                  <p className="min-h-[44px] text-xs font-semibold leading-snug text-slate-300">
                    {item.label}
                  </p>
                  <p className="mt-3 font-mono text-xl font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="glass-card mt-8 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                ประสบการณ์ธุรกิจที่ดูแล
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experienceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-1.5 text-xs font-bold text-cyan-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
