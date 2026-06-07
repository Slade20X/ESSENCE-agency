'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { HeroScene } from '@/components/three/hero-scene'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, ArrowRight, Trophy, Users, TrendingUp, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Szybsze animacje dla lepszego wrażenia
      gsap.fromTo(
        '.hero-text',
        { opacity: 0, y: 80, filter: 'blur(20px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)', 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power3.out',
          overwrite: true
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '1.2M+', label: 'Przychodu', icon: TrendingUp, delay: 1.4 },
    { value: '46+', label: 'Klientów', icon: Users, delay: 1.6 },
    { value: '100%', label: 'Progresu', icon: Trophy, delay: 1.8 },
    { value: '5', label: 'Krajów', icon: Globe, delay: 2.0 },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 gpu-accelerated">
        <HeroScene />
      </div>

      <div className="absolute inset-0 aurora-bg z-10 pointer-events-none" />
      <div className="absolute inset-0 noise z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div style={{ y, opacity }} className="gpu-accelerated">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              Essence | Agencja Marketingowa
            </span>
          </motion.div>

          <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
            <span className="block">Skalujemy marki</span>
            <span className="text-gradient block">
              szybciej niż konkurencja
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Tworzymy kampanie, 
            które generują realny zwrot z inwestycji.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <MagneticButton>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary via-purple to-cyan rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Czytaj więcej
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple via-cyan to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button className="px-8 py-4 glass rounded-full text-white font-semibold border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/5">
                Działaj z nami
              </button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto mt-24"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}