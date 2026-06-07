'use client'

import { motion } from 'framer-motion'
import { CaseCard } from '@/components/ui/case-card'

const cases = [
  {
    title: 'E-commerce',
    category: 'Performance Marketing',
    growth: '+340%',
    roi: '520%',
    clients: '450k+',
  },
  {
    title: 'B2B SaaS Dominance',
    category: 'SEO & Content',
    growth: '+280%',
    roi: '410%',
    clients: '500+',
  },
  {
    title: 'Brand Launch',
    category: 'Branding & Web',
    growth: '+190%',
    roi: '180%',
    clients: '15K+',
  },
]

export const CaseStudies = () => {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Case studies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Zobacz jak przyspieszyliśmy wzrost naszych klientów
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <CaseCard key={idx} {...caseItem} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}