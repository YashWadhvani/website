export default function SectionHeading({title,subtitle}:{title:string,subtitle?:string}){
  return (
    <div className="mb-12 text-center">
      <div className="inline-block mb-4">
        <div className="h-1 w-12 bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-light-green)] rounded-full"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-heading font-semibold text-[var(--charcoal)]">{title}</h2>
      {subtitle && <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
