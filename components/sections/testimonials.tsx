'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/testimonial-card'

const testimonials = [
  {
    name: 'Klient 1',
    role: 'CEO',
    company: 'TechCorp',
    content: 'Essence zwiększyła nasz przychód o 340% w ciągu 6 miesięcy. Ich podejście jest rewolucyjne.',
    rating: 5,
  },
  {
    name: 'Klient 2',
    role: 'Head of Marketing',
    company: 'FashionBrand',
    content: 'Najlepsza decyzja jaką podjęliśmy. Profesjonalizm, kreatywność i wyniki na najwyższym poziomie.',
    rating: 5,
  },
  {
    name: 'Klient 3',
    role: 'Founder',
    company: 'StartupX',
    content: 'Dzięki nim nasza marka zyskała zwiekszona sprzedaż. Polecam każdemu!',
    rating: 5,
  },
]

export const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Co mówią <span className="text-gradient">klienci</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Zaufali nam liderzy rynku
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}