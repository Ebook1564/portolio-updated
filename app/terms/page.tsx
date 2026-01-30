"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Shield, FileText, Code2, AlertCircle, CheckCircle } from "lucide-react"

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-white overflow-hidden selection:bg-blue-500/30">
            <Header />

            <main className="flex-1 relative pt-32 pb-20">
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                                <Shield className="w-4 h-4" />
                                <span>Legal & Scope</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6">
                                Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Conditions</span>
                            </h1>
                            <p className="text-xl text-slate-400">
                                Understanding how to use our resources, code snippets, and optimization guides.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {/* Section 1: Nature of Content */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">1. Nature of Our Content</h2>
                                        <p className="text-slate-400 leading-relaxed mb-4">
                                            SnappGames is primarily an educational resource and blog platform. Our content is focused on:
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <span><strong>Optimization Solutions:</strong> providing techniques to improve performance in HTML5 and Unity games.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <span><strong>Bug Fixes:</strong> Documenting solutions to common and complex errors encountered during game development.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <span><strong>Technical Guides:</strong> Step-by-step tutorials for implementing specific game mechanics or systems.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Section 2: Code Usage */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400">
                                        <Code2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">2. Usage of Code Snippets</h2>
                                        <p className="text-slate-400 leading-relaxed mb-4">
                                            The code snippets provided in our blogs are intended for educational and practical use in your projects.
                                        </p>
                                        <div className="bg-[#0B1120] p-6 rounded-xl border border-white/5">
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    You exist free to use our code in personal and commercial projects.
                                                </li>
                                                <li className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    Attribution is appreciated but not strictly required.
                                                </li>
                                                <li className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    We do not guarantee that every solution will fit every unique codebase without modification.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Section 3: Disclaimer */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-red-500/10 text-red-400">
                                        <AlertCircle className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                                        <p className="text-slate-400 leading-relaxed">
                                            While we strive for accuracy, game development technologies evolve rapidly. Solutions that work for a specific version of Unity or a browser may need adjustment for others. Providing "problem-solving content" does not constitute a guarantee of fixing every specific issue in your unique project environment.
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
