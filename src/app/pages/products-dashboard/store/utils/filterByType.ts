import { IProduct } from "../../model/product.model";

export const filterByType = (products: IProduct[], types: any) => {
  return products.reduce((acc: IProduct[], el) => {
    types.forEach((type: string) => {
      if (el.product_type === type) {
        acc.push(el);
      }
    })
    return acc;
  }, []);

}