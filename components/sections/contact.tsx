'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const Contact = () => {
  return (
    <section className="py-24 md:py-32 relative bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kontakt <span className="text-gradient">z nami</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-purple mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="space-y-8">
            {/* Email */}
            <div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <a 
                href="mailto:essence.agency77@gmail.com"
                className="text-xl md:text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
              >
                essence.agency77@gmail.com
              </a>
            </div>

            {/* Telefon */}
            <div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple to-cyan flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Telefon</p>
              <a 
                href="tel:+48883758310"
                className="text-xl md:text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
              >
                +48 883 758 310
              </a>
            </div>

            {/* Lokalizacja */}
            <div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan to-primary flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Lokalizacja</p>
              <p className="text-xl font-bold text-white">
                Gdańsk, Polska
              </p>
            </div>
          </div>

          {/* Dodatkowa informacja */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Pon-Pt: 9:00 - 18:00</span>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              📍 Odpowiadamy w ciągu 24h, od poniedziałku do piątku
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}