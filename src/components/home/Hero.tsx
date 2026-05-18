"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >

        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300 backdrop-blur-xl mb-8">
          AI Powered Resume Builder
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Build Stunning <br />
          Resumes Using AI
        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Create professional ATS-friendly resumes instantly using modern AI tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          <Link
            href="/resume-builder"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Build Resume
          </Link>

          <Link
            href="/templates"
            className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
          >
            Explore Templates
          </Link>

        </div>

      </motion.div>

    </section>
  );
}