"use client"
import Image from 'next/image'

export default function FormCard({form,product,onClick}:{form:any,product:any,onClick:()=>void}){
  const displayImage = (product.spec?.formImages && form.key && product.spec.formImages[form.key]) ? product.spec.formImages[form.key] : product.image || '/images/product-placeholder.jpg'
  const sizeText = form.size ?? (product.spec?.sizes?.[form.key] ?? 'See details')
  return (
    <div onClick={onClick} className="cursor-pointer card-premium p-4 flex flex-col items-start gap-3">
      <div className="w-full h-36 relative rounded-lg overflow-hidden">
        <Image src={displayImage} alt={form.label} fill className="object-cover" />
      </div>
      <div className="w-full">
        <h3 className="font-heading text-lg text-[var(--charcoal)]">{form.label}</h3>
        <p className="text-sm text-[var(--muted)] mt-1">Size: <span className="font-semibold text-[var(--charcoal)]">{sizeText}</span></p>
      </div>
    </div>
  )
}
