"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { useParams } from "next/navigation"
import { tutorials, ContentBlock } from "../data"
import { ArrowLeft, Clock, Share2, Check, ThumbsUp, ThumbsDown, PlayCircle, Heart, Bookmark, Twitter, Linkedin, Copy } from "lucide-react"
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

export default function TutorialDetailPage() {
    const params = useParams()
    const tutorial = tutorials.find(t => t.id.toString() === params.id)
    const [activeId, setActiveId] = useState("")
    const [copied, setCopied] = useState(false)
    const [helpful, setHelpful] = useState<boolean | null>(null)
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    // Scroll Progress
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    const headings = tutorial?.content
        .filter(b => b.type === 'header')
        .map((b: any, i) => ({ id: `section-${i}`, text: b.text, level: b.level })) || []

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id)
                })
            },
            { rootMargin: "-100px 0px -40% 0px" }
        )
        headings.forEach(h => {
            const el = document.getElementById(h.id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [headings])

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!tutorial) return null
    const Icon = tutorial.icon

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFC] font-sans text-slate-900 selection:bg-indigo-500/30">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[100]" style={{ scaleX }} />
            <Header />

            <main className="flex-1">
                {/* Hero - Guide Style Sync */}
                <section className="relative pt-32 pb-48 overflow-hidden bg-[#0F172A]">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <Link href="/tips-and-tricks" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white mb-8 text-xs font-bold uppercase tracking-widest group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Tips & Tricks
                        </Link>
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-5 bg-white/5 rounded-3xl mb-8 backdrop-blur-xl border border-white/10 shadow-2xl">
                                <Icon className="w-10 h-10 text-indigo-400" />
                            </motion.div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">{tutorial.title}</h1>
                            <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">{tutorial.avatar}</div>
                                    <span>{tutorial.author}</span>
                                </div>
                                <span>•</span>
                                <span>{tutorial.date}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Layout */}
                <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-32 mb-20">
                    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">

                        {/* Sidebar - Guide Style Sync */}
                        <aside className="hidden lg:block w-72 shrink-0">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> Contents
                                    </h4>
                                    <nav className="flex flex-col gap-1 relative border-l-2 border-slate-100 ml-1">
                                        {headings.map((h) => (
                                            <a key={h.id} href={`#${h.id}`}
                                                className={`text-[13px] font-medium py-2 pl-4 border-l-2 -ml-[2px] transition-all block ${activeId === h.id ? "border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-r-lg" : "border-transparent text-slate-500 hover:text-slate-900"}`}
                                                onClick={(e) => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" }); setActiveId(h.id); }}
                                            >
                                                {h.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-4">
                                    <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Read Time</span><span className="font-bold text-slate-900 flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500" /> {tutorial.readTime}</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Difficulty</span><span className="font-bold px-2 py-0.5 rounded-md text-xs uppercase bg-indigo-100 text-indigo-600">{tutorial.difficulty}</span></div>
                                    <button onClick={handleShare} className="w-full flex justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all active:scale-95">{copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />} {copied ? "Copied!" : "Share Lesson"}</button>
                                </div>
                            </div>
                        </aside>

                        {/* Article Renderer - Guide Style Sync */}
                        <article className="flex-1 min-w-0 bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />
                            <p className="text-2xl md:text-3xl font-serif text-slate-700 leading-normal mb-12 relative z-10">
                                <span className="text-6xl float-left mr-3 mt-[-10px] text-indigo-300 font-black">“</span>{tutorial.excerpt}
                            </p>
                            <hr className="border-slate-100 mb-12" />

                            <div className="space-y-8">
                                {tutorial.content.map((block, index) => (
                                    <ContentBlockRenderer key={index} block={block} index={index} />
                                ))}
                            </div>

                            {/* Bottom Feedback & Actions */}
                            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsLiked(!isLiked)}
                                        className={`flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px] flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-black transition-all text-sm shadow-sm ${isLiked
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
                                        className={`flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px] flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-black transition-all text-sm shadow-sm ${isSaved
                                            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-indigo-500/20'
                                            : 'bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
                                            }`}
                                    >
                                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                                        {isSaved ? 'Saved' : 'Save'}
                                    </motion.button>
                                </div>

                                <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                                    <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Share Tip</span>
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
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

function ContentBlockRenderer({ block, index }: { block: ContentBlock, index: number }) {
    switch (block.type) {
        case 'header':
            const Tag = block.level === 2 ? 'h2' : 'h3';
            const className = block.level === 2
                ? "text-3xl font-black text-slate-900 mt-16 mb-6 tracking-tight relative scroll-mt-32"
                : "text-2xl font-bold text-indigo-900 mt-12 mb-4 scroll-mt-32";
            return <Tag id={`section-${index}`} className={className}>{block.text}</Tag>;

        case 'paragraph':
            return <p className="text-lg text-slate-600 leading-8 mb-6">{block.text}</p>;

        case 'list':
            const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
            return (
                <ListTag className={`mb-8 pl-6 space-y-2 text-lg text-slate-700 marker:text-indigo-400 ${block.style === 'ordered' ? 'list-decimal' : 'list-disc'}`}>
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ListTag>
            );

        case 'code':
            return (
                <div className="my-8 rounded-2xl overflow-hidden shadow-2xl border border-slate-900/10 bg-[#1E1E1E]">
                    <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <span className="text-xs text-slate-400 font-mono opacity-50">{block.filename || 'example.' + block.language}</span>
                    </div>
                    <div className="p-4 overflow-x-auto custom-scrollbar">
                        <SyntaxHighlighter
                            language={block.language}
                            style={vscDarkPlus}
                            customStyle={{ margin: 0, padding: 0, background: 'transparent' }}
                            showLineNumbers={true}
                            lineNumberStyle={{ minWidth: '2em', paddingRight: '1em', color: '#6e7681', textAlign: 'right' }}
                        >
                            {block.code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            );

        case 'video':
            return (
                <div className="my-8 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-video bg-slate-900 flex items-center justify-center relative group cursor-pointer">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <PlayCircle className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
                    {block.caption && <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white font-medium text-sm">{block.caption}</div>}
                </div>
            );

        case 'table':
            return (
                <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                            <tr>{block.headers.map((h, i) => <th key={i} className="p-4">{h}</th>)}</tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {block.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50">
                                    {row.map((cell, j) => <td key={j} className="p-4 text-slate-600">{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );

        case 'quote':
            return (
                <blockquote className="my-8 p-6 bg-indigo-50/30 border-l-4 border-indigo-500 rounded-r-2xl">
                    <p className="text-xl font-medium text-indigo-900 italic">"{block.text}"</p>
                    {block.author && <cite className="block mt-4 text-sm font-bold text-indigo-400 not-italic">— {block.author}</cite>}
                </blockquote>
            );

        case 'grid':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {block.items.map((item, i) => (
                        <div key={i} className={`p-6 rounded-2xl border ${item.variant === 'good' ? 'bg-indigo-50 border-indigo-100' : 'bg-red-50 border-red-100'}`}>
                            <h5 className={`font-black mb-4 ${item.variant === 'good' ? 'text-indigo-900' : 'text-red-900'}`}>{item.title}</h5>
                            <ul className={`space-y-2 text-sm ${item.variant === 'good' ? 'text-indigo-800' : 'text-red-800'}`}>
                                {item.list.map((li, j) => <li key={j} className="flex gap-2"><span>•</span> {li}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            );

        default:
            return null;
    }
}
