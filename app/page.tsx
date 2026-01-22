"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Users, Code, BarChart3, Rocket, CircleDollarSign, CheckCircle2, Globe, ShieldCheck, Layout, Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Testimonials } from "@/components/Testimonials"

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 gradient-blue">
        {/* Hero Section */}
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
              <motion.h1
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
                variants={itemVariants}
              >
                Powering the Future of Casual <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  & HTML5 Gaming
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium"
                variants={itemVariants}
              >
                Connect publishers with premium HTML5 games, unlock seamless revenue sharing, and captivate global gaming audiences—all with zero plugins required.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  <Link href="/blog">
                    <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl overflow-hidden font-black group/btn flex items-center gap-3">
                      <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                      />
                      <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">Get Started</span>
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>

                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  <Link href="/advertisers">
                    <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl overflow-hidden font-black">
                      <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                      />
                      For Advertisers
                    </Button>
                  </Link>
                </motion.div> */}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Redesigned */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase"
              >
                The SnappGames Advantage
              </motion.div>
              <motion.h2
                className="text-3xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why Choose <span className="text-blue-600"> SnappGames</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                We provide the tools and expertise to help your gaming business thrive in a competitive market.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "Maximum Revenue",
                  desc: "Our multi-format ad engine and premium network ensure you get the absolute best yield for every impression.",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Instant Integration",
                  desc: "Get live in minutes using our plug-and-play SDK. Zero complexity, maximum performance, and full documentation.",
                  color: "indigo"
                },
                {
                  icon: Users,
                  title: "Peak Engagement",
                  desc: "Our hand-picked library of over 500+ premium HTML5 games are engineered for maximum session length and player retention.",
                  color: "blue"
                },
                {
                  icon: Globe,
                  title: "Global Distribution",
                  desc: "Reach audiences in over 150 countries with localized content and a global server network for zero-latency gaming.",
                  color: "indigo"
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Security",
                  desc: "Brand safety is our priority. We use advanced filtering and monitoring to ensure a safe environment for players and advertisers.",
                  color: "blue"
                },
                {
                  icon: Layout,
                  title: "Advanced Analytics",
                  desc: "Track every metric that matters in real-time. Gain deep insights into player behavior and revenue performance.",
                  color: "indigo"
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-500/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 relative overflow-hidden">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${feature.color === 'blue' ? 'bg-blue-600 shadow-blue-500/20' : 'bg-indigo-600 shadow-indigo-500/20'
                        } shadow-lg group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.desc}
                      </p>

                      {/* Subtle Background Glow */}
                      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.color === 'blue' ? 'bg-blue-500' : 'bg-indigo-500'
                        }`}></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
        {/* Try Our Games Section */}


        {/* How It Works Section - Redesigned */}
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient( 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase"
              >
                Our Process
              </motion.div>
              <motion.h2
                className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How <span className="text-blue-600">SnappGame</span> Works
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                A streamlined ecosystem designed to maximize growth for developers, publishers, and advertisers alike.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pl-4 md:pl-0">
              {[
                {
                  icon: Code,
                  title: "Quick Integration",
                  desc: "Add our lightweight SDK to your platform with minimal code. Access hundreds of premium HTML5 games instantly.",
                  step: "01",
                  color: "bg-blue-600"
                },
                {
                  icon: Rocket,
                  title: "Launch & Engage",
                  desc: "Select games that match your audience. Our platform handles all the heavy lifting, hosting, and updates.",
                  step: "02",
                  color: "bg-indigo-600"
                },
                {
                  icon: BarChart3,
                  title: "Monetize & Scale",
                  desc: "Maximize revenue through high-performing ad formats and detailed analytics. Scale your gaming business with real-time insights.",
                  step: "03",
                  color: "bg-blue-700"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative p-10 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden h-full">
                    {/* Background Step Number */}
                    <span className="absolute -top-10 -right-10 text-[10rem] font-extrabold text-blue-500/5 select-none transition-all duration-500 group-hover:text-blue-500/10">
                      {item.step}
                    </span>

                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 relative z-10`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-extrabold mb-4 text-gray-900 relative z-10 tracking-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10 text-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Much Can You Earn Section */}
        <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
          {/* Decorative Gradients */}
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
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                    How much can you <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      earn with us?
                    </span>
                  </h2>
                  <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-lg">
                    Turn your audience into a recurring revenue stream with our high-yield monetization models and premium advertiser network.
                  </p>

                  <ul className="space-y-6 mb-12">
                    {[
                      "Up to 30% higher eCPMs than competitors",
                      "Instant access to 500+ premium advertisers",
                      "Weekly payments with zero hidden fees",
                      "Dedicated account manager for top partners"
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-4 text-lg"
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

                  <Link href="/enquire">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
                      Calculate Your Potential
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    label: "Avg. eCPM",
                    value: "$12.40",
                    detail: "Tier 1 Traffic",
                    icon: TrendingUp
                  },
                  {
                    label: "Monthly Payout",
                    value: "$50K+",
                    detail: "For Top Partners",
                    icon: CircleDollarSign
                  },
                  {
                    label: "Fill Rate",
                    value: "99.9%",
                    detail: "Global Coverage",
                    icon: Zap
                  },
                  {
                    label: "Total Yield",
                    value: "+45%",
                    detail: "Organic Growth",
                    icon: Rocket
                  }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <stat.icon className="h-8 w-8 text-blue-400 mb-6" />
                    <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                    <div className="text-blue-100/60 font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-blue-400/80 font-bold">{stat.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ultimate Experience Our Games Showcase - Light Theme Reveal */}




        {/* <Testimonials /> */}

        {/* Ultimate Ready to Get Started? CTA Revamp */}
        <section className="py-24 relative overflow-hidden">
          {/* Advanced Dynamic Background */}
          <div className="absolute inset-0 bg-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>

            {/* Animated Blobs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -120, 0],
                y: [0, 80, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden shadow-2xl">
                {/* Internal Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10 text-center">
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

                  <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-tight">
                    Ready to Scale Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Gaming Vision?</span>
                  </h2>

                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                    Join thousands of partners already maximizing revenue with our high-performance integration.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      {/* Pulse Effect Background */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                      <Link href="/blog">
                        <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl flex items-center gap-3 overflow-hidden">
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{ x: ['100%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                          />
                          <span className="font-black">Get Started Now</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Rocket className="h-6 w-6" />
                          </motion.div>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
