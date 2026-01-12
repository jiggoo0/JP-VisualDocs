/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCircle2,
  FileText,
  AlertCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

/**
 * [STRATEGY: CONTENT-DRIVEN CONVERSION]
 * - SEO Focus: "การจัดการข้อมูลเสียบน Google"
 * - Authority: แสดงให้เห็นว่า JP-VISOUL-DOCS เข้าใจปัญหาของลูกค้าจริง
 * - Design: Modern Minimalist พร้อมการ์ดบทความที่อ่านง่าย
 */

export default function Home() {
  const brandName = "JP-VISOUL-DOCS";
  const serviceTitle = "ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (ORM)";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex-grow">
        {/* 🏛️ Hero Section */}
        <section className="flex flex-col items-center justify-center px-6 py-24 sm:py-32">
          <div className="w-full max-w-4xl space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-10 sm:flex-row sm:items-start"
            >
              <div className="group relative">
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
                <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-[2.2rem] border-2 border-white bg-blue-600 text-4xl font-black text-white shadow-2xl dark:border-zinc-800">
                  JPV
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 pt-4 text-center sm:items-start sm:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase dark:bg-blue-950/30">
                  <CheckCircle2 className="h-3 w-3" /> Search Engine Restoration
                  Active
                </div>
                <h1 className="text-5xl font-black tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-50">
                  {brandName}
                </h1>
                <p className="font-thai text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {serviceTitle}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl leading-tight font-black tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                "คืนความถูกต้องให้ชื่อของคุณ <br className="hidden sm:block" />
                บนระบบการค้นหาระดับโลก"
              </h2>
              <p className="font-thai max-w-3xl text-xl leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                เราช่วยให้คุณกลับมาควบคุมสิ่งที่ผู้คนเห็นบน Google ได้อีกครั้ง
                ด้วยเทคนิคการจัดระเบียบข้อมูลตัวตนใหม่
                เพื่อปกป้องความน่าเชื่อถือที่คุณสร้างมาทั้งชีวิต
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Link
                href="/about"
                className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-12 text-lg font-black text-white shadow-xl shadow-blue-500/10 transition-all hover:bg-blue-600 active:scale-95 dark:bg-white dark:text-black"
              >
                รู้จักทีมงานเรา{" "}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-study"
                className="flex h-16 items-center justify-center rounded-2xl border-2 border-zinc-200 px-12 text-lg font-black transition-all hover:border-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-100"
              >
                ดูขั้นตอนจัดการชื่อเสียง
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 📄 Featured Blog Section: ORM Guide */}
        <section className="border-y border-zinc-100 bg-zinc-50 py-24 dark:border-zinc-900 dark:bg-zinc-950/50">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-end justify-between border-b border-zinc-200 pb-8 dark:border-zinc-800">
                <div className="space-y-4">
                  <h2 className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
                    Expert Insights
                  </h2>
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-zinc-50">
                    บทความแนะนำ
                  </h3>
                </div>
                <Link
                  href="/case-study"
                  className="hidden items-center gap-2 text-xs font-bold text-zinc-400 transition-colors hover:text-blue-600 sm:flex"
                >
                  อ่านบทความทั้งหมด <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Main Article Card */}
              <article className="group relative overflow-hidden rounded-[3rem] border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:shadow-blue-500/5 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-emerald-600 uppercase">
                    <AlertCircle className="h-4 w-4" /> ปัญหาและทางออก
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-3xl leading-tight font-black text-zinc-900 sm:text-4xl dark:text-zinc-50">
                      วิธีจัดการข้อมูลเสียบน Google:{" "}
                      <br className="hidden sm:block" />
                      เมื่อชื่อเสียงของคุณถูกคุกคามโดยข้อมูลเก่า
                    </h4>
                    <p className="font-thai text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                      ในยุคดิจิทัล "ชื่อ"
                      ของคุณถูกตัดสินตั้งแต่วินาทีแรกที่คนกดค้นหาบน Google...
                      แต่จะเกิดอะไรขึ้นถ้าข้อมูลที่ปรากฏไม่ใช่ความจริง
                      หรือเป็นข่าวเสียในอดีตที่คอยรั้งคุณไว้? ทีม JP-VISOUL-DOCS
                      สรุป 3
                      กลยุทธ์การกู้คืนชื่อเสียงที่ใช้งานได้จริงในระดับสากล
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-[10px] font-bold tracking-wider text-zinc-500 uppercase dark:bg-zinc-800">
                      #ORM
                    </span>
                    <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-[10px] font-bold tracking-wider text-zinc-500 uppercase dark:bg-zinc-800">
                      #GoogleCleanUp
                    </span>
                    <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-[10px] font-bold tracking-wider text-zinc-500 uppercase dark:bg-zinc-800">
                      #DigitalPrivacy
                    </span>
                  </div>
                  <Link
                    href="/case-study"
                    className="inline-flex items-center gap-2 font-black text-blue-600 transition-all group-hover:gap-4"
                  >
                    อ่านวิธีแก้ปัญหาฉบับเต็ม{" "}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </motion.div>
          </div>
        </section>

        {/* 🔍 Trust Infrastructure */}
        <section className="flex flex-col items-center justify-center px-6 py-24">
          <div className="w-full max-w-4xl border-t border-zinc-100 pt-16 dark:border-zinc-900">
            <p className="font-thai mb-8 text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">
              ระบบตรวจสอบและยืนยันข้อมูล
            </p>
            <div className="flex flex-wrap items-center gap-10">
              <div className="group flex cursor-default items-center gap-2 text-sm font-black text-zinc-400">
                <ShieldCheck className="h-4 w-4 opacity-40 transition-colors group-hover:text-blue-500" />{" "}
                Data Integrity Protocol
              </div>
              <div className="group flex cursor-default items-center gap-2 text-sm font-black text-zinc-400">
                <FileText className="h-4 w-4 opacity-40 transition-colors group-hover:text-blue-500" />{" "}
                Reputation Management
              </div>
              <div className="group flex cursor-default items-center gap-2 text-sm font-black text-zinc-400">
                <Search className="h-4 w-4 opacity-40 transition-colors group-hover:text-blue-500" />{" "}
                SEO Displacement Expert
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
