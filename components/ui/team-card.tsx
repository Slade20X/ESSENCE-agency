'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  image: string
  index: number
}

export const TeamCard = ({ name, role, image, index }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple/20 rounded-2xl flex items-center justify-center">
          <div className="text-7xl">{image}</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
          <button className="p-2 glass rounded-full hover:bg-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="p-2 glass rounded-full hover:bg-primary transition-colors">
            <Twitter className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-center mb-1">{name}</h3>
      <p className="text-gray-400 text-center text-sm">{role}</p>
    </motion.div>
  )
}