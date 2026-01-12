/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  MessageSquare,
  ArrowUpRight,
  Lock,
  Mail,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

/**
 * [STRATEGY: SEARCH ENGINE RESTORATION - JP-VISOUL-DOCS]
 * - Clarity: ใช้ภาษาที่คนไทยเข้าใจง่าย แก้ปัญหาเรื่องข่าวเสียและข้อมูลเก่า
 * - Trust: เน้นย้ำเรื่องความลับของลูกค้าและระบบที่ตรวจสอบได้จริง
 */

const FADE_UP_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
};

const PROTOCOLS = [
  {
    step: "01",
    title: "สร้างพื้นที่สีขาวให้ชื่อของคุณ",
    description:
      "เราจะสร้างเว็บไซต์ที่มีความน่าเชื่อถือสูง เพื่อเป็นแหล่งข้อมูลหลักที่ถูกต้องที่สุดของคุณ เมื่อระบบของ Google ตรวจพบข้อมูลที่ทันสมัยและเป็นระเบียบ ข้อมูลนี้จะถูกดึงขึ้นมาแสดงผลเป็นอันดับต้นๆ แทนที่ข้อมูลเก่าที่ไม่ต้องการ",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
  },
  {
    step: "02",
    title: "จัดระเบียบและยืนยันตัวตน",
    description:
      "ทีมผู้เชี่ยวชาญจะช่วยเชื่อมโยงข้อมูลของคุณเข้ากับระบบสากล เพื่อยืนยันว่าข้อมูลชุดนี้คือ 'ความจริง' ผลที่ได้คือโปรไฟล์ของคุณจะแสดงผลอย่างเป็นมืออาชีพ มีความถูกต้อง และลดความสับสนเวลาคนนำชื่อคุณไปค้นหา",
    icon: <Lock className="h-6 w-6 text-white" />,
  },
  {
    step: "03",
    title: "ดันข้อมูลบวกเพื่อเบียดข้อมูลเสีย",
    description:
      "เราใช้เทคนิคการกระจายข้อมูลเชิงบวกไปยังแหล่งต่างๆ เพื่อช่วยเบียดลิงก์ที่ส่งผลกระทบต่อภาพลักษณ์ เช่น ข่าวเสียในอดีต หรือกระทู้ที่ให้ข้อมูลผิดๆ ให้ตกลงไปอยู่หน้าลึกๆ จนคนค้นหาไม่เจอตามธรรมชาติของ Search Engine",
    icon: <ArrowUpRight className="h-6 w-6 text-white" />,
  },
];

export default function CaseStudy() {
  const contactEmail = "jpvisouldocs.example@gmail.com";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Schema type="HowTo" />

      <Header />

      <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_UP_ANIMATION}
          className="mb-24 space-y-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-950/30">
            <Search className="h-3 w-3" /> Online Reputation Management
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-50">
            คืนความถูกต้อง... <br />
            ให้{" "}
            <span className="font-thai tracking-normal text-blue-600 underline decoration-blue-500/20 underline-offset-8">
              "ชื่อ"
            </span>{" "}
            ของคุณ
          </h1>
          <p className="font-thai mx-auto max-w-2xl text-xl leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
            เราเข้าใจว่าชื่อเสียงคือสิ่งที่คุณสร้างมาทั้งชีวิต เมื่อข้อมูลบน
            Google ไม่ตรงกับความจริง เราจึงเข้ามาช่วยจัดระเบียบข้อมูลใหม่
            เพื่อปกป้องตัวตนดิจิทัลของคุณให้ดีที่สุด
          </p>

          <div className="flex justify-center pt-4">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-2 text-xs font-bold text-zinc-400 transition-colors hover:text-blue-600"
            >
              <Mail className="h-4 w-4" />
              ปรึกษาทีมผู้เชี่ยวชาญ JP-VISOUL-DOCS
            </a>
          </div>
        </motion.div>

        {/* Protocol Steps */}
        <div className="grid gap-10">
          {PROTOCOLS.map((item) => (
            <motion.section
              key={item.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_ANIMATION}
              className="group relative rounded-[3.5rem] border border-zinc-100 bg-zinc-50/50 p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
            >
              <div className="flex flex-col items-start gap-10 sm:flex-row">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[2rem] bg-zinc-900 text-2xl font-black text-white shadow-xl transition-transform duration-500 group-hover:scale-110 dark:bg-blue-600">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl leading-tight font-black text-zinc-900 sm:text-3xl dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="font-thai text-lg leading-relaxed font-medium text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION}
          className="shadow-3xl relative mt-32 overflow-hidden rounded-[4.5rem] border border-white/5 bg-zinc-950 p-10 text-center text-white sm:p-16 dark:bg-zinc-900"
        >
          <div className="relative z-10 space-y-10">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black tracking-widest uppercase">
                <Lock className="h-3 w-3 text-emerald-400" />
                Official Data Protection Protocol
              </div>
            </div>

            <h2 className="text-4xl leading-tight font-black tracking-tighter sm:text-6xl">
              เริ่มจัดระเบียบข้อมูล <br className="sm:hidden" />{" "}
              ของคุณตั้งแต่วันนี้
            </h2>

            <p className="font-thai mx-auto max-w-xl text-lg leading-relaxed font-medium text-zinc-300 opacity-70">
              เรายึดถือความลับของลูกค้าเป็นอันดับหนึ่ง
              และพร้อมดูแลภาพลักษณ์ของคุณ
              อย่างเป็นระบบเพื่อให้ได้ผลลัพธ์ที่จับต้องได้จริง
            </p>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-4 rounded-full bg-blue-600 px-14 py-7 text-xl font-black text-white shadow-2xl shadow-blue-600/30 transition-all hover:scale-105 hover:bg-white hover:text-black active:scale-95"
              >
                <MessageSquare className="h-6 w-6" />
                เริ่มแผนจัดการชื่อเสียงออนไลน์
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]"></div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
