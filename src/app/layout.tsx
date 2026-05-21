import type { Metadata } from "next";
import { Prompt, Inter } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "สำนักงานบัญชี SME ใช้ AI Automation | A&N Business Solutions",
  description: "รับทำบัญชีรายเดือน ยื่นภาษี ปิดงบการเงิน ประกันสังคม งานทะเบียนบริษัท และวางระบบบัญชีสำหรับ SME พร้อม AI Automation ช่วยตรวจเอกสาร แจ้งเตือนเดดไลน์ และลดงานซ้ำ โดยทีมนักบัญชีหรือผู้ทำบัญชีตรวจทานก่อนยื่นจริง",
  keywords: [
    "สำนักงานบัญชี",
    "รับทำบัญชีรายเดือน",
    "ทำบัญชี SME",
    "ยื่น ภพ.30",
    "ยื่น ภงด.3",
    "ยื่น ภงด.53",
    "ปิดงบการเงินบริษัท",
    "ประกันสังคม",
    "จดทะเบียนบริษัท",
    "บัญชี AI Automation",
    "วางระบบบัญชี",
    "FlowAccount",
    "PEAK",
    "Express"
  ],
  authors: [{ name: "A&N Business Solutions" }],
  openGraph: {
    title: "สำนักงานบัญชี SME ใช้ AI Automation | A&N Business Solutions",
    description: "รับทำบัญชีรายเดือน ยื่นภาษี ปิดงบการเงิน ประกันสังคม และวางระบบบัญชีสำหรับ SME ด้วย AI ช่วยสแกนและเตือนเดดไลน์ โดยทีมนักบัญชีหรือผู้ทำบัญชีตรวจทานก่อนบันทึกและยื่นแบบภาษีจริง",
    url: "https://www.annbusiness.com",
    siteName: "A&N Business Solutions",
    locale: "th_TH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.annbusiness.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness / AccountingService Schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "บริษัท เอ แอนด์ เอ็น บิสซิเนส โซลูชั่นส์ จำกัด (A&N Business Solutions Co., Ltd.)",
    "alternateName": "A&N Business Solutions",
    "image": "https://www.annbusiness.com/logo.png",
    "description": "สำนักงานบัญชีสำหรับ SME ไทย ให้บริการทำบัญชีรายเดือน ภาษีรายเดือน ประกันสังคม ปิดงบการเงิน วางระบบบัญชี และ AI Automation สำหรับงานบัญชี",
    "taxID": "0115567033027",
    "telephone": "098-912-3711",
    "email": "Noppasit@annbusiness.com",
    "url": "https://www.annbusiness.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ตลาดพีทีที ปาร์ค มอลล์ 25/131 หมู่ที่ 2 ต.บางแก้ว อ.บางพลี",
      "addressLocality": "สมุทรปราการ",
      "postalCode": "10540",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.65545",
      "longitude": "100.67823"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "17:30"
    },
    "priceRange": "$$"
  };

  return (
    <html
      lang="th"
      className={`${prompt.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-100 bg-[#070b19] min-h-screen selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
