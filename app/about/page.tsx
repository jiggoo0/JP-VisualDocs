/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  MessageSquare,
  ArrowRight,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * [STRATEGY: EXPERT AUTHORITY & TRUST]
 * - Storytelling: เน้นการแก้ปัญหาชื่อเสียงออนไลน์ (ORM) ให้กับคนไทย
 * - Expert Team: ชูจุดเด่นเรื่องการทำงานเป็นทีม (Expert 5 ID)
 * - Brand Identity: เชื่อมโยงทุกองค์ประกอบเข้ากับ JP-VISOUL-DOCS
 */

export default function AboutPage() {
  const projectTitle = "JP-VISOUL-DOCS";
  const contactEmail = "jpvisouldocs.example@gmail.com";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 dark:bg-black dark:selection:bg-blue-900">
      <Header />

      <main className="flex flex-grow flex-col items-center px-6 py-16 sm:py-32">
        <article className="w-full max-w-3xl space-y-16">
          {/* 🏛️ Header Identity */}
          <header className="space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-950/30">
              Online Reputation Management Expert
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-zinc-900 sm:text-6xl dark:text-zinc-50">
              เบื้องหลังทีม <br className="sm:hidden" />
              <span className="font-thai tracking-normal text-blue-600">
                {projectTitle}
              </span>
            </h1>

            {/* Contact Quick Link */}
            <div className="flex justify-center sm:justify-start">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 text-xs font-bold text-zinc-400 transition-colors hover:text-blue-600"
              >
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>
            </div>

            <p className="pt-2 text-xl leading-relaxed font-medium text-zinc-500 sm:text-2xl dark:text-zinc-400">
              "เราเชื่อว่า ข้อมูลบนโลกออนไลน์ควรสะท้อน{" "}
              <span className="text-zinc-900 underline decoration-blue-500/30 dark:text-zinc-50">
                ตัวตนที่แท้จริง
              </span>{" "}
              ของคุณในปัจจุบัน"
            </p>
          </header>

          {/* 🛡️ Core Vision Section */}
          <section className="space-y-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <div className="space-y-6 font-medium">
              <p>
                ในยุคที่การค้นหาชื่อบน Google คือการ "เช็คประวัติ" ด่านแรก
                หลายคนต้องเจอกับปัญหาข้อมูลเก่า ข่าวเสีย
                หรือกระทู้ในอดีตที่คอยรบกวนภาพลักษณ์ปัจจุบันของคุณ
              </p>
              <p>
                ทีม{" "}
                <span className="font-bold text-zinc-900 italic dark:text-zinc-50">
                  JP-VISOUL-DOCS
                </span>{" "}
                จึงถูกตั้งขึ้นเพื่อจัดการ "ระเบียบข้อมูลตัวตน"
                โดยใช้ทีมผู้เชี่ยวชาญเฉพาะด้าน 5 สายงาน
                เพื่อให้คุณมั่นใจได้ว่าชื่อของคุณจะดูดีและน่าเชื่อถือที่สุด
              </p>
            </div>

            {/* Featured Image - บรรยากาศการทำงานของทีม */}
            <div className="relative my-12 aspect-video w-full overflow-hidden rounded-[2.5rem] border-2 border-zinc-100 shadow-2xl dark:border-zinc-800">
              <Image
                src="/images/activity-1.jpg"
                alt="ทีมงาน JP-VISOUL-DOCS ขณะวางแผนการจัดการชื่อเสียงออนไลน์"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* 🛠️ Strategic Mission Grid - บริการที่คนไทยเข้าใจง่าย */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-black tracking-tight text-zinc-900 uppercase dark:text-zinc-50">
                  จัดระเบียบข้อมูล
                </h2>
                <p className="text-base font-medium">
                  จัดการข้อมูลที่ไม่ต้องการ เช่น ข่าวเก่า หรือกระทู้ Pantip
                  และแทนที่ด้วยข้อมูลใหม่ที่ถูกต้องและเป็นบวก
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 dark:bg-white">
                  <ShieldCheck className="h-5 w-5 text-white dark:text-black" />
                </div>
                <h2 className="text-xl font-black tracking-tight text-zinc-900 uppercase dark:text-zinc-50">
                  การปกป้องตัวตน
                </h2>
                <p className="text-base font-medium">
                  วางโครงสร้าง SEO ระดับสูง
                  เพื่อให้โปรไฟล์ทางการของคุณติดหน้าแรก Google และสร้าง Trust
                  ในระยะยาว
                </p>
              </div>
            </div>

            {/* 📝 Professional Commitment */}
            <div className="relative overflow-hidden rounded-[3rem] bg-zinc-950 p-10 shadow-xl dark:bg-zinc-900">
              <div className="relative z-10 space-y-4 text-white">
                <h2 className="flex items-center gap-3 text-2xl font-black">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                  คำมั่นสัญญาจากทีมงาน
                </h2>
                <p className="leading-relaxed font-medium text-zinc-300">
                  เราไม่ได้ทำแค่การดันอันดับเว็บ แต่เราคือ "พาร์ทเนอร์"
                  ที่ช่วยดูแลภาพลักษณ์ของคุณ งานของ JP-VISOUL-DOCS
                  ทุกชิ้นเน้นความ{" "}
                  <span className="text-white underline decoration-blue-500 underline-offset-4">
                    ถูกต้อง โปร่งใส และรักษาความลับ
                  </span>{" "}
                  ของลูกค้าเป็นอันดับหนึ่งครับ
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
            </div>
          </section>

          {/* ⚡ Call to Action Footer */}
          <footer className="space-y-8 border-t border-zinc-100 pt-10 dark:border-zinc-900">
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
              <Link
                href="/case-study"
                className="group flex items-center gap-2 text-xl font-black text-blue-600 transition-all hover:text-zinc-950 dark:hover:text-white"
              >
                ดูขั้นตอนการทำงานของเรา
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>

              <div className="flex items-center gap-6">
                <Link
                  href="/contact"
                  className="text-xs font-black tracking-widest text-zinc-400 uppercase transition-colors hover:text-blue-600"
                >
                  เริ่มปรึกษาด่วน
                </Link>
              </div>
            </div>

            <p className="text-center text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase sm:text-left">
              Verified by JP-VISOUL-DOCS Identity Infrastructure
            </p>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
