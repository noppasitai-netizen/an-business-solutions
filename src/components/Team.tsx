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
      // TODO(owner): เติมเลขผู้ทำบัญชีขึ้นทะเบียนจริงก่อนเผยแพร่หรือ merge
      value: "[...]",
    },
    {
      icon: <CalendarDays size={18} className="text-brand-cyan" />,
      label: "ประสบการณ์ (ปี)",
      // TODO(owner): เติมจำนวนปีประสบการณ์จริงที่ตรวจสอบได้ก่อนเผยแพร่หรือ merge
      value: "[...]",
    },
    {
      icon: <Building2 size={18} className="text-brand-cyan" />,
      label: "เลขนิติบุคคล 13 หลัก",
      // TODO(owner): เติมเลขนิติบุคคลจริงที่ตรวจสอบได้ก่อนเผยแพร่หรือ merge
      value: "[...]",
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate-50 text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
              {showPhoto ? (
                <Image
                  src={ownerPhotoSrc}
                  alt="นพสิทธิ์ เอี่ยมละออธนู"
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
                    <p className="text-sm font-bold text-slate-900">รูปเจ้าของสำนักงาน</p>
                    <p className="text-xs leading-relaxed text-slate-600">
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
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                นพสิทธิ์ เอี่ยมละออธนู
              </h2>
              <p className="text-base font-semibold text-slate-700">
                ผู้อำนวยการ / ผู้ทำบัญชีผู้รับผิดชอบ
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
                ขึ้นทะเบียนผู้ทำบัญชีและปฏิบัติตามมาตรฐานวิชาชีพของสภาวิชาชีพบัญชีฯ
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {qualifications.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-brand-cyan/20 bg-brand-cyan/10">
                    {item.icon}
                  </div>
                  <p className="min-h-[44px] text-xs font-semibold leading-snug text-slate-600">
                    {item.label}
                  </p>
                  <p className="mt-3 font-mono text-xl font-black text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
