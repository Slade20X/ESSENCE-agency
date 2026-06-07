'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ESSENCE Agency</h3>
            <p className="text-gray-400 text-sm">
              Agencja marketingowa. Skalujemy marki szybciej niż konkurencja.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Performance Marketing</li>
              <li>SEO</li>
              <li>Branding</li>
              <li>Web Design</li>
              <li>AI Automation</li>
              <li>Social Media</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:essence.agency77@gmail.com" className="hover:text-primary transition-colors">
                  essence.agency77@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+48883758310" className="hover:text-primary transition-colors">
                  +48 883 758 310
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Gdańsk, Polska</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Godziny pracy</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Poniedziałek - Piątek: 9:00 - 18:00</li>
              <li>Sobota - Niedziela: Zamknięte</li>
              <li className="mt-4 text-primary">Odpowiadamy w ciągu 24h</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ESSENCE Agency. Wszystkie prawa zastrzeżone.</p>
        
        </div>
      </div>
    </footer>
  )
}