"use client";

import { ArrowUpRight, Briefcase, Clock3, MapPin } from "lucide-react";

import { CircleDollar } from "@gravity-ui/icons";

const jobs = Array(6).fill({
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  location: "New York, USA",
  type: "Hybrid",
  salary: "€25–€40/hour",
});

export default function SmartJobDiscovery() {
  return (
    <section className="relative overflow-hidden bg-black py-30 text-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3 text-lg uppercase tracking-[0.3em] text-white/80">
            <span className="h-1 w-1 rounded-full bg-violet-500" />
            Smart Job Discovery
            <span className="h-1 w-1 rounded-full bg-violet-500" />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-[#FFFFFF]">
            The roles you&apos;d never
            <br />
            find by searching
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/6 bg-[#151516] py-8 px-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/20 hover:bg-white/4.5"
            >
              {/* subtle glow */}
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-500/5 blur-3xl transition-all duration-300 group-hover:bg-violet-500/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3">
                  <Briefcase className="h-5 w-5 text-white/80" />
                </div>

                {/* Title */}
                <h3 className="text-[32px] font-medium tracking-tight">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-base leading-relaxed text-white/60">
                  {job.description}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 rounded-full bg-[#1F1F1F] px-3 py-1.5 text-sm text-white">
                    <MapPin className="h-4 w-4 text-[#F7C2FF]" />
                    {job.location}
                  </div>

                  {/* Type */}
                  <div className="flex items-center gap-1.5 rounded-full bg-[#1F1F1F] px-3 py-1.5 text-sm text-white">
                    <Clock3 className="h-4 w-4 text-[#F7C2FF]" />
                    {job.type}
                  </div>

                  {/* Salary */}
                  <div className="flex items-center gap-1.5 rounded-full bg-[#1F1F1F] px-3 py-1.5 text-sm text-white">
                    <CircleDollar className="h-4 w-4 text-[#F7C2FF]" />
                    {/* <span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> */}
                    {job.salary}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-white transition hover:text-white cursor-pointer">
                  Apply Now
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom button */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-xl bg-white px-6 py-4 text-lg font-medium text-[#0B0B14] transition hover:bg-white/90 cursor-pointer">
            View all job open
          </button>
        </div>
      </div>
    </section>
  );
}
