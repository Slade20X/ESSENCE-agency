'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useParallax = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    
    sections.forEach((section) => {
      const bg = section.querySelector('.aurora-bg, .noise')
      if (bg) {
        gsap.fromTo(bg,
          { y: 0 },
          {
            y: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}