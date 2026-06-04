"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CategoryCard({cat}:{cat:any}){
  return (
    <motion.div whileHover={{scale:1.05}} className="group relative rounded-2xl overflow-hidden card-premium cursor-pointer">
      <div className="relative h-56 w-full overflow-hidden bg-[var(--brand-light-green)]/5">
        <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-125 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark-green)] via-[var(--brand-dark-green)]/50 to-transparent group-hover:from-[var(--brand-dark-green)]/80 transition-all" />
      </div>
      <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
        <div className="font-heading font-semibold text-xl">{cat.title}</div>
        <div className="text-sm text-white/90 mt-1">{cat.count ?? 0} products</div>
      </div>
    </motion.div>
  )
}
