"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { tutorials } from "./data"
import { Search, Sparkles, Clock } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TipsTricksPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const categories = ["All", ...Array.from(new Set(tutorials.map(t => t.category)))]

    const filteredTutorials = activeCategory === "All"
        ? tutorials
        : tutorials.filter(t => t.category === activeCategory)

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />

                        {/* Glowing Grid */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}>
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8"
                            >
                                <Sparkles className="w-4 h-4" /> SnappGames Academy
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
                            >
                                Simplify the
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"> complications</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
                            >
                                Neatly curated tips and tricks for various softwares to ease up your workflow
                            </motion.p>

                            {/* Search Bar */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="max-w-xl mx-auto relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative flex items-center bg-[#0F172A] rounded-2xl p-2 border border-white/10 shadow-2xl">
                                    <Search className="w-6 h-6 text-slate-400 ml-4" />
                                    <input
                                        type="text"
                                        placeholder="Search for tutorials, e.g. 'Unity' or 'Monetization'..."
                                        className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none placeholder:text-slate-500 text-lg"
                                    />
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 font-bold">
                                        Search
                                    </Button>
                                </div>
                            </motion.div> */}
                        </div>
                    </div>
                </section>

                {/* Technical Sticky Sub-Nav */}
                <section className="sticky top-[110px] md:top-[130px] z-40 bg-white/80 backdrop-blur-xl border-y border-slate-200/60 py-5">
                    <div className="container mx-auto px-6 flex items-center justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveCategory(tab)}
                                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === tab
                                    ? "bg-slate-900 text-white shadow-xl"
                                    : "text-slate-500 hover:text-indigo-600 hover:bg-indigo-50"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Tutorial Grid - Guide Style Sync */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {filteredTutorials.map((tutorial, index) => {
                                const Icon = tutorial.icon
                                return (
                                    <motion.div
                                        key={tutorial.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group h-full"
                                    >
                                        <Link href={`/tips-and-tricks/${tutorial.id}`} className="block h-full">
                                            <div className="h-full bg-white border border-slate-200/60 rounded-[2.5rem] p-10 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col relative overflow-hidden group">

                                                {/* Header Info */}
                                                <div className="flex items-start justify-between mb-10">
                                                    <div className="flex items-center gap-5">
                                                        <div className={`p-4 bg-slate-50 text-slate-600 rounded-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500`}>
                                                            <Icon className="w-7 h-7" />
                                                        </div>
                                                        <div>
                                                            <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-600/60 mb-1">
                                                                Academy Core
                                                            </span>
                                                            <span className="block text-xs font-bold text-slate-400 uppercase">
                                                                #{tutorial.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${tutorial.difficulty === 'Expert' ? 'bg-red-50 text-red-600 border-red-100' :
                                                            tutorial.difficulty === 'Advanced' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                                tutorial.difficulty === 'Intermediate' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                                                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                        }`}>
                                                        {tutorial.difficulty}
                                                    </div>
                                                </div>

                                                {/* Core Text */}
                                                <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">
                                                    {tutorial.title}
                                                </h3>

                                                <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-10 line-clamp-3">
                                                    {tutorial.excerpt}
                                                </p>

                                                {/* Tech Stats Footer */}
                                                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex items-center gap-2 text-slate-500">
                                                            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A4.5 4.5 0 0 0 13.5 3.5c-1.3 0-2.6.5-3.5 1.5-.8.8-1.3 1.5-1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                                                            <span className="text-[11px] font-bold uppercase tracking-tight">{tutorial.stats}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-500">
                                                            <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                                            <span className="text-[11px] font-bold uppercase tracking-tight">{tutorial.readTime}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
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
