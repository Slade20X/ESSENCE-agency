'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Search, Sparkles, Code2, Bot, Share2 } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  'Performance Marketing': <TrendingUp className="w-10 h-10" />,
  'SEO': <Search className="w-10 h-10" />,
  'Branding': <Sparkles className="w-10 h-10" />,
  'Web Design': <Code2 className="w-10 h-10" />,
  'AI Automation': <Bot className="w-10 h-10" />,
  'Social Media': <Share2 className="w-10 h-10" />,
}

interface ServiceCardProps {
  name: string
  icon: string
  description: string
  index: number
}

export const ServiceCard = ({ name, description, index }: ServiceCardProps) => {
  const IconComponent = iconMap[name] || <TrendingUp className="w-10 h-10" />

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative glass-card rounded-2xl p-8 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {IconComponent}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
          {name}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex items-center text-primary gap-1 group-hover:gap-2 transition-all">
          <span className="text-sm">Dowiedz się więcej</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}