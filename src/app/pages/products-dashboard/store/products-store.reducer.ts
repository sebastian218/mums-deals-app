import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { IProduct } from "../model/product.model";
import { changeDisplay, fetchError, fetchProducts, fetchSuccess, filterByType, sortBy } from "./products-store.actions";

export const productsSotreSelector = 'productsDashboard';

export enum DisplayType {
  GRID,
  LIST
}

export enum Sort {
  AZ,
  MAY_TO_MIN,
  MIN_TO_MAY
}

export interface IProductsDashboardState {
  products: IProduct[],
  filteredProducts: IProduct[],
  fetchPending: boolean,
  fetchError: boolean,
  display: DisplayType,
}

export const initialState: IProductsDashboardState = {
  products: [],
  filteredProducts: [],
  fetchPending: true,
  fetchError: false,
  display: DisplayType.GRID
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