"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          ResumeAI
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <Link
          href="/resume-builder"
          className="bg-white text-black px-5 py-2 rounded-xl text-sm font-medium hover:scale-105 transition"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}