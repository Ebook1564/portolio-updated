"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Rocket, Target, Users, Zap, Globe, Heart } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"
                        />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8"
                        >
                            <Rocket className="w-4 h-4" /> The Future of Gaming
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
                        >
                            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">SnappGame</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            Empowering developers and entertaining millions. We are building the ecosystem where the next generation of HTML5 games starts, scales, and succeeds.
                        </motion.p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Active Players", value: "2M+" },
                                { label: "Games Published", value: "500+" },
                                { label: "Developer Partners", value: "150+" },
                                { label: "Global Reach", value: "50+ Countries" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-5xl font-black mb-6">Built for Creators</h2>
                                    <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                                        At SnappGame, we believe that great games can come from anywhere. Our mission is to democratize game distribution by providing a powerful, transparent, and easy-to-use platform for HTML5 game developers.
                                    </p>
                                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                        Whether you are an indie developer building your first game or a studio reaching millions, we provide the tools, monetization, and audience you need to thrive.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Zap, text: "Instant Deployment" },
                                            { icon: Globe, text: "Global CDN" },
                                            { icon: Target, text: "Targeted Analytics" },
                                            { icon: Heart, text: "Community First" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <item.icon className="w-5 h-5 text-blue-400" />
                                                <span className="font-bold text-sm">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20"></div>
                                <div className="relative bg-[#0F172A] border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="h-40 bg-white/5 rounded-2xl animate-pulse"></div>
                                            <div className="h-24 bg-blue-500/10 rounded-2xl"></div>
                                        </div>
                                        <div className="space-y-4 pt-8">
                                            <div className="h-24 bg-purple-500/10 rounded-2xl"></div>
                                            <div className="h-40 bg-white/5 rounded-2xl animate-pulse"></div>
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
