/** @format */

import React from "react";

/**
 * [STRATEGY: SEARCH ENGINE AUTHORITY - JP-VISOUL-DOCS]
 * - Entity Linking: เชื่อมโยงตัวตนเข้ากับบริการจัดการชื่อเสียงและลบข้อมูลบน Google
 * - Trust Signals: ใช้ Schema เพื่อยืนยันความเชี่ยวชาญของทีม JP-VISOUL-DOCS
 */

interface SchemaProps {
  type?: "Person" | "HowTo";
  data?: Record<string, unknown>;
}

export default function Schema({ type = "Person" }: SchemaProps) {
  // 🌐 อัปเดตข้อมูลพื้นฐานเป็น JP-VISOUL-DOCS
  const siteUrl = "https://jp-visual-docs.vercel.app";
  const fullName = "JPVISOULDOCS Example";
  const contactEmail = "jpvisouldocs.example@gmail.com";

  // 1. Person & Organization Schema (เน้นความเป็นผู้เชี่ยวชาญด้าน ORM)
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: fullName,
        url: siteUrl,
        email: contactEmail,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/profile-photo.jpg`,
          width: "600",
          height: "600",
        },
        description:
          "ผู้เชี่ยวชาญด้านการจัดระเบียบข้อมูลตัวตนดิจิทัลและจัดการชื่อเสียงออนไลน์ (ORM) กู้คืนภาพลักษณ์และจัดการผลการค้นหาบน Google",
        jobTitle: "Digital Identity & ORM Specialist",
        worksFor: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "JP-VISOUL-DOCS",
          url: "https://jpvisouldocs.website",
        },
        knowsAbout: [
          "Online Reputation Management",
          "Search Engine Optimization (SEO)",
          "ลบข้อมูลบน Google",
          "จัดการข่าวเสีย",
          "แก้ไขข้อมูลบนโลกโซเชียล",
          "Digital Privacy & Security",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "JP-VISOUL-DOCS Reputation Services",
        image: `${siteUrl}/images/profile-photo.jpg`,
        "@id": `${siteUrl}/#service`,
        url: siteUrl,
        telephone: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bangkok",
          addressLocality: "Bangkok",
          addressRegion: "BKK",
          postalCode: "10000",
          addressCountry: "TH",
        },
        priceRange: "$$$",
        serviceType: "Online Reputation Management & SEO",
      },
    ],
  };

  // 2. HowTo Schema (ขั้นตอนการจัดการชื่อเสียงที่คนไทยเข้าใจง่าย)
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "ขั้นตอนการจัดระเบียบข้อมูลและจัดการชื่อเสียงออนไลน์โดย JP-VISOUL-DOCS",
    description:
      "กระบวนการจัดการข้อมูลเสียและสร้างภาพลักษณ์ใหม่ที่ถูกต้องบนระบบการค้นหา",
    step: [
      {
        "@type": "HowToStep",
        name: "Data Cleanup & Analysis",
        text: "วิเคราะห์ข้อมูลที่ส่งผลเสียต่อชื่อเสียง เช่น ข่าวเก่า หรือกระทู้ Pantip เพื่อวางแผนจัดการอย่างถูกต้อง",
        url: `${siteUrl}/case-study`,
      },
      {
        "@type": "HowToStep",
        name: "Digital Identity Alignment",
        text: "สร้างและจัดระเบียบข้อมูลตัวตนใหม่ผ่านเว็บไซต์ที่มีความน่าเชื่อถือสูง เพื่อยืนยันข้อมูลที่ถูกต้อง",
        url: `${siteUrl}/case-study`,
      },
      {
        "@type": "HowToStep",
        name: "Search Result Optimization",
        text: "ดันข้อมูลบวกที่จัดระเบียบแล้วให้ขึ้นหน้าแรก Google เพื่อเบียดแทนที่ข้อมูลที่ไม่ต้องการ",
        url: `${siteUrl}/case-study`,
      },
    ],
  };

  const finalSchema = type === "HowTo" ? howToSchema : personSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
