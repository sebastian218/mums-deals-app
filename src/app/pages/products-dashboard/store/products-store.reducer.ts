import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { IProduct } from "../model/product.model";
import { SortOptions } from "../model/sortOptions.enum";
import { setDisplay, fetchError, fetchProducts, fetchProductsByTypeSuccess, fetchSuccess, sortBy } from "./products-store.actions";

export const productsSotreSelector = 'productsDashboard';

export enum DisplayType {
  GRID = 'GRID',
  LIST = 'LIST'
}

export interface IProductsDashboardState {
  products: IProduct[],
  fetchPending: boolean,
  fetchError: boolean,
  display: DisplayType,
  types: Set<string>,
  selectedTypes: Set<string>,
  selectedSortBy: SortOptions
}

export const initialState: IProductsDashboardState = {
  products: [],
  fetchPending: true,
  fetchError: false,
  display: DisplayType.GRID,
  types: new Set(),
  selectedTypes: new Set(),
  selectedSortBy: SortOptions.AZ
}

const productsDashboardReducer = createReducer(
  initialState,
  on(fetchProducts, (state) => ({ ...state, fetchPending: true })),
  on(fetchSuccess, (state, props) => ({
    ...state,
    products: handleSortOptionst(state.selectedSortBy, props.products),
    types: getTypes(props.products),
    fetchPending: false
  })),
  on(fetchProductsByTypeSuccess, (state, props) => {
    const products = handleSortOptionst(state.selectedSortBy, props.products);
    return ({
      ...state,
      products: products,
      fetchPending: false
    })
  }),
  on(fetchError, (state) => ({ ...state, fetchError: true, fetchPending: false })),
  on(sortBy, (state, props) => {
    return ({ ...state, products: handleSortOptionst(props.sort, state.products) })
  }),
  on(setDisplay, (state, props) => ({ ...state, display: props.mode })),
);


export function reducer(state: IProductsDashboardState | undefined, action: Action) {
  return productsDashboardReducer(state, action);
}

const getTypes = (products: IProduct[]): Set<string> => {
  let typesSet: Set<string> = new Set();
  products.forEach(prod => {
    typesSet.add(prod.product_type)
  })
  return typesSet
}

const handleSortOptionst = (sort: SortOptions, products: IProduct[]): IProduct[] => {
  if (sort === SortOptions.AZ) {
    return products.map(el => el).sort((a, b) => a.title.localeCompare(b.title));
  }
  return products;
}
