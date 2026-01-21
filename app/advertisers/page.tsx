"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, BarChart3, Users, TrendingUp, CheckCircle2, Rocket, Globe, Zap, Play } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function AdvertisersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Dark Immersive */}
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

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Scale Your Growth</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight"
                variants={itemVariants}
              >
                Reach Engaged <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Gaming Audiences
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium"
                variants={itemVariants}
              >
                Connect with millions of players worldwide through our high-performance advertising engine and premium gaming network.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  <Link href="/enquire">
                    <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl overflow-hidden font-black">
                      <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                      />
                      Start Campaign
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ad Solutions Section - Light Theme Reveal */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Light Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase"
              >
                Our Solutions
              </motion.div>
              <motion.h2
                className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Premium <span className="text-blue-600">Ad Formats</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Engineered for maximum engagement and brand safety across our global gaming inventory.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "Rewarded Video",
                  desc: "Drive peak engagement with opting-in video ads. Users receive in-game rewards, leading to 95%+ completion rates.",
                  icon: Target,
                  stats: "95% Completion Rate",
                  color: "blue"
                },
                {
                  title: "Immersive Interstitials",
                  desc: "Capture full attention during natural breaks in gameplay. Perfect for high-impact brand awareness and app installs.",
                  icon: BarChart3,
                  stats: "3.2% Average CTR",
                  color: "indigo"
                },
                {
                  title: "Native Playables",
                  desc: "Interactive ad units that match the gaming environment. Zero friction, high conversion, and maximum user enjoyment.",
                  icon: Zap,
                  stats: "4.5% Interaction Rate",
                  color: "purple"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-full bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-blue-500/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 relative overflow-hidden">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-blue-600 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-black mb-4 text-gray-900 tracking-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {item.desc}
                    </p>
                    <div className="text-blue-600 font-bold tracking-wide uppercase text-sm border-t border-blue-50 pt-4">
                      {item.stats}
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics - Dark Impact */}
        <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                    Data-Driven <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      Performance
                    </span>
                  </h2>
                  <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-lg font-medium">
                    We deliver massive scale and precise targeting to ensure your campaign hits its KPIs every single time.
                  </p>

                  <ul className="space-y-6 mb-12">
                    {[
                      "Global reach with 180+ countries supported",
                      "Advanced demographic and interest targeting",
                      "Real-time analytics and optimization",
                      "Strict brand safety and fraud protection"
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-4 text-lg font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                        </div>
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { metric: "50M+", label: "Monthly Impressions", icon: Globe },
                  { metric: "2.8%", label: "Average CTR", icon: TrendingUp },
                  { metric: "95%", label: "Completion Rate", icon: Play },
                  { metric: "180+", label: "Countries Reached", icon: Users },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <stat.icon className="h-8 w-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-black mb-1">{stat.metric}</div>
                    <div className="text-blue-100/60 font-bold uppercase tracking-wider text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Advertise Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl scale-110 transform rotate-12"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`h-40 rounded-3xl ${i % 2 === 0 ? 'bg-blue-600' : 'bg-slate-100'} overflow-hidden shadow-xl transform ${i % 2 === 0 ? 'translate-y-4' : '-translate-y-4'}`}
                    >
                      <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase">
                    The SnappGame Advantage
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 tracking-tighter">
                    Why Advertise <br /><span className="text-blue-600">With Us?</span>
                  </h2>
                  <div className="space-y-6">
                    {[
                      "Highly engaged audience with 15+ min session time",
                      "Zero fraud with verified transparent traffic",
                      "Localized content and global distribution",
                      "Premium HTML5 inventory with high retention"
                    ].map((point, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-4 items-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-lg text-gray-700 font-medium">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Portal Revamp */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden shadow-2xl text-center text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Join the Future</span>
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                  Ready to Boost Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">ROI?</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                  Connect with millions of engaged gamers worldwide and see the difference premium inventory makes.
                </p>

                <Link href="/enquire">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                    <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl font-black">
                      Get Started Now
                      <Rocket className="ml-3 h-6 w-6" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

