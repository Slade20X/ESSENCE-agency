'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  index: number
}

export const TestimonialCard = ({ name, role, company, content, rating, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 md:p-8"
    >
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      
      <div className="flex gap-0.5 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      
      <p className="text-base md:text-lg mb-6 leading-relaxed">
        "{content}"
      </p>
      
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-400">{role} at {company}</p>
      </div>
    </motion.div>
  )
}