/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Schema from "@/components/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 🌐 เปลี่ยนฐาน URL เป็นโดเมน Vercel ปัจจุบันของคุณ
  metadataBase: new URL("https://jp-visual-docs.vercel.app"),
  title: {
    default:
      "JPVISOULDOCS Example | จัดระเบียบข้อมูลตัวตนและจัดการชื่อเสียงออนไลน์",
    template: "%s | JP-VISOUL-DOCS",
  },
  description:
    "บริการจัดระเบียบข้อมูลตัวตนดิจิทัล จัดการชื่อเสียงออนไลน์ ลบข้อมูลบน Google ลบข่าวเสีย แก้ไขข้อมูลโซเชียล เพื่อภาพลักษณ์ที่ถูกต้องและน่าเชื่อถือที่สุด โดยทีม JP-VISOUL-DOCS",
  keywords: [
    "JPVISOULDOCS Example",
    "JP-VISOUL-DOCS",
    "จัดการชื่อเสียงออนไลน์",
    "ลบข่าวเสีย",
    "ลบกระทู้ Pantip",
    "ลบข้อมูลบน Google",
    "แก้ไขข้อมูลบนโลกโซเชียล",
    "จัดระเบียบข้อมูลตัวตน",
    "ตรวจสอบความถูกต้องของโปรไฟล์",
    "Digital Identity Verification",
  ],
  authors: [{ name: "JP-VISOUL-DOCS Team" }],
  openGraph: {
    title: "JP-VISOUL-DOCS | Official Identity & ORM Services",
    description:
      "คืนความถูกต้องให้ชื่อของคุณบนโลกออนไลน์ จัดการข่าวเสียและข้อมูลที่ส่งผลกระทบต่อภาพลักษณ์",
    url: "https://jp-visual-docs.vercel.app",
    siteName: "JP-VISOUL-DOCS",
    images: [
      {
        url: "/images/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "JP-VISOUL-DOCS Professional Profile Management",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased dark:bg-black`}
      >
        {/* 🛠️ ยืนยันตัวตนระดับ Global Entity ผ่านระบบ Schema ของ JP-VISOUL-DOCS */}
        <Schema type="Person" />
        {children}
      </body>
    </html>
  );
}
