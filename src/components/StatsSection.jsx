"use client";

import { Briefcase, Factory, Magnifier, Star } from "@gravity-ui/icons";
import { motion } from "motion/react";
import Image from "next/image";

export default function StatsSection() {
    const stats = [
        { id: 1, icon: <Briefcase className="h-5 w-5" />, value: "50K",  label: "Active Jobs"       },
        { id: 2, icon: <Factory   className="h-5 w-5" />, value: "12K",  label: "Companies"         },
        { id: 3, icon: <Magnifier className="h-5 w-5" />, value: "2M",   label: "Job Seekers"       },
        { id: 4, icon: <Star      className="h-5 w-5" />, value: "97%",  label: "Satisfaction Rate" },
    ];

    return (
        <section className="relative overflow-hidden bg-black pt-85 text-white">

            {/* Globe — isolated blend wrapper so PNG bg dissolves into black */}
            <div className="absolute inset-0" style={{ isolation: "isolate" }}>
                <div className="w-full h-full" style={{ mixBlendMode: "screen" }}>
                    <Image
                        src="/images/globe.png"
                        alt="Globe"
                        fill
                        className="object-cover object-center opacity-90"
                        priority
                        draggable={false}
                    />
                </div>
            </div>

            {/* Glow */}
            <div className="absolute left-1/2 top-[25%] h-100 w-100 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Heading — fades + slides up on scroll into view */}
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <h2 className="text-[40px] font-medium leading-relaxed text-white/70">
                        Assisting over{" "}
                        <span className="font-bold text-blue-400">15,000 job seekers</span>
                        <br />
                        find their dream positions.
                    </h2>
                </motion.div>

                {/* Stats Cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            /* ── Enter animation: staggered fade + slide up ── */
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true, margin: "-60px" }}
                            /* ── Hover: lift card ── */
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-[#0D0D0F] to-[#1E1E1E] border border-white/[0.07] p-8 backdrop-blur-xl hover:border-white/15 transition-colors duration-300 cursor-default"
                        >
                            {/* Card corner glow — blooms on hover */}
                            <motion.div
                                className="absolute bottom-0 right-0 h-32 w-32 rounded-full blur-3xl pointer-events-none"
                                initial={{ opacity: 0.05, scale: 1, backgroundColor: "#ffffff" }}
                                whileHover={{ opacity: 1, scale: 1.5, backgroundColor: "#6366f1" }}
                                transition={{ duration: 0.35 }}
                            />

                            {/* Icon */}
                            <motion.div
                                className="relative z-10 text-white"
                                whileHover={{ scale: 1.2, color: "rgba(255,255,255,0.9)" }}
                                transition={{ duration: 0.2 }}
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Number — pops in with spring scale */}
                            <motion.h3
                                className="relative z-10 mt-8 text-[56px] font-semibold tracking-tight"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 18,
                                    delay: 0.15 + index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                {stat.value}
                            </motion.h3>

                            {/* Label — fades in after number */}
                            <motion.p
                                className="relative z-10 mt-4 text-lg text-[#FFFFFF]"
                                initial={{ opacity: 0, y: 6 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.28 + index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}