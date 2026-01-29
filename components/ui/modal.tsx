"use client"

import * as React from "react"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={cn(
            "w-full max-w-2xl rounded-lg bg-white/95 backdrop-blur-sm p-6 border border-purple-200 shadow-2xl",
            className
          )}
        >
          {title && (
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-neon">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

