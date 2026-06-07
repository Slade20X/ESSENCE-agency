'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/service-card'

const services = [
  {
    name: 'Performance Marketing',
    icon: '🚀',
    description: 'Kampanie Google & Meta z ROI 300%+. Targetowanie AI i zaawansowana optymalizacja konwersji w czasie rzeczywistym.',
  },
  {
    name: 'SEO',
    icon: '🔍',
    description: 'Pozycjonowanie na frazy. Widoczność w TOP3 w ciągu 6 miesięcy. Audyt techniczny i content strategy.',
  },
  {
    name: 'Branding',
    icon: '🎨',
    description: 'Tożsamość marki klasy premium. Design system, który zapada w pamięć i buduje zaufanie wśród klientów.',
  },
  {
    name: 'Web Design',
    icon: '💻',
    description: 'Strony internetowe z konwersją 15%+. Doświadczenie użytkownika na najwyższym poziomie. Performance 95+ Lighthouse.',
  },
  {
    name: 'AI Automation',
    icon: '🤖',
    description: 'Automatyzacja procesów biznesowych z AI. Oszczędność czasu i zwiększenie efektywności operacyjnej.',
  },
  {
    name: 'Social Media',
    icon: '📱',
    description: 'Strategie viral content. Budowanie społeczności i zaangażowania na największą skalę. Content, który sprzedaje.',
  },
]

export const Services = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Nasze <span className="text-gradient">usługi</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-purple mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Kompleksowe rozwiązania marketingowe dla ambitnych marek
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}