import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { ProductsHttpService } from "../services/products-http.service";
import * as fromProductActions from "./products-store.actions";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { IProduct } from "../model/product.model";
import { filterByPriceRange } from "./utils/filterPriceRange.util";
import { filterByType } from "./utils/filterByType";

@Injectable()
export class ProductDashboardEffects {

  constructor(
    private productService: ProductsHttpService,
    private actions$: Actions
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

            if (action.data.types && action.data.types?.size) {
              filteredProducts = filterByType(filteredProducts, action.data.types);
            }

            if (action.data.range && action.data.range[1]) {
              const min = action.data.range[0];
              const max = action.data.range[1];
              if (min !== max) {
                filteredProducts = filterByPriceRange(min, max, filteredProducts);
              }
            }

            return fromProductActions.fetchParamsSuccess({ products: filteredProducts });
          }),
          catchError(error => of(fromProductActions.fetchError({ error })))
        ))
    ));

}