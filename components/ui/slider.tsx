"use client"

import * as React from "react"
import { cn } from "@/lib/db"

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  value?: number
  onValueChange?: (value: number) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, onValueChange, min = 0, max = 1000000, step = 1000, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || Number(min))

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    const percentage = ((internalValue - Number(min)) / (Number(max) - Number(min))) * 100

    return (
      <div className={cn("relative w-full", className)}>
        <input
          type="range"
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={internalValue}
          onChange={handleChange}
          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider-neon"
          style={{
            background: `linear-gradient(to right, #9333ea 0%, #9333ea ${percentage}%, rgba(147, 51, 234, 0.2) ${percentage}%, rgba(147, 51, 234, 0.2) 100%)`,
          }}
          {...props}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }

