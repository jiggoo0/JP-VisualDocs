/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// 🏛️ เรียกใช้จากศูนย์กลางเพียงที่เดียวตามโครงสร้าง Standard
import { cn } from "@/lib/utils";

/**
 * [STRATEGY: ADAPTIVE NAVIGATION - JP-VISOUL-DOCS]
 * - Identity: เปลี่ยนโลโก้จาก UNLINK เป็น JPV (JP-VISOUL-DOCS)
 * - UX: เน้นปุ่ม "ปรึกษาด่วน" เพื่อรองรับกลุ่มลูกค้าที่ต้องการแก้ปัญหาชื่อเสียงทันที
 */

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "หน้าหลัก", href: "/" },
    { name: "บริการของเรา", href: "/about" }, // ปรับชื่อให้ตรงกับธุรกิจบริการ
    { name: "กรณีศึกษา", href: "/case-study" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        {/* 🏛️ Logo & Brand Identity: JP-VISOUL-DOCS */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-transform active:scale-95"
          aria-label="JP-VISOUL-DOCS Home"
        >
          <div className="rounded bg-blue-600 px-2 py-0.5 text-[12px] font-black tracking-tighter text-white transition-colors group-hover:bg-zinc-950 dark:group-hover:bg-white dark:group-hover:text-black">
            JPV
          </div>
          <span className="text-[12px] font-black tracking-[0.2em] text-zinc-900 uppercase dark:text-zinc-50">
            VisoulDocs
          </span>
        </Link>

        {/* 💻 Navigation Menu */}
        <nav className="flex items-center gap-6 sm:gap-10">
          <ul className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs font-bold tracking-wide transition-colors sm:text-[13px]",
                    pathname === link.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ⚡ Primary CTA: ปรึกษาด่วน (สำหรับกลุ่มลบข้อมูล/จัดการชื่อเสียง) */}
          <Link
            href="/contact"
            className="font-thai hidden rounded-full bg-blue-600 px-6 py-2.5 text-[11px] font-black tracking-widest text-white uppercase shadow-lg shadow-blue-500/20 transition-all hover:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 sm:inline-flex dark:hover:bg-blue-500"
          >
            ปรึกษาด่วน
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-[10px] font-black tracking-widest text-white uppercase sm:hidden"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
