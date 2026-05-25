"use client";

import React from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const lineOALink = "https://line.me/ti/p/~@anbusiness";
const phoneNumber = "098-912-3711";
const email = "Noppasit@annbusiness.com";
const address =
  "ออฟฟิศตั้งอยู่ใน โครงการตลาดพีทีที ปาร์ค มอลล์ (PTT Park Mall บางนา-ตราด กม.8) เลขที่ 25/131 หมู่ที่ 2 ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.4032709338862!2d100.64150458862227!3d13.624306704494614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5f00f4588e65%3A0xcd50e4a5ea0490c5!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lia4Lix4LiN4LiK4Li1IOC4muC4o-C4tOC4qeC4seC4lyDguYDguK0g4LmB4Lit4LiZ4LiU4LmMIOC5gOC4reC5h-C4mSDguJrguLTguKrguIvguLTguYDguJnguKog4LmC4LiL4Lil4Li54LiK4Lix4LmI4LiZ4Liq4LmMIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sth!2sth!4v1779701539732!5m2!1sth!2sth";

export default function LocationContact() {
  return (
    <section id="location-contact" className="py-20 bg-[#070b19] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3.5 py-1.5 text-2xs font-bold uppercase tracking-wide text-brand-cyan">
            <MapPin size={12} /> ตัวตนจริง
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ที่ตั้งสำนักงานและช่องทางติดต่อโดยตรง
          </h2>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed text-slate-400 sm:text-base">
            ลูกค้าสามารถตรวจสอบที่ตั้งสำนักงาน เวลาทำการ และช่องทางติดต่อได้จากข้อมูลด้านล่าง
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 text-left shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/10 p-2 text-brand-cyan">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">สำนักงาน A&N Business Solutions</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/10 p-2 text-brand-cyan">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">เวลาทำการ</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    วันจันทร์-ศุกร์ เวลา 08:30-17:30 น.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6">
                <h3 className="text-sm font-black text-white">ช่องทางติดต่อ</h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="tel:0989123711"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-xs font-bold text-slate-200 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
                  >
                    <Phone size={14} /> {phoneNumber}
                  </a>
                  <a
                    href={lineOALink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#06C755] px-4 py-3 text-xs font-extrabold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle size={14} /> LINE @anbusiness
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-xs font-bold text-slate-200 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan sm:col-span-2"
                  >
                    <Mail size={14} /> {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl">
            <iframe
              title="A&N Business Solutions office map"
              src={mapEmbedUrl}
              className="h-[360px] w-full sm:h-[440px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
