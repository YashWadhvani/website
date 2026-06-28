"use client"
import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import CategoryCard from '../../components/CategoryCard'

const categories = [
  {title:'Dehydrated Onion - White',image:'/images/products/onion-white-combined.png',count:5},
  {title:'Dehydrated Onion - Red',image:'/images/products/onion-red-combined.png',count:5},
  {title:'Dehydrated Onion - Pink',image:'/images/products/onion-pink-combined.png',count:5},
  {title:'Dehydrated Fried Onion',image:'/images/products/onion-fried-combined.png',count:2},
  {title:'Dehydrated Garlic',image:'/images/products/garlic-combined.png',count:5},
  {title:'Spices',image:'/images/products/spices-combined.png',count:6},
  {title:'Peanuts',image:'/images/products/peanuts-combined.png',count:3},
]

export default function CategoriesPage(){
  return (
    <main className="container py-24">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
        <SectionHeading 
          title="Product Categories" 
          subtitle="Explore our comprehensive range of premium agricultural products sourced and processed for global markets"
        />
      </motion.div>
      
      <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="mt-8 mb-16 max-w-2xl mx-auto text-center">
        <p className="text-[var(--text-dark)] leading-relaxed">
          We specialize in sourcing and processing the finest agricultural commodities. Each category represents years of expertise, quality control, and dedication to excellence.
        </p>
      </motion.div>

      <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {categories.map(c=> <CategoryCard key={c.title} cat={c}/>)}
      </motion.div>

      <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="mt-16 bg-gradient-to-r from-[var(--brand-dark-green)]/5 to-[var(--brand-light-green)]/5 rounded-2xl p-8 border border-[var(--brand-light-green)]/20\">
        <h3 className="text-2xl font-semibold text-[var(--charcoal)] mb-3\">Need a Custom Solution?</h3>
        <p className="text-[var(--text-dark)] mb-6\">Our team can work with you to develop customized products and packaging solutions tailored to your specific requirements.</p>
        <a href="/contact" className="btn-group-slide inline-block bg-[var(--brand-dark-green)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--brand-forest)] transition-all">
          <div className="btn-group-content">
            <div className="btn-slide-default">
              <span>Get in Touch</span>
            </div>
            <div className="btn-slide-hover">
              <span>Get in Touch</span>
            </div>
          </div>
        </a>
      </motion.div>
    </main>
  )
}
