import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { combineLatest, Observable, of } from "rxjs";
import { ProductsHttpService } from "../services/products-http.service";
import * as fromProductActions from "./products-store.actions";
import * as fromProductSoreSelectors from "./products-store.selectors";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { IProduct } from "../model/product.model";
import { IProductsDashboardState } from "./products-store.reducer";
import { Store } from "@ngrx/store";

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

  getProductsByType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.fetchProductsByType),
      exhaustMap((action) =>
        this.productService.getProducts().pipe(
          map((data) => {

            if (action.types.size) {
              const products = data.reduce((acc: IProduct[], el) => {
                action.types.forEach(type => {
                  if (el.product_type === type) {
                    acc.push(el);
                  }
                })

                return acc;
              }, []);

              return fromProductActions.fetchProductsByTypeSuccess({ products });
            }
            return fromProductActions.fetchProductsByTypeSuccess({ products: data });
          }),
          catchError(error => of(fromProductActions.fetchError({ error })))
        ))
    ));

}