"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Calendar, ArrowRight, Clock, User, Tag } from "lucide-react"
import { motion } from "framer-motion"

import { blogPosts } from "./data"

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Dark Immersive Sync */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#020617] text-white">
          {/* Advanced Dynamic Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>

            {/* Animated Blobs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]"
            />

            {/* Glowing Grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Insights & Trends</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">SnappGames</span> Blog
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Stay ahead with the latest development logs, optimization strategies, and deep dives into the future of gaming.
            </motion.p>
          </div>
        </section>

        {/* Blog Feed Section */}
        <section className="py-24 bg-white relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <Link href={`/blog/${featuredPost.id}`} className="group block">
                <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl transition-all duration-700 hover:-translate-y-2">
                  <div className={`lg:w-1/2 h-80 lg:h-auto bg-gradient-to-br ${featuredPost.image} relative`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  </div>
                  <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center text-white relative">
                    {/* Animated Blob Background */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-widest">
                        {featuredPost.category}
                      </span>
                      <span className="text-slate-400 text-sm font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-300 text-lg mb-8 line-clamp-3 font-medium leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                          <User className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-white font-bold">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 font-black group-hover:gap-4 transition-all">
                        Read Story <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <Link href={`/blog/${post.id}`} className="flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative">
                    <div className={`h-60 bg-gradient-to-br ${post.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest border border-white/50">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 text-base font-medium line-clamp-3 mb-8 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-8">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-400 text-xs font-bold tracking-tight">{post.readTime}</span>
                        </div>
                        <div className="text-blue-600 font-black flex items-center gap-2 group-hover:gap-3 transition-all">
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

        {/* Newsletter / CTA Section */}
        {/* <section className="py-24 relative overflow-hidden bg-slate-50">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-[#020617] rounded-[4rem] p-12 md:p-20 overflow-hidden shadow-2xl text-center text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                    Never Miss an <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Industry Update</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                    Subscribe to our weekly newsletter and get the most important gaming industry insights delivered directly to your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-xl font-medium"
                    />
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-500/10">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

