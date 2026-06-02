"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { BarChart3, Zap, ArrowRight } from "lucide-react";
import { CrownDiamond, Plus } from "@gravity-ui/icons";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    icon: CrownDiamond,
    price: "$0",
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    featured: false,
  },
  {
    name: "Growth",
    icon: BarChart3,
    price: "$17",
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    featured: true,
  },
  {
    name: "Premium",
    icon: Zap,
    price: "$99",
    description: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_45%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xl uppercase tracking-[0.3em] text-white/80">
            <span className="h-2 w-2 bg-[#5C53FE]" />
            Pricing
            <span className="h-2 w-2 bg-[#5C53FE]" />
          </div>

          <h2 className="text-center text-4xl font-semibold leading-tight md:text-5xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Billing Toggle */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/4 p-2">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-4 py-2 text-medium text-lg transition ${
                  billing === "monthly"
                    ? "bg-white text-[#010103]"
                    : "text-white"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-4 py-2 text-lg transition ${
                  billing === "yearly"
                    ? "bg-white text-[#010103]"
                    : "text-white"
                }`}
              >
                Yearly
              </button>

              <span className="ml-2 rounded-full bg-[#DC02CE] px-4 py-2 text-base">
                25% OFF
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                /* ── Enter: staggered fade + slide up ── */
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
                viewport={{ once: true, margin: "-60px" }}
                /* ── Hover: lift + subtle scale ── */
                whileHover={{
                  y: plan.featured ? -10 : -6,
                  scale: plan.featured ? 1.02 : 1.01,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className={`relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300 cursor-default ${
                  plan.featured
                    ? "border-[#59595930] bg-[#F6EFE110] shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                    : "border-[#59595930] bg-[#010103]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />
                )}

                {/* Hover glow for non-featured cards */}
                {!plan.featured && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "radial-gradient(circle at top, rgba(92,83,254,0.08), transparent 70%)",
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Top row: icon + name + price */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.12 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#59595940]">
                        <Icon className="h-6 w-6 text-[#F7C2FF]" />
                      </div>
                      <h3 className="text-lg font-medium">{plan.name}</h3>
                    </motion.div>

                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.12 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-5xl font-bold tracking-tighter text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/40">/month</span>
                    </motion.div>
                  </div>

                  <p className="mt-8 text-lg font-medium text-white">
                    {plan.description}
                  </p>

                  {/* Features — each item staggers in */}
                  <ul className="mt-3 space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-base text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.25 + index * 0.12 + fIndex * 0.07,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#59595930]">
                          <Plus className="h-4 w-4 text-white" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA button — taps with press scale */}
                  <motion.div
                    className="mt-18"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.12,
                    }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      radius="xl"
                      className={`h-12 px-6 py-3.5 w-full justify-between ${
                        plan.featured
                          ? "bg-white text-[#010103] font-semibold text-base hover:bg-white/90"
                          : "bg-[#59595950] text-white font-semibold text-base hover:bg-white/15"
                      }`}
                    >
                      Choose This Plan
                      <ArrowRight className="h-6 w-6" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}