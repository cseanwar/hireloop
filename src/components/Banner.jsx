"use client";

import { useState } from "react";
import Image from "next/image";

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

const Banner = () => {
  const [jobValue, setJobValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  return (
    <div className="relative w-full bg-[#1E1E1E05] text-white overflow-hidden">
      {/* ── Dot grid atmosphere ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7b8cff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ── Top-center glow bloom ── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 rounded-full bg-indigo-700/10 blur-[100px]" />

      {/* ── Star particles ── */}
      {[
        { top: "12%", left: "5%" },
        { top: "8%", left: "78%" },
        { top: "35%", left: "2%" },
        { top: "28%", left: "93%" },
        { top: "55%", left: "90%" },
        { top: "62%", left: "4%" },
        { top: "20%", left: "50%" },
        { top: "70%", left: "65%" },
        { top: "15%", left: "30%" },
        { top: "45%", left: "82%" },
      ].map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute w-0.75 h-0.75 rounded-full bg-blue-300/25 animate-pulse"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${2.2 + i * 0.28}s`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-30 pb-5 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="relative inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-5 py-2">
          {/* side dashes */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-px bg-linear-to-l from-white/15 to-transparent" />
          <span className="absolute left-full  top-1/2 -translate-y-1/2 w-16 h-px bg-linear-to-r from-white/15 to-transparent" />

          <Image
            src="/images/brifcase.png"
            alt="logo image"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/45">
            <span className="font-bold text-[#FFFFFF] text-xl normal-case tracking-tight">
              50,000+
            </span>{" "}
            <span className="text-[#FFFFFF50] text-xl text-normal">
              New Jobs This Month
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-5xl sm:text-[56px] font-bold leading-[1.05] tracking-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-white/70 text-xl leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* ── Search bar ── */}
        <div className="mt-12 w-full flex items-center rounded-2xl border border-white/20 bg-[#101010] backdrop-blur-sm px-6 py-2 gap-3">
          {/* Job input */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <svg
              className="w-6 h-6 text-white/80 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={jobValue}
              onChange={(e) => setJobValue(e.target.value)}
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/80"
            />
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-white/10 shrink-0" />

          {/* Location input */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <svg
              className="w-6 h-6 text-white/80 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z" />
            </svg>
            <input
              type="text"
              value={locationValue}
              onChange={(e) => setLocationValue(e.target.value)}
              placeholder="Location or Remote"
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/80"
            />
          </div>

          {/* Search button */}
          <button className="shrink-0 w-12 h-12 rounded-xl bg-[#5C53FE] hover:bg-indigo-500 active:scale-95 transition-all flex items-center justify-center cursor-pointer">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>

        {/* Trending positions */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-base text-white/35">
          <span className="text-base text-[#FFFFFF70]">Trending Position</span>
          {trendingPositions.map((pos) => (
            <button
              key={pos}
              className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1 text-sm text-[#FFFFFF] hover:border-indigo-500/50 hover:text-white transition-colors cursor-pointer"
            >
              {pos}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
