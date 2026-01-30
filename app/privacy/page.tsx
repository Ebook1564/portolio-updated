"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Shield, BookOpen, Newspaper, Lightbulb, Lock } from "lucide-react"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-white overflow-hidden selection:bg-blue-500/30">
            <Header />

            <main className="flex-1 relative pt-32 pb-20">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                <Shield className="w-4 h-4" />
                                <span>Content & Privacy</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6">
                                Browsing Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    Knowledge Hub
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Enjoy our technical resources without compromising your digital footprint.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {/* Section 1: Guides */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">1. Guides & Tutorials</h2>
                                        <p className="text-slate-400 leading-relaxed mb-4">
                                            Our in-depth guides on Unity and System Architecture are completely open.
                                        </p>
                                        <ul className="space-y-2 text-slate-300">
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                No account registration required to read.
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                Code snippets can be copied without tracking.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Section 2: News */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400">
                                        <Newspaper className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">2. Industry News</h2>
                                        <p className="text-slate-400 leading-relaxed mb-4">
                                            Stay updated with the latest in game development and tech without subscription walls.
                                        </p>
                                        <ul className="space-y-2 text-slate-300">
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                Anonymous reading of all news articles.
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                No behavior profiling based on articles read.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Section 3: Tips & Tricks */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-yellow-500/10 text-yellow-400">
                                        <Lightbulb className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">3. Tips & Tricks</h2>
                                        <p className="text-slate-400 leading-relaxed mb-4">
                                            Quick optimizations and workflow hacks are shared freely.
                                        </p>
                                        <ul className="space-y-2 text-slate-300">
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                Access all optimization tips instantly.
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                No limits on how many tips you view.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Section 4: General Policy */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-green-500/10 text-green-400">
                                        <Lock className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">4. Our Promise</h2>
                                        <p className="text-slate-400 leading-relaxed">
                                            Across all our content; Guides, News, and Tips, we maintain a strict policy of non-collection. We are here to provide information, not to gather it.
                                        </p>
                                    </div>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
