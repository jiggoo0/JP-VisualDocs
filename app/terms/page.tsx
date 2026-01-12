/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Gavel,
  Ban,
  BadgeCheck,
  ArrowLeft,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * [STRATEGY: LEGAL CLARITY - JP-VISOUL-DOCS]
 * - Accountability: ระบุขอบเขตการทำงานบน Search Engine อย่างชัดเจน
 * - Integrity: เน้นย้ำมาตรฐานจริยธรรมในการจัดการข้อมูล
 * - Professionalism: ใช้โครงสร้างที่ดูเป็นทางการและสแกนอ่านง่าย
 */

export default function TermsPage() {
  const lastUpdated = "12 มกราคม 2026";
  const brandName = "JP-VISOUL-DOCS";

  const terms = [
    {
      icon: <BadgeCheck className="h-5 w-5 text-blue-600" />,
      title: "ขอบเขตการให้บริการ",
      content:
        "JP-VISOUL-DOCS ให้บริการวิเคราะห์ จัดระเบียบ และยื่นคำร้องเพื่อจัดการข้อมูลตัวตนดิจิทัล ผลลัพธ์ในบางกรณีขึ้นอยู่กับการพิจารณาของผู้ให้บริการระบบการค้นหา (Third-party Platforms) ซึ่งอยู่นอกเหนือการควบคุมโดยตรงของเรา",
    },
    {
      icon: <Gavel className="h-5 w-5 text-blue-600" />,
      title: "ข้อตกลงการรักษาความลับ",
      content:
        "ทั้งสองฝ่ายตกลงที่จะรักษาความลับของรายละเอียดโครงการ ข้อมูลส่วนบุคคล และกลยุทธ์ที่ใช้ในการดำเนินงาน โดยข้อตกลงนี้จะมีผลบังคับใช้ถาวรแม้การรับบริการจะสิ้นสุดลงแล้วก็ตาม",
    },
    {
      icon: <Ban className="h-5 w-5 text-blue-600" />,
      title: "นโยบายการปฏิเสธผู้ใช้บริการ",
      content:
        "เราขอสงวนสิทธิ์ในการปฏิเสธการให้บริการแก่บุคคลหรือองค์กรที่ต้องการใช้บริการเพื่อจุดประสงค์ที่ผิดกฎหมาย ละเมิดสิทธิผู้อื่น หรือให้ข้อมูลเท็จเพื่อบิดเบือนข้อเท็จจริงในระดับร้ายแรง",
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-blue-600" />,
      title: "การจำกัดความรับผิดชอบ",
      content:
        "เรามุ่งเน้นความถูกต้องของข้อมูลตามที่ได้รับมอบจากท่าน เราจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการให้ข้อมูลที่เป็นเท็จหรือการปกปิดข้อมูลสำคัญที่มีผลต่อการดำเนินงาน",
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
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase dark:bg-zinc-900 dark:text-zinc-400">
              <Scale className="h-3 w-3" /> Terms of Service
            </div>
            <h1 className="font-thai text-4xl font-black tracking-tighter text-black sm:text-5xl dark:text-zinc-50">
              ข้อตกลงและเงื่อนไขการใช้บริการ
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
                การเริ่มใช้บริการจาก{" "}
                <span className="font-bold text-zinc-900 dark:text-zinc-100">
                  {brandName}
                </span>{" "}
                หมายถึงท่านได้อ่านและยอมรับในข้อตกลงและเงื่อนไขการให้บริการเหล่านี้
                เพื่อความโปร่งใสและประสิทธิภาพสูงสุดในกระบวนการทำงานร่วมกัน
              </p>
            </section>

            <div className="grid gap-6">
              {terms.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-start gap-6 rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-8 sm:flex-row dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-thai text-xl font-black text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="font-thai text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <section className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 p-10 text-white shadow-xl">
              <div className="relative z-10 space-y-4">
                <h2 className="font-thai text-xl font-black">
                  สอบถามรายละเอียดเงื่อนไขเพิ่มเติม
                </h2>
                <p className="font-thai leading-relaxed text-blue-100">
                  หากท่านมีข้อสงสัยเกี่ยวกับเงื่อนไขการให้บริการ
                  หรือต้องการปรับปรุงข้อตกลงเป็นกรณีพิเศษ (Enterprise NDA)
                  โปรดติดต่อทีมกฎหมายและฝ่ายประสานงานของเราได้ตลอดเวลาทำการ
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black tracking-widest text-blue-600 uppercase transition-colors hover:bg-zinc-100"
                  >
                    ติดต่อทีมประสานงาน
                  </Link>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 -mr-10 -mb-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
