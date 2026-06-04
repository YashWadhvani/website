import { FaStar } from 'react-icons/fa'

export default function TestimonialCard({t}:{t:any}){
  return (
    <div className="card-premium p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_,i) => (
          <FaStar key={i} size={16} className="fill-[var(--brand-light-green)] text-[var(--brand-light-green)]" />
        ))}
      </div>
      <p className="text-[var(--text-dark)] italic leading-relaxed">"{t.text}"</p>
      <div className="mt-6 border-t border-[var(--border-light)] pt-4">
        <div className="font-semibold text-[var(--charcoal)]">{t.name}</div>
        <div className="text-sm text-[var(--muted)]">{t.company}</div>
      </div>
    </div>
  )
}
