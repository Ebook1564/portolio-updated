"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { devLogs } from "./data"
import { ArrowRight, Box, Cpu, Network, Zap, Layers, Bug, Code2, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const featuredLog = devLogs[0];
  const regularLogs = devLogs.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}>
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Industry Headlines</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              The Code Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                The Game
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Latest developments from various walks of Technology and the key takeaways we can draw from them.
            </motion.p>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 bg-white relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Featured Story - Horizontal Card */}
            {featuredLog && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <Link href={`/news/${featuredLog.id}`} className="group block">
                  <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl transition-all duration-700 hover:-translate-y-2">
                    <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${featuredLog.imageGradient} opacity-20 z-10 group-hover:opacity-10 transition-opacity`} />
                      <img
                        src={featuredLog.imageUrl}
                        alt={featuredLog.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-8 left-8 z-20">
                        <span className="bg-white/95 backdrop-blur-md text-slate-900 text-xs font-black px-5 py-2 rounded-xl uppercase tracking-widest border border-white/50 shadow-lg">
                          {featuredLog.topic}
                        </span>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center text-white relative">
                      {/* Animated Blob Background */}
                      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-widest">
                          Latest Case Study
                        </span>
                        <span className="text-slate-400 text-sm font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {featuredLog.readTime}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                        {featuredLog.title}
                      </h2>

                      <p className="text-slate-300 text-lg mb-8 line-clamp-3 font-medium leading-relaxed">
                        {featuredLog.excerpt}
                      </p>

                      {/* Featured Challenge Preview */}
                      <div className="mb-10 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group/challenge">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <Bug className="w-4 h-4 text-red-400" />
                            <span className="text-[10px] font-black text-blue-300 tracking-[0.2em] uppercase">The Challenge</span>
                          </div>
                          <p className="text-base text-slate-300 italic opacity-80 leading-relaxed">
                            "{featuredLog.challenge.description}"
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Cpu className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="block text-white font-bold text-sm tracking-tight">{featuredLog.keyTopics[0]}</span>
                            <span className="block text-slate-400 text-xs font-medium">Core Tech</span>
                          </div>
                        </div>
                        <div className="text-blue-400 font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                          Explore Study <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularLogs.map((log, index) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <Link href={`/news/${log.id}`} className="flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative">
                    <div className="h-60 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${log.imageGradient} opacity-20 z-10 group-hover:opacity-10 transition-opacity`} />
                      <img
                        src={log.imageUrl}
                        alt={log.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-6 left-6 z-20">
                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest border border-white/50">
                          {log.topic}
                        </span>
                      </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{log.date}</span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                        {log.title}
                      </h3>

                      <p className="text-slate-600 text-base font-medium line-clamp-3 mb-8 leading-relaxed">
                        {log.excerpt}
                      </p>

                      <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2">
                            <Bug className="w-3.5 h-3.5 text-red-500" />
                            <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">The Challenge</span>
                          </div>
                          <p className="text-xs text-slate-600 italic leading-relaxed opacity-80">
                            "{log.challenge.description}"
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-8 mt-8">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-400 text-xs font-bold tracking-tight">{log.readTime}</span>
                        </div>
                        <div className="text-blue-600 font-black flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-widest">
                          Read <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
