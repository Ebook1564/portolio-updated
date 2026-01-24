
export interface ContentBlock {
  type: 'header' | 'paragraph' | 'alert' | 'table' | 'code' | 'image' | 'quote'
  level?: number // 1-6 for headers
  text?: string
  title?: string
  variant?: 'warning' | 'tip' | 'info' | 'error'
  language?: string
  filename?: string
  code?: string
  headers?: string[]
  rows?: string[][]
  src?: string // for images
  alt?: string // for images
  author?: string // for quotes
}

export interface GuidePost {
  id: number
  title: string
  excerpt: string
  content: ContentBlock[]
  date: string
  category: string
  readTime: string
  author: string
  image: string
}
