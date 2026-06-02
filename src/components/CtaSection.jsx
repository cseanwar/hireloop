"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/*
        All glow layers + the image share the SAME isolation wrapper.
        This means:
        - The black section bg stays pure black
        - Glow blobs only brighten the image layer, not the page
        - mix-blend-mode: screen dissolves the PNG's black bg
        - Result: glow appears only within the dome shape
      */}
      <div className="absolute inset-0 bg-black" style={{ isolation: "isolate" }}>

        {/* The grid image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg-glow.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
            draggable={false}
          />
        </div>

        {/* Colorizing overlay to turn the multicolored grid into shades of blue and indigo */}
        <div
          className="absolute inset-0 bg-linear-to-b from-blue-600 via-indigo-600 to-indigo-900"
          style={{ mixBlendMode: "color" }}
        />

        {/* Radial glow to add depth and brightness to the top-middle apex */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35)_0%,rgba(99,102,241,0.15)_35%,transparent_60%)]"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 flex flex-col items-center text-center">

        <motion.h2
          className="text-4xl sm:text-5xl md:text-[58px] font-bold leading-[1.08] tracking-tight"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          Your next role is
          <br />
          already looking for you
        </motion.h2>

        <motion.p
          className="mt-5 text-white/55 text-base leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.26 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold text-sm px-7 py-3.5 hover:bg-white/90 transition-colors"
            >
              Create a free account
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold text-sm px-7 py-3.5 hover:bg-white/10 transition-colors"
            >
              View pricing
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}