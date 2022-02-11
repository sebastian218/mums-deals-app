import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { changeDisplay, fetchError, fetchProducts, fetchSuccess, filterByType, sortBy } from "./products-store.actions";

export const productsSotreSelector = 'products-dashboard';

export interface IProductsDashboardState {
  products: any[],
  filteredProducts: any[],
  fetchPending: boolean,
  fetchError: boolean,
}

export const initialState: IProductsDashboardState = {
  products: [],
  filteredProducts: [],
  fetchPending: true,
  fetchError: false
}

const productsDashboardReducer = createReducer(
  initialState,
  on(fetchProducts, (state) => ({ ...state, fetchPending: true })),
  on(fetchSuccess, (state, data) => ({ ...state, products: data.products, filteredProducts: data.products, fetchPending: false })),
  on(fetchError, (state) => ({ ...state, fetchError: true, fetchPending: false })),
  on(sortBy, (state, props) => ({ ...state })),
  on(changeDisplay, (state, props) => ({ ...state })),
  on(filterByType, (state, props) => ({ ...state }))
);

export function reducer(state: IProductsDashboardState | undefined, action: Action) {
  return productsDashboardReducer(state, action);
}