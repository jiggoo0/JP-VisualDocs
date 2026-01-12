/** @format */

"use client";

import React from "react";
// ลบ Link ออกเพื่อแก้ Lint Warning
import { motion, Variants } from "framer-motion";
import {
  Mail,
  Globe,
  ShieldCheck,
  Lock,
  ExternalLink,
  MessageSquare,
  Facebook,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * [STRATEGY: MULTI-CHANNEL SUPPORT - JP-VISOUL-DOCS]
 * - Accessibility: มุ่งเน้นการติดต่อสื่อสารที่รวดเร็วและปลอดภัย
 * - Verification: ใช้เฉพาะช่องทางที่ได้รับการรับรอง (Verified Channels) เท่านั้น
 */

const FADE_UP: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function ContactPage() {
  const projectTitle = "JP-VISOUL-DOCS";
  const contactEmail = "jpvisouldocs.example@gmail.com";

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61575050976562",
    messenger: "https://m.me/61575050976562",
    line: "https://lin.ee/ZYTzBaIE",
    lineId: "@462fqtfc",
  };

  const domains = [
    "https://jpvisouldocs.website",
    "https://www.jpvisouldocs.online",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex flex-grow flex-col items-center px-6 py-20 sm:py-32">
        <div className="w-full max-w-2xl space-y-16">
          {/* 🏛️ Section 1: Strategic Header */}
          <motion.header
            initial="hidden"
            animate="show"
            variants={FADE_UP}
            className="space-y-6 text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase dark:bg-emerald-950/30 dark:text-emerald-400">
              <Lock className="h-3 w-3" /> Secure Consult Channel
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-black sm:text-5xl dark:text-zinc-50">
              ช่องทางการสื่อสารทางการ
            </h1>
            <p className="font-thai text-xl font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
              ทีมงาน{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {projectTitle}
              </span>{" "}
              พร้อมให้คำปรึกษาผ่านทุกช่องทางที่คุณสะดวก
              ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุด
            </p>
          </motion.header>

          {/* 🛡️ Section 2: Core Contact Channels */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="grid gap-6 sm:grid-cols-2"
          >
            {/* LINE Official */}
            <a
              href={socialLinks.line}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-zinc-100 bg-zinc-50/50 p-8 transition-all hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/5 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg shadow-green-500/20">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="text-[10px] font-black tracking-[0.2em] text-green-600 uppercase">
                LINE Official
              </h3>
              <p className="mt-4 text-lg font-black text-black underline decoration-green-500/30 dark:text-white">
                ID: {socialLinks.lineId}
              </p>
              <p className="font-thai mt-2 text-xs font-bold tracking-widest text-zinc-400 uppercase italic">
                ปรึกษาด่วนผ่านแชท
              </p>
            </a>

            {/* Email Support */}
            <div className="group rounded-3xl border border-zinc-100 bg-zinc-50/50 p-8 transition-all hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-900/30">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
                Official Email
              </h3>
              <p className="mt-4 truncate text-lg font-black text-black dark:text-white">
                <a
                  href={`mailto:${contactEmail}`}
                  className="decoration-blue-500/50 underline-offset-4 hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
              <p className="font-thai mt-2 text-xs font-bold tracking-widest text-zinc-400 uppercase italic">
                ตอบกลับใน 24 ชม.
              </p>
            </div>
          </motion.section>

          {/* 🔍 Section 3: Social & Infrastructure */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black tracking-tight text-black uppercase dark:text-zinc-50">
                Verified Identity
              </h2>
              <div className="h-px flex-grow bg-zinc-100 dark:bg-zinc-900" />
            </div>

            <div className="grid gap-4">
              {/* Facebook Page */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-transparent bg-zinc-100/30 p-6 shadow-sm transition-all hover:bg-[#1877F2] hover:text-white dark:bg-zinc-900/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2]/10 group-hover:bg-white/20">
                    <Facebook className="h-5 w-5 text-[#1877F2] group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black tracking-wider uppercase">
                      Facebook Page
                    </span>
                    <span className="font-thai text-[10px] font-bold tracking-widest text-zinc-400 uppercase italic opacity-60 group-hover:text-white/70">
                      ข่าวสารและการอัปเดต
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>

              {/* Official Domains */}
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="mb-4 flex items-center gap-2 text-zinc-400">
                  <Globe className="h-4 w-4" />
                  <span className="text-[10px] font-black tracking-widest uppercase">
                    Authorized Domains
                  </span>
                </div>
                <div className="space-y-3">
                  {domains.map((domain, index) => (
                    <a
                      key={index}
                      href={domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm font-bold text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-400"
                    >
                      {domain.replace("https://", "")}
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ⚡ Strategic Commitment Badge */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="shadow-3xl relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-10 dark:bg-zinc-50"
          >
            <div className="relative z-10 flex flex-col items-center gap-6">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <p className="font-thai text-center text-base font-bold leading-relaxed text-zinc-300 sm:text-lg dark:text-zinc-600">
                <span className="text-white italic dark:text-black">
                  "ความพึงพอใจและความลับของคุณ คือหัวใจของงานเรา"
                </span>{" "}
                <br />
                พร้อมรับฟังปัญหาและช่วยคุณวางแผนกู้คืนชื่อเสียง{" "}
                <br className="hidden sm:block" />
                อย่างเป็นระบบและเห็นผลจริง
              </p>
            </div>
            <div className="pointer-events-none absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl" />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
