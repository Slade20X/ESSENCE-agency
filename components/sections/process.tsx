'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discovery', description: 'Poznajemy Twój biznes, cele i wyzwania. Audyt i analiza konkurencji.' },
  { number: '02', title: 'Strategy', description: 'Tworzymy spersonalizowaną strategię opartą na danych i AI.' },
  { number: '03', title: 'Execution', description: 'Wdrażamy kampanie z skalą korporacji.' },
  { number: '04', title: 'Optimization', description: 'Ciągła optymalizacja i raportowanie w czasie rzeczywistym.' },
]

export const Process = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Jak <span className="text-gradient">działamy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sprawdzony proces, który gwarantuje rezultaty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-[2px] bg-gradient-to-r from-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}