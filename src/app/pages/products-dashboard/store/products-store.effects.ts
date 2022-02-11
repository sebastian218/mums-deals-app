import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { ProductsHttpService } from "../services/products-http.service";
import * as fromProductActions from "./products-store.actions";
import { map, catchError, exhaustMap } from 'rxjs/operators';

@Injectable()
export class ProductDashboardEffects {

  constructor(
    private productService: ProductsHttpService,
    private actions$: Actions,
  ) {

  }

  getProductos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.fetchProducts),
      exhaustMap((action) =>
        this.productService.getProducts().pipe(
          map(data => {
            return fromProductActions.fetchSuccess({ products: data });
          }),
          catchError(error => of(fromProductActions.fetchError({ error })))
        ))
    ));

}