"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Quote, Star, User, MessageSquare, ShieldCheck, Zap, Rocket, Users } from "lucide-react"
import React, { useRef, useState } from "react"

const testimonials = [
    {
        name: "Alex Thompson",
        role: "CEO, PlaySphere Media",
        content: "Integrating SnappGames was a game-changer for our platform. Our user retention increased by 40% within the first month. The selection of HTML5 games is truly premium.",
        rating: 5,
        highlight: "40% Higher Retention",
        icon: Zap,
        color: "from-blue-500 to-cyan-400"
    },
    {
        name: "Sarah Chen",
        role: "Marketing Director, Global Ads",
        content: "The ad performance on SnappGames surpasses any other network we've worked with. The transparency in analytics and the quality of audiences are exceptional.",
        rating: 5,
        highlight: "Top Tier Audiences",
        icon: ShieldCheck,
        color: "from-indigo-500 to-purple-400"
    },
    {
        name: "Marco Rossi",
        role: "Lead Developer, IndieHub",
        content: "We were live in less than 30 minutes! The SDK is extremely developer-friendly and the performance across mobile devices is flawless.",
        rating: 5,
        highlight: "Minutes to Launch",
        icon: MessageSquare,
        color: "from-emerald-500 to-teal-400"
    },
    {
        name: "Emily Watson",
        role: "Founder, CasualPlay",
        content: "What sets SnappGames apart is their dedicated support. They helped us optimize our ad placements for maximum revenue without compromising UX.",
        rating: 5,
        highlight: "Premium Support",
        icon: Users,
        color: "from-rose-500 to-pink-400"
    },
    {
        name: "David Miller",
        role: "Product Manager, GamePortal",
        content: "The variety of games is incredible. From high-octane racing to brain-teasing puzzles, there's something for every user segment.",
        rating: 5,
        highlight: "Huge Game Library",
        icon: Rocket,
        color: "from-amber-500 to-orange-400"
    },
    {
        name: "Sophia Zhang",
        role: "Director, TechWave",
        content: "Scaling our gaming vision globally was made effortless with SnappGames. Their localized content and low-latency servers are world-class.",
        rating: 5,
        highlight: "Global Scale",
        icon: Zap,
        color: "from-blue-600 to-indigo-500"
    }
]

function TestimonialCard({ testimonial, index }: { testimonial: any, index: number }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const Icon = testimonial.icon

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group cursor-default"
        >
            {/* Glow Effect */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.color} rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

            <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
                {/* Border Beam Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" style={{ backgroundSize: '200% 100%' }} />

                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 -z-0" />
                        <p className="relative z-10 text-gray-200 text-lg md:text-xl leading-relaxed font-medium mb-8">
                            "{testimonial.content}"
                        </p>
                    </div>
                </div>

                <div style={{ transform: "translateZ(30px)" }} className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                        <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className="relative w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 overflow-hidden">
                            <User className="w-8 h-8 text-white/50" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-black text-white text-lg tracking-tight">{testimonial.name}</h4>
                        <p className="text-sm text-blue-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                </div>

                {/* Highlight Badge */}
                <div className={`absolute top-0 right-0 px-6 py-2 bg-gradient-to-r ${testimonial.color} text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-3xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out shadow-xl`}>
                    {testimonial.highlight}
                </div>
            </div>
        </motion.div>
    )
}

export function Testimonials() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#020617]">
            {/* Ultra Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30" />

                {/* Moving Background Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px]"
                />

                {/* Animated Grid Lines */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase">Testimonials</span>
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-[0.9]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Trusted by the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            World's Best Teams
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Don't just take our word for it. Hear from the visionaries and developers who are building the future of gaming on SnappGames.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto perspective-1000">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>

                {/* Stats Summary Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24"
                >
                    {[
                        { label: "Partner Satisfaction", value: "99.9%" },
                        { label: "Active Publishers", value: "2,500+" },
                        { label: "Games Delivered", value: "10M+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-black text-blue-500/60 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </section>
    )
}
