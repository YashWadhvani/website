"use client"
import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import CertificationCard from '../../components/CertificationCard'
import { FaShieldAlt, FaCheckCircle, FaLeaf } from 'react-icons/fa'

export default function QualityPage(){
  const certs=[
    {abbr:'AP',title:'APEDA',org:'Agricultural Processed Export Development Authority'},
    {abbr:'F',title:'FSSAI',org:'Food Safety & Standards Authority of India'},
    {abbr:'ISO',title:'ISO 22000',org:'Food Safety Management'}
  ]

  const features = [
    {icon: FaShieldAlt, title: 'Rigorous Testing', desc: 'Every batch undergoes comprehensive quality testing for safety and consistency'},
    {icon: FaLeaf, title: 'Sustainable Sourcing', desc: 'We partner with certified farmers practicing sustainable agriculture'},
    {icon: FaCheckCircle, title: 'International Standards', desc: 'Full compliance with global food safety and export regulations'},
  ]

  return (
    <main className="container py-16 md:py-24 space-y-16 md:space-y-20">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
        <SectionHeading 
          title="Quality & Certifications" 
          subtitle="Committed to delivering the highest standards of agricultural products"
        />
      </motion.div>
      
      {/* Quality Features Section */}
      <motion.section
        initial={{opacity:0,y:12}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {features.map((f,i) => {
          const Icon = f.icon
          return (
            <div key={i} className="card-premium h-full p-6 md:p-8 text-center">
              <div className="w-16 h-16 bg-[var(--brand-light-green)]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon className="text-[var(--brand-dark-green)]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-3">{f.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{f.desc}</p>
            </div>
          )
        })}
      </motion.section>

      {/* Main Content Section */}
      <section>
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start"
        >
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-[var(--charcoal)]">Quality Assurance Process</h3>
              <p className="text-[var(--text-dark)] leading-relaxed max-w-none">
                We maintain rigorous quality checks across every stage - from sourcing through final packaging. Our dedicated quality team ensures each product meets and exceeds international export-grade specifications.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[var(--charcoal)]">Hygiene & Packaging Standards</h4>
              <p className="text-[var(--text-dark)] leading-relaxed">
                Our state-of-the-art facilities employ hygienic processing methods and modern packaging technology to ensure:
              </p>
              <ul className="space-y-3 pt-1">
                {['Product integrity during transport', 'Maximum shelf-life preservation', 'Full traceability and documentation', 'Compliance with food safety regulations'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-dark)]">
                    <FaCheckCircle size={20} className="text-[var(--brand-light-green)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[var(--charcoal)]">International Certifications</h3>
            <div className="space-y-4">
              {certs.map(c=> <CertificationCard key={c.title} cert={c}/>) }
            </div>
            
            <div className="p-6 bg-[var(--brand-light-green)]/10 rounded-xl border-l-4 border-[var(--brand-light-green)]">
              <p className="text-sm text-[var(--text-dark)] leading-relaxed">
                <strong>Commitment:</strong> We continuously invest in improving our processes and certifications to meet evolving international standards and customer expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
