"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, MessageSquare, User, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const inputClasses = (name: string) => `
        w-full bg-white/5 border rounded-xl py-4 px-12 text-white outline-none transition-all duration-300
        ${focusedField === name
            ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-white/10"
            : "border-white/10 hover:border-white/20 hover:bg-white/[0.07]"}
    `

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-white overflow-hidden selection:bg-blue-500/30">
            <Header />

            <main className="flex-1 relative pt-32 pb-20">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent" />
                    <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                        {/* Left Column: Content */}
                        <div className="lg:w-5/12 pt-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Contact Us</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                                    Let's Build Something <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        Iconic Together
                                    </span>
                                </h1>

                                <p className="text-xl text-slate-400 leading-relaxed mb-12">
                                    Have a question about our game engine solutions? Want to partner up?
                                    Or just want to chat about a shiny new plugin in Unity? We are all ears.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                                            <Mail className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                            <p className="text-slate-400">saxena.aman5@gmail.com</p>
                                            <p className="text-slate-500 text-sm mt-1">We usually reply within 24 hours.</p>
                                        </div>
                                    </div>


                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:w-7/12">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-20 transform rotate-1"></div>
                                <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">

                                    {!isSubmitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2 group">
                                                    <label className="text-sm font-bold text-slate-400 ml-1 group-focus-within:text-blue-400 transition-colors">Name</label>
                                                    <div className="relative">
                                                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-blue-400' : 'text-slate-500'}`} />
                                                        <input
                                                            type="text"
                                                            placeholder="John Doe"
                                                            required
                                                            className={inputClasses('name')}
                                                            onFocus={() => setFocusedField('name')}
                                                            onBlur={() => setFocusedField(null)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2 group">
                                                    <label className="text-sm font-bold text-slate-400 ml-1 group-focus-within:text-blue-400 transition-colors">Email</label>
                                                    <div className="relative">
                                                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-blue-400' : 'text-slate-500'}`} />
                                                        <input
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            required
                                                            className={inputClasses('email')}
                                                            onFocus={() => setFocusedField('email')}
                                                            onBlur={() => setFocusedField(null)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-slate-400 ml-1 group-focus-within:text-blue-400 transition-colors">Subject</label>
                                                <div className="relative">
                                                    <MessageSquare className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'subject' ? 'text-blue-400' : 'text-slate-500'}`} />
                                                    <input
                                                        type="text"
                                                        placeholder="How can we help?"
                                                        required
                                                        className={inputClasses('subject')}
                                                        onFocus={() => setFocusedField('subject')}
                                                        onBlur={() => setFocusedField(null)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-slate-400 ml-1 group-focus-within:text-blue-400 transition-colors">Message</label>
                                                <div className="relative">
                                                    <textarea
                                                        placeholder="Tell us about your project or question..."
                                                        required
                                                        rows={5}
                                                        className={`resize-none ${inputClasses('message')}`}
                                                        onFocus={() => setFocusedField('message')}
                                                        onBlur={() => setFocusedField(null)}
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="min-h-[400px] flex flex-col items-center justify-center text-center p-8"
                                        >
                                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                                            <p className="text-slate-400 mb-8">We have received your message and will get back to you shortly.</p>
                                            <button
                                                onClick={() => {
                                                    setIsSubmitted(false)
                                                    setFocusedField(null)
                                                }}
                                                className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                                            >
                                                Send Another
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
