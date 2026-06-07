'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Meta', icon: 'M' },
  { name: 'Google', icon: 'G' },
  { name: 'Shopify', icon: 'S' },
  { name: 'HubSpot', icon: 'H' },
  { name: 'Notion', icon: 'N' },
]

export const Trust = () => {
  return (
    <section className="py-16 relative overflow-hidden border-y border-white/5">
      <div className="text-center mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 text-xs uppercase tracking-wider"
        >
          Zaufali nam liderzy rynku
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center w-24 h-12 glass rounded-lg"
            >
              <span className="text-white font-bold text-xl tracking-tighter">{logo.icon}</span>
              <span className="text-gray-400 text-sm ml-1">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}