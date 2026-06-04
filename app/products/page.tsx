"use client"
import { motion } from 'framer-motion'
import {useState} from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import SectionHeading from '../../components/SectionHeading'
import ProductCard from '../../components/ProductCard'
import productsData from '../../data/products.json'
import ProductModal from '../../components/ProductModal'

const products = productsData.products

export default function ProductsPage(){
  const [query,setQuery]=useState('')
  const [filter,setFilter]=useState('All')
  const [active,setActive]=useState<any>(null)
  const [open,setOpen]=useState(false)

  const visible = products.filter(p=> (filter==='All' || p.category===filter) && p.name.toLowerCase().includes(query.toLowerCase()))

  function openProduct(p:any){ setActive(p); setOpen(true) }

  return (
    <main className="container py-24">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
        <SectionHeading title="Our Products" subtitle="Premium agricultural exports meeting international standards"/>
      </motion.div>

      <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="bg-[var(--cream-premium)] rounded-2xl p-8 mt-12 space-y-6\">
        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--brand-light-green)]" size={20} />
          <input 
            value={query} 
            onChange={(e)=>setQuery(e.target.value)} 
            placeholder="Search products..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--border-light)] focus:border-[var(--brand-light-green)] focus:outline-none transition-colors bg-white"
          />
          {query && (
            <button onClick={()=>setQuery('')} className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <FaTimes size={18} className="text-[var(--muted)]" />
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {['All','Dehydrated Onion','Garlic','Spices','Peanuts','Vegetable Powders'].map(c=> (
            <button 
              key={c} 
              onClick={()=>setFilter(c)} 
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter===c
                  ? 'bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white shadow-md' 
                  : 'bg-white border-2 border-[var(--border-light)] text-[var(--charcoal)] hover:border-[var(--brand-light-green)]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[var(--muted)]">No products found matching your search.</p>
          </div>
        )}
      </motion.div>

      <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12\">
        {visible.map(p=>(<ProductCard key={p.id} product={p} onOpen={(pr:any)=>openProduct(pr)}/>))}
      </motion.div>

      <ProductModal product={active} open={open} onClose={()=>setOpen(false)} />
    </main>
  )
}
