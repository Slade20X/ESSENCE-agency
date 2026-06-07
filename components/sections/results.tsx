'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'

export const Results = () => {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const results = [
    { value: 1.2, label: 'Milionów przychodu', suffix: 'M+', prefix: '' },
    { value: 46, label: 'Zadowolonych klientów', suffix: '+', prefix: '' },
    { value: 100, label: 'Progresu', suffix: '%', prefix: '' },
    { value: 5, label: 'Krajów na świecie', suffix: '', prefix: '' },
  ]

  return (
    <section className="py-32 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Nasze <span className="text-gradient">wyniki</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Liczby mówią same za siebie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                {result.prefix}
                <span ref={(el) => { countersRef.current[idx] = el }}>
                  {result.value}
                </span>
                {result.suffix}
              </div>
              <p className="text-gray-400">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}