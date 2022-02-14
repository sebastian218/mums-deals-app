import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { ProductsHttpService } from "../services/products-http.service";
import * as fromProductActions from "./products-store.actions";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { IProduct } from "../model/product.model";
import { IProductsDashboardState } from "./products-store.reducer";
import { Store } from "@ngrx/store";
import { variantInRange } from "./utils/validRang.util";

@Injectable()
export class ProductDashboardEffects {

  constructor(
    private productService: ProductsHttpService,
    private actions$: Actions,
    private store: Store<IProductsDashboardState>
  ) {

  }

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.fetchProducts),
      exhaustMap((action) =>
        this.productService.getProducts().pipe(
          map((data) => {
            return fromProductActions.fetchSuccess({ products: data });
          }),
          catchError(error => of(fromProductActions.fetchError({ error })))
        ))
    ));

  getProductsParams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.fetchParams),
      exhaustMap((action) =>
        this.productService.getProducts().pipe(
          map((data) => {

            let filteredProducts: IProduct[] = data;

            if (action.data.types) {
              if (action.data.types.size) {
                const products = data.reduce((acc: IProduct[], el) => {
                  action.data.types?.forEach(type => {
                    if (el.product_type === type) {
                      acc.push(el);
                    }
                  })
                  return acc;
                }, []);
                filteredProducts = products;
              }
            }

            if (action.data.range && action.data.range[1]) {
              const products = filteredProducts.reduce((acc: IProduct[], el) => {
                const variantsPrice = el.variants.map(variant => Math.floor(Number(variant.price))).sort((a, b) => a - b);
                const min = action.data.range[0];
                const max = action.data.range[1];
                if (variantInRange(variantsPrice, min, max)) {
                  acc.push(el);
                }
                return acc;
              }, [])
              filteredProducts = products;
            }

            return fromProductActions.fetchParamsSuccess({ products: filteredProducts });
          }),
          catchError(error => of(fromProductActions.fetchError({ error })))
        ))
    ));

}