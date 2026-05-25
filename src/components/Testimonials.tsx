"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      // TODO(owner): แทนที่ด้วยข้อความรีวิวจริงจากลูกค้าที่ได้รับอนุญาตแล้วก่อนเผยแพร่หรือ merge
      quote: "[...]",
      // TODO(owner): เติมชื่อย่อลูกค้าจริงที่ได้รับอนุญาตแล้ว
      name: "[...]",
      // TODO(owner): เติมประเภทธุรกิจและพื้นที่จริง เช่น ประเภทธุรกิจ + จังหวัด/เขต
      business: "[...]",
      // TODO(owner): เติมคะแนนดาวจริงจากแหล่งรีวิวที่ตรวจสอบได้
      rating: "[...]",
    },
    {
      // TODO(owner): แทนที่ด้วยข้อความรีวิวจริงจากลูกค้าที่ได้รับอนุญาตแล้วก่อนเผยแพร่หรือ merge
      quote: "[...]",
      // TODO(owner): เติมชื่อย่อลูกค้าจริงที่ได้รับอนุญาตแล้ว
      name: "[...]",
      // TODO(owner): เติมประเภทธุรกิจและพื้นที่จริง เช่น ประเภทธุรกิจ + จังหวัด/เขต
      business: "[...]",
      // TODO(owner): เติมคะแนนดาวจริงจากแหล่งรีวิวที่ตรวจสอบได้
      rating: "[...]",
    },
    {
      // TODO(owner): แทนที่ด้วยข้อความรีวิวจริงจากลูกค้าที่ได้รับอนุญาตแล้วก่อนเผยแพร่หรือ merge
      quote: "[...]",
      // TODO(owner): เติมชื่อย่อลูกค้าจริงที่ได้รับอนุญาตแล้ว
      name: "[...]",
      // TODO(owner): เติมประเภทธุรกิจและพื้นที่จริง เช่น ประเภทธุรกิจ + จังหวัด/เขต
      business: "[...]",
      // TODO(owner): เติมคะแนนดาวจริงจากแหล่งรีวิวที่ตรวจสอบได้
      rating: "[...]",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3.5 py-1.5 text-2xs font-bold uppercase tracking-wide text-brand-cyan">
            <Quote size={12} /> รีวิวลูกค้า
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            เสียงจากลูกค้าที่ใช้บริการ
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            โครงส่วนรีวิวนี้รอเติมข้อมูลจริงจากลูกค้าที่ได้รับอนุญาตแล้วเท่านั้น
          </p>
        </div>

        {/* TODO(owner): ทางเลือกคือฝัง Google Business Profile reviews แทนการกรอกรีวิวด้วยตนเอง */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <Quote size={22} className="text-brand-cyan" />
              <blockquote className="mt-5 min-h-[96px] text-sm leading-relaxed text-slate-700">
                &quot;{item.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <div className="mb-3 flex items-center gap-1 text-slate-300" aria-label="คะแนนดาว placeholder">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={15} />
                  ))}
                  <span className="ml-2 font-mono text-xs font-bold text-slate-600">คะแนนดาว: {item.rating}</span>
                </div>
                <p className="text-sm font-black text-slate-950">{item.name}</p>
                <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600">{item.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">
          หมายเหตุ: ส่วนนี้เป็นโครงตัวอย่างสำหรับจัดวางรีวิวเท่านั้น ให้ลบหมายเหตุนี้หลังใส่รีวิวจริงที่ได้รับอนุญาตแล้ว
        </p>
      </div>
    </section>
  );
}
