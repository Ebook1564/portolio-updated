"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { useParams } from "next/navigation"
import { devLogs } from "../data"
import { ArrowLeft, Clock, Share2, Check, Zap, Bug, Code2, Network, Layers, Cpu, Box, Calendar, Heart, Bookmark, Copy, Twitter, Linkedin } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import glsl from 'react-syntax-highlighter/dist/esm/languages/prism/glsl';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ContentBlock } from "../../tips-and-tricks/data"

// Register languages
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('glsl', glsl);

export default function GameCaseStudyPage() {
    const params = useParams()
    const router = useRouter()
    const log = devLogs.find(l => l.id.toString() === params.id)
    const [copied, setCopied] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    // Scroll Progress
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!log) return null

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-blue-500/30">
            <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left z-[100]" style={{ scaleX }} />
            <Header />

            <main className="flex-1">
                {/* Immersive Hero Section */}
                <section className="relative pt-28 pb-32 md:pt-40 md:pb-48 overflow-hidden bg-[#020617] text-white">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 z-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${log.imageGradient} opacity-20 mix-blend-overlay`}></div>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/0 via-[#020617]/80 to-[#020617]"></div>

                        {/* Animated Orbs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1],
                                x: [0, 30, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Navigation Row */}
                        <div className="flex justify-start mb-12 sm:mb-20">
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onClick={() => router.back()}
                                className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 md:px-5 md:py-2.5 rounded-full backdrop-blur-md border border-white/5 text-sm md:text-base font-bold"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span>Back to News</span>
                            </motion.button>
                        </div>

                        {/* Centered Hero Content */}
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-block mb-8"
                            >
                                <span className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs md:text-sm font-black uppercase tracking-[0.2em] backdrop-blur-xl shadow-2xl">
                                    {log.topic}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tight text-white drop-shadow-2xl"
                            >
                                {log.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center justify-center gap-4 md:gap-x-12 text-slate-300"
                            >
                                {/* Author Metadata Card */}
                                <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg border-2 border-[#020617] relative">
                                        {log.author.charAt(0)}
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#020617] rounded-full"></div>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-white text-sm leading-none mb-1">{log.author}</p>
                                        <p className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Engineering Team</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
                                        <Calendar className="w-4 h-4 text-blue-400" />
                                        <span className="font-bold text-sm tracking-wide">{log.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
                                        <Clock className="w-4 h-4 text-blue-400" />
                                        <span className="font-bold text-sm tracking-wide">{log.readTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Section - Overlapping Card */}
                <section className="relative z-20 -mt-16 md:-mt-32 pb-24 px-4 overflow-visible">
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                            {/* Main Content Container */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex-1 bg-white rounded-3xl md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden"
                            >
                                {/* Aesthetic Top Gradient Bar */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                                {/* Unique News Elements: Pro Tip */}
                                <div className="mb-12 p-8 bg-amber-50/50 rounded-[2rem] border border-amber-100/50 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                                        <Zap className="w-24 h-24 text-amber-500" />
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <Zap className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-amber-900 text-xs uppercase tracking-[0.2em] mb-3">Key Takeaway</h4>
                                        <p className="text-xl text-amber-800 font-medium italic leading-relaxed">"{log.keyTakeaway}"</p>
                                    </div>
                                </div>

                                {/* Content Rendering with Drop Cap styling */}
                                <div className="
                                    space-y-10
                                    [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-black [&>h2]:text-slate-900 [&>h2]:mt-16 [&>h2]:mb-8 [&>h2]:tracking-tight
                                    [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-bold [&>h3]:text-indigo-900 [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:tracking-tight
                                    [&>p]:text-lg [&>p]:md:text-xl [&>p]:text-slate-600 [&>p]:leading-[1.8] [&>p]:mb-8
                                    first-letter:[&>p:first-of-type]:text-5xl first-letter:[&>p:first-of-type]:md:text-7xl first-letter:[&>p:first-of-type]:font-black first-letter:[&>p:first-of-type]:text-blue-600 first-letter:[&>p:first-of-type]:float-left first-letter:[&>p:first-of-type]:mr-4 first-letter:[&>p:first-of-type]:mt-[-8px]
                                ">
                                    {log.content ? log.content.map((block, index) => (
                                        <ContentBlockRenderer key={index} block={block} index={index} />
                                    )) : (
                                        <>
                                            <div className="p-10 rounded-[2.5rem] bg-rose-50 border border-rose-100 my-10 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform">
                                                    <Bug className="w-24 h-24 text-rose-900" />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-black text-rose-900 mb-6 flex items-center gap-4">
                                                    <Bug className="w-8 h-8" /> The Challenge
                                                </h2>
                                                <p className="text-lg md:text-xl text-rose-800 leading-relaxed font-medium">
                                                    {log.challenge.description}
                                                </p>
                                            </div>

                                            <div className="p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 my-10 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform">
                                                    <Code2 className="w-24 h-24 text-emerald-900" />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-black text-emerald-900 mb-6 flex items-center gap-4">
                                                    <Code2 className="w-8 h-8" /> The Solution
                                                </h2>
                                                <p className="text-lg md:text-xl text-emerald-800 leading-relaxed font-medium mb-8">
                                                    {log.solution.description}
                                                </p>
                                                {log.solution.codeSnippet && (
                                                    <div className="bg-[#020617] p-6 rounded-2xl border border-white/10 shadow-2xl overflow-x-auto ring-1 ring-white/5">
                                                        <code className="font-mono text-emerald-400 text-sm md:text-base">
                                                            {log.solution.codeSnippet}
                                                        </code>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Tech Stack Footer Tags */}
                                <div className="mt-16 pt-10 border-t border-slate-100">
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-3">
                                        <Cpu className="w-4 h-4 text-blue-500" /> Key Topics Discussed
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {log.keyTopics.map(tech => (
                                            <span key={tech} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all cursor-default shadow-sm active:scale-95">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
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
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/20'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                                                }`}
                                        >
                                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                                            {isSaved ? 'Saved' : 'Save'}
                                        </motion.button>
                                    </div>

                                    <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                                        <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Share News</span>
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
                            </motion.div>
                        </div>
                    </div>
                </section>
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
                ? "text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight relative scroll-mt-32"
                : "text-2xl font-bold text-blue-900 mt-10 mb-4 scroll-mt-32";
            return <Tag id={`section-${index}`} className={className}>{block.text}</Tag>;

        case 'paragraph':
            return <p className="text-lg text-slate-600 leading-8 mb-6">{block.text}</p>;

        case 'list':
            const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
            return (
                <ListTag className={`mb-8 pl-6 space-y-2 text-lg text-slate-700 marker:text-blue-400 ${block.style === 'ordered' ? 'list-decimal' : 'list-disc'}`}>
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

        default:
            return null;
    }
}
