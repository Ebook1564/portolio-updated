"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { gameDevGuides, GuideContentBlock } from "../data"
import {
    ArrowLeft, Clock, Share2, Check, Zap, Info,
    AlertTriangle, Quote, Terminal,
    CheckCircle2, XCircle, MessageSquare, Bookmark, Heart,
    Twitter, Linkedin, Copy, Calendar
} from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import glsl from 'react-syntax-highlighter/dist/esm/languages/prism/glsl';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Register languages
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('glsl', glsl);

const ContentBlockRenderer = ({ block }: { block: GuideContentBlock & { id?: string } }) => {
    switch (block.type) {
        case 'header':
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
                <Tag id={block.id} className={`${block.level === 2 ? 'text-2xl md:text-4xl font-black mt-16 mb-8 tracking-tight' : 'text-xl md:text-2xl font-black mt-10 mb-6 text-indigo-600'} scroll-mt-32`}>
                    {block.text}
                </Tag>
            );
        case 'paragraph':
            return <p className="text-lg md:text-xl text-slate-600 leading-[1.8] mb-8">{block.text}</p>;
        case 'list':
            const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
            return (
                <ListTag className={`list-${block.style === 'ordered' ? 'decimal' : 'disc'} pl-6 mb-8 space-y-4 text-lg text-slate-600`}>
                    {block.items.map((item, i) => <li key={i} className="pl-2">{item}</li>)}
                </ListTag>
            );
        case 'code':
            return (
                <div className="my-10 group">
                    <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <div className="bg-[#2D2D2D] px-6 py-4 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            {block.filename && (
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-sans">
                                    {block.filename}
                                </span>
                            )}
                            <Terminal className="w-4 h-4 text-slate-600" />
                        </div>
                        <div className="p-4 md:p-6 overflow-x-auto text-sm md:text-base">
                            <SyntaxHighlighter
                                language={block.language}
                                style={vscDarkPlus}
                                customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
                            >
                                {block.code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            );
        case 'alert':
            const variants = {
                tip: { icon: Zap, bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900', iconColor: 'text-emerald-500' },
                warning: { icon: AlertTriangle, bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', iconColor: 'text-amber-500' },
                info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', iconColor: 'text-blue-500' }
            };
            const v = variants[block.variant];
            return (
                <div className={`${v.bg} border-l-4 ${v.border} p-8 rounded-2xl mb-8 flex gap-6`}>
                    <v.icon className={`w-8 h-8 ${v.iconColor} shrink-0`} />
                    <div>
                        <h4 className={`font-black uppercase tracking-widest text-xs mb-2 ${v.text}`}>{block.title}</h4>
                        <p className={`text-lg font-medium ${v.text} opacity-90`}>{block.text}</p>
                    </div>
                </div>
            );
        case 'grid':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    {block.items.map((item, i) => (
                        <div key={i} className={`p-8 rounded-[2rem] border ${item.variant === 'good' ? 'bg-indigo-50/50 border-indigo-100' : 'bg-rose-50/50 border-rose-100'}`}>
                            <div className="flex items-center gap-3 mb-6">
                                {item.variant === 'good' ? <CheckCircle2 className="w-5 h-5 text-indigo-500" /> : <XCircle className="w-5 h-5 text-rose-500" />}
                                <h4 className={`text-xs font-black uppercase tracking-widest ${item.variant === 'good' ? 'text-indigo-700' : 'text-rose-700'}`}>{item.title}</h4>
                            </div>
                            <ul className="space-y-3">
                                {item.list.map((li, j) => (
                                    <li key={j} className={`text-sm font-medium flex gap-2 ${item.variant === 'good' ? 'text-indigo-900/70' : 'text-rose-900/70'}`}>
                                        <span className="opacity-40">•</span> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            );
        case 'quote':
            return (
                <div className="my-12 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200 relative">
                    <Quote className="absolute -top-6 -left-6 w-12 h-12 text-indigo-500/20" />
                    <p className="text-xl md:text-2xl font-serif italic text-slate-700 leading-relaxed">"{block.text}"</p>
                    {block.author && <p className="mt-4 text-sm font-black uppercase tracking-widest text-indigo-600">— {block.author}</p>}
                </div>
            );
        case 'table':
            return (
                <div className="overflow-x-auto my-10 border border-slate-100 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-sm md:text-base">
                        <thead className="bg-slate-50 text-slate-900 font-black uppercase tracking-widest text-[10px] border-b border-slate-100">
                            <tr>{block.headers.map((h, i) => <th key={i} className="p-6">{h}</th>)}</tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {block.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                    {row.map((cell, j) => <td key={j} className="p-6 text-slate-600 font-medium">{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        default:
            return null;
    }
};

export default function GuideDetailPage() {
    const params = useParams()
    const router = useRouter()
    const idStr = params?.id
    const id = idStr ? Number(idStr) : null
    const guide = id ? gameDevGuides.find(g => g.id === id) : null

    const [copied, setCopied] = useState(false)
    const [activeId, setActiveId] = useState("")
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    // Scroll Progress
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    useEffect(() => {
        if (guide) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActiveId(entry.target.id)
                    })
                },
                { rootMargin: "-100px 0px -40% 0px" }
            )

            guide.content.forEach(block => {
                if (block.type === 'header') {
                    const el = document.getElementById(block.text.toLowerCase().replace(/\s+/g, '-'))
                    if (el) observer.observe(el)
                }
            })

            return () => observer.disconnect()
        }
    }, [guide])

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!guide) return null

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-indigo-500/30">
            <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 origin-left z-[100]" style={{ scaleX }} />
            <Header />

            <main className="flex-1">
                {/* Hero section matching Blog style */}
                <section className="relative pt-32 pb-40 overflow-hidden bg-[#020617] text-white">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-[#020617] to-purple-900/40 opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                        <Link href="/guides" className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full backdrop-blur-md border border-white/5 text-sm mb-12">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Guides
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1] text-white drop-shadow-2xl"
                        >
                            {guide.title}
                        </motion.h1>

                        {/* Centered Author Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-6"
                        >
                            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white border-2 border-slate-900">
                                    {guide.author.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-white leading-none mb-1">{guide.author}</p>
                                    <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Guide Author</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
                                    <Calendar className="w-4 h-4 text-indigo-400" />
                                    <span className="font-bold text-sm text-slate-300">{guide.date}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
                                    <Clock className="w-4 h-4 text-indigo-400" />
                                    <span className="font-bold text-sm text-slate-300">{guide.readTime} read</span>
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
                                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/10"></div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" /> Contents
                                    </h4>
                                    <nav className="flex flex-col gap-1 border-l border-slate-100">
                                        {guide.content.map((block, idx) => {
                                            if (block.type === 'header' && block.level === 2) {
                                                const id = block.text.toLowerCase().replace(/\s+/g, '-');
                                                return (
                                                    <a key={idx} href={`#${id}`}
                                                        className={`text-[13px] font-bold py-2.5 pl-5 border-l-2 -ml-[1px] transition-all block ${activeId === id ? "border-indigo-600 text-indigo-600 bg-indigo-50/50" : "border-transparent text-slate-400 hover:text-slate-900"}`}
                                                        onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}
                                                    >
                                                        {block.text}
                                                    </a>
                                                );
                                            }
                                            return null;
                                        })}
                                    </nav>
                                </div>

                                {/* Stats & Action Card */}
                                <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-slate-100 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Read Time</span>
                                            <span className="font-bold text-slate-900 flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-500" /> {guide.readTime}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Difficulty</span>
                                            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest">{guide.difficulty}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleShare}
                                        className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95 shadow-xl shadow-slate-900/10"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                                        {copied ? "Copied!" : "Share Guide"}
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Article Card */}
                        <article className="flex-1 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative">
                            {/* Aesthetic Top Bar */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600"></div>

                            <div className="p-8 md:p-16 lg:p-20">
                                {/* Boxed Excerpt Intro */}
                                <div className="mb-16 p-10 bg-indigo-50/50 rounded-[2.5rem] border border-indigo-100/50 relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 shadow-inner">
                                            <MessageSquare className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <p className="text-xl md:text-2xl font-medium text-indigo-900 leading-relaxed italic">
                                            "{guide.excerpt}"
                                        </p>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                                        <Terminal className="w-48 h-48 text-indigo-900" />
                                    </div>
                                </div>

                                {/* Main Article Content */}
                                <div id="article-content" className="
                                    first-letter:[&>p:first-of-type]:text-5xl first-letter:[&>p:first-of-type]:md:text-7xl first-letter:[&>p:first-of-type]:font-black first-letter:[&>p:first-of-type]:text-indigo-600 first-letter:[&>p:first-of-type]:float-left first-letter:[&>p:first-of-type]:mr-4 first-letter:[&>p:first-of-type]:mt-[-8px]
                                ">
                                    {guide.content.map((block, i) => {
                                        if (block.type === 'header') {
                                            return <ContentBlockRenderer key={i} block={{ ...block, id: block.text.toLowerCase().replace(/\s+/g, '-') }} />;
                                        }
                                        return <ContentBlockRenderer key={i} block={block} />;
                                    })}
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
                                                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-indigo-500/20'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
                                                }`}
                                        >
                                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                                            {isSaved ? 'Saved' : 'Save'}
                                        </motion.button>
                                    </div>

                                    <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                                        <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Share Guide</span>
                                        <div className="flex gap-2.5">
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

                {/* Related Guides Section */}
                <section className="py-24 bg-slate-100/50 border-t border-slate-200/60">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight">More Guides</h3>
                            <Link href="/guides" className="text-indigo-600 font-bold hover:gap-3 transition-all flex items-center gap-2">
                                View all guides <ArrowLeft className="w-5 h-5 rotate-180" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {gameDevGuides.filter(g => g.id !== id).slice(0, 3).map((g) => (
                                <Link key={g.id} href={`/guides/${g.id}`} className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4 block">{g.category}</span>
                                    <h4 className="text-xl font-black mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{g.title}</h4>
                                    <div className="flex justify-between items-center text-xs font-bold text-slate-400 border-t border-slate-50 pt-6 mt-6">
                                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {g.readTime}</span>
                                        <span className="px-2 py-0.5 rounded bg-slate-50 border border-slate-100">{g.difficulty}</span>
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
