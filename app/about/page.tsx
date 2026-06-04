"use client"
import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import CTASection from '../../components/CTASection'
import { FaCheckCircle, FaLeaf, FaBullseye, FaAward } from 'react-icons/fa'

export default function AboutPage(){
  return (
    <main className="container py-24">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
        <SectionHeading title="About DNR Agri Exports" subtitle="Premium agro exporters with global reach and proven excellence"/>
      </motion.div>
      
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/images/factory.jpg" alt="Factory" className="w-full h-96 object-cover"/>
        </div>
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-heading font-semibold text-[var(--charcoal)]">Company Overview</h3>
              <p className="mt-4 text-[var(--text-dark)] leading-relaxed">DNR Agri Exports specializes in premium dehydrated onion, garlic, spices, peanuts and vegetable powders for international markets. We follow stringent quality control and maintain full traceability across the entire supply chain, from farm to shipment.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--charcoal)] flex items-center gap-2">
                <FaBullseye className="text-[var(--brand-dark-green)]" size={20} />
                Vision & Mission
              </h4>
              <p className="mt-2 text-[var(--text-dark)] leading-relaxed">To be a trusted global supplier of high-quality agro ingredients delivering consistency, safety and exceptional value to our partners worldwide.</p>
            </div>
            
            <div>
              <a href="/contact" className="btn-group-slide inline-block bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                <div className="btn-group-content">
                  <div className="btn-slide-default">
                    <span>Get In Touch</span>
                    <FaCheckCircle size={18} />
                  </div>
                  <div className="btn-slide-hover">
                    <span>Get In Touch</span>
                    <FaCheckCircle size={18} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <section className="mt-24">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="mb-12">
          <SectionHeading title="Our Values" subtitle="Principles that guide our business"/>
        </motion.div>
        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {icon: FaLeaf, title: 'Sustainability', desc: 'Eco-friendly practices in every operation'},
            {icon: FaAward, title: 'Excellence', desc: 'Zero compromise on quality standards'},
            {icon: FaBullseye, title: 'Reliability', desc: 'Consistent delivery and service'}
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-[var(--brand-light-green)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[var(--brand-dark-green)]" size={32} />
                </div>
                <h3 className="font-semibold text-[var(--charcoal)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            )
          })}
        </motion.div>
      </section>

      <section className="mt-24">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="mb-12">
          <SectionHeading title="Infrastructure & Capabilities" subtitle="State-of-the-art facilities meeting global standards"/>
        </motion.div>
        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="bg-gradient-to-br from-[var(--brand-dark-green)]/5 to-[var(--brand-light-green)]/5 rounded-2xl border border-[var(--border-light)] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[var(--charcoal)] mb-4 text-lg">Processing Equipment</h4>
              <ul className="space-y-3">
                {['Automated drying systems', 'Modern sorting lines', 'Hygiene chambers', 'Vacuum packaging'].map((item,i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle size={18} className="text-[var(--brand-light-green)]" />
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--charcoal)] mb-4 text-lg">Certifications & Standards</h4>
              <ul className="space-y-3">
                {['ISO 22000:2018', 'APEDA Registration', 'FSSAI License', 'FDA Compliance'].map((item,i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaAward size={18} className="text-[var(--brand-light-green)]" />
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mt-24"><CTASection/></div>
    </main>
  )
}
