export interface PackageRecommendation {
  pkg: string;
  price: string;
  includes: string[];
}

export function CalculatePackage(
  businessType: string,
  hasVat: string,
  documentCount: string,
  employeeCount: string,
  hasBacklog: string
): PackageRecommendation {
  
  // Custom case checks
  const isCustomOrComplex = 
    documentCount === "มากกว่า 220" ||
    employeeCount === "มากกว่า 30" ||
    employeeCount === "11–30" ||
    hasBacklog === "มากกว่า 1 ปี" ||
    businessType === "แฟรนไชส์" ||
    businessType === "ธุรกิจออนไลน์ / Marketplace" ||
    businessType === "พื้นที่ให้เช่า / อสังหา" ||
    businessType === "รับเหมา / โครงการ";

  if (isCustomOrComplex) {
    return {
      pkg: "Custom / Multi-Branch",
      price: "เริ่มต้น 18,000 บาท/เดือน",
      includes: [
        "ออกแบบระบบบัญชีและการจัดส่งเอกสารตามลักษณะกิจการเฉพาะทาง",
        "ทำบัญชีรายเดือน-แยกแผนก หรือแยกสาขา",
        "จัดหมวดหมู่รายได้/ค่าใช้จ่ายแยกตามช่องทาง/โครงการ",
        "ยื่นภาษี ภพ.30, ภงด.1, ภงด.3, ภงด.53 ประจำเดือน",
        "สรุปงบการเงินรายเดือนพร้อม Dashboard เชิงลึก",
        "บริการปิดงบการเงินประจำปีและประสานงานผู้สอบบัญชี",
        "สิทธิ์เข้าใช้ระบบเตือนเอกสารขาด และ Checklist ผ่านช่องทางออนไลน์",
        "ให้คำปรึกษาภาษีเชิงกลยุทธ์รายไตรมาส"
      ]
    };
  }

  // Controller Package: docs up to 220, employees up to 10
  if (documentCount === "121–220" || employeeCount === "6–10") {
    return {
      pkg: "Controller (บัญชีเชิงบริหาร)",
      price: "13,500 บาท/เดือน",
      includes: [
        "เอกสารไม่เกิน 220 รายการ/เดือน",
        "ทำบัญชีรายเดือนครบชุด",
        "ยื่นภาษีรายเดือนที่เกี่ยวข้อง (ภพ.30, ภงด.1, ภงด.3, ภงด.53)",
        "Payroll และประกันสังคม ไม่เกิน 10 คน",
        "Monthly dashboard สำหรับเจ้าของกิจการเห็นสถานะชัดเจน",
        "Review รายการเสี่ยงภาษีรายเดือน",
        "วางระบบเอกสารและ Approval flow เบื้องต้น",
        "Quarterly review สรุปงาน 1 ครั้ง/ไตรมาส"
      ]
    };
  }

  // Growth Package: docs up to 120, employees up to 5
  if (documentCount === "71–120" || employeeCount === "1–5") {
    return {
      pkg: "Growth (แนะนำ)",
      price: "8,900 บาท/เดือน",
      includes: [
        "เอกสารไม่เกิน 120 รายการ/เดือน",
        "ทำบัญชีรายเดือน",
        "กระทบยอดธนาคารเบื้องต้น (Bank Reconciliation)",
        "ยื่น ภพ.30, ภงด.1, ภงด.3, ภงด.53",
        "Payroll และนำส่งประกันสังคม ไม่เกิน 5 คน",
        "ระบบติดตามเอกสารค้างส่งออนไลน์",
        "Monthly management summary รายงานสรุปสั้นให้ผู้บริหาร",
        "ปรึกษานักบัญชีผ่าน LINE / โทรศัพท์"
      ]
    };
  }

  // Smart VAT Package: registered VAT, docs up to 70
  if (hasVat === "จด VAT แล้ว" || documentCount === "31–70") {
    return {
      pkg: "Smart VAT",
      price: "5,900 บาท/เดือน",
      includes: [
        "เอกสารไม่เกิน 70 รายการ/เดือน",
        "ทำบัญชีรายเดือน",
        "รายงานภาษีซื้อ-ขาย ยื่นแบบ ภพ.30",
        "ยื่น ภงด.1, ภงด.3, ภงด.53 ประจำเดือนตามรายการที่มี",
        "ระบบ checklist ภาษีซื้อขายและหัก ณ ที่จ่าย",
        "แจ้งเตือนเดดไลน์ยื่นแบบรายเดือนผ่านระบบ",
        "ปรึกษาประเด็นเอกสารหัก ณ ที่จ่าย และบิลซื้อขาย"
      ]
    };
  }

  // Default to Starter: docs up to 30, no VAT, no employees
  return {
    pkg: "Starter",
    price: "2,500 บาท/เดือน",
    includes: [
      "เอกสารไม่เกิน 30 รายการ/เดือน (ยังไม่จด VAT)",
      "ทำบัญชีรายเดือน",
      "ตรวจบิลและเอกสารรับจ่ายเบื้องต้น",
      "ยื่น ภงด.3, ภงด.53 ตามรายการที่มี",
      "ระบบ checklist เอกสาร",
      "สรุปรายการเอกสารที่ขาดยื่นประจำเดือน",
      "ปรึกษาบัญชีและภาษีพื้นฐานผ่านกลุ่ม LINE"
    ]
  };
}
