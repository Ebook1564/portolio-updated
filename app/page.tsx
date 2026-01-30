"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { BookOpen, Code2, Newspaper, ArrowRight, ChevronLeft, ChevronRight, Zap, Layers, Calendar, Clock, User, Tag, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"

// Import data
import { gameDevGuides } from "@/app/guides/data"
import { tutorials } from "@/app/tips-and-tricks/data"
import { devLogs } from "@/app/news/data"
import { blogPosts } from "@/app/blog/data"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white selection:bg-blue-500/30">
      <Header />

      <main className="flex-1">
        {/* Hero Section - STRICTLY DARK */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#020617]">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 via-[#020617] to-[#020617]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4" />
                <span>The Engineer's Hub</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight text-white">
                Build Better <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Game Systems
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Deep technical guides, Unity optimization patterns, and architecture breakdowns for serious developers.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/guides">
                  <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
                    <BookOpen className="w-5 h-5" />
                    Browse Guides
                  </button>
                </Link>
                <Link href="/news">
                  <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
                    <Newspaper className="w-5 h-5" />
                    Latest News
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Carousels - ALTERNATING */}
        <div className="flex flex-col">
          <CarouselSection
            id="featured-guides"
            variant="light"
            title="Featured Guides"
            subtitle="Master Unity & WebGL Architecture"
            href="/guides"
            items={gameDevGuides.slice(0, 8)}
            icon={Layers}
            accentColor="blue"
          />

          <CarouselSection
            variant="dark"
            title="Tips & Tricks"
            subtitle="Performance Hacks & Snippets"
            href="/tips-and-tricks"
            items={tutorials.slice(0, 8)}
            icon={Zap}
            accentColor="yellow"
          />

          <CarouselSection
            variant="light"
            title="Industry News"
            subtitle="Updates from the Game Dev World"
            href="/news"
            items={devLogs.slice(0, 8)}
            icon={Newspaper}
            accentColor="purple"
          />

          <CarouselSection
            variant="dark"
            title="Engineering Blog"
            subtitle="Deep Dives & Case Studies"
            href="/blog"
            items={blogPosts.slice(0, 8)}
            icon={Code2}
            accentColor="green"
          />
        </div>

        {/* Final CTA - LIGHT (to contrast with previous Dark section) */}
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-blue-50/50 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-white border border-slate-200 shadow-2xl backdrop-blur-md">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
                Ready to Optimize?
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                Join thousands of developers building faster, cleaner, and more scalable games.
              </p>
              <Link href="/guides">
                <button className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 shadow-xl">
                  Start Reading
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Reusable Components WITH VARIANTS

function CarouselSection({
  id,
  variant,
  title,
  subtitle,
  href,
  items,
  icon: Icon,
  accentColor
}: {
  id?: string
  variant: 'light' | 'dark'
  title: string
  subtitle: string
  href: string
  items: any[]
  icon: any
  accentColor: 'blue' | 'purple' | 'green' | 'yellow'
}) {
  const isDark = variant === 'dark'

  const colorStyles = {
    blue: isDark ? "text-blue-400 bg-blue-500/10 border-blue-500/20" : "text-blue-600 bg-blue-50 border-blue-200",
    purple: isDark ? "text-purple-400 bg-purple-500/10 border-purple-500/20" : "text-purple-600 bg-purple-50 border-purple-200",
    green: isDark ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-green-600 bg-green-50 border-green-200",
    yellow: isDark ? "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" : "text-yellow-600 bg-yellow-50 border-yellow-200",
  }

  return (
    <section id={id} className={`relative py-24 ${isDark ? 'bg-[#0B1120]' : 'bg-slate-50'}`}>
      {/* Decorative Background for Dark Sections */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] opacity-10 rounded-full blur-[100px] bg-${accentColor}-500`} />
        </div>
      )}

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-4 ${colorStyles[accentColor]}`}>
            <Icon className="w-3.5 h-3.5" />
            <span>{title}</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>
        </div>

        <Link
          href={href}
          className={`hidden md:flex items-center gap-2 text-sm font-black transition-all duration-300 group px-6 py-3 rounded-xl border ${isDark
            ? "text-white bg-white/5 border-white/10 hover:bg-blue-500 hover:text-white shadow-lg"
            : "text-slate-700 bg-white border-slate-200 hover:bg-blue-500 hover:text-white shadow-sm"
            }`}
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <Carousel items={items} isDark={isDark} sectionIcon={Icon} accentColor={accentColor} />

      <div className="container mx-auto px-6 mt-8 md:hidden relative z-10">
        <Link
          href={href}
          className={`flex items-center justify-center gap-2 text-sm font-black w-full py-4 rounded-xl border transition-all duration-300 group ${isDark
            ? "text-white bg-white/5 border-white/10 hover:bg-blue-500 hover:text-white shadow-lg"
            : "text-slate-700 bg-white border-slate-200 hover:bg-blue-500 hover:text-white shadow-sm"
            }`}
        >
          View All {title}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

function Carousel({ items, isDark, sectionIcon: Icon, accentColor }: { items: any[], isDark: boolean, sectionIcon: any, accentColor: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const getItemPath = (item: any) => {
    if (item.topic) return `/news/${item.id}`        // DevLogs
    if (item.difficulty === "Beginner" || item.difficulty === "Intermediate" || item.difficulty === "Advanced" || item.difficulty === "Expert") {
      return item.category?.toLowerCase().includes("sysadmin tools") ? `/tips-and-tricks/${item.id}` : `/guides/${item.id}`
    }
    return `/blog/${item.id}`                         // Blog posts
  }

  const getGlowColor = () => {
    switch (accentColor) {
      case 'blue': return 'group-hover:shadow-blue-500/20'
      case 'purple': return 'group-hover:shadow-purple-500/20'
      case 'green': return 'group-hover:shadow-green-500/20'
      case 'yellow': return 'group-hover:shadow-yellow-500/20'
      default: return 'group-hover:shadow-blue-500/20'
    }
  }

  const getIconColor = () => {
    switch (accentColor) {
      case 'blue': return 'text-blue-500'
      case 'purple': return 'text-purple-500'
      case 'green': return 'text-green-500'
      case 'yellow': return 'text-yellow-500'
      default: return 'text-blue-500'
    }
  }

  return (
    <div className="relative group/carousel">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 backdrop-blur-xl border rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 shadow-lg disabled:opacity-0 hidden md:flex ${isDark
          ? "bg-[#0B1120]/80 border-white/10 text-white"
          : "bg-white/90 border-slate-200 text-slate-700"
          }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 backdrop-blur-xl border rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 shadow-lg hidden md:flex ${isDark
          ? "bg-[#0B1120]/80 border-white/10 text-white"
          : "bg-white/90 border-slate-200 text-slate-700"
          }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 w-[300px] md:w-[380px] snap-center group"
          >
            <Link href={getItemPath(item)} className="block h-full">
              <div className={`h-full rounded-[2rem] border overflow-hidden transition-all duration-500 flex flex-col ${isDark
                ? `bg-[#020617] border-white/10 hover:border-blue-500/50 hover:shadow-2xl ${getGlowColor()} shadow-lg`
                : `bg-white border-slate-200 hover:border-blue-400 hover:shadow-2xl ${getGlowColor()} shadow-sm`
                }`}>
                {/* Image Area */}
                <div className={`h-56 relative overflow-hidden ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform ${isDark ? "bg-white/5" : "bg-white shadow-sm"}`}>
                        <Icon className={`w-10 h-10 ${isDark ? "text-white/20" : "text-slate-300"}`} />
                      </div>
                    </div>
                  )}

                  {/* Floating Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className={`w-12 h-12 rounded-2xl backdrop-blur-md border flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${isDark
                      ? "bg-[#020617]/40 border-white/10"
                      : "bg-white/60 border-slate-200"
                      }`}>
                      <Icon className={`w-6 h-6 ${getIconColor()}`} />
                    </div>
                  </div>

                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1.5 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-tighter border shadow-sm flex items-center gap-1.5 ${isDark
                      ? "bg-[#020617]/80 text-white border-white/10"
                      : "bg-white/90 text-slate-900 border-slate-200"
                      }`}>
                      <Tag className={`w-3 h-3 ${getIconColor()}`} />
                      {item.category || item.topic || "Article"}
                    </span>
                  </div>

                  {/* Gradient Overlay for better text contrast */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#020617] via-transparent to-transparent' : 'from-white/20 via-transparent to-transparent'}`} />
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold mb-4">
                    <div className={`flex items-center gap-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      <Calendar className={`w-3.5 h-3.5 ${getIconColor()}`} />
                      <span>{item.date}</span>
                    </div>
                    <div className={`flex items-center gap-1.5 ${isDark ? "text-slate-500 text-[10px] uppercase tracking-wider" : "text-slate-400 text-[10px] uppercase tracking-wider"}`}>
                      <Clock className={`w-3.5 h-3.5 ${getIconColor()} opacity-70`} />
                      <span>{item.readTime || "5 min read"}</span>
                    </div>
                    {item.author && (
                      <div className={`flex items-center gap-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        <User className={`w-3.5 h-3.5 ${getIconColor()}`} />
                        <span>{item.author}</span>
                      </div>
                    )}
                    {item.difficulty && (
                      <div className={`flex items-center gap-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        <BarChart3 className={`w-3.5 h-3.5 ${getIconColor()}`} />
                        <span>{item.difficulty}</span>
                      </div>
                    )}
                  </div>

                  <h3 className={`text-xl md:text-2xl font-black mb-4 leading-tight transition-colors line-clamp-2 ${isDark
                    ? "text-white group-hover:text-blue-400"
                    : "text-slate-900 group-hover:text-blue-600"
                    }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed line-clamp-3 mb-8 flex-1 ${isDark ? "text-slate-400/80" : "text-slate-600"
                    }`}>
                    {item.excerpt}
                  </p>

                  <div className={`flex items-center justify-between pt-6 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <div className={`flex items-center gap-2 text-sm font-bold transition-all group-hover:translate-x-1 ${isDark ? "text-white" : "text-slate-900"
                      }`}>
                      Read Deep Dive
                      <ArrowRight className={`w-4 h-4 ${getIconColor()}`} />
                    </div>
                    <div className={`p-2 rounded-lg bg-slate-50 dark:bg-white/5 transition-colors group-hover:bg-${accentColor}-500/10`}>
                      <Icon className={`w-4 h-4 ${getIconColor()} opacity-50 group-hover:opacity-100`} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {/* Spacer for end of carousel */}
        <div className="w-12 shrink-0" />
      </div>
    </div>
  )
}
