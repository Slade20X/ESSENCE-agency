'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { CaseStudies } from '@/components/sections/case-studies'
import { Process } from '@/components/sections/process'
import { Results } from '@/components/sections/results'
import { Testimonials } from '@/components/sections/testimonials'
import { Team } from '@/components/sections/team'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="bg-black">
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="case-studies"><CaseStudies /></div>
      <div id="process"><Process /></div>
      <div id="results"><Results /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="team"><Team /></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  )
}