import { IProduct } from "../../model/product.model";
import { variantInRange } from "./validRang.util";

export const filterByPriceRange = (min: number, max: number, products: IProduct[]) => {
  return products.reduce((acc: IProduct[], el) => {
    const variantsPrice = el.variants.map(variant => Math.floor(Number(variant.price)));
    if (variantInRange(variantsPrice, min, max)) {
      acc.push(el);
    }
    return acc;
  }, [])

}