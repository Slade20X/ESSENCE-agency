'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Ile kosztują Wasze usługi?',
    answer: 'Ceny ustalamy indywidualnie w zależności od zakresu projektu i potrzeb klienta. Oferujemy elastyczne modele współpracy - od abonamentów po projekty oparte na wynikach. Zapraszamy na bezpłatną konsultację.',
  },
  {
    question: 'Jak długo trwa pierwsza kampania?',
    answer: 'Pierwsze efekty widoczne są już po 2-4 tygodniach. Pełny proces od strategii do wdrożenia to zazwyczaj 4-6 tygodni, w zależności od skali projektu.',
  },
  {
    question: 'Czy współpracujecie z firmami zza granicy?',
    answer: 'Tak, obsługujemy klientów z Polski jak i 4 innych krajów. Współpracujemy zdalnie, a nasz zespół jest przygotowany do pracy w różnych strefach czasowych.',
  },
  {
    question: 'Jak mierzycie sukces kampanii?',
    answer: 'Używamy zaawansowanych dashboardów w czasie rzeczywistym. Raportujemy kluczowe KPI: ROI, CAC, LTV, konwersje i wzrost przychodów.',
  },
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Najczęściej <span className="text-gradient">pytania</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}