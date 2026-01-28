"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Newspaper, PlayCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Import your data
import { gameDevGuides } from "@/app/guides/data"
import { tutorials } from "@/app/tips-and-tricks/data" 
import { devLogs } from "@/app/news/data"
import { blogPosts } from "@/app/blog/data" // assuming this exists

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Simplified */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#3b82f6_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#9333ea_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Developer Resources Hub
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Guides, tutorials, devlogs, and technical deep dives for game development and Windows productivity
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link href="/guides">
                  <Button size="lg" className="text-xl px-12 py-8 rounded-full font-black bg-blue-600 hover:bg-blue-700 shadow-2xl">
                    <BookOpen className="w-6 h-6 mr-2" />
                    Browse Guides
                  </Button>
                </Link>
                <Link href="/news">
                  <Button size="lg" variant="outline" className="text-xl px-12 py-8 rounded-full font-black border-white text-black hover:bg-white hover:text-slate-900">
                    News Articles
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 4 Content Carousels */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 space-y-24">
            
            {/* Guides Carousel */}
            <CarouselSection 
              title="Featured Guides" 
              subtitle="Practical Windows & Game Dev tutorials"
              href="/guides"
              items={gameDevGuides.slice(0, 8)}
              icon={BookOpen}
              gradient="from-blue-500 to-indigo-600"
            />

            {/* Tutorials Carousel */}
            <CarouselSection 
              title="Latest Tutorials" 
              subtitle="Step-by-step technical walkthroughs"
              href="/tutorials"
              items={tutorials.slice(0, 8)}
              icon={Code}
              gradient="from-emerald-500 to-teal-600"
            />

            {/* Dev Logs Carousel */}
            <CarouselSection 
              title="Engineering DevLogs" 
              subtitle="Real-world problem solving stories"
              href="/news"
              items={devLogs.slice(0, 8)}
              icon={Newspaper}
              gradient="from-purple-500 to-pink-600"
            />

            {/* Blog Posts Carousel */}
            <CarouselSection 
              title="Technical Blog" 
              subtitle="Deep dives and industry analysis"
              href="/blog"
              items={blogPosts.slice(0, 8)}
              icon={PlayCircle}
              gradient="from-orange-500 to-red-600"
            />

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900/20 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Ready to Build Something Great?
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Dive into hundreds of technical guides and tutorials
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/guides">
                  <Button size="lg" className="text-xl px-12 py-8 rounded-full font-black bg-white text-slate-900 hover:bg-slate-50 shadow-2xl">
                    <BookOpen className="w-6 h-6 mr-2" />
                    All Guides
                  </Button>
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

// Reusable Carousel Section Component
function CarouselSection({ 
  title, 
  subtitle, 
  href, 
  items, 
  icon: Icon, 
  gradient 
}: {
  title: string
  subtitle: string
  href: string
  items: any[]
  icon: any
  gradient: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="flex justify-between items-center mb-12">
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <Icon className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wide">{title}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-2 bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </div>
        <Link 
          href={href}
          className="group flex items-center gap-2 text-lg font-bold text-blue-600 hover:text-blue-700"
        >
          View All
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <Carousel items={items} gradient={gradient} />
    </motion.section>
  )
}

// Horizontal Scrollable Carousel Component
function Carousel({ items, gradient }: { items: any[], gradient: string }) {
  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110">
        <ChevronLeft className="w-6 h-6 text-slate-700" />
      </button>
      <button className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110">
        <ChevronRight className="w-6 h-6 text-slate-700" />
      </button>

      {/* Scrollable Container */}
      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 snap-x snap-mandatory">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl shadow-2xl overflow-hidden snap-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Card Image/Gradient */}
            <div 
              className={`h-48 bg-gradient-to-r ${gradient} relative overflow-hidden`}
            >
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-20 absolute inset-0"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                  {item.category || item.topic}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime || `${item.difficulty} • ${Math.floor(Math.random()*10)+1} min`}</span>
              </div>
              
              <h3 className="font-black text-xl mb-4 leading-tight line-clamp-2 text-slate-900">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {item.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm font-semibold">
                  {item.author}
                </span>
                <Link 
                  href={`/${item.category?.toLowerCase() === 'unity' ? 'tutorials' : item.href || 'guides'}/${item.id}`}
                  className="group flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold text-sm"
                >
                  Read →
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
