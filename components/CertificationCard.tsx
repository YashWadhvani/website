import { FaAward } from 'react-icons/fa'

export default function CertificationCard({cert}:{cert:any}){
  return (
    <div className="card-premium p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[var(--brand-light-green)]/10 flex items-center justify-center flex-shrink-0">
          <FaAward className="text-[var(--brand-dark-green)]" size={24} />
        </div>
        <div>
          <div className="font-semibold text-[var(--charcoal)]">{cert.title}</div>
          <div className="text-sm text-[var(--muted)] mt-1">{cert.org}</div>
        </div>
      </div>
    </div>
  )
}
