export interface IProduct {
  title: string
  product_type: string
  image: { src: string }
  quantitySold: number
  variants: { price: number }[]
}