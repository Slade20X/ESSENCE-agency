'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import gsap from 'gsap'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView && ref.current) {
      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: value,
          duration: duration,
          ease: 'power3.out',
          snap: { innerText: 1 },
          stagger: 0.1,
        }
      )
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="inline-block">
      {prefix}0{suffix}
    </span>
  )
}