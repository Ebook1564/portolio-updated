"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useParams, useRouter } from "next/navigation"
import { blogPosts } from "../data"
import { motion, useScroll, useSpring } from "framer-motion"
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Heart, Twitter, Linkedin, Facebook, Copy, Check, MessageSquare } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function BlogPostPage() {
    const params = useParams()
    const router = useRouter()
    const idStr = params?.id
    const id = idStr ? Number(idStr) : null
    const post = id ? blogPosts.find((p) => p.id === id) : null

    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [copied, setCopied] = useState(false)
    const [activeId, setActiveId] = useState("")

    // Scroll Progress Logic
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // TOC Generation Logic (Extracting h3 from HTML content)
    const [headings, setHeadings] = useState<{ id: string, text: string }[]>([])

    useEffect(() => {
        if (post) {
            // Simple extraction of h3 text for TOC
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = post.content
            const h3s = tempDiv.querySelectorAll('h3')
            const extracted = Array.from(h3s).map((h, i) => {
                const text = h.textContent || ""
                const sectionId = `section-${i}`
                return { id: sectionId, text }
            })
            setHeadings(extracted)

            // Add IDs to the actual rendered headings in the DOM after a short delay
            setTimeout(() => {
                const contentEl = document.getElementById('blog-content')
                if (contentEl) {
                    const renderedH3s = contentEl.querySelectorAll('h3')
                    renderedH3s.forEach((h, i) => {
                        h.setAttribute('id', `section-${i}`)
                        h.classList.add('scroll-mt-32')
                    })
                }
            }, 100)

            // Observer for active TOC item
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActiveId(entry.target.id)
                    })
                },
                { rootMargin: "-100px 0px -40% 0px" }
            )

            extracted.forEach(h => {
                const el = document.getElementById(h.id)
                if (el) observer.observe(el)
            })

            return () => observer.disconnect()
        }
    }, [post])

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white font-sans">
                <Header />
                <div className="text-center p-8">
                    <h1 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">404</h1>
                    <p className="text-slate-400 text-xl mb-8">This story seems to be missing.</p>
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 mx-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        <ArrowLeft className="w-5 h-5" /> Return Home
                    </button>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-500/30">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            <Header />

            <main className="flex-1">
                {/* Immersive Hero Section - Focus on Title */}
                <section className="relative pt-32 pb-40 overflow-hidden bg-[#020617] text-white">
                    <div className="absolute inset-0 z-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.image} opacity-20 mix-blend-overlay`}></div>
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => router.push('/blog')}
                            className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full backdrop-blur-md border border-white/5 text-sm mb-12"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-bold">Back to Blog</span>
                        </motion.button>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1] text-white drop-shadow-2xl"
                        >
                            {post.title}
                        </motion.h1>

                        {/* Centered Author Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-6"
                        >
                            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white border-2 border-slate-900">
                                    {post.author.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-white leading-none mb-1">{post.author}</p>
                                    <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Verified Author</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    <span className="font-bold text-sm text-slate-300">{post.date}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="font-bold text-sm text-slate-300">{post.readTime}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content with Sidebar TOC */}
                <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-20 mb-20">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">

                        {/* Sidebar Container */}
                        <aside className="hidden lg:block w-72 shrink-0">
                            <div className="sticky top-32 space-y-6">
                                {/* TOC Card */}
                                <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/10"></div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" /> Contents
                                    </h4>
                                    <nav className="flex flex-col gap-1 border-l border-slate-100">
                                        {headings.map((h) => (
                                            <a key={h.id} href={`#${h.id}`}
                                                className={`text-[13px] font-bold py-2.5 pl-5 border-l-2 -ml-[1px] transition-all block ${activeId === h.id ? "border-blue-600 text-blue-600 bg-blue-50/50" : "border-transparent text-slate-400 hover:text-slate-900"}`}
                                                onClick={(e) => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" }); }}
                                            >
                                                {h.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Stats & Action Card */}
                                <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-slate-100 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Read Time</span>
                                            <span className="font-bold text-slate-900 flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> {post.readTime}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Difficulty</span>
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest">Beginner</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleShare}
                                        className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-900/10"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                                        {copied ? "Copied!" : "Share Story"}
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Article Card */}
                        <article className="flex-1 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative">
                            {/* Aesthetic Top Bar */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"></div>

                            <div className="p-8 md:p-16 lg:p-20">
                                {/* Boxed Excerpt Intro */}
                                <div className="mb-16 p-10 bg-blue-50/50 rounded-[2.5rem] border border-blue-100/50 relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 shadow-inner">
                                            <MessageSquare className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <p className="text-xl md:text-2xl font-medium text-blue-900 leading-relaxed italic">
                                            "{post.excerpt}"
                                        </p>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                                        <Share2 className="w-48 h-48 text-blue-900" />
                                    </div>
                                </div>

                                {/* Main Article Content */}
                                <div id="blog-content" className="
    space-y-10
    [&>h3]:text-2xl [&>h3]:md:text-4xl [&>h3]:font-black [&>h3]:text-slate-900 [&>h3]:mt-16 [&>h3]:mb-8 [&>h3]:tracking-tight
    [&>p]:text-lg [&>p]:md:text-xl [&>p]:text-slate-600 [&>p]:leading-[1.8] [&>p]:mb-8
    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:text-lg [&>ul]:text-slate-600 [&>ul]:mb-8
">
    <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
            code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline ? (
                    <pre className="bg-slate-900 text-white p-6 rounded-2xl mt-8 mb-8 overflow-x-auto">
                        <code className={`language-${match?.[1]} ${className}`} {...props}>
                            {children}
                        </code>
                    </pre>
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }}
    >
        {post.content}
    </ReactMarkdown>
</div>

                                {/* Bottom Feedback & Actions */}
                                <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsLiked(!isLiked)}
                                            className={`flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black transition-all text-sm shadow-sm ${isLiked
                                                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-rose-500/20'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:text-rose-500 hover:border-rose-300'
                                                }`}
                                        >
                                            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                            {isLiked ? 'Helpful!' : 'Helpful'}
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsSaved(!isSaved)}
                                            className={`flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black transition-all text-sm shadow-sm ${isSaved
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/20'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                                                }`}
                                        >
                                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                                            {isSaved ? 'Saved' : 'Save'}
                                        </motion.button>
                                    </div>

                                    <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                                        <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Share Story</span>
                                        <div className="flex gap-2">
                                            {[
                                                { icon: Twitter, color: "bg-[#1DA1F2]/5 text-[#1DA1F2]", hover: "hover:bg-[#1DA1F2] hover:text-white" },
                                                { icon: Linkedin, color: "bg-[#0A66C2]/5 text-[#0A66C2]", hover: "hover:bg-[#0A66C2] hover:text-white" },
                                                { icon: Copy, color: "bg-slate-50 text-slate-600", hover: "hover:bg-slate-800 hover:text-white", action: handleShare }
                                            ].map((btn, i) => (
                                                <motion.button
                                                    key={i}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={btn.action}
                                                    className={`w-11 h-11 rounded-xl ${btn.color} ${btn.hover} flex items-center justify-center transition-all shadow-sm border border-slate-100/50`}
                                                >
                                                    {i === 2 && copied ? <Check className="w-4 h-4" /> : <btn.icon className="w-4 h-4" />}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Read Next Section */}
                <section className="py-24 bg-slate-100/50 border-t border-slate-200/60">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Read Next</h3>
                            <button onClick={() => router.push('/blog')} className="text-blue-600 font-bold hover:gap-3 transition-all flex items-center gap-2">
                                View all stories <ArrowLeft className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogPosts.filter(p => p.id !== id).slice(0, 3).map((p) => (
                                <Link key={p.id} href={`/blog/${p.id}`} className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 block">{p.category}</span>
                                    <h4 className="text-xl font-black mb-4 group-hover:text-blue-600 transition-colors leading-tight">{p.title}</h4>
                                    <div className="flex justify-between items-center text-xs font-bold text-slate-400 border-t border-slate-50 pt-6 mt-6">
                                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {p.readTime}</span>
                                        <span>{p.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
