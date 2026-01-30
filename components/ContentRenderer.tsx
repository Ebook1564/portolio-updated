'use client'

import { Code, AlertCircle, Info, CheckCircle, Image as ImageIcon } from 'lucide-react'
import { motion } from 'framer-motion'

// Simple inline markdown -> HTML converter for links and inline code
function convertMarkdownToHtml(text: string) {
  if (!text) return ''

  // Basic HTML-escape to reduce XSS risk for raw text
  const div = typeof document !== 'undefined' ? document.createElement('div') : null
  const escaped = div ? (div.textContent = text, div.innerHTML) : text

  let html = escaped

  // Convert markdown links: [label](url) to <a>
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+)\)/g, (m, label, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 font-semibold underline">${label}</a>`
  })

  // Convert inline code `code` to <code>
  html = html.replace(/`([^`]+)`/g, (m, code) => `<code class="font-mono bg-slate-100 px-1 rounded text-sm">${code}</code>`)

  return html
}

interface ContentBlock {
  type: 'header' | 'paragraph' | 'alert' | 'table' | 'code' | 'image' | 'quote' | 'list'
  level?: number
  text?: string
  title?: string
  variant?: 'warning' | 'tip' | 'info' | 'error'
  language?: string
  filename?: string
  code?: string
  headers?: string[]
  rows?: string[][]
  src?: string
  style?: 'unordered' | 'ordered'
  items?: string[]
  alt?: string
  author?: string
}

interface ContentRendererProps {
    content: ContentBlock[]
    className?: string
}

export default function ContentRenderer({ content, className = '' }: ContentRendererProps) {
    return (
        <div className={`space-y-12 ${className}`}>
      {content.map((block, index) => {
          const id = `section-${index}`
          
          switch (block.type) {
              case 'list':
                const ListTag = block.style === 'ordered' ? 'ol' : 'ul'
                return (
                  <ListTag 
                    key={index} 
                    className="text-lg text-slate-700 mb-12 space-y-3 pl-8 [&_a]:text-blue-600 [&_a]:hover:text-blue-500 [&_a]:font-semibold [&_a]:underline [&_a]:hover:no-underline"
                  >
                    {block.items?.map((item, i) => (
    <li
      key={i}
      className="leading-relaxed group"
      dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(item || '') }}
    />
  ))}
                  </ListTag>
                )  
              case 'header':
                  const HeaderTag = `h${block.level ?? 2}` as keyof JSX.IntrinsicElements
                  return (
                      <HeaderTag 
                    key={index} 
                    id={id}
                    className="group scroll-mt-32"
                    >
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-16 mb-8 tracking-tight border-l-4 border-blue-500 pl-4 -ml-4 pr-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-r-xl py-2">
                  {block.text}
                </span>
                <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-all ml-2 text-sm text-blue-500 font-bold hover:underline -mt-1 inline-block">#</a>
              </HeaderTag>
            )
            
            case 'paragraph':
        return (
          <p key={index} 
          className="text-lg md:text-xl text-slate-700 leading-[1.8] mb-8 max-w-4xl"
          dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(block.text || '') }}
          />
        )
                
                case 'alert':
                    const icons = {
                        warning: AlertCircle,
                        tip: CheckCircle,
                        info: Info,
                        error: AlertCircle
                    }
                    const Icon = icons[block.variant ?? 'info']
                    const colors = {
                        warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
                        tip: 'bg-emerald-50 border-emerald-400 text-emerald-800',
                        info: 'bg-blue-50 border-blue-400 text-blue-800',
                        error: 'bg-red-50 border-red-400 text-red-800'
                    }
                    
                    return (
                        <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-8 rounded-3xl border-l-6 mb-12 shadow-lg ${colors[block.variant ?? 'info']}`}
                        >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <h4 className="font-black text-xl">{block.title}</h4>
                </div>
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(block.text || '') }} />
              </motion.div>
            )
            
            case 'table':
                return (
                    <div key={index} className="overflow-x-auto mb-12">
                <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                        {block.headers?.map((header, i) => (
                            <th key={i} className="px-8 py-6 text-left font-black text-xl text-slate-900 border-b-2 border-slate-200">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {block.rows?.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, j) => (
                              <td key={j} className="px-8 py-6 text-lg text-slate-700">
                              <span dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(cell) }} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
            
            case 'code':
                return (
                    <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative group mb-12"
                    >
                <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-5 rounded-t-3xl mb-0 border-b border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    {block.filename && (
                        <span className="font-mono text-lg font-bold bg-slate-700 px-4 py-2 rounded-xl">
                        {block.filename}
                      </span>
                    )}
                    {block.language && (
                        <span className="text-sm bg-slate-700/50 px-3 py-1.5 rounded-lg font-mono uppercase tracking-wider text-slate-300">
                        {block.language}
                      </span>
                    )}
                  </div>
                </div>
                <pre className="bg-slate-900/95 backdrop-blur-xl text-white p-10 rounded-b-3xl rounded-tr-3xl overflow-x-auto text-sm leading-relaxed border border-slate-700 shadow-2xl">
                  <code>{block.code}</code>
                </pre>
                <button className="opacity-0 group-hover:opacity-100 absolute top-4 right-4 p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700 transition-all text-slate-300">
                  📋
                </button>
              </motion.div>
            )
            
            case 'image':
                return (
                    <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-12"
                    >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-3xl shadow-xl border border-slate-200">
                  <div className="flex items-center gap-4 mb-6">
                    <ImageIcon className="w-8 h-8 text-blue-500" />
                    <h4 className="font-black text-xl text-slate-900">{block.alt}</h4>
                  </div>
                  <img 
                    src={block.src} 
                    alt={block.alt}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            )
            
            case 'quote':
                return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12 p-10 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-3xl border-l-8 border-indigo-400 shadow-xl"
              >
                <blockquote className="text-2xl italic text-slate-800 mb-6 font-light leading-relaxed">
                  "{block.text}"
                </blockquote>
                {block.author && (
                  <cite className="text-slate-600 font-bold not-italic block">
                    — {block.author}
                  </cite>
                )}
              </motion.div>
            )
            
          default:
            return null
        }
      })}
    </div>
  )
}
