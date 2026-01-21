"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-300 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Left Section - Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <span className="text-xl font-black text-white">S</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight">SnappGame</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Powering the future of casual & HTML5 gaming. The ecosystem for players and creators.
            </p>
          </div>

          {/* Company - UPDATED */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-[#60A5FA]">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products - SYNCED WITH HEADER */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-[#60A5FA]">Products</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/tips-and-tricks" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Tips & Tricks
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  News
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources - BLOG ONLY */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-[#60A5FA]">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Company Blog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors hover:translate-x-1 block transition-transform">
                  Industry Updates
                </Link>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
            <p className="text-center md:text-right flex items-center gap-2">
              © 2026 SnappGames Technologies. Made with <Heart className="w-3 h-3 text-red-500 fill-current" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
