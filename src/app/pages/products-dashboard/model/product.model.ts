export interface IProduct {
  title: string
  product_type: string
  image: string
  quantitySold: number
  variants: { price: number }[]
}