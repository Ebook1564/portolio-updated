"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Twitter, Github, Linkedin, Globe, ArrowRight } from "lucide-react"
import { gameDevGuides } from "@/app/guides/data"

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-[#020617] border-t border-white/10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Column (4 cols) */}
          <motion.div variants={item} className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-block">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black text-white">S</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">SnappGames</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              The premier ecosystem for game developers. Specialized in HTML5, Unity, and High-Performance WebGL solutions.
            </p>

          </motion.div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Columns (7 cols total) */}
          <motion.div variants={item} className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8">Discover</h4>
            <ul className="space-y-4">
              {[
                { label: "Technical Guides", href: "/guides" },
                { label: "Tips & Tricks", href: "/tips-and-tricks" },
                { label: "Latest News", href: "/news" },
                { label: "Dev Blog", href: "/blog" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            <h4 className="font-bold text-white mb-8">Featured Update</h4>
            <div className="space-y-4">
              {(() => {
                const featured = gameDevGuides && gameDevGuides.length ? gameDevGuides[0] : null

                if (!featured) {
                  return (
                    <div className="text-slate-400">No featured update available.</div>
                  )
                }

                // Direct link to the guide article page
                const href = `/guides/${featured.id}`

                return (
                  <Link
                    href={href}
                    className="block p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                    aria-label={`Read featured guide: ${featured.title}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded-lg">{featured.category || 'New'}</div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                      {featured.title}
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {featured.excerpt}
                    </p>
                  </Link>
                )
              })()}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm">
            © 2026 SnappGames. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Designed with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>for Developers</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
