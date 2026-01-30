"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  useEffect(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Tips & Tricks", href: "/tips-and-tricks" },
    { label: "News", href: "/news" },
    { label: "Blog", href: "/blog" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed z-50 transition-all duration-300 pointer-events-auto rounded-[2rem] border border-white/20 
        ${scrolled
          ? "bg-[#020617]/80 shadow-2xl backdrop-blur-xl py-1"
          : "bg-white/5 shadow-blue backdrop-blur-lg py-2"
        } 
        left-4 right-4 top-4 md:left-8 md:right-8 md:top-7`}
    >
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-black text-white tracking-tighter hover:text-blue-400 transition-all duration-300">
            SNAPP<span className="text-blue-500">GAMES</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 mx-12 flex-1 justify-center">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 group py-2 ${isActive(item.href)
                  ? "text-blue-400"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                <span>{item.label}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-blue-500 rounded-full"
                  initial={false}
                  animate={{ width: isActive(item.href) ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="group flex items-center gap-2 px-6 py-2.5 bg-white text-[#020617] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="lg:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-2xl overflow-hidden rounded-b-[2rem]"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 px-6 text-sm font-black uppercase tracking-widest transition-all rounded-2xl ${isActive(item.href)
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-center text-sm shadow-2xl shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-95"
                >
                  About Us
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
