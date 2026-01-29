"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CheckCircle2, User, Mail, Phone, Globe, Users, Link as LinkIcon, Send, ShieldCheck, Zap, TrendingUp, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    country: "",
    dailyUsers: "",
    productUrl: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.name,
          useremail: formData.email,
          phonenumber: formData.phone,
          countrycode: formData.countryCode,
          countryName: formData.country,
          dailyactiveuser: formData.dailyUsers,
          producturl: formData.productUrl,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          country: "",
          dailyUsers: "",
          productUrl: ""
        })
        // Reset success state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
              <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Partner Relations</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Future Together
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Share your details below and our team will get back to you within 24 hours to discuss how we can scale your growth.
            </motion.p>
          </div>
        </section>

        {/* Combined Form & Info Section */}
        <section className="py-24 bg-white relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left Side: Info & Trust Builders */}
              <div className="lg:col-span-5 space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
                    Why partner with <span className="text-blue-600">SnappGame?</span>
                  </h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    We're not just a platform; we're your growth engine. Join 500+ premium publishers and world-class advertisers.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {[
                    { icon: ShieldCheck, title: "Secure & Trusted", desc: "Enterprise-grade security and transparent reporting systems." },
                    { icon: Zap, title: "Instant Integration", desc: "Get up and running in minutes with our lightweight, powerful SDK." },
                    { icon: TrendingUp, title: "Maximum Yield", desc: "Advanced AI-driven optimization for the highest possible revenue." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-lg">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <CheckCircle2 className="w-24 h-24" />
                  </div>
                  <p className="text-blue-400 font-black mb-2 uppercase tracking-widest text-sm">Response Time</p>
                  <p className="text-3xl font-black tracking-tighter">Under 24 Hours</p>
                  <p className="text-slate-400 mt-2 font-medium">Our specialists are standing by 24/7.</p>
                </motion.div>
              </div>

              {/* Right Side: High-Fidelity Form */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Outer Glow Decorator */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur-xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                  <div className="relative bg-white border border-slate-100 p-8 md:p-12 rounded-[3.5rem] shadow-2xl overflow-hidden">

                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="text-center py-20"
                        >
                          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100 animate-bounce">
                            <CheckCircle2 className="w-12 h-12" />
                          </div>
                          <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Awesome!</h3>
                          <p className="text-xl text-slate-500 font-medium max-w-sm mx-auto">
                            Your enquiry has been received. Our team is already on it.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onSubmit={handleSubmit}
                          className="space-y-8"
                        >
                          {error && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold flex items-center gap-2"
                            >
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              {error}
                            </motion.div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name */}
                            <div className="space-y-3">
                              <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 px-1">
                                <User className="w-4 h-4 text-blue-600" /> Full Name
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-slate-900 placeholder:text-slate-400"
                                placeholder="John Doe"
                              />
                            </div>

                            {/* Email */}
                            <div className="space-y-3">
                              <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 px-1">
                                <Mail className="w-4 h-4 text-blue-600" /> Email Address
                              </label>
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-slate-900 placeholder:text-slate-400"
                                placeholder="john@company.com"
                              />
                            </div>

                            {/* Phone */}
                            <div className="space-y-3">
                              <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center justify-between gap-2 px-1">
                                <span className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-blue-600" /> Phone Number
                                </span>
                                <span className="text-lg">
                                  {formData.countryCode === '+91' && "🇮🇳"}
                                  {formData.countryCode === '+1' && "🇺🇸"}
                                  {formData.countryCode === '+44' && "🇬🇧"}
                                  {formData.countryCode === '+971' && "🇦🇪"}
                                  {formData.countryCode === '+49' && "🇩🇪"}
                                  {formData.countryCode === '+61' && "🇦🇺"}
                                  {formData.countryCode === '+65' && "🇸🇬"}
                                </span>
                              </label>
                              <div className="flex gap-3 items-center">
                                <select
                                  value={formData.countryCode}
                                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                  className="w-32 px-4 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-bold text-slate-900 appearance-none scrollbar-hide shrink-0"
                                >
                                  <option value="+91">🇮🇳 +91</option>
                                  <option value="+1">🇺🇸 +1</option>
                                  <option value="+44">🇬🇧 +44</option>
                                  <option value="+971">🇦🇪 +971</option>
                                  <option value="+49">🇩🇪 +49</option>
                                  <option value="+61">🇦🇺 +61</option>
                                  <option value="+1">🇨🇦 +1</option>
                                  <option value="+65">🇸🇬 +65</option>
                                </select>
                                <input
                                  type="tel"
                                  required
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-slate-900 placeholder:text-slate-400 min-w-0"
                                  placeholder="9876543210"
                                />
                              </div>
                            </div>

                            {/* Country */}
                            <div className="space-y-3">
                              <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center justify-between gap-2 px-1">
                                <span className="flex items-center gap-2">
                                  <Globe className="w-4 h-4 text-blue-600" /> Country
                                </span>
                                <span className="text-lg opacity-70">🌍</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-slate-900 placeholder:text-slate-400"
                                placeholder="United States"
                              />
                            </div>
                          </div>

                          {/* Users */}
                          <div className="space-y-3">
                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 px-1">
                              <Users className="w-4 h-4 text-blue-600" /> Daily Active Users
                            </label>
                            <input
                              type="number"
                              required
                              value={formData.dailyUsers}
                              onChange={(e) => setFormData({ ...formData, dailyUsers: e.target.value })}
                              className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-slate-900 placeholder:text-slate-400"
                              placeholder="e.g. 10,000"
                            />
                          </div>

                          {/* URL */}
                          <div className="space-y-3">
                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 px-1">
                              <LinkIcon className="w-4 h-4 text-blue-600" /> Product/Website URL
                            </label>
                            <input
                              type="url"
                              required
                              value={formData.productUrl}
                              onChange={(e) => setFormData({ ...formData, productUrl: e.target.value })}
                              className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-slate-900 placeholder:text-slate-400"
                              placeholder="https://yourpage.com"
                            />
                          </div>

                          {/* Submit */}
                          <div className="pt-6">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group/btn">
                              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover/btn:opacity-60 transition duration-1000 animate-pulse"></div>
                              <Button
                                type="submit"
                                size="lg"
                                disabled={loading}
                                className="relative w-full bg-[#020617] text-white text-xl py-8 rounded-2xl font-black shadow-2xl overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                              >
                                {/* Shimmer Effect */}
                                {!loading && (
                                  <motion.div
                                    animate={{ x: ['100%', '-100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 -translate-x-full"
                                  />
                                )}
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                  {loading ? (
                                    <>
                                      Submitting... <Loader2 className="w-5 h-5 animate-spin" />
                                    </>
                                  ) : (
                                    <>
                                      Submit Enquiry <Send className="w-5 h-5" />
                                    </>
                                  )}
                                </span>
                              </Button>
                            </motion.div>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
