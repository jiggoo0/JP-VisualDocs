/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, FileLock2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * [STRATEGY: DATA PRIVACY & COMPLIANCE - JP-VISOUL-DOCS]
 * - Security: เน้นย้ำเรื่องการไม่เปิดเผยข้อมูลลูกค้า (Non-Disclosure)
 * - Transparency: ระบุวิธีการจัดเก็บและทำลายข้อมูลที่ชัดเจน
 * - Professionalism: ใช้ภาษาที่เป็นทางการและน่าเชื่อถือ
 */

export default function PrivacyPage() {
  const lastUpdated = "12 มกราคม 2026";
  const brandName = "JP-VISOUL-DOCS";

  const sections = [
    {
      icon: <Lock className="h-5 w-5 text-blue-600" />,
      title: "การเก็บรวบรวมข้อมูลส่วนบุคคล",
      content:
        "เราจัดเก็บเฉพาะข้อมูลที่จำเป็นสำหรับการดำเนินงานจัดการชื่อเสียงดิจิทัล เช่น ชื่อ-นามสกุล, ข้อมูลการติดต่อ และข้อมูลที่ปรากฏบนระบบการค้นหาที่ท่านต้องการให้เราวิเคราะห์และแก้ไขเท่านั้น",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
      title: "มาตรฐานการรักษาความลับ (NDA)",
      content:
        "ข้อมูลทุกอย่างที่ท่านส่งมอบให้เราจะถูกเก็บเป็นความลับภายใต้มาตรฐานสูงสุด เราไม่มีนโยบายเปิดเผยตัวตนลูกค้าหรือกรณีศึกษา (Case Study) ต่อสาธารณะโดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษร",
    },
    {
      icon: <EyeOff className="h-5 w-5 text-blue-600" />,
      title: "การใช้งานข้อมูล",
      content:
        "ข้อมูลของท่านจะถูกนำไปใช้เพื่อวัตถุประสงค์ในการยื่นคำร้องต่อผู้ให้บริการระบบการค้นหา (Search Engines) หรือแพลตฟอร์มโซเชียลมีเดีย เพื่อการลบหรือแก้ไขข้อมูลตามความต้องการของท่านเท่านั้น",
    },
    {
      icon: <FileLock2 className="h-5 w-5 text-blue-600" />,
      title: "ระยะเวลาการจัดเก็บและทำลายข้อมูล",
      content:
        "เมื่อโครงการเสร็จสิ้นหรือมีการยุติการรับบริการ เราจะทำการทำลายข้อมูลเชิงลึกและเอกสารส่วนบุคคลของท่านออกจากระบบสำรองภายใน 90 วัน เพื่อความปลอดภัยสูงสุดของตัวตนดิจิทัลของท่าน",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex flex-grow flex-col items-center px-6 py-20 sm:py-32">
        <div className="w-full max-w-3xl space-y-12">
          {/* 🔙 Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-zinc-400 uppercase transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>

          {/* 🏛️ Header */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-700 uppercase dark:bg-blue-950/30 dark:text-blue-400">
              <ShieldCheck className="h-3 w-3" /> Data Protection Policy
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-black sm:text-5xl dark:text-zinc-50">
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="text-sm font-bold tracking-widest text-zinc-400 uppercase italic">
              อัปเดตล่าสุด: {lastUpdated}
            </p>
          </header>

          <hr className="border-zinc-100 dark:border-zinc-900" />

          {/* 📄 Content Sections */}
          <div className="grid gap-12">
            <section className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="font-thai text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                ที่{" "}
                <span className="font-bold text-zinc-900 dark:text-zinc-100">
                  {brandName}
                </span>{" "}
                เราถือว่าความเป็นส่วนตัวของท่านคือความปลอดภัยสูงสุด
                นโยบายนี้อธิบายถึงวิธีการที่เราจัดการข้อมูลส่วนบุคคลของท่าน
                เพื่อให้ท่านมั่นใจได้ว่าข้อมูลของท่านจะถูกปกป้องอย่างเหมาะสมในระหว่างกระบวนการกู้คืนชื่อเสียงดิจิทัล
              </p>
            </section>

            <div className="grid gap-8 sm:grid-cols-2">
              {sections.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4 rounded-[2rem] border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-zinc-800">
                    {item.icon}
                  </div>
                  <h3 className="font-thai text-lg font-black text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="font-thai text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <section className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-10 shadow-xl dark:bg-zinc-50">
              <div className="relative z-10 space-y-4">
                <h2 className="font-thai text-xl font-black text-white dark:text-black">
                  ติดต่อสอบถามเรื่องข้อมูลส่วนบุคคล
                </h2>
                <p className="font-thai leading-relaxed text-zinc-400 dark:text-zinc-600">
                  หากท่านมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว
                  หรือต้องการขอใช้สิทธิ์ในการเข้าถึงและลบข้อมูลของท่าน
                  สามารถติดต่อเจ้าหน้าที่คุ้มครองข้อมูลได้ที่ <br />
                  <span className="font-bold text-blue-400 dark:text-blue-600">
                    jpvisouldocs.example@gmail.com
                  </span>
                </p>
              </div>
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-blue-600/10 blur-3xl" />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
