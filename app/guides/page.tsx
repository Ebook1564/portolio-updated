"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import {
    BookOpen,
    Code2,
    Cpu,
    Layers,
    Terminal,
    Zap,
    ChevronRight,
    Search,
    Filter,
    BarChart3,
    Gamepad2,
    Sparkles,
    Lightbulb
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { gameDevGuides } from "./data"


export default function GuidesPage() {
    const [activeTab, setActiveTab] = useState("all")

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Header />

            <main className="flex-1">
                {/* Premium Centered Rich Hero Section */}
                <section className="relative pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden bg-[#020617]">
                    {/* Rich Dark Background with Glow */}
                    <div className="absolute inset-0 z-0">
                        {/* Base Dark Color */}
                        <div className="absolute inset-0 bg-[#020617]"></div>

                        {/* Concentrated Central Glow */}
                        <motion.div
                            animate={{
                                opacity: [0.4, 0.6, 0.4],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"
                        />

                        {/* Subtle Background Pattern (Blueprints) */}
                        <motion.div
                            initial={{ scale: 1.05, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.1 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 mix-blend-screen"
                        >
                            <img
                                src="/.gemini/antigravity/brain/ac412dd1-f509-4de9-9613-57f20f43ed8b/guides_hero_background_1768907591785.png"
                                alt="Technical Background"
                                className="w-full h-full object-cover grayscale brightness-200"
                            />
                        </motion.div>

                        {/* Sharp Dot Matrix Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.1]"
                            style={{
                                backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
                                backgroundSize: '30px 30px'
                            }}
                        />

                        {/* Large Scientific Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, #4f46e5 1px, transparent 1px),
                                    linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
                                `,
                                backgroundSize: '120px 120px'
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 mb-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 backdrop-blur-md shadow-sm"
                        >
                            <Terminal className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Game Dev Intelligence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-white"
                        >
                            Everything required to simplify<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">Game Development</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
                        >
                            Deep technical blueprints and engineering strategies specifically designed for high-performance workflow for game development and auxiliary tasks.
                        </motion.p>

                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <div className="w-full max-w-lg relative group">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search game engineering guides..."
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-5 pl-14 pr-7 text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 backdrop-blur-md transition-all shadow-sm"
                                />
                            </div>
                            <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] font-black uppercase tracking-[0.1em] text-sm transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group">
                                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Quick Start
                            </button>
                        </motion.div> */}
                    </div>

                    {/* Simple Geometric Accents */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-10 w-24 h-24 border border-indigo-200/50 rounded-[2rem] hidden xl:block"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/3 right-10 w-20 h-20 border border-purple-200/50 rounded-full hidden xl:block"
                    />
                </section>

                {/* Technical Sticky Sub-Nav */}
                {/* <section className="sticky top-[110px] md:top-[130px] z-40 bg-white/80 backdrop-blur-xl border-y border-slate-200/60 py-5">
                    <div className="container mx-auto px-6 flex items-center justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                        {["all", "Unity", "graphics", "Windows", "optimization"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab
                                    ? "bg-slate-900 text-white shadow-xl"
                                    : "text-slate-500 hover:text-indigo-600 hover:bg-indigo-50"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </section> */}

                {/* Dashboard Grid - Centered */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {gameDevGuides.map((guide, index) => {
                                const Icon = guide.icon
                                return (
                                    <motion.div
                                        key={guide.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group h-full"
                                    >
                                        <Link href={`/guides/${guide.id}`} className="block h-full">
                                            <div className="h-full bg-white border border-slate-200/60 rounded-[2.5rem] p-10 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col relative overflow-hidden group">

                                                {/* Header Info */}
                                                <div className="flex items-start justify-between mb-10">
                                                    <div className="flex items-center gap-5">
                                                        <div className="p-4 bg-indigo-50 text-indigo-600 rounded-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                                            <Icon className="w-7 h-7" />
                                                        </div>
                                                        <div>
                                                            <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-600/60 mb-1">
                                                                Guides
                                                            </span>
                                                            <span className="block text-xs font-bold text-slate-400">
                                                                #{guide.category.toUpperCase()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${guide.difficulty === 'Expert' ? 'bg-red-50 text-red-600 border-red-100' :
                                                        guide.difficulty === 'Advanced' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                            'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                        }`}>
                                                        {guide.difficulty}
                                                    </div>
                                                </div>

                                                {/* Core Text */}
                                                <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">
                                                    {guide.title}
                                                </h3>

                                                <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-10 line-clamp-3">
                                                    {guide.excerpt}
                                                </p>

                                                {/* Tech Stats Footer */}
                                                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex items-center gap-2 text-slate-500">
                                                            <Lightbulb className="w-4 h-4 text-amber-500" />
                                                            <span className="text-[11px] font-bold uppercase tracking-tight">{guide.stats}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-500">
                                                            <Zap className="w-4 h-4 text-indigo-500" />
                                                            <span className="text-[11px] font-bold uppercase tracking-tight">{guide.readTime}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                                        <ChevronRight className="w-6 h-6" />
                                                    </div>
                                                </div>

                                                {/* Subtle Light Hover Glow */}
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
