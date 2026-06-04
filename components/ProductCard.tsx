"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({product,onOpen}:{product:any,onOpen:(p:any)=>void}){
  return (
    <motion.div 
      whileHover={{y:-8}} 
      className="group card-premium overflow-hidden cursor-pointer transition-all"
      onClick={()=>onOpen(product)}
    >
      <div className="relative h-56 w-full overflow-hidden bg-[var(--brand-light-green)]/5">
        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark-green)]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="font-heading font-semibold text-xl text-white drop-shadow-lg">{product.name}</div>
          <div className="text-sm text-white/90">{product.short}</div>
        </div>
      </div>
      <div className="p-6 border-t border-[var(--border-light)]">
        <p className="text-sm text-[var(--muted)] mb-3">{product.description}</p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[var(--brand-dark-green)] font-semibold">Packaging: {product.packaging}</span>
          <span className="text-[var(--brand-light-green)] group-hover:text-[var(--brand-dark-green)] transition-colors">→</span>
        </div>
      </div>
    </motion.div>
  )
}
