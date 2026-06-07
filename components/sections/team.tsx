'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, Briefcase, Palette, Brain, BarChart3, Code2 } from 'lucide-react'

const team = [
  {
    name: 'Wiktor D.',
    role: 'CEO & Founder',
    icon: Briefcase,
    description: '',
    gradient: 'from-primary to-purple',
    social: {  }
  },
  {
    name: 'Michał Z.',
    role: 'Creative Director',
    icon: Palette,
    description: 'Ekspert od brandingu i designu, laureat nagród Awwwards',
    gradient: 'from-purple to-cyan',
    social: { linkedin: '#', twitter: '#', mail: '#' }
  },
  {
    name: 'Alicja K.',
    role: 'Manager',
    icon: Brain,
    description: 'Zarządzanie zespołem i alokację zasobów',
    gradient: 'from-cyan to-primary',
    social: { linkedin: '#', twitter: '#', mail: '#' }
  }
]

export const Team = () => {
  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-black via-secondary/50 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Poznaj nasz <span className="text-gradient">zespół</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-purple mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Eksperci z pasją, którzy zamienią Twoje cele w rzeczywistość
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-primary/30">
                {/* Avatar z ikoną */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Imię i rola */}
                <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                
                {/* Opis */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                
                {/* Social media */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 glass rounded-lg hover:bg-primary/20 transition-all duration-300 group/social"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400 group-hover/social:text-primary transition-colors" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="p-2 glass rounded-lg hover:bg-primary/20 transition-all duration-300 group/social"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-gray-400 group-hover/social:text-primary transition-colors" />
                  </a>
                  <a 
                    href={`mailto:${member.social.mail}`} 
                    className="p-2 glass rounded-lg hover:bg-primary/20 transition-all duration-300 group/social"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 text-gray-400 group-hover/social:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}