"use client"

import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import {
    Code2,
    Cpu,
    Bug,
    Globe,
    Terminal,
    Layers,
    Zap,
    BookOpen,
    Workflow
} from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-white overflow-hidden selection:bg-blue-500/30">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    {/* Dynamic Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
                        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1],
                                rotate: [0, 45, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]"
                        />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
                        >
                            <Terminal className="w-4 h-4" />
                            <span>For Developers, By Developers</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight"
                        >
                            Solving The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                                Impossible
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            Your dedicated resource for tackling complex challenges in and around<span className="text-white font-semibold"></span>  <span className="text-white font-semibold">Unity</span> game development. We break down bugs, optimize logic, and share code that works.
                        </motion.p>
                    </div>
                </section>


                {/* Problem Solving Focus Areas */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl font-black mb-6"
                            >
                                Where We Focus
                            </motion.h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                We don't just write generic content. We dive deep into the specific engines and technologies that power the web's best games.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* HTML5 Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 p-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full bg-[#0B1120] rounded-[2.4rem] p-8 md:p-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Workflow className="w-48 h-48" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                            <Workflow className="w-8 h-8 text-orange-500" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 group-hover:text-orange-400 transition-colors">Workflow Optimization</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            Beyond the nuances of development and programming, we also provide empathic tips on maximizing your efficiency using different software and making the most out of your workflow.
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Workflow Improvement Techniques",
                                                "Effective Software Tweaks",
                                                "Strategies for Enhanced Productivity",
                                                "Nuanced Software Tips"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Unity Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 p-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full bg-[#0B1120] rounded-[2.4rem] p-8 md:p-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Cpu className="w-48 h-48" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                            <Cpu className="w-8 h-8 text-blue-500" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors">Unity Engine</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            Mastering the engine's depths. tackling C# scripting challenges, ECS architecture, physics bugs, and build size optimization for web exports.
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "C# Scripting Patterns",
                                                "DOTS & ECS Architecture",
                                                "Physics & Collision Debugging",
                                                "WebGL Build Optimization"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* System Architecture Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 p-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full bg-[#0B1120] rounded-[2.4rem] p-8 md:p-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Layers className="w-48 h-48" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                            <Layers className="w-8 h-8 text-purple-500" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 group-hover:text-purple-400 transition-colors">System Architecture</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            Designing scalable and robust game systems. We explore ECS patterns, data-oriented design, and efficient memory layouts for high-performance gaming.
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Entity Component Systems (ECS)",
                                                "Data-Oriented Design",
                                                "Memory Management Patterns",
                                                "Scalable Game Logic"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Operating System Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 p-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full bg-[#0B1120] rounded-[2.4rem] p-8 md:p-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Terminal className="w-48 h-48" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                            <Terminal className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 group-hover:text-green-400 transition-colors">Operating System</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            Understanding the low-level interactions. We cover thread management, file I/O optimization, and platform-specific nuances for Windows, Linux, and Mobile.
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Thread Management & Concurrency",
                                                "File I/O Optimization",
                                                "Cross-Platform Compatibility",
                                                "Low-Level Resource Access"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Interactive Feature: "How We Help" */}
                <section className="py-20 relative bg-gradient-to-b from-[#020617] to-[#0B1120]">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="inline-block px-4 py-2 rounded-lg bg-green-500/10 text-green-400 font-bold text-sm tracking-widest mb-6">
                                        PROBLEM SOLVING
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                        From Syntax Errors to <span className="text-white">System Architecture</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                        We don't just copy-paste solutions. We explain the 'Why' and 'How'. Our blogs are structured to help you understand the root cause of issues, alongside the efficacy of the solution.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            { title: "Deep Dive Tutorials", desc: "Step-by-step guides for complex mechanism implementation.", icon: Layers },
                                            { title: "Debug Logs", desc: "Real-world scenarios of hunting down elusive bugs.", icon: Bug },
                                            { title: "Performance Clinics", desc: "Making optimum use of resources in a utilitarian manner.", icon: Zap }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                                                <div className="mt-1">
                                                    <div className="p-2 rounded-lg bg-white/5 text-white">
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <div className="lg:w-1/2 w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative bg-[#0F172A] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl">
                                        {/* Fake Code Editor UI */}
                                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                            </div>
                                            <div className="ml-4 text-xs text-slate-500 font-mono">GameController.cs</div>
                                        </div>

                                        <div className="font-mono text-xs md:text-sm space-y-1">
                                            <div className="text-purple-400">public class <span className="text-yellow-200">PlayerMovement</span> : <span className="text-green-300">MonoBehaviour</span></div>
                                            <div className="text-slate-500">{`{`}</div>
                                            <div className="pl-4 text-slate-400"><span className="text-purple-400">private void</span> <span className="text-blue-300">Update</span>()</div>
                                            <div className="pl-4 text-slate-500">{`{`}</div>
                                            <div className="pl-8 text-slate-500">// We fix logic like this:</div>
                                            <div className="pl-8 text-red-400 line-through opacity-50">transform.Translate(Vector3.forward);</div>
                                            <div className="pl-8 text-green-400">transform.Translate(Vector3.forward * Time.deltaTime * speed);</div>
                                            <div className="pl-4 text-slate-500">{`}`}</div>
                                            <div className="text-slate-500">{`}`}</div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                            <p className="text-slate-400 text-sm mb-4">Have a burning question?</p>
                                            <Link href="/guides" className="inline-block px-8 py-3 bg-white text-[#020617] rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                                                Read Our Guides
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
