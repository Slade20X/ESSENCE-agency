'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, ArrowUpRight } from 'lucide-react'

interface CaseCardProps {
  title: string
  category: string
  growth: string
  roi: string
  clients: string
  index: number
}

export const CaseCard = ({ title, category, growth, roi, clients, index }: CaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-black border border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 md:p-8">
        <div className="mb-4">
          <span className="text-xs md:text-sm text-primary inline-flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-primary" />
            {category}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Wzrost</span>
            </div>
            <span className="text-white font-bold">{growth}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>ROI</span>
            </div>
            <span className="text-white font-bold">{roi}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>Klienci</span>
            </div>
            <span className="text-white font-bold">{clients}</span>
          </div>
        </div>
        
        <button className="w-full py-3 glass rounded-lg text-sm font-semibold group-hover:bg-primary/20 transition-all flex items-center justify-center gap-2">
          Zacznij z nami
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}