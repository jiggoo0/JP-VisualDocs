/** @format */

"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Facebook,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

/**
 * [STRATEGY: FOOTER COMPLIANCE & TRUST - JP-VISOUL-DOCS]
 * - Authority: ยืนยันสถานะ "Verified Entity" และแสดงช่องทาง Social ทางการ
 * - Seamless Contact: เชื่อมโยง LINE และ Facebook เพื่อการติดต่อที่รวดเร็ว
 * - SEO Optimization: ใช้โดเมนทางการ (.website / .online) เพื่อสร้าง Network Trust
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brandName = "JP-VISOUL-DOCS";
  const projectTitle = "JPVISOULDOCS";

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61575050976562",
    line: "https://lin.ee/ZYTzBaIE",
  };

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/30 py-16 dark:border-zinc-900 dark:bg-black/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row sm:items-start">
          {/* 🏛️ Left: Brand & Social Presence */}
          <div className="space-y-6 text-center sm:text-left">
            <div>
              <p className="text-[13px] font-black tracking-[0.25em] text-zinc-900 uppercase dark:text-zinc-50">
                {brandName}
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                © {currentYear} {projectTitle} Official Site.
              </p>
            </div>

            {/* Social Connectivity */}
            <div className="flex items-center justify-center gap-5 sm:justify-start">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-[#1877F2]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.line}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-green-500"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <span className="text-zinc-200 dark:text-zinc-800">|</span>
              <Link
                href="/contact"
                className="text-[10px] font-black tracking-widest text-zinc-500 uppercase hover:text-blue-600"
              >
                Support Center
              </Link>
            </div>

            {/* Legal Infrastructure */}
            <nav className="flex items-center justify-center gap-4 pt-2 sm:justify-start">
              <Link
                href="/privacy"
                className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* 🛡️ Right: Security & Network Domains */}
          <div className="flex flex-col items-center gap-5 sm:items-end">
            <div className="flex items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm dark:border-blue-900/30 dark:bg-zinc-900/50">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </div>
              <span className="text-[10px] font-black tracking-[0.15em] text-blue-700 uppercase dark:text-blue-400">
                Verified Identity Status
              </span>
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            </div>

            <div className="max-w-[320px] space-y-3 text-center sm:text-right">
              <p className="font-thai text-[11px] leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                ศูนย์กลางการจัดระเบียบข้อมูลตัวตนดิจิทัล
                เพื่อความถูกต้องและโปร่งใสบนระบบการค้นหาสากล
              </p>

              {/* Authorized Domains List */}
              <div className="flex flex-col gap-1.5 sm:items-end">
                <a
                  href="https://jpvisouldocs.website"
                  className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-400 hover:text-blue-500"
                >
                  jpvisouldocs.website <ExternalLink className="h-2 w-2" />
                </a>
                <a
                  href="https://www.jpvisouldocs.online"
                  className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-400 hover:text-blue-500"
                >
                  jpvisouldocs.online <ExternalLink className="h-2 w-2" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-[9px] font-black tracking-widest text-emerald-600 uppercase sm:justify-end dark:text-emerald-500">
                <Lock className="h-2.5 w-2.5" />
                Data Integrity Protocol Active
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center opacity-20">
          <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-800"></div>
        </div>
      </div>
    </footer>
  );
}
