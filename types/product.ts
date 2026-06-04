export interface Variant {
  key: string
  label: string
  image?: string
  size?: string | null
  description?: string
  packaging?: string
  applications?: string[]
}

export interface Product {
  id: string
  name: string
  category?: string
  short?: string
  image?: string
  description?: string
  packaging?: string
  spec?: {
    origin?: string
    colors?: string[]
    color?: string
    aroma?: string
    packing?: string
    qualities?: string[]
    note?: string
    variants?: Variant[]
  }
}
