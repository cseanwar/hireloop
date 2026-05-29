"use client";

import {
  Bookmark,
//   Briefcase,
//   ChartColumn,
//   Cursor,
  Magnifier,
  Rocket,
//   SquareChart,
  Star,
} from "@gravity-ui/icons";

import {
//   Bookmark,
  BriefcaseBusiness,
  ChartLine,
  MousePointerClick,
  Search,
//   Rocket,
  FileText,
  TrendingUp
} from "lucide-react";

// const features = [
//   {
//     id: 1,
//     title: "Smart Search",
//     description: "Find your ideal job with advanced filters.",
//     icon: Search,
//   },
//   {
//     id: 2,
//     title: "Salary Insights",
//     description: "Get real salary data to negotiate confidently.",
//     icon: ChartColumn,
//   },
//   {
//     id: 3,
//     title: "Top Companies",
//     description: "Apply to vetted companies that are hiring.",
//     icon: BriefcaseBusiness,
//   },
//   {
//     id: 4,
//     title: "Saved Jobs",
//     description: "Manage apps & favorites on your dashboard.",
//     icon: Bookmark,
//   },
//   {
//     id: 5,
//     title: "One-Click Apply",
//     description: "Simplify your job applications for an easier process!",
//     icon: MousePointerClick,
//   },
//   {
//     id: 6,
//     title: "Resume Builder",
//     description: "Create professional resumes with modern templates.",
//     icon: FileText,
//   },
//   {
//     id: 7,
//     title: "Skill-Based Matching",
//     description: "Discover jobs that match your skills and experience.",
//     icon: Sparkles,
//   },
//   {
//     id: 8,
//     title: "Career Growth Resources",
//     description: "Boost your career with quick interview tips.",
//     icon: Rocket,
//   },
// ];

const features = [
  {
    id: 1,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Magnifier,
  },
  {
    id: 2,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: ChartLine,
  },
  {
    id: 3,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    id: 5,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: MousePointerClick,
  },
  {
    id: 6,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    id: 7,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Star,
  },
  {
    id: 8,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: TrendingUp,
  },
];

export default function FeatureJobsSection() {
  return (
    <section className="relative overflow-hidden bg-[#151516] py-28 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_45%)]" />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3 text-xl uppercase tracking-[0.3em] text-white/80">
            <span className="h-1 w-1 rounded-full bg-violet-500" />
            Features Job
            <span className="h-1 w-1 rounded-full bg-violet-500" />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group flex items-start gap-4"
              >
                {/* Icon Box */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-linear-to-b from-[#010102] to-[#313131] backdrop-blur-xl transition-all duration-300 group-hover:border-violet-500/20 group-hover:bg-white/4">

                  <Icon className="relative z-10 h-8 w-8 text-[#F7C2FF]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}